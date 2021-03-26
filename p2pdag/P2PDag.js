// P2P Distributed Anarchy Graph
// GPLv3
// Copyright 2021 racarr

// TODO: Why the failed deduping on signed edges?

// TODO: Using crypto.subtle is SLOWER for small strings than native JS implementation...find + copy/paste one
async function SHA256ForString(str) {
    var buffer = new TextEncoder("utf-8").encode(str);
    let hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
    return hashHex;
}

// TODO: Like SHA256 we should probably have a native JS implementation for small string performance
async function signString(str) {
    signature = await window.crypto.subtle.sign({
            name: "ECDSA",
             hash: {
                name: "SHA-256"
             }, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
        },
         signingKey, //from generateKey or importKey above
         new TextEncoder("utf-8").encode(str) //ArrayBuffer of data you want to sign
    );
    let hashArray = Array.from(new Uint8Array(signature))
    let hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
    return hashHex;
}

// TODO: Use webstorage for first pass at persistent identity?
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
        console.log("About to send:" + JSON.stringify(data))
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
    async handlePeerData(peer, data) {
        let gameStateHandled = await this.gameState.handleMessage(peer, data)
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
            case "GET_PEERS":
                let response = {
                    type: "GET_PEERS_RESPONSE",
                    peers: []
                }
                console.log("Got get peers")
                for (let peerId in this.peers) {
                    if (peerId != peer.peerJsId) {
                        response.peers.push(peerId)
                    }
                }
                peer.send(response)
                return;
            case "GET_PEERS_RESPONSE":
                let jt = {
                    type: "PEER_REQUEST",
                    startingLocation: "TODO: Location"
                }
                console.log("Got get peers response")
                for (let i = 0; i < data.peers.length; i++) {
                    if (this.peers[data.peers[i]] == undefined) {
                        this.dial(data.peers[i], jt);
                    }
                }
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

    mergeEdge(destId, edge) {
        if (this.edges[destId] == undefined) {
            this.edges[destId] = edge;
            return true;
        }
        let modifiedState = false;
        for (let i in edge.signatures) {
            // TODO: This is messed up...super messed up cant use X like this
            if (this.edges[destId].signatures[edge.signatures[i].pubKey.x] == undefined) {
                this.edges[destId].signatures[edge.signatures[i].pubKey.x] = edge.signatures[i];
                modifiedState = true;
            }
        }
        return modifiedState;
    }

    // TODO: We have to valdiate these signatures somewhere!!!!!!!~!~!!!!!
    // I think we validate the edge before it gets to this point.
    accumulateState(other) {
        let addedState = false;
        for (let key in other.edges) {
            addedState |= this.mergeEdge(key, other.edges[key])
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
 
    async handleMessage(peer, data) {
        // Validate message
        let accumulatedState = await this.applyTransaction(data)
        if (accumulatedState) {
            this.game.peerController.broadcast(data);
        }
        return false
    }

    async validateAccumulateStateTransaction(data) {
        // TODO: Perf issues like crazy
        for (let i = 0; i < data.nodes.length; i++) {
            let node = data.nodes[i];

            // TODO: Check if we have it locally before doing the hash
            if (node.label != undefined && (await SHA256ForString(node.label) != node.id)) {
                console.log("Forged node label")
                return false;
            }
            for (let j in node.edges) {
                let edge = node.edges[j];
                if (await SHA256ForString(edge.data.destLabel) != j) {
                    console.log("Forged destination on edge")
                    return false;
                }
                let expectedEdgeHash = await SHA256ForString(node.label+edge.data.destLabel)
                for (let k = 0; k < edge.signatures.length; k++) {
                    let sig = edge.signatures[k];
                    if (sig.data.edgeHash != expectedEdgeHash) {
                        console.log("Forged edge hash")
                        return false;
                    }
                    let opponentPublicKey = await window.crypto.subtle.importKey("jwk", sig.pubKey,
                        {name:"ECDSA", namedCurve: "P-256"}, true, ["verify"])
                    let sigToVerify = sig.sig;
                    // TODO: Verify signature
                }
            }
        }
        return true;
    }

    // Apply transaction also called internally
    async applyTransaction(data) {
        let accumulatedState = false;
        if (data.type == "ACCUMULATE_STATE") {
            if (await this.validateAccumulateStateTransaction(data)) {
                accumulatedState = this.accumulateState(data)
            } else {
                return accumulatedState;
            }
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
            console.log("We got a first peer!")
            peer.send({type: "GET_PEERS"})
        }
        this.onNewPeer();
    }

    async applyOwnTransaction(data) {
        // TODO: Clarify verification
        let success = await this.state.applyTransaction(data);
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
            sender: this.localAddress, // TODO: Is there a real reason to have sender?
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
        let destId = await SHA256ForString(dest);
        let transaction = {
            type: "ACCUMULATE_STATE",
            sender: this.localAddress,
            nodes: [{
                id: id,
                edges: {}
            }]
        }
        transaction.nodes[0].edges[destId] = {data: {
                destLabel: dest,
                edgeHash: await SHA256ForString(source+dest)
            },
            signatures: {}
        }
        let signatureObj = {
            sig: await signString(JSON.stringify(transaction.nodes[0].edges[destId].data)),
            pubKey: await crypto.subtle.exportKey("jwk", publicKey)
        }
        transaction.nodes[0].edges[destId].signatures[pubKeyAddress] = signatureObj;
        this.applyOwnTransaction(transaction);
    }

    // ID of node that was updated
    notifyStateChanged(id) {
        console.log("Hearing a rumor that: " + id + " has changed")
    //    console.log("current state: " + JSON.stringify(this.state.dht));
    }
}
let game = null;
let pubKeyAddress = null;

async function startGame() {
    pubKeyAddress = (await crypto.subtle.exportKey("jwk", publicKey))["x"]
    game = new ConsensusGame(pubKeyAddress)

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
