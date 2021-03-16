contract ConsensusGraph {
  struct Node {
    string json;
    address owner;
    string id;
  }
  struct Edge {
    string json;
    address owner;
    string id;
  }

  mapping(bytes32 => Node) public nodes;
  bytes32[] public nodeIds;

  mapping(bytes32 => Edge) public edges;
  bytes32[] public edgeIds;


  // This event is emitted when a citizen is registered
  event NewCitizen (
    bytes32 indexed citizenId
  );

  event NewNode (
    bytes32 indexed nodeId
  );

  event NewEdge (
    bytes32 indexed edgeId
  );

  function upsertNode(string memroy stringId, string memory json) public {
      id = keecak256(abi.encodePacked(stringId));
      if (nodes[id].owner != address(0)) {
        if (nodes[id].owner != msg.sender) {
          revert("Only owner can update node");
        }
      } else {
        nodeIds.push(id);
      }
      nodes[id] = Node(json, msg.sender, stringId);
      emit NewNode(id);
  }

  function upsertEdge(string memory stringId, string memory json) public {
      id = keecak256(abi.encodePacked(stringId));
      if (edges[id].owner != address(0)) {
        if (edges[id].owner != msg.sender) {
          revert("Only owner can update edge");
        }
      } else {
        edgeIds.push(id);
      }
      edges[id] = Edge(json, msg.sender, stringId);
      emit NewEdge(id);
  }
}
