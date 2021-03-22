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
    Attachment is a declaration of equivalence between nodes across different users views/graphs
    an attachment is one user saying "I think this list of nodes can be merged"
  */
  struct Attachment {
    string id;
    address owner;
    string KeyNodeId; // The node within the attachment that will represent the attachment
    string[] NodeIds; // the list of nodes that make up this attachment
  }

  /*
    Allow reverse-lookup, given a node, how many attachments does it belong to?
    Writeable by anyone, this defines the canonical "show all" view according to display rules
    executed in the client, and attachments can be removed from a nodes index to remove them from
    the consensus
  */
  struct AttachmentIndex {
    string NodeId;
    string[] AttachmentIds;
  }



  /*
    Represents a single view - can be any subset of nodes, edges, and attachments within the contract
    The client side will be responsible for loading multiple graphs, determining the minimum set intersection (i.e. de-duping nodes)
    And then requesting the exact list of nodes that it needs to the display the views

    Graphs which are owned by the contract can be edited by any user, they are meant to be updated by all clients according to stake/point-game rules
  */
  struct Graph {
    string id;
    address owner; // can be address of a user, or of a contract. Contract graphs are maintained by all users via a points-game running from clients
    string label; // allow users to browse graph views, give them a nice label
    string[] NodeIds;
    string[] EdgeIds;
    string[] AttachmentIds;
  }

  mapping(bytes32 => Graph) public Graphs;

  bytes32[] public GraphIds;


  function getGraph(string memory stringId) public view returns(Graph memory) {
    bytes32 id = keccak256(abi.encodePacked(stringId));
    return Graphs[id];
  }

  /*
    allow user to load all graphs for browsing - this does not load all the nodes, only graph metadata
    note we can only return fixed size arrays, so randomly setting 50 for now
    TODO: requires figure a different solution if we want to scale past a fixed number of saved views
  */
  function getGraphs() public view returns(Graph[50] memory) {
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

        if( keccak256(abi.encodePacked(update[i])) == keccak256(abi.encodePacked(target[j])) ) {
          newItem = false;
        }
      }

      if ( newItem == true) {
        target.push(update[i]);
      }
    }
  }

  function upsertGraph(
    string memory stringId,
    string memory label,
    string[] memory nodes,
    string[] memory edges,
    string[] memory attachments
  ) public {
    bytes32 id = keccak256(abi.encodePacked(stringId));

    // graph doesnt exist, so make it
    if (Graphs[id].owner == address(0)) {
      GraphIds.push(id);
      Graphs[id] = Graph(stringId, tx.origin, label, nodes, edges, attachments);
    }

    // graph is owned by the contract (anyone allowed to update), or by the sender, so allow the update
    else if ( Graphs[id].owner == address(this) || Graphs[id].owner == tx.origin ) {
      upsertArrays(Graphs[id].NodeIds, nodes);
      upsertArrays(Graphs[id].EdgeIds, edges);
      upsertArrays(Graphs[id].AttachmentIds, attachments);
    }

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
