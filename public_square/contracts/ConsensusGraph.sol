// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.5.16 <0.9.0;
pragma experimental ABIEncoderV2;

import "./ConsensusToken.sol";

contract ConsensusGraph {

  bytes32 public myId;
  string public myName;
  address public myCreator;

  constructor(bytes32 _id, string memory _name, address _creator) public {
    myId = _id;
    myName = _name;
    myCreator = _creator;
  }

  // internal token to be used for PoS to edit graphs and views
  ConsensusToken public tokenContract = new ConsensusToken("Main Graph", 1000, address(this));

  function airdropMe() public {
      tokenContract.approve(address(this), 9999999);
      tokenContract.transferFrom(address(this), msg.sender, 100);
  }





  struct Node {
    // String UUID sent from client, and used as client ID.
    // server side ID is keccak hash of this.
    string id;

    // Original owner. Only owner can update node itself.
    // TODO: node ownership should be handled by rules around invested stake insted of this? -KW-2021-03
    address owner;

    // JSON representation sent from client. Opaque here.
    string json;
  }

  // Mapping from keccak256(ids) to Node
  mapping(bytes32 => Node) public Nodes;

  // List of all IDs, so client can query all nodes.
  bytes32[] public NodeIds;

  function getNodeIds() public view returns(bytes32[] memory) {
    return NodeIds;
  }

  // Since getNode takes a "client ID", NewNode should also speak client IDs
  event NewNode (
    string indexed nodeId
  );





  struct Edge {
    // Mirrors node struct
    string id;
    address owner;
    string json;
  }

  // Mirrors nodes
  mapping(bytes32 => Edge) public Edges;

  bytes32[] public EdgeIds;

  function getEdgeIds() public view returns(bytes32[] memory) {
    return EdgeIds;
  }

  event NewEdge (
    string indexed edgeId
  );






  /*
    Allow reverse-lookup, given a node, how many attachments does it belong to?
    Writeable by anyone, this defines the canonical "show all" view according to display rules
    executed in the client, and attachments can be removed from a nodes index to remove them from
    the consensus
  */
  struct nodeViewIndex {
    string NodeId;
    string[] GraphViewIds;
  }



  /*
    Represents a single view - can be any subset of nodes, edges, and attachments within the contract
    The client side will be responsible for loading multiple graphs, determining the minimum set intersection (i.e. de-duping nodes)
    And then requesting the exact list of nodes that it needs to the display the views

    Graphs which are owned by the contract can be edited by any user, they are meant to be updated by all clients according to stake/point-game rules
  */
  struct GraphView {
    string id;
    address owner; // can be address of a user, or of a contract. Contract graphs are maintained by all users via a points-game running from clients
    string label; // allow users to browse graph views, give them a nice label
    string[] NodeIds; //Nodes may also be attachments
    string[] EdgeIds;
  }

  mapping(bytes32 => Graph) public GraphViews;

  bytes32[] public GraphViewIds;


  function getGraphView(string memory stringId) public view returns(Graph memory) {
    bytes32 id = keccak256(abi.encodePacked(stringId));
    return Graphs[id];
  }

  /*
    allow user to load all graphs for browsing - this does not load all the nodes, only graph metadata
    note we can only return fixed size arrays, so randomly setting 50 for now
    TODO: requires figure a different solution if we want to scale past a fixed number of saved views
  */
  function getGraphViews() public view returns(Graph[50] memory) {
    Graph[50] memory result;
    uint idx = 0;
    for (uint i=0; i < GraphIds.length; i++) {
      result[idx] = Graphs[GraphIds[i]];
      idx++;
    }
    return result;
  }


  /*
    Allows a client user to save their preferred views to load
  */
  struct Entrypoint {
    address owner; // can be address of a user, or of a contract. contract entrypoints are maintained only be the contract
    string[] GraphId; // list of graph ids that the user has saved as their default combined view
  }

  // Allow a user to retrieve their saved initial views
  mapping(bytes32 => Entrypoint) public Entrypoints;




  /* ////////////////////////////////////////////////////////////////////////////
    Writing methods below
  *//////////////////////////////////////////////////////////////////////////////

  function upsertArrays(string[] storage target, string[] memory update) internal {
    for (uint i=0; i < update.length; i++) {
      bool newItem = true;
      for (uint j=0; j < target.length; j++) {

        // using keccak256 to compare strings is apparently gas efficient:
        // https://ethereum.stackexchange.com/questions/4559/operator-not-compatible-with-type-string-storage-ref-and-literal-string
        if( keccak256(abi.encodePacked(update[i])) == keccak256(abi.encodePacked(target[j])) ) {
          newItem = false;
        }
      }

      if ( newItem == true) {
        target.push(update[i]);
      }
    }
  }

  function upsertGraphView(
    string memory stringId,
    string memory label,
    string[] memory nodes,
    string[] memory edges
  ) public {
    bytes32 id = keccak256(abi.encodePacked(stringId));

    // graph doesnt exist, so make it
    if (GraphViews[id].owner == address(0)) {
      GraphViewIds.push(id);
      GraphViews[id] = GraphView(stringId, tx.origin, label, nodes, edges);
    }

    /*
      if graph is owned by the contract then anyone allowed to update. This lets
      generic views be updated by any user. If the graph is oened by the sender
      then they can update their own view
    */
    else if ( Graphs[id].owner == address(this) || Graphs[id].owner == tx.origin ) {
      upsertArrays(Graphs[id].NodeIds, nodes);
      upsertArrays(Graphs[id].EdgeIds, edges);
    }

    // TODO: when saving a graphView, we should updated the nodeViewIndex
    // if a node is in the view, or within an attachment in the view, it
    // should be written to the index 

    // graph is owned by someone else, revert
    else {
      revert("Cannot update another owners graph view");
    }
  }


  function upsertNode(string memory stringId, string memory json) public {
    bytes32 id = keccak256(abi.encodePacked(stringId));
    if (Nodes[id].owner != address(0)) {
      if (Nodes[id].owner != tx.origin) {
        revert("Only owner can update node");
      }
    } else {
      NodeIds.push(id);
    }
    Nodes[id] = Node(stringId, tx.origin, json);
    emit NewNode(stringId);
  }

  function upsertEdge(string memory stringId, string memory json) public {
      bytes32 id = keccak256(abi.encodePacked(stringId));
      if (Edges[id].owner != address(0)) {
        if (Edges[id].owner != tx.origin) {
          revert("Only owner can update edge");
        }
      } else {
        EdgeIds.push(id);
      }
      Edges[id] = Edge(stringId, tx.origin, json);
      emit NewEdge(stringId);
  }

  function upsertCollections(Node[] memory nodes, Edge[] memory edges) public {
    for (uint i=0; i < nodes.length; i++) {
      upsertNode(nodes[i].id, nodes[i].json);
    }

    for (uint j=0; j < edges.length; j++) {
      upsertEdge(edges[j].id, edges[j].json);
    }
  }

}
