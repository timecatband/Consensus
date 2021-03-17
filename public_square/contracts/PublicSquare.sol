// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.16 <0.9.0;

contract PublicSquare {
  struct Node {
    string id;
    address owner;
  }

  mapping(bytes32 => Node) public nodes;

  bytes32[] public nodeIds;

  event NewNode (
    string indexed nodeId
  );

  function upsertNode(string memory stringId) public {
      bytes32 id = keccak256(abi.encodePacked(stringId));
      if (nodes[id].owner != address(0)) {
        if (nodes[id].owner != msg.sender) {
          revert("Only owner can update node");
        }
      } else {
        nodeIds.push(id);
      }
      nodes[id] = Node(stringId, msg.sender);
      emit NewNode(stringId);
  }

}
