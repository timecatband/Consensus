// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.16 <0.9.0;

import "./ConsensusGraph.sol";

contract PublicSquare {
  // Mapping from keccak256(name) to ConsensusGraph
  mapping(bytes32 => ConsensusGraph) public consensusGraphs;
  
  mapping(bytes32 => bool) private graphKeyExists;

  // List of all ids, so client can query all graphs
  bytes32[] public consensusGraphIds;

  function getConsensusGraphIds() public view returns(bytes32[] memory) {
    return consensusGraphIds;
  }

  event NewConsensusGraph (
    bytes32 indexed graphId
  );

  function createConsensusGraph(string memory name) public {
      bytes32 id = keccak256(abi.encodePacked(name));

      require(!graphKeyExists[id], "This graph already exists");
      consensusGraphIds.push(id);
      consensusGraphs[id] = new ConsensusGraph(id, name, msg.sender);
      graphKeyExists[id] = true;
      emit NewConsensusGraph(id);
  }

}
