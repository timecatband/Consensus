// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.5.16 <0.9.0;
pragma experimental ABIEncoderV2;

import "./ConsensusToken.sol";

contract ConsensusGraph {

  bytes32 public id;
  string public name;
  address public creator;

  constructor(bytes32 _id, string memory _name, address _creator) public {
    id = _id;
    name = _name;
    creator = _creator;
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

  struct Edge {
    // Mirrors node struct
    string id;
    address owner;
    string json;
  }

  // Mapping from keccak256(ids) to Node
  mapping(bytes32 => Node) public Nodes;
  // List of all IDs, so client can query all nodes.
  bytes32[] public NodeIds;

  // Mirrors nodes
  mapping(bytes32 => Edge) public Edges;
  bytes32[] public EdgeIds;

  function getNodeIds() public view returns(bytes32[] memory) {
    return NodeIds;
  }
  function getEdgeIds() public view returns(bytes32[] memory) {
    return EdgeIds;
  }

  // Since getNode takes a "client ID", NewNode should also speak client IDs
  event NewNode (
    string indexed nodeId
  );

  event NewEdge (
    string indexed edgeId
  );

  ConsensusToken public tokenContract = new ConsensusToken("Main Graph", 1000, address(this));

  function airdropMe() public {
      tokenContract.approve(address(this), 9999999);
      tokenContract.transferFrom(address(this), msg.sender, 100);
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
