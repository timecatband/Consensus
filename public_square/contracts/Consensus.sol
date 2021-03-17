contract ConsensusGraph {
  struct Node {
    // JSON representation sent from client. Opaque here.
    string json;
    // Original owner. Only owner can update node itself.
    address owner;
    // String UUID sent from client, and used as client ID.
    // server side ID is keccak hash of this.
    string id;
  }
  struct Edge {
    // Mirrors node struct
    string json;
    address owner;
    string id;
  }

  // Mapping from keccak256(ids) to Node
  mapping(bytes32 => Node) public nodes;
  // List of all IDs, so client can query all nodes.
  bytes32[] public nodeIds;

  // Mirrors nodes
  mapping(bytes32 => Edge) public edges;
  bytes32[] public edgeIds;

  function getNodeIds() public returns(bytes32[] memory) {
    return nodeIds;
  }
  function getEdgeIds() public returns(bytes32[] memory) {
    return edgeIds;
  } 

  // Since getNode takes a "client ID", NewNode should also
  // speak client IDs
  event NewNode (
    string indexed nodeId
  );

  event NewEdge (
    string indexed edgeId
  );

  function upsertNode(string memory stringId, string memory json) public {
      bytes32 id = keccak256(abi.encodePacked(stringId));
      if (nodes[id].owner != address(0)) {
        if (nodes[id].owner != msg.sender) {
          revert("Only owner can update node");
        }
      } else {
        nodeIds.push(id);
      }
      nodes[id] = Node(json, msg.sender, stringId);
      emit NewNode(stringId);
  }

  function upsertEdge(string memory stringId, string memory json) public {
      bytes32 id = keccak256(abi.encodePacked(stringId));
      if (edges[id].owner != address(0)) {
        if (edges[id].owner != msg.sender) {
          revert("Only owner can update edge");
        }
      } else {
        edgeIds.push(id);
      }
      edges[id] = Edge(json, msg.sender, stringId);
      emit NewEdge(stringId);
  }
}
