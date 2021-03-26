// P2P Distributed Anarchy Graph
// GPLv3
// Copyright 2021 racarr

async function SHA256ForString(str) {
    var buffer = new TextEncoder("utf-8").encode(str);
    let hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
    return hashHex;
}
let signingKey = null;
let publicKey = null;

class PeerRecord {
    constructor(manager, connection, peerJsId) {
        this.manager = manager;
        this.connection = connection;
        this.peerJsId = peerJsId;
        this.connection.on("data", this.handleData.bind(this))
    }

    handleData(data) {
        this.manager.handlePeerData(this, data)
    }

    acceptPeer() {
        this.manager.acceptPeer(this);
    }

    closePeer() {
        this.manager.removePeer(this);
        this.connection.close();
    }
    send(data) {
        this.connection.send(data)
    }
}

class PeerController {
    constructor(gameState) {
        this.localListener = new Peer();
        this.localListener.on("connection", this.handleNewIncomingConnection.bind(this))
        this.gameState = gameState;
        this.peers = {}
    }

    acceptPeer(p) {
        this.peers[p.peerJsId] = p;
    }
    removePeer(p) {
        this.peer[p.peerJsId] = undefined;
    }

    handleNewIncomingConnection(connection) {
        console.log("New incoming connection")
        let p = new PeerRecord(this, connection, connection.peer)
    }

    handleNewOutgoingConnection(connection, jt) {
        console.log("Sending join message")
        let p = new PeerRecord(this, connection, connection.peer);
        // We need to send the join transaction to the peer.
        p.send(jt);
    }

    dial(peerJsId, jt) {
        console.log("Dialing")
        let conn = this.localListener.connect(peerJsId);

        // Make outgoing connection. We need to wait for the connection
        // to open and then send the join transaction
        conn.on("open", () => {this.handleNewOutgoingConnection(conn, jt)});
    }

    // Message schema:
    // PEER_REQUEST. Initial request from other server to peer with us.
    // PEER_OK. Other peer accepted us. Joy!
    // We only handle base peering protocol at this level,
    // everything else is handled by gameState
    handlePeerData(peer, data) {
        let gameStateHandled = this.gameState.handleMessage(peer, data)
        switch (data.type) {
            case "PEER_REQUEST":
                peer.send({type: "PEER_OK"});
                peer.acceptPeer();
                this.gameState.game.handleNewPeer(peer)
                return;
            case "PEER_OK":
                peer.acceptPeer();
                this.gameState.game.handleNewPeer(peer)
                return;
        }
    }


    broadcast(data) {
        for (let id in this.peers) {
            if (this.peers.hasOwnProperty(id)) {
                this.peers[id].send(data);
            }
        }
    }
}

class NodeState {
    constructor(id, label) {
        this.id = id;
        this.label = label;
        this.edges = {}
    }

    accumulateState(other) {
        let addedState = false;
        for (let key in other.edges) {
            // TODO: Deduping and signature counting
            if (this.edges[other.edges[key].id] == undefined) {
                this.edges[other.edges[key].id] = other.edges[key];
                addedState = true;
            }
        }
        return addedState;
    }
}

class GameState {
    constructor(game) {
        this.game = game;
        this.dht = {}
    }

    // data should look like this
    // { type: "ACCUMULATE_STATE", nodes: [node1, node2]}

    // Node data looks like this
    // "id": DHT ID
    // "label": Freetext
    // "edges": [Outgoing edges]

    // Pre voting game edges are just DHT ID
    accumulateState(data) {
        let addedState = false; // primitive rebroadcast prevention
        for (let i = 0; i < data.nodes.length; i++) {
            let node = data.nodes[i];
            if (this.dht[node.id] == undefined) {
                console.log("Created new node accumulating state")
                this.dht[node.id] = new NodeState(node.id, node.label)
                addedState = true;
            }
            addedState |= this.dht[node.id].accumulateState(node);
            if (addedState) {
                this.game.notifyStateChanged(node.id)
            }
        }
        
        return addedState;
    }
 
    handleMessage(peer, data) {
        // Validate message
        let accumulatedState = this.applyTransaction(data)
        if (accumulatedState) {
            console.log("Rebroadcasting!")
            this.game.peerController.broadcast(data);
        }
        return false
    }

    // Apply transaction also called internally
    applyTransaction(data) {
        let accumulatedState = false;
        if (data.type == "ACCUMULATE_STATE") {
            accumulatedState = this.accumulateState(data)
        }
        return accumulatedState;
    }
}

class ReceiptDrawer {
    constructor(localAddress) {
        this.localAddress = localAddress
        this.receipts = [{
                previousReceiptHash: 0,
                transactions: []
        }]
    }
    async addReceipt(transaction) {
        let lastReceipt = this.receipts[this.receipts.length-1];
        let lastReceiptHash = await SHA256ForString(JSON.stringify(lastReceipt));
        let newReceipt = [{
            previousReceiptHash: lastReceiptHash,
            myAddress: this.localAddress
        }]
        this.receipts.push(newReceipt);
    }
}

class ConsensusGame {
    constructor(localAddress) {
        this.state = new GameState(this);
        this.peerController = new PeerController(this.state)
        this.localAddress = localAddress;
        this.firstPeer = true;
        this.onNewPeer = function() {}
        this.receiptDrawer = new ReceiptDrawer(this.localAddress);
    }

    joinGame(initialPeerJSID, startingLocation) {
        let jt = {
            type: "PEER_REQUEST",
            startingLocation: startingLocation
        }
        this.peerController.dial(initialPeerJSID, jt)
    }

    handleNewPeer(peer) {
        if (this.firstPeer == true) {
            this.firstPeer = false;
            console.log("We got a peer!")
        }
        this.onNewPeer();
        // TODO: Clean up? We dont really need this right now
    }

    applyOwnTransaction(data) {
        // TODO: Clarify verification
        let success = this.state.applyTransaction(data);
        if (success == true) {
            this.receiptDrawer.addReceipt(data);
            this.peerController.broadcast(data);
        } else {
            console.log("Not broadcasting own transaction that didn't apply")
        }
    }

    async addNode(label) {
        console.log("Adding node")
        let id = await SHA256ForString(label);
        let transaction = {
            type: "ACCUMULATE_STATE",
            sender: this.localAddress,
            nodes: [{
                id: id,
                label: label,
                edges: []
            }]
        }
        this.applyOwnTransaction(transaction);
    }

    async addEdge(source, dest) {
        let id = await SHA256ForString(source);
        let transaction = {
            type: "ACCUMULATE_STATE",
            sender: this.localAddress,
            nodes: [{
                id: id,
                edges: [{id: await SHA256ForString(dest)}]
            }]
        }
        this.applyOwnTransaction(transaction);
    }

    // ID of node that was updated
    notifyStateChanged(id) {
        console.log("Hearing a rumor that: " + id + " has changed")
        console.log("current state: " + JSON.stringify(this.state.dht));
    }
}
let game = null;

function startGame() {
    let address = crypto.subtle.exportKey("jwk", publicKey)["x"]
    game = new ConsensusGame(address)

    game.peerController.localListener.on("open", () => {
     window.document.getElementById("my-peer-id").innerHTML = game.peerController.localListener.id;
    })

    game.onNewPeer = () => {
         document.getElementById("peer-list").innerHTML = Object.keys(game.peerController.peers).length
    }
}

window.addEventListener('load', (event) => {
    window.document.getElementById("join-button").onclick = () => {
        let firstPeerId = document.getElementById("first-peer-id").value;
        let startingLocation = document.getElementById("starting-location").value

        game.joinGame(firstPeerId, startingLocation)
    }    
    window.document.getElementById("new-node-button").onclick = () => {
        let nodeTitle = document.getElementById("new-node-title").value;
        game.addNode(nodeTitle);
    }

    window.document.getElementById("new-edge-button").onclick = () => {
        let sourceTitle = document.getElementById("new-edge-src").value;
        let destTitle = document.getElementById("new-edge-dst").value;
        game.addEdge(sourceTitle, destTitle);
    }

    window.document.getElementById("generate-private-key-button").onclick = async () => {
        const key = await window.crypto.subtle.generateKey(
            {name:"ECDSA", namedCurve: "P-256"},
            true,
            ["sign", "verify"]);
        document.getElementById("private-key-text").value = JSON.stringify(
                await window.crypto.subtle.exportKey("jwk", key.privateKey));
        document.getElementById("public-key-text").value = JSON.stringify(
                await window.crypto.subtle.exportKey("jwk", key.publicKey));
    }

    window.document.getElementById("load-private-key-button").onclick = async () => {
        let parsedPrivate = JSON.parse(document.getElementById("private-key-text").value)
        signingKey = await window.crypto.subtle.importKey("jwk", parsedPrivate,
            {name:"ECDSA", namedCurve: "P-256"}, true, ["sign"])
        let parsedPublic = JSON.parse(document.getElementById("public-key-text").value)
        publicKey = await window.crypto.subtle.importKey("jwk", parsedPublic,
            {name:"ECDSA", namedCurve: "P-256"}, true, ["verify"])
        console.log("signing: " + signingKey)
        console.log("Public key: " + publicKey)
        startGame();
    }
})
