pragma solidity ^0.5.7;

contract ConsensusGraph {
  struct Node {
    string label;
    string text;
    string owner;
    uint32 id;
  }
  
  struct Edge {
    uint32 id;
    uint32 leftNodeId;
    uint32 rightNodeId;
  }

  struct Citizen {
      address owner;
      string name;
  }

  // mapping of propertyId to Property object
  mapping(bytes32 => Citizen) public citizens;
  mapping(address => string) public names;
  mapping(uint32 => Node) public nodes;
  mapping(uint32 => Edge) public edges;
  uint32 public numberOfNodes;
  uint32 public numberOfEdges;

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


  function registerName(string memory name) public {
    // create a property object
    bytes32 id = keccak256(abi.encodePacked(name));
    if (citizens[id].owner != address(0)) {
        revert("Name already registered");
    }
    Citizen memory citizen = Citizen(name, msg.sender, "New user");
    citizens[id] = citizen;
    names[msg.sender] = name;
    emit NewCitizen(id);
  }

  function addNode(Node memory node) public {
      bytes32 id = keccak256(abi.encodePacked(names[msg.sender]));
      Citizen storage citizen = citizens[id];
      if (citizen.owner == address(0)) {
        revert("No such citizen");
      }
      if (citizen.owner != node.owner) {
        revert("Only owner can add node");
      }
      node.id = numberOfNodes
      nodes[numberOfNodes] = node;
      numberOfNodes++;
  }
   function addEdge(Edge memory node) public {
      bytes32 id = keccak256(abi.encodePacked(names[msg.sender]));
      Citizen storage citizen = citizens[id];
      if (citizen.owner == address(0)) {
        revert("No such citizen");
      }
      if (citizen.owner != edge.owner) {
        revert("Only owner can add node");
      }
      edge.id = numberOfEdges;
      edges[numberOfEdges] = edge;
      numberOfEdges++;
  }
}
