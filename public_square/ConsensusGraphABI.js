const ConsensusGraphABI = 
{
  "contractName": "ConsensusGraph",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_id",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_creator",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "edgeId",
          "type": "string"
        }
      ],
      "name": "NewEdge",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "nodeId",
          "type": "string"
        }
      ],
      "name": "NewNode",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "EdgeIds",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "Edges",
      "outputs": [
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "Entrypoints",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "GraphIds",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "Graphs",
      "outputs": [
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "label",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "NodeIds",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "Nodes",
      "outputs": [
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "myCreator",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "myId",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenContract",
      "outputs": [
        {
          "internalType": "contract ConsensusToken",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "airdropMe",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getNodeIds",
      "outputs": [
        {
          "internalType": "bytes32[]",
          "name": "",
          "type": "bytes32[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getEdgeIds",
      "outputs": [
        {
          "internalType": "bytes32[]",
          "name": "",
          "type": "bytes32[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "stringId",
          "type": "string"
        }
      ],
      "name": "getGraph",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "label",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "NodeIds",
              "type": "string[]"
            },
            {
              "internalType": "string[]",
              "name": "EdgeIds",
              "type": "string[]"
            },
            {
              "internalType": "string[]",
              "name": "AttachmentIds",
              "type": "string[]"
            }
          ],
          "internalType": "struct ConsensusGraph.Graph",
          "name": "",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getGraphs",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "label",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "NodeIds",
              "type": "string[]"
            },
            {
              "internalType": "string[]",
              "name": "EdgeIds",
              "type": "string[]"
            },
            {
              "internalType": "string[]",
              "name": "AttachmentIds",
              "type": "string[]"
            }
          ],
          "internalType": "struct ConsensusGraph.Graph[50]",
          "name": "",
          "type": "tuple[50]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "stringId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "label",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "nodes",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "edges",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "attachments",
          "type": "string[]"
        }
      ],
      "name": "upsertGraph",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "stringId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "name": "upsertNode",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "stringId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "name": "upsertEdge",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ],
          "internalType": "struct ConsensusGraph.Node[]",
          "name": "nodes",
          "type": "tuple[]"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ],
          "internalType": "struct ConsensusGraph.Edge[]",
          "name": "edges",
          "type": "tuple[]"
        }
      ],
      "name": "upsertCollections",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_id\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"_creator\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"string\",\"name\":\"edgeId\",\"type\":\"string\"}],\"name\":\"NewEdge\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"string\",\"name\":\"nodeId\",\"type\":\"string\"}],\"name\":\"NewNode\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"EdgeIds\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"Edges\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"id\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"Entrypoints\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"GraphIds\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"Graphs\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"id\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"label\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"NodeIds\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"Nodes\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"id\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"airdropMe\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getEdgeIds\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringId\",\"type\":\"string\"}],\"name\":\"getGraph\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"id\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"label\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"NodeIds\",\"type\":\"string[]\"},{\"internalType\":\"string[]\",\"name\":\"EdgeIds\",\"type\":\"string[]\"},{\"internalType\":\"string[]\",\"name\":\"AttachmentIds\",\"type\":\"string[]\"}],\"internalType\":\"struct ConsensusGraph.Graph\",\"name\":\"\",\"type\":\"tuple\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getGraphs\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"id\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"label\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"NodeIds\",\"type\":\"string[]\"},{\"internalType\":\"string[]\",\"name\":\"EdgeIds\",\"type\":\"string[]\"},{\"internalType\":\"string[]\",\"name\":\"AttachmentIds\",\"type\":\"string[]\"}],\"internalType\":\"struct ConsensusGraph.Graph[50]\",\"name\":\"\",\"type\":\"tuple[50]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getNodeIds\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"myCreator\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"myId\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"tokenContract\",\"outputs\":[{\"internalType\":\"contract ConsensusToken\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"id\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"internalType\":\"struct ConsensusGraph.Node[]\",\"name\":\"nodes\",\"type\":\"tuple[]\"},{\"components\":[{\"internalType\":\"string\",\"name\":\"id\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"internalType\":\"struct ConsensusGraph.Edge[]\",\"name\":\"edges\",\"type\":\"tuple[]\"}],\"name\":\"upsertCollections\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringId\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"name\":\"upsertEdge\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringId\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"label\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"nodes\",\"type\":\"string[]\"},{\"internalType\":\"string[]\",\"name\":\"edges\",\"type\":\"string[]\"},{\"internalType\":\"string[]\",\"name\":\"attachments\",\"type\":\"string[]\"}],\"name\":\"upsertGraph\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringId\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"name\":\"upsertNode\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/kriswinquist/timecatcode/Consensus/public_square/contracts/ConsensusGraph.sol\":\"ConsensusGraph\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/kriswinquist/timecatcode/Consensus/public_square/contracts/ConsensusGraph.sol\":{\"keccak256\":\"0x01d53b4dab1070548923c213290a43ed20121b08ecd099f506245a11c43d3e7b\",\"urls\":[\"bzz-raw://0f3a474ab9db2c17df9db0eb47fcbc6a4975556b818ebfb0aaf702e703f939fe\",\"dweb:/ipfs/QmTfkmAPVfscf6VJ3Qsc1daQvXq5ztkeANpHMBX1nECTZq\"]},\"/Users/kriswinquist/timecatcode/Consensus/public_square/contracts/ConsensusToken.sol\":{\"keccak256\":\"0xeb19734c75730349ff5515ccbf9599bf47f014a6d1d9f3d56f34d6d7844aed20\",\"urls\":[\"bzz-raw://c6ff327fcdd2bd16df64ed131f53cf89cf24c5d8d90b65f12505b03d8d152e4a\",\"dweb:/ipfs/QmZCCVrYmXjhsqn8znUdC4EKXPQVT26MmnMycGdy9fkopb\"]}},\"version\":1}",
  "bytecode": "0x60806040526103e83060405162000016906200011e565b6200002392919062000338565b604051809103906000f08015801562000040573d6000803e3d6000fd5b50600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503480156200008e57600080fd5b506040516200493c3803806200493c8339818101604052620000b4919081019062000265565b826000819055508160019080519060200190620000d39291906200012c565b5080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050620004ac565b61107180620038cb83390190565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200016f57805160ff1916838001178555620001a0565b82800160010185558215620001a0579182015b828111156200019f57825182559160200191906001019062000182565b5b509050620001af9190620001b3565b5090565b620001d891905b80821115620001d4576000816000905550600101620001ba565b5090565b90565b600081519050620001ec8162000478565b92915050565b600081519050620002038162000492565b92915050565b600082601f8301126200021b57600080fd5b8151620002326200022c82620003a8565b6200037a565b915080825260208301602083018583830111156200024f57600080fd5b6200025c83828462000442565b50505092915050565b6000806000606084860312156200027b57600080fd5b60006200028b86828701620001f2565b935050602084015167ffffffffffffffff811115620002a957600080fd5b620002b78682870162000209565b9250506040620002ca86828701620001db565b9150509250925092565b620002df81620003e6565b82525050565b620002f0816200042e565b82525050565b600062000305600a83620003d5565b91507f4d61696e204772617068000000000000000000000000000000000000000000006000830152602082019050919050565b600060608201905081810360008301526200035381620002f6565b9050620003646020830185620002e5565b620003736040830184620002d4565b9392505050565b6000604051905081810181811067ffffffffffffffff821117156200039e57600080fd5b8060405250919050565b600067ffffffffffffffff821115620003c057600080fd5b601f19601f8301169050602081019050919050565b600082825260208201905092915050565b6000620003f38262000404565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006200043b8262000424565b9050919050565b60005b838110156200046257808201518184015260208101905062000445565b8381111562000472576000848401525b50505050565b6200048381620003e6565b81146200048f57600080fd5b50565b6200049d81620003fa565b8114620004a957600080fd5b50565b61340f80620004bc6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80638037b3e2116100ad578063c2f1182511610071578063c2f1182514610325578063c5e13be814610341578063c78eb4ae14610371578063cfc8fb70146103a3578063f0d25151146103d35761012c565b80638037b3e21461025b5780638074028a14610277578063964a9f47146102a7578063a8a89c02146102d9578063af85b569146102f55761012c565b8063330f24ee116100f4578063330f24ee146101c75780633e367afa146101e357806354e0d6a81461020157806355a373d61461021f5780636891b4001461023d5761012c565b806306fdde031461013157806308fc78351461014f5780630d4f5a1b146101815780630fcd43011461018b5780632ca74829146101a9575b600080fd5b610139610403565b6040516101469190612f70565b60405180910390f35b610169600480360361016491908101906126b6565b6104a1565b60405161017893929190612f92565b60405180910390f35b61018961061b565b005b610193610783565b6040516101a09190612e7b565b60405180910390f35b6101b16107a9565b6040516101be9190612ef6565b60405180910390f35b6101e160048036036101dc9190810190612621565b610801565b005b6101eb6108af565b6040516101f89190612ef6565b60405180910390f35b610209610907565b6040516102169190612f3a565b60405180910390f35b61022761090d565b6040516102349190612f55565b60405180910390f35b610245610933565b6040516102529190612f18565b60405180910390f35b61027560048036036102709190810190612720565b610e17565b005b610291600480360361028c91908101906126b6565b611091565b60405161029e9190612e7b565b60405180910390f35b6102c160048036036102bc91908101906126b6565b6110cf565b6040516102d093929190612f92565b60405180910390f35b6102f360048036036102ee919081019061278c565b611249565b005b61030f600480360361030a919081019061287b565b6115bd565b60405161031c9190612f3a565b60405180910390f35b61033f600480360361033a9190810190612720565b6115de565b005b61035b6004803603610356919081019061287b565b611858565b6040516103689190612f3a565b60405180910390f35b61038b600480360361038691908101906126b6565b611879565b60405161039a93929190612f92565b60405180910390f35b6103bd60048036036103b8919081019061287b565b6119f3565b6040516103ca9190612f3a565b60405180910390f35b6103ed60048036036103e891908101906126df565b611a14565b6040516103fa9190613037565b60405180910390f35b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104995780601f1061046e57610100808354040283529160200191610499565b820191906000526020600020905b81548152906001019060200180831161047c57829003601f168201915b505050505081565b6004602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561054d5780601f106105225761010080835404028352916020019161054d565b820191906000526020600020905b81548152906001019060200180831161053057829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106115780601f106105e657610100808354040283529160200191610611565b820191906000526020600020905b8154815290600101906020018083116105f457829003601f168201915b5050505050905083565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3306298967f6040518363ffffffff1660e01b815260040161067b929190612ecd565b602060405180830381600087803b15801561069557600080fd5b505af11580156106a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506106cd919081019061268d565b50600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd303360646040518463ffffffff1660e01b815260040161072e93929190612e96565b602060405180830381600087803b15801561074857600080fd5b505af115801561075c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610780919081019061268d565b50565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060078054806020026020016040519081016040528092919081815260200182805480156107f757602002820191906000526020600020905b8154815260200190600101908083116107e3575b5050505050905090565b60008090505b82518110156108555761084883828151811061081f57fe5b60200260200101516000015184838151811061083757fe5b602002602001015160400151610e17565b8080600101915050610807565b5060008090505b81518110156108aa5761089d82828151811061087457fe5b60200260200101516000015183838151811061088c57fe5b6020026020010151604001516115de565b808060010191505061085c565b505050565b606060058054806020026020016040519081016040528092919081815260200182805480156108fd57602002820191906000526020600020905b8154815260200190600101908083116108e9575b5050505050905090565b60005481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61093b611fea565b610943611fea565b600080905060008090505b600980549050811015610e0e57600860006009838154811061096c57fe5b906000526020600020015481526020019081526020016000206040518060c0016040529081600082018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a295780601f106109fe57610100808354040283529160200191610a29565b820191906000526020600020905b815481529060010190602001808311610a0c57829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b215780601f10610af657610100808354040283529160200191610b21565b820191906000526020600020905b815481529060010190602001808311610b0457829003601f168201915b5050505050815260200160038201805480602002602001604051908101604052809291908181526020016000905b82821015610c0b578382906000526020600020018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bf75780601f10610bcc57610100808354040283529160200191610bf7565b820191906000526020600020905b815481529060010190602001808311610bda57829003601f168201915b505050505081526020019060010190610b4f565b50505050815260200160048201805480602002602001604051908101604052809291908181526020016000905b82821015610cf4578382906000526020600020018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ce05780601f10610cb557610100808354040283529160200191610ce0565b820191906000526020600020905b815481529060010190602001808311610cc357829003601f168201915b505050505081526020019060010190610c38565b50505050815260200160058201805480602002602001604051908101604052809291908181526020016000905b82821015610ddd578382906000526020600020018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610dc95780601f10610d9e57610100808354040283529160200191610dc9565b820191906000526020600020905b815481529060010190602001808311610dac57829003601f168201915b505050505081526020019060010190610d21565b5050505081525050838360328110610df157fe5b60200201819052508180600101925050808060010191505061094e565b50819250505090565b600082604051602001610e2a9190612e4d565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610f55573273ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610f50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4790613017565b60405180910390fd5b610f82565b60058190806001815401808255809150509060018203906000526020600020016000909192909190915055505b60405180606001604052808481526020013273ffffffffffffffffffffffffffffffffffffffff16815260200183815250600460008381526020019081526020016000206000820151816000019080519060200190610fe2929190612018565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019080519060200190611046929190612018565b50905050826040516110589190612e4d565b60405180910390207fed6f16cbbb8c3446efae3e9dc5f621b6987bbe160a2b866cfdbd5933188a01a760405160405180910390a2505050565b600a6020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081565b6006602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561117b5780601f106111505761010080835404028352916020019161117b565b820191906000526020600020905b81548152906001019060200180831161115e57829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561123f5780601f106112145761010080835404028352916020019161123f565b820191906000526020600020905b81548152906001019060200180831161122257829003601f168201915b5050505050905083565b60008560405160200161125c9190612e4d565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156114415760098190806001815401808255809150509060018203906000526020600020016000909192909190915055506040518060c001604052808781526020013273ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018481526020018381525060086000838152602001908152602001600020600082015181600001908051906020019061137d929190612018565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020190805190602001906113e1929190612018565b5060608201518160030190805190602001906113fe929190612098565b50608082015181600401908051906020019061141b929190612098565b5060a0820151816005019080519060200190611438929190612098565b509050506115b5565b3073ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16148061151257503273ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15611579576115366008600083815260200190815260200160002060030185611ec2565b6115556008600083815260200190815260200160002060040184611ec2565b6115746008600083815260200190815260200160002060050183611ec2565b6115b4565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115ab90612ff7565b60405180910390fd5b5b505050505050565b600981815481106115ca57fe5b906000526020600020016000915090505481565b6000826040516020016115f19190612e4d565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166006600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461171c573273ffffffffffffffffffffffffffffffffffffffff166006600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611717576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161170e90612fd7565b60405180910390fd5b611749565b60078190806001815401808255809150509060018203906000526020600020016000909192909190915055505b60405180606001604052808481526020013273ffffffffffffffffffffffffffffffffffffffff168152602001838152506006600083815260200190815260200160002060008201518160000190805190602001906117a9929190612018565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201908051906020019061180d929190612018565b509050508260405161181f9190612e4d565b60405180910390207f06bfb5eb12f4bcebe062b83b9774001d76c2361447126f6c590833d77597eac160405160405180910390a2505050565b6005818154811061186557fe5b906000526020600020016000915090505481565b6008602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119255780601f106118fa57610100808354040283529160200191611925565b820191906000526020600020905b81548152906001019060200180831161190857829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119e95780601f106119be576101008083540402835291602001916119e9565b820191906000526020600020905b8154815290600101906020018083116119cc57829003601f168201915b5050505050905083565b60078181548110611a0057fe5b906000526020600020016000915090505481565b611a1c6120f8565b600082604051602001611a2f9190612e4d565b604051602081830303815290604052805190602001209050600860008281526020019081526020016000206040518060c0016040529081600082018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611afe5780601f10611ad357610100808354040283529160200191611afe565b820191906000526020600020905b815481529060010190602001808311611ae157829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611bf65780601f10611bcb57610100808354040283529160200191611bf6565b820191906000526020600020905b815481529060010190602001808311611bd957829003601f168201915b5050505050815260200160038201805480602002602001604051908101604052809291908181526020016000905b82821015611ce0578382906000526020600020018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ccc5780601f10611ca157610100808354040283529160200191611ccc565b820191906000526020600020905b815481529060010190602001808311611caf57829003601f168201915b505050505081526020019060010190611c24565b50505050815260200160048201805480602002602001604051908101604052809291908181526020016000905b82821015611dc9578382906000526020600020018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611db55780601f10611d8a57610100808354040283529160200191611db5565b820191906000526020600020905b815481529060010190602001808311611d9857829003601f168201915b505050505081526020019060010190611d0d565b50505050815260200160058201805480602002602001604051908101604052809291908181526020016000905b82821015611eb2578382906000526020600020018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611e9e5780601f10611e7357610100808354040283529160200191611e9e565b820191906000526020600020905b815481529060010190602001808311611e8157829003601f168201915b505050505081526020019060010190611df6565b5050505081525050915050919050565b60008090505b8151811015611fe55760006001905060008090505b8480549050811015611f7757848181548110611ef557fe5b90600052602060002001604051602001611f0f9190612e64565b60405160208183030381529060405280519060200120848481518110611f3157fe5b6020026020010151604051602001611f499190612e36565b604051602081830303815290604052805190602001201415611f6a57600091505b8080600101915050611edd565b50600115158115151415611fd75783838381518110611f9257fe5b60200260200101519080600181540180825580915050906001820390600052602060002001600090919290919091509080519060200190611fd4929190612144565b50505b508080600101915050611ec8565b505050565b6040518061064001604052806032905b6120026121c4565b815260200190600190039081611ffa5790505090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061205957805160ff1916838001178555612087565b82800160010185558215612087579182015b8281111561208657825182559160200191906001019061206b565b5b5090506120949190612210565b5090565b8280548282559060005260206000209081019282156120e7579160200282015b828111156120e65782518290805190602001906120d6929190612018565b50916020019190600101906120b8565b5b5090506120f49190612235565b5090565b6040518060c0016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016060815260200160608152602001606081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061218557805160ff19168380011785556121b3565b828001600101855582156121b3579182015b828111156121b2578251825591602001919060010190612197565b5b5090506121c09190612210565b5090565b6040518060c0016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016060815260200160608152602001606081525090565b61223291905b8082111561222e576000816000905550600101612216565b5090565b90565b61225e91905b8082111561225a57600081816122519190612261565b5060010161223b565b5090565b90565b50805460018160011615610100020316600290046000825580601f1061228757506122a6565b601f0160209004906000526020600020908101906122a59190612210565b5b50565b6000813590506122b881613370565b92915050565b600082601f8301126122cf57600080fd5b81356122e26122dd82613086565b613059565b9150818183526020840193506020810190508360005b83811015612328578135860161230e8882612444565b8452602084019350602083019250506001810190506122f8565b5050505092915050565b600082601f83011261234357600080fd5b8135612356612351826130ae565b613059565b9150818183526020840193506020810190508360005b8381101561239c578135860161238288826124ec565b84526020840193506020830192505060018101905061236c565b5050505092915050565b600082601f8301126123b757600080fd5b81356123ca6123c5826130d6565b613059565b9150818183526020840193506020810190508360005b8381101561241057813586016123f6888261257c565b8452602084019350602083019250506001810190506123e0565b5050505092915050565b60008151905061242981613387565b92915050565b60008135905061243e8161339e565b92915050565b600082601f83011261245557600080fd5b8135612468612463826130fe565b613059565b9150808252602083016020830185838301111561248457600080fd5b61248f83828461331d565b50505092915050565b600082601f8301126124a957600080fd5b81356124bc6124b78261312a565b613059565b915080825260208301602083018583830111156124d857600080fd5b6124e383828461331d565b50505092915050565b6000606082840312156124fe57600080fd5b6125086060613059565b9050600082013567ffffffffffffffff81111561252457600080fd5b61253084828501612444565b6000830152506020612544848285016122a9565b602083015250604082013567ffffffffffffffff81111561256457600080fd5b61257084828501612444565b60408301525092915050565b60006060828403121561258e57600080fd5b6125986060613059565b9050600082013567ffffffffffffffff8111156125b457600080fd5b6125c084828501612444565b60008301525060206125d4848285016122a9565b602083015250604082013567ffffffffffffffff8111156125f457600080fd5b61260084828501612444565b60408301525092915050565b60008135905061261b816133b5565b92915050565b6000806040838503121561263457600080fd5b600083013567ffffffffffffffff81111561264e57600080fd5b61265a858286016123a6565b925050602083013567ffffffffffffffff81111561267757600080fd5b61268385828601612332565b9150509250929050565b60006020828403121561269f57600080fd5b60006126ad8482850161241a565b91505092915050565b6000602082840312156126c857600080fd5b60006126d68482850161242f565b91505092915050565b6000602082840312156126f157600080fd5b600082013567ffffffffffffffff81111561270b57600080fd5b61271784828501612498565b91505092915050565b6000806040838503121561273357600080fd5b600083013567ffffffffffffffff81111561274d57600080fd5b61275985828601612498565b925050602083013567ffffffffffffffff81111561277657600080fd5b61278285828601612498565b9150509250929050565b600080600080600060a086880312156127a457600080fd5b600086013567ffffffffffffffff8111156127be57600080fd5b6127ca88828901612498565b955050602086013567ffffffffffffffff8111156127e757600080fd5b6127f388828901612498565b945050604086013567ffffffffffffffff81111561281057600080fd5b61281c888289016122be565b935050606086013567ffffffffffffffff81111561283957600080fd5b612845888289016122be565b925050608086013567ffffffffffffffff81111561286257600080fd5b61286e888289016122be565b9150509295509295909350565b60006020828403121561288d57600080fd5b600061289b8482850161260c565b91505092915050565b60006128b08383612a59565b60208301905092915050565b60006128c88383612ad5565b905092915050565b60006128dc8383612d91565b905092915050565b6128ed8161329f565b82525050565b6128fc8161324d565b82525050565b61290b8161324d565b82525050565b600061291c82613195565b61292681856131f3565b935061293183613156565b8060005b8381101561296257815161294988826128a4565b9750612954836131cc565b925050600181019050612935565b5085935050505092915050565b600061297a826131a0565b6129848185613204565b93508360208202850161299685613166565b8060005b858110156129d257848403895281516129b385826128bc565b94506129be836131d9565b925060208a0199505060018101905061299a565b50829750879550505050505092915050565b60006129ef826131ab565b6129f98185613215565b935083602082028501612a0b85613176565b8060005b85811015612a475784840389528151612a2885826128d0565b9450612a33836131e6565b925060208a01995050600181019050612a0f565b50829750879550505050505092915050565b612a628161326b565b82525050565b612a718161326b565b82525050565b612a80816132b1565b82525050565b612a8f816132d5565b82525050565b612a9e816132e7565b82525050565b6000612aaf826131c1565b612ab98185613242565b9350612ac981856020860161332c565b80840191505092915050565b6000612ae0826131b6565b612aea8185613220565b9350612afa81856020860161332c565b612b038161335f565b840191505092915050565b6000612b19826131b6565b612b238185613231565b9350612b3381856020860161332c565b612b3c8161335f565b840191505092915050565b6000612b52826131b6565b612b5c8185613242565b9350612b6c81856020860161332c565b80840191505092915050565b600081546001811660008114612b955760018114612bba57612bfe565b607f6002830416612ba68187613242565b955060ff1983168652808601935050612bfe565b60028204612bc88187613242565b9550612bd385613180565b60005b82811015612bf557815481890152600182019150602081019050612bd6565b82880195505050505b505092915050565b6000612c13601a83613231565b91507f4f6e6c79206f776e65722063616e2075706461746520656467650000000000006000830152602082019050919050565b6000612c53602783613231565b91507f43616e6e6f742075706461746520616e6f74686572206f776e6572732067726160008301527f70682076696577000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612cb9601a83613231565b91507f4f6e6c79206f776e65722063616e20757064617465206e6f64650000000000006000830152602082019050919050565b600060c0830160008301518482036000860152612d098282612ad5565b9150506020830151612d1e60208601826128f3565b5060408301518482036040860152612d368282612ad5565b91505060608301518482036060860152612d50828261296f565b91505060808301518482036080860152612d6a828261296f565b91505060a083015184820360a0860152612d84828261296f565b9150508091505092915050565b600060c0830160008301518482036000860152612dae8282612ad5565b9150506020830151612dc360208601826128f3565b5060408301518482036040860152612ddb8282612ad5565b91505060608301518482036060860152612df5828261296f565b91505060808301518482036080860152612e0f828261296f565b91505060a083015184820360a0860152612e29828261296f565b9150508091505092915050565b6000612e428284612b47565b915081905092915050565b6000612e598284612aa4565b915081905092915050565b6000612e708284612b78565b915081905092915050565b6000602082019050612e906000830184612902565b92915050565b6000606082019050612eab6000830186612902565b612eb860208301856128e4565b612ec56040830184612a86565b949350505050565b6000604082019050612ee26000830185612902565b612eef6020830184612a95565b9392505050565b60006020820190508181036000830152612f108184612911565b905092915050565b60006020820190508181036000830152612f3281846129e4565b905092915050565b6000602082019050612f4f6000830184612a68565b92915050565b6000602082019050612f6a6000830184612a77565b92915050565b60006020820190508181036000830152612f8a8184612b0e565b905092915050565b60006060820190508181036000830152612fac8186612b0e565b9050612fbb6020830185612902565b8181036040830152612fcd8184612b0e565b9050949350505050565b60006020820190508181036000830152612ff081612c06565b9050919050565b6000602082019050818103600083015261301081612c46565b9050919050565b6000602082019050818103600083015261303081612cac565b9050919050565b600060208201905081810360008301526130518184612cec565b905092915050565b6000604051905081810181811067ffffffffffffffff8211171561307c57600080fd5b8060405250919050565b600067ffffffffffffffff82111561309d57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff8211156130c557600080fd5b602082029050602081019050919050565b600067ffffffffffffffff8211156130ed57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561311557600080fd5b601f19601f8301169050602081019050919050565b600067ffffffffffffffff82111561314157600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b6000819050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600060329050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061325882613275565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006132aa826132f9565b9050919050565b60006132bc826132c3565b9050919050565b60006132ce82613275565b9050919050565b60006132e082613295565b9050919050565b60006132f282613295565b9050919050565b60006133048261330b565b9050919050565b600061331682613275565b9050919050565b82818337600083830152505050565b60005b8381101561334a57808201518184015260208101905061332f565b83811115613359576000848401525b50505050565b6000601f19601f8301169050919050565b6133798161324d565b811461338457600080fd5b50565b6133908161325f565b811461339b57600080fd5b50565b6133a78161326b565b81146133b257600080fd5b50565b6133be81613295565b81146133c957600080fd5b5056fea365627a7a723158202aefc5d8d35b551c2093391a7dad0edffbcc39becc0611f8456a3e8457421e516c6578706572696d656e74616cf564736f6c6343000510004060806040523480156200001157600080fd5b506040516200107138038062001071833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660018202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c3578082015181840152602081019050620000a6565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b5060405260200180519060200190929190805190602001909291905050508160048190555060608390508360405160200180807f436f6e73656e73757320666f7220000000000000000000000000000000000000815250600e0182805190602001908083835b602083106200017c578051825260208201915060208101905060208303925062000157565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405260009080519060200190620001c7929190620002d4565b50600454600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550806000815181106200021c57fe5b602001015160f81c60f81b60405160200180807f4353555300000000000000000000000000000000000000000000000000000000815250600401827effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260010191505060405160208183030381529060405260019080519060200190620002c9929190620002d4565b505050505062000383565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200031757805160ff191683800117855562000348565b8280016001018555821562000348579182015b82811115620003475782518255916020019190600101906200032a565b5b5090506200035791906200035b565b5090565b6200038091905b808211156200037c57600081600090555060010162000362565b5090565b90565b610cde80620003936000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063313ce56711610066578063313ce5671461022557806370a082311461024957806395d89b41146102a1578063a9059cbb14610324578063dd62ed3e1461038a57610093565b806306fdde0314610098578063095ea7b31461011b57806318160ddd1461018157806323b872dd1461019f575b600080fd5b6100a0610402565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e05780820151818401526020810190506100c5565b50505050905090810190601f16801561010d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101676004803603604081101561013157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104a0565b604051808215151515815260200191505060405180910390f35b610189610592565b6040518082815260200191505060405180910390f35b61020b600480360360608110156101b557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061059c565b604051808215151515815260200191505060405180910390f35b61022d61091c565b604051808260ff1660ff16815260200191505060405180910390f35b61028b6004803603602081101561025f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610921565b6040518082815260200191505060405180910390f35b6102a961096a565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102e95780820151818401526020810190506102ce565b50505050905090810190601f1680156103165780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103706004803603604081101561033a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a08565b604051808215151515815260200191505060405180910390f35b6103ec600480360360408110156103a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bef565b6040518082815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104985780601f1061046d57610100808354040283529160200191610498565b820191906000526020600020905b81548152906001019060200180831161047b57829003601f168201915b505050505081565b600081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600454905090565b6000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211156105ea57600080fd5b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111561067357600080fd5b6106c582600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610c7690919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061079782600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610c7690919063ffffffff16565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061086982600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610c8d90919063ffffffff16565b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600281565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a005780601f106109d557610100808354040283529160200191610a00565b820191906000526020600020905b8154815290600101906020018083116109e357829003601f168201915b505050505081565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115610a5657600080fd5b610aa882600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610c7690919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b3d82600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610c8d90919063ffffffff16565b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600082821115610c8257fe5b818303905092915050565b600080828401905083811015610c9f57fe5b809150509291505056fea265627a7a72315820321e19176de5c67f16d6333475bc8b0b417080bc4fdf3cce674c43cef94ca1c664736f6c63430005100032",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061012c5760003560e01c80638037b3e2116100ad578063c2f1182511610071578063c2f1182514610325578063c5e13be814610341578063c78eb4ae14610371578063cfc8fb70146103a3578063f0d25151146103d35761012c565b80638037b3e21461025b5780638074028a14610277578063964a9f47146102a7578063a8a89c02146102d9578063af85b569146102f55761012c565b8063330f24ee116100f4578063330f24ee146101c75780633e367afa146101e357806354e0d6a81461020157806355a373d61461021f5780636891b4001461023d5761012c565b806306fdde031461013157806308fc78351461014f5780630d4f5a1b146101815780630fcd43011461018b5780632ca74829146101a9575b600080fd5b610139610403565b6040516101469190612f70565b60405180910390f35b610169600480360361016491908101906126b6565b6104a1565b60405161017893929190612f92565b60405180910390f35b61018961061b565b005b610193610783565b6040516101a09190612e7b565b60405180910390f35b6101b16107a9565b6040516101be9190612ef6565b60405180910390f35b6101e160048036036101dc9190810190612621565b610801565b005b6101eb6108af565b6040516101f89190612ef6565b60405180910390f35b610209610907565b6040516102169190612f3a565b60405180910390f35b61022761090d565b6040516102349190612f55565b60405180910390f35b610245610933565b6040516102529190612f18565b60405180910390f35b61027560048036036102709190810190612720565b610e17565b005b610291600480360361028c91908101906126b6565b611091565b60405161029e9190612e7b565b60405180910390f35b6102c160048036036102bc91908101906126b6565b6110cf565b6040516102d093929190612f92565b60405180910390f35b6102f360048036036102ee919081019061278c565b611249565b005b61030f600480360361030a919081019061287b565b6115bd565b60405161031c9190612f3a565b60405180910390f35b61033f600480360361033a9190810190612720565b6115de565b005b61035b6004803603610356919081019061287b565b611858565b6040516103689190612f3a565b60405180910390f35b61038b600480360361038691908101906126b6565b611879565b60405161039a93929190612f92565b60405180910390f35b6103bd60048036036103b8919081019061287b565b6119f3565b6040516103ca9190612f3a565b60405180910390f35b6103ed60048036036103e891908101906126df565b611a14565b6040516103fa9190613037565b60405180910390f35b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104995780601f1061046e57610100808354040283529160200191610499565b820191906000526020600020905b81548152906001019060200180831161047c57829003601f168201915b505050505081565b6004602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561054d5780601f106105225761010080835404028352916020019161054d565b820191906000526020600020905b81548152906001019060200180831161053057829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106115780601f106105e657610100808354040283529160200191610611565b820191906000526020600020905b8154815290600101906020018083116105f457829003601f168201915b5050505050905083565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3306298967f6040518363ffffffff1660e01b815260040161067b929190612ecd565b602060405180830381600087803b15801561069557600080fd5b505af11580156106a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506106cd919081019061268d565b50600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd303360646040518463ffffffff1660e01b815260040161072e93929190612e96565b602060405180830381600087803b15801561074857600080fd5b505af115801561075c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610780919081019061268d565b50565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060078054806020026020016040519081016040528092919081815260200182805480156107f757602002820191906000526020600020905b8154815260200190600101908083116107e3575b5050505050905090565b60008090505b82518110156108555761084883828151811061081f57fe5b60200260200101516000015184838151811061083757fe5b602002602001015160400151610e17565b8080600101915050610807565b5060008090505b81518110156108aa5761089d82828151811061087457fe5b60200260200101516000015183838151811061088c57fe5b6020026020010151604001516115de565b808060010191505061085c565b505050565b606060058054806020026020016040519081016040528092919081815260200182805480156108fd57602002820191906000526020600020905b8154815260200190600101908083116108e9575b5050505050905090565b60005481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61093b611fea565b610943611fea565b600080905060008090505b600980549050811015610e0e57600860006009838154811061096c57fe5b906000526020600020015481526020019081526020016000206040518060c0016040529081600082018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a295780601f106109fe57610100808354040283529160200191610a29565b820191906000526020600020905b815481529060010190602001808311610a0c57829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b215780601f10610af657610100808354040283529160200191610b21565b820191906000526020600020905b815481529060010190602001808311610b0457829003601f168201915b5050505050815260200160038201805480602002602001604051908101604052809291908181526020016000905b82821015610c0b578382906000526020600020018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bf75780601f10610bcc57610100808354040283529160200191610bf7565b820191906000526020600020905b815481529060010190602001808311610bda57829003601f168201915b505050505081526020019060010190610b4f565b50505050815260200160048201805480602002602001604051908101604052809291908181526020016000905b82821015610cf4578382906000526020600020018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ce05780601f10610cb557610100808354040283529160200191610ce0565b820191906000526020600020905b815481529060010190602001808311610cc357829003601f168201915b505050505081526020019060010190610c38565b50505050815260200160058201805480602002602001604051908101604052809291908181526020016000905b82821015610ddd578382906000526020600020018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610dc95780601f10610d9e57610100808354040283529160200191610dc9565b820191906000526020600020905b815481529060010190602001808311610dac57829003601f168201915b505050505081526020019060010190610d21565b5050505081525050838360328110610df157fe5b60200201819052508180600101925050808060010191505061094e565b50819250505090565b600082604051602001610e2a9190612e4d565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610f55573273ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610f50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4790613017565b60405180910390fd5b610f82565b60058190806001815401808255809150509060018203906000526020600020016000909192909190915055505b60405180606001604052808481526020013273ffffffffffffffffffffffffffffffffffffffff16815260200183815250600460008381526020019081526020016000206000820151816000019080519060200190610fe2929190612018565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019080519060200190611046929190612018565b50905050826040516110589190612e4d565b60405180910390207fed6f16cbbb8c3446efae3e9dc5f621b6987bbe160a2b866cfdbd5933188a01a760405160405180910390a2505050565b600a6020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081565b6006602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561117b5780601f106111505761010080835404028352916020019161117b565b820191906000526020600020905b81548152906001019060200180831161115e57829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561123f5780601f106112145761010080835404028352916020019161123f565b820191906000526020600020905b81548152906001019060200180831161122257829003601f168201915b5050505050905083565b60008560405160200161125c9190612e4d565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156114415760098190806001815401808255809150509060018203906000526020600020016000909192909190915055506040518060c001604052808781526020013273ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018481526020018381525060086000838152602001908152602001600020600082015181600001908051906020019061137d929190612018565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020190805190602001906113e1929190612018565b5060608201518160030190805190602001906113fe929190612098565b50608082015181600401908051906020019061141b929190612098565b5060a0820151816005019080519060200190611438929190612098565b509050506115b5565b3073ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16148061151257503273ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15611579576115366008600083815260200190815260200160002060030185611ec2565b6115556008600083815260200190815260200160002060040184611ec2565b6115746008600083815260200190815260200160002060050183611ec2565b6115b4565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115ab90612ff7565b60405180910390fd5b5b505050505050565b600981815481106115ca57fe5b906000526020600020016000915090505481565b6000826040516020016115f19190612e4d565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166006600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461171c573273ffffffffffffffffffffffffffffffffffffffff166006600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611717576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161170e90612fd7565b60405180910390fd5b611749565b60078190806001815401808255809150509060018203906000526020600020016000909192909190915055505b60405180606001604052808481526020013273ffffffffffffffffffffffffffffffffffffffff168152602001838152506006600083815260200190815260200160002060008201518160000190805190602001906117a9929190612018565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201908051906020019061180d929190612018565b509050508260405161181f9190612e4d565b60405180910390207f06bfb5eb12f4bcebe062b83b9774001d76c2361447126f6c590833d77597eac160405160405180910390a2505050565b6005818154811061186557fe5b906000526020600020016000915090505481565b6008602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119255780601f106118fa57610100808354040283529160200191611925565b820191906000526020600020905b81548152906001019060200180831161190857829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119e95780601f106119be576101008083540402835291602001916119e9565b820191906000526020600020905b8154815290600101906020018083116119cc57829003601f168201915b5050505050905083565b60078181548110611a0057fe5b906000526020600020016000915090505481565b611a1c6120f8565b600082604051602001611a2f9190612e4d565b604051602081830303815290604052805190602001209050600860008281526020019081526020016000206040518060c0016040529081600082018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611afe5780601f10611ad357610100808354040283529160200191611afe565b820191906000526020600020905b815481529060010190602001808311611ae157829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611bf65780601f10611bcb57610100808354040283529160200191611bf6565b820191906000526020600020905b815481529060010190602001808311611bd957829003601f168201915b5050505050815260200160038201805480602002602001604051908101604052809291908181526020016000905b82821015611ce0578382906000526020600020018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ccc5780601f10611ca157610100808354040283529160200191611ccc565b820191906000526020600020905b815481529060010190602001808311611caf57829003601f168201915b505050505081526020019060010190611c24565b50505050815260200160048201805480602002602001604051908101604052809291908181526020016000905b82821015611dc9578382906000526020600020018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611db55780601f10611d8a57610100808354040283529160200191611db5565b820191906000526020600020905b815481529060010190602001808311611d9857829003601f168201915b505050505081526020019060010190611d0d565b50505050815260200160058201805480602002602001604051908101604052809291908181526020016000905b82821015611eb2578382906000526020600020018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611e9e5780601f10611e7357610100808354040283529160200191611e9e565b820191906000526020600020905b815481529060010190602001808311611e8157829003601f168201915b505050505081526020019060010190611df6565b5050505081525050915050919050565b60008090505b8151811015611fe55760006001905060008090505b8480549050811015611f7757848181548110611ef557fe5b90600052602060002001604051602001611f0f9190612e64565b60405160208183030381529060405280519060200120848481518110611f3157fe5b6020026020010151604051602001611f499190612e36565b604051602081830303815290604052805190602001201415611f6a57600091505b8080600101915050611edd565b50600115158115151415611fd75783838381518110611f9257fe5b60200260200101519080600181540180825580915050906001820390600052602060002001600090919290919091509080519060200190611fd4929190612144565b50505b508080600101915050611ec8565b505050565b6040518061064001604052806032905b6120026121c4565b815260200190600190039081611ffa5790505090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061205957805160ff1916838001178555612087565b82800160010185558215612087579182015b8281111561208657825182559160200191906001019061206b565b5b5090506120949190612210565b5090565b8280548282559060005260206000209081019282156120e7579160200282015b828111156120e65782518290805190602001906120d6929190612018565b50916020019190600101906120b8565b5b5090506120f49190612235565b5090565b6040518060c0016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016060815260200160608152602001606081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061218557805160ff19168380011785556121b3565b828001600101855582156121b3579182015b828111156121b2578251825591602001919060010190612197565b5b5090506121c09190612210565b5090565b6040518060c0016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016060815260200160608152602001606081525090565b61223291905b8082111561222e576000816000905550600101612216565b5090565b90565b61225e91905b8082111561225a57600081816122519190612261565b5060010161223b565b5090565b90565b50805460018160011615610100020316600290046000825580601f1061228757506122a6565b601f0160209004906000526020600020908101906122a59190612210565b5b50565b6000813590506122b881613370565b92915050565b600082601f8301126122cf57600080fd5b81356122e26122dd82613086565b613059565b9150818183526020840193506020810190508360005b83811015612328578135860161230e8882612444565b8452602084019350602083019250506001810190506122f8565b5050505092915050565b600082601f83011261234357600080fd5b8135612356612351826130ae565b613059565b9150818183526020840193506020810190508360005b8381101561239c578135860161238288826124ec565b84526020840193506020830192505060018101905061236c565b5050505092915050565b600082601f8301126123b757600080fd5b81356123ca6123c5826130d6565b613059565b9150818183526020840193506020810190508360005b8381101561241057813586016123f6888261257c565b8452602084019350602083019250506001810190506123e0565b5050505092915050565b60008151905061242981613387565b92915050565b60008135905061243e8161339e565b92915050565b600082601f83011261245557600080fd5b8135612468612463826130fe565b613059565b9150808252602083016020830185838301111561248457600080fd5b61248f83828461331d565b50505092915050565b600082601f8301126124a957600080fd5b81356124bc6124b78261312a565b613059565b915080825260208301602083018583830111156124d857600080fd5b6124e383828461331d565b50505092915050565b6000606082840312156124fe57600080fd5b6125086060613059565b9050600082013567ffffffffffffffff81111561252457600080fd5b61253084828501612444565b6000830152506020612544848285016122a9565b602083015250604082013567ffffffffffffffff81111561256457600080fd5b61257084828501612444565b60408301525092915050565b60006060828403121561258e57600080fd5b6125986060613059565b9050600082013567ffffffffffffffff8111156125b457600080fd5b6125c084828501612444565b60008301525060206125d4848285016122a9565b602083015250604082013567ffffffffffffffff8111156125f457600080fd5b61260084828501612444565b60408301525092915050565b60008135905061261b816133b5565b92915050565b6000806040838503121561263457600080fd5b600083013567ffffffffffffffff81111561264e57600080fd5b61265a858286016123a6565b925050602083013567ffffffffffffffff81111561267757600080fd5b61268385828601612332565b9150509250929050565b60006020828403121561269f57600080fd5b60006126ad8482850161241a565b91505092915050565b6000602082840312156126c857600080fd5b60006126d68482850161242f565b91505092915050565b6000602082840312156126f157600080fd5b600082013567ffffffffffffffff81111561270b57600080fd5b61271784828501612498565b91505092915050565b6000806040838503121561273357600080fd5b600083013567ffffffffffffffff81111561274d57600080fd5b61275985828601612498565b925050602083013567ffffffffffffffff81111561277657600080fd5b61278285828601612498565b9150509250929050565b600080600080600060a086880312156127a457600080fd5b600086013567ffffffffffffffff8111156127be57600080fd5b6127ca88828901612498565b955050602086013567ffffffffffffffff8111156127e757600080fd5b6127f388828901612498565b945050604086013567ffffffffffffffff81111561281057600080fd5b61281c888289016122be565b935050606086013567ffffffffffffffff81111561283957600080fd5b612845888289016122be565b925050608086013567ffffffffffffffff81111561286257600080fd5b61286e888289016122be565b9150509295509295909350565b60006020828403121561288d57600080fd5b600061289b8482850161260c565b91505092915050565b60006128b08383612a59565b60208301905092915050565b60006128c88383612ad5565b905092915050565b60006128dc8383612d91565b905092915050565b6128ed8161329f565b82525050565b6128fc8161324d565b82525050565b61290b8161324d565b82525050565b600061291c82613195565b61292681856131f3565b935061293183613156565b8060005b8381101561296257815161294988826128a4565b9750612954836131cc565b925050600181019050612935565b5085935050505092915050565b600061297a826131a0565b6129848185613204565b93508360208202850161299685613166565b8060005b858110156129d257848403895281516129b385826128bc565b94506129be836131d9565b925060208a0199505060018101905061299a565b50829750879550505050505092915050565b60006129ef826131ab565b6129f98185613215565b935083602082028501612a0b85613176565b8060005b85811015612a475784840389528151612a2885826128d0565b9450612a33836131e6565b925060208a01995050600181019050612a0f565b50829750879550505050505092915050565b612a628161326b565b82525050565b612a718161326b565b82525050565b612a80816132b1565b82525050565b612a8f816132d5565b82525050565b612a9e816132e7565b82525050565b6000612aaf826131c1565b612ab98185613242565b9350612ac981856020860161332c565b80840191505092915050565b6000612ae0826131b6565b612aea8185613220565b9350612afa81856020860161332c565b612b038161335f565b840191505092915050565b6000612b19826131b6565b612b238185613231565b9350612b3381856020860161332c565b612b3c8161335f565b840191505092915050565b6000612b52826131b6565b612b5c8185613242565b9350612b6c81856020860161332c565b80840191505092915050565b600081546001811660008114612b955760018114612bba57612bfe565b607f6002830416612ba68187613242565b955060ff1983168652808601935050612bfe565b60028204612bc88187613242565b9550612bd385613180565b60005b82811015612bf557815481890152600182019150602081019050612bd6565b82880195505050505b505092915050565b6000612c13601a83613231565b91507f4f6e6c79206f776e65722063616e2075706461746520656467650000000000006000830152602082019050919050565b6000612c53602783613231565b91507f43616e6e6f742075706461746520616e6f74686572206f776e6572732067726160008301527f70682076696577000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612cb9601a83613231565b91507f4f6e6c79206f776e65722063616e20757064617465206e6f64650000000000006000830152602082019050919050565b600060c0830160008301518482036000860152612d098282612ad5565b9150506020830151612d1e60208601826128f3565b5060408301518482036040860152612d368282612ad5565b91505060608301518482036060860152612d50828261296f565b91505060808301518482036080860152612d6a828261296f565b91505060a083015184820360a0860152612d84828261296f565b9150508091505092915050565b600060c0830160008301518482036000860152612dae8282612ad5565b9150506020830151612dc360208601826128f3565b5060408301518482036040860152612ddb8282612ad5565b91505060608301518482036060860152612df5828261296f565b91505060808301518482036080860152612e0f828261296f565b91505060a083015184820360a0860152612e29828261296f565b9150508091505092915050565b6000612e428284612b47565b915081905092915050565b6000612e598284612aa4565b915081905092915050565b6000612e708284612b78565b915081905092915050565b6000602082019050612e906000830184612902565b92915050565b6000606082019050612eab6000830186612902565b612eb860208301856128e4565b612ec56040830184612a86565b949350505050565b6000604082019050612ee26000830185612902565b612eef6020830184612a95565b9392505050565b60006020820190508181036000830152612f108184612911565b905092915050565b60006020820190508181036000830152612f3281846129e4565b905092915050565b6000602082019050612f4f6000830184612a68565b92915050565b6000602082019050612f6a6000830184612a77565b92915050565b60006020820190508181036000830152612f8a8184612b0e565b905092915050565b60006060820190508181036000830152612fac8186612b0e565b9050612fbb6020830185612902565b8181036040830152612fcd8184612b0e565b9050949350505050565b60006020820190508181036000830152612ff081612c06565b9050919050565b6000602082019050818103600083015261301081612c46565b9050919050565b6000602082019050818103600083015261303081612cac565b9050919050565b600060208201905081810360008301526130518184612cec565b905092915050565b6000604051905081810181811067ffffffffffffffff8211171561307c57600080fd5b8060405250919050565b600067ffffffffffffffff82111561309d57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff8211156130c557600080fd5b602082029050602081019050919050565b600067ffffffffffffffff8211156130ed57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561311557600080fd5b601f19601f8301169050602081019050919050565b600067ffffffffffffffff82111561314157600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b6000819050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600060329050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061325882613275565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006132aa826132f9565b9050919050565b60006132bc826132c3565b9050919050565b60006132ce82613275565b9050919050565b60006132e082613295565b9050919050565b60006132f282613295565b9050919050565b60006133048261330b565b9050919050565b600061331682613275565b9050919050565b82818337600083830152505050565b60005b8381101561334a57808201518184015260208101905061332f565b83811115613359576000848401525b50505050565b6000601f19601f8301169050919050565b6133798161324d565b811461338457600080fd5b50565b6133908161325f565b811461339b57600080fd5b50565b6133a78161326b565b81146133b257600080fd5b50565b6133be81613295565b81146133c957600080fd5b5056fea365627a7a723158202aefc5d8d35b551c2093391a7dad0edffbcc39becc0611f8456a3e8457421e516c6578706572696d656e74616cf564736f6c63430005100040",
  "sourceMap": "135:7313:0:-;;;513:4;527;480:53;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;480:53:0;442:91;;;;;;;;;;;;;;;;;;;;238:136;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:136:0;;;;;;;;;;;;;;;;;;;;;;;;322:3;315:4;:10;;;;338:5;331:4;:12;;;;;;;;;;;;:::i;:::-;;361:8;349:9;;:20;;;;;;;;;;;;;;;;;;238:136;;;135:7313;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5:134:-1:-;;89:6;83:13;74:22;;101:33;128:5;101:33;;;68:71;;;;;146:134;;230:6;224:13;215:22;;242:33;269:5;242:33;;;209:71;;;;;288:444;;401:3;394:4;386:6;382:17;378:27;368:2;;419:1;416;409:12;368:2;449:6;443:13;471:65;486:49;528:6;486:49;;;471:65;;;462:74;;556:6;549:5;542:21;592:4;584:6;580:17;625:4;618:5;614:16;660:3;651:6;646:3;642:16;639:25;636:2;;;677:1;674;667:12;636:2;687:39;719:6;714:3;709;687:39;;;361:371;;;;;;;;740:634;;;;899:2;887:9;878:7;874:23;870:32;867:2;;;915:1;912;905:12;867:2;950:1;967:64;1023:7;1014:6;1003:9;999:22;967:64;;;957:74;;929:108;1089:2;1078:9;1074:18;1068:25;1113:18;1105:6;1102:30;1099:2;;;1145:1;1142;1135:12;1099:2;1165:74;1231:7;1222:6;1211:9;1207:22;1165:74;;;1155:84;;1047:198;1276:2;1294:64;1350:7;1341:6;1330:9;1326:22;1294:64;;;1284:74;;1255:109;861:513;;;;;;1381:113;1464:24;1482:5;1464:24;;;1459:3;1452:37;1446:48;;;1501:148;1595:48;1637:5;1595:48;;;1590:3;1583:61;1577:72;;;1657:310;;1817:67;1881:2;1876:3;1817:67;;;1810:74;;1917:12;1913:1;1908:3;1904:11;1897:33;1958:2;1953:3;1949:12;1942:19;;1803:164;;;;1975:651;;2233:2;2222:9;2218:18;2210:26;;2283:9;2277:4;2273:20;2269:1;2258:9;2254:17;2247:47;2308:131;2434:4;2308:131;;;2300:139;;2450:83;2529:2;2518:9;2514:18;2505:6;2450:83;;;2544:72;2612:2;2601:9;2597:18;2588:6;2544:72;;;2204:422;;;;;;2633:256;;2695:2;2689:9;2679:19;;2733:4;2725:6;2721:17;2832:6;2820:10;2817:22;2796:18;2784:10;2781:34;2778:62;2775:2;;;2853:1;2850;2843:12;2775:2;2873:10;2869:2;2862:22;2673:216;;;;;2896:322;;3040:18;3032:6;3029:30;3026:2;;;3072:1;3069;3062:12;3026:2;3139:4;3135:9;3128:4;3120:6;3116:17;3112:33;3104:41;;3203:4;3197;3193:15;3185:23;;2963:255;;;;3226:163;;3341:6;3336:3;3329:19;3378:4;3373:3;3369:14;3354:29;;3322:67;;;;;3397:91;;3459:24;3477:5;3459:24;;;3448:35;;3442:46;;;;3495:72;;3557:5;3546:16;;3540:27;;;;3574:121;;3647:42;3640:5;3636:54;3625:65;;3619:76;;;;3702:72;;3764:5;3753:16;;3747:27;;;;3781:119;;3871:24;3889:5;3871:24;;;3858:37;;3852:48;;;;3908:268;3973:1;3980:101;3994:6;3991:1;3988:13;3980:101;;;4070:1;4065:3;4061:11;4055:18;4051:1;4046:3;4042:11;4035:39;4016:2;4013:1;4009:10;4004:15;;3980:101;;;4096:6;4093:1;4090:13;4087:2;;;4161:1;4152:6;4147:3;4143:16;4136:27;4087:2;3957:219;;;;;4184:117;4253:24;4271:5;4253:24;;;4246:5;4243:35;4233:2;;4292:1;4289;4282:12;4233:2;4227:74;;4308:117;4377:24;4395:5;4377:24;;;4370:5;4367:35;4357:2;;4416:1;4413;4406:12;4357:2;4351:74;;135:7313:0;;;;;;;",
  "deployedSourceMap": "135:7313:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;135:7313:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;187:18;;;:::i;:::-;;;;;;;;;;;;;;;;1140:37;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;538:152;;;:::i;:::-;;209:24;;;:::i;:::-;;;;;;;;;;;;;;;;1673:85;;;:::i;:::-;;;;;;;;;;;;;;;;7171:274;;;;;;;;;;;;;;;;:::i;:::-;;1264:85;;;:::i;:::-;;;;;;;;;;;;;;;;164:19;;;:::i;:::-;;;;;;;;;;;;;;;;442:91;;;:::i;:::-;;;;;;;;;;;;;;;;3961:237;;;:::i;:::-;;;;;;;;;;;;;;;;6365:389;;;;;;;;;;;;;;;;:::i;:::-;;4580:49;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;1602:37;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;5464:896;;;;;;;;;;;;;;;;:::i;:::-;;3473:25;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;6758:409;;;;;;;;;;;;;;;;:::i;:::-;;1235:24;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;3429:39;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;1644:24;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;3504:160;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;187:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1140:37::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;538:152::-;574:13;;;;;;;;;;;:21;;;604:4;611:7;574:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;574:45:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;574:45:0;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;574:45:0;;;;;;;;;;627:13;;;;;;;;;;;:26;;;662:4;669:10;681:3;627:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;627:58:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;627:58:0;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;627:58:0;;;;;;;;;;538:152::o;209:24::-;;;;;;;;;;;;;:::o;1673:85::-;1715:16;1746:7;1739:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1673:85;:::o;7171:274::-;7258:6;7265:1;7258:8;;7253:91;7272:5;:12;7268:1;:16;7253:91;;;7299:38;7310:5;7316:1;7310:8;;;;;;;;;;;;;;:11;;;7323:5;7329:1;7323:8;;;;;;;;;;;;;;:13;;;7299:10;:38::i;:::-;7286:3;;;;;;;7253:91;;;;7355:6;7362:1;7355:8;;7350:91;7369:5;:12;7365:1;:16;7350:91;;;7396:38;7407:5;7413:1;7407:8;;;;;;;;;;;;;;:11;;;7420:5;7426:1;7420:8;;;;;;;;;;;;;;:13;;;7396:10;:38::i;:::-;7383:3;;;;;;;7350:91;;;;7171:274;;:::o;1264:85::-;1306:16;1337:7;1330:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1264:85;:::o;164:19::-;;;;:::o;442:91::-;;;;;;;;;;;;;:::o;3961:237::-;4002:16;;:::i;:::-;4026:23;;:::i;:::-;4055:8;4066:1;4055:12;;4078:6;4085:1;4078:8;;4073:102;4092:8;:15;;;;4088:1;:19;4073:102;;;4136:6;:19;4143:8;4152:1;4143:11;;;;;;;;;;;;;;;;4136:19;;;;;;;;;;;4122:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:6;4129:3;4122:11;;;;;;;;;;:33;;;;4163:5;;;;;;;4109:3;;;;;;;4073:102;;;;4187:6;4180:13;;;;3961:237;:::o;6365:389::-;6442:10;6482:8;6465:26;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;6465:26:0;;;6455:37;;;;;;6442:50;;6529:1;6502:29;;:5;:9;6508:2;6502:9;;;;;;;;;;;:15;;;;;;;;;;;;:29;;;6498:175;;6564:9;6545:28;;:5;:9;6551:2;6545:9;;;;;;;;;;;:15;;;;;;;;;;;;:28;;;6541:89;;6585:36;;;;;;;;;;;;;;;;;;;6541:89;6498:175;;;6650:7;6663:2;6650:16;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;6650:16:0;;;;;;;;;;;;;;;;;;;;;;6498:175;6690:31;;;;;;;;6695:8;6690:31;;;;6705:9;6690:31;;;;;;6716:4;6690:31;;;6678:5;:9;6684:2;6678:9;;;;;;;;;;;:43;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;6740:8;6732:17;;;;;;;;;;;;;;;;;;;;;;;;;6365:389;;;:::o;4580:49::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1602:37::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5464:896::-;5642:10;5682:8;5665:26;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5665:26:0;;;5655:37;;;;;;5642:50;;5769:1;5741:30;;:6;:10;5748:2;5741:10;;;;;;;;;;;:16;;;;;;;;;;;;:30;;;5737:619;;;5781:8;5795:2;5781:17;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;5781:17:0;;;;;;;;;;;;;;;;;;;;;;5819:60;;;;;;;;5825:8;5819:60;;;;5835:9;5819:60;;;;;;5846:5;5819:60;;;;5853:5;5819:60;;;;5860:5;5819:60;;;;5867:11;5819:60;;;5806:6;:10;5813:2;5806:10;;;;;;;;;;;:73;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;5737:619;;;6034:4;6006:33;;:6;:10;6013:2;6006:10;;;;;;;;;;;:16;;;;;;;;;;;;:33;;;:66;;;;6063:9;6043:29;;:6;:10;6050:2;6043:10;;;;;;;;;;;:16;;;;;;;;;;;;:29;;;6006:66;6001:355;;;6083:39;6096:6;:10;6103:2;6096:10;;;;;;;;;;;:18;;6116:5;6083:12;:39::i;:::-;6130;6143:6;:10;6150:2;6143:10;;;;;;;;;;;:18;;6163:5;6130:12;:39::i;:::-;6177:51;6190:6;:10;6197:2;6190:10;;;;;;;;;;;:24;;6216:11;6177:12;:51::i;:::-;6001:355;;;6300:49;;;;;;;;;;;;;;;;;;;6001:355;5737:619;5464:896;;;;;;:::o;3473:25::-;;;;;;;;;;;;;;;;;;;;;;;;;:::o;6758:409::-;6837:10;6877:8;6860:26;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;6860:26:0;;;6850:37;;;;;;6837:50;;6926:1;6899:29;;:5;:9;6905:2;6899:9;;;;;;;;;;;:15;;;;;;;;;;;;:29;;;6895:187;;6963:9;6944:28;;:5;:9;6950:2;6944:9;;;;;;;;;;;:15;;;;;;;;;;;;:28;;;6940:93;;6986:36;;;;;;;;;;;;;;;;;;;6940:93;6895:187;;;7057:7;7070:2;7057:16;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;7057:16:0;;;;;;;;;;;;;;;;;;;;;;6895:187;7101:31;;;;;;;;7106:8;7101:31;;;;7116:9;7101:31;;;;;;7127:4;7101:31;;;7089:5;:9;7095:2;7089:9;;;;;;;;;;;:43;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;7153:8;7145:17;;;;;;;;;;;;;;;;;;;;;;;;;6758:409;;;:::o;1235:24::-;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3429:39::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1644:24::-;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3504:160::-;3566:12;;:::i;:::-;3586:10;3626:8;3609:26;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;3609:26:0;;;3599:37;;;;;;3586:50;;3649:6;:10;3656:2;3649:10;;;;;;;;;;;3642:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3504:160;;;:::o;4828:632::-;4919:6;4926:1;4919:8;;4914:542;4933:6;:13;4929:1;:17;4914:542;;;4961:12;4976:4;4961:19;;4993:6;5000:1;4993:8;;4988:391;5007:6;:13;;;;5003:1;:17;4988:391;;;5319:6;5326:1;5319:9;;;;;;;;;;;;;;;5302:27;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5302:27:0;;;5292:38;;;;;;5277:6;5284:1;5277:9;;;;;;;;;;;;;;5260:27;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5260:27:0;;;5250:38;;;;;;:80;5246:125;;;5355:5;5345:15;;5246:125;5022:3;;;;;;;4988:391;;;;5403:4;5392:15;;:7;:15;;;5387:63;;;5419:6;5431;5438:1;5431:9;;;;;;;;;;;;;;5419:22;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;5419:22:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;5387:63;4914:542;4948:3;;;;;;;4914:542;;;;4828:632;;:::o;135:7313::-;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;5:130:-1:-;;85:6;72:20;63:29;;97:33;124:5;97:33;;;57:78;;;;;159:696;;282:3;275:4;267:6;263:17;259:27;249:2;;300:1;297;290:12;249:2;337:6;324:20;359:86;374:70;437:6;374:70;;;359:86;;;350:95;;462:5;487:6;480:5;473:21;517:4;509:6;505:17;495:27;;539:4;534:3;530:14;523:21;;592:6;625:1;610:239;635:6;632:1;629:13;610:239;;;718:3;705:17;697:6;693:30;742:43;781:3;769:10;742:43;;;737:3;730:56;809:4;804:3;800:14;793:21;;837:4;832:3;828:14;821:21;;667:182;657:1;654;650:9;645:14;;610:239;;;614:14;242:613;;;;;;;;900:726;;1033:3;1026:4;1018:6;1014:17;1010:27;1000:2;;1051:1;1048;1041:12;1000:2;1088:6;1075:20;1110:96;1125:80;1198:6;1125:80;;;1110:96;;;1101:105;;1223:5;1248:6;1241:5;1234:21;1278:4;1270:6;1266:17;1256:27;;1300:4;1295:3;1291:14;1284:21;;1353:6;1386:1;1371:249;1396:6;1393:1;1390:13;1371:249;;;1479:3;1466:17;1458:6;1454:30;1503:53;1552:3;1540:10;1503:53;;;1498:3;1491:66;1580:4;1575:3;1571:14;1564:21;;1608:4;1603:3;1599:14;1592:21;;1428:192;1418:1;1415;1411:9;1406:14;;1371:249;;;1375:14;993:633;;;;;;;;1671:726;;1804:3;1797:4;1789:6;1785:17;1781:27;1771:2;;1822:1;1819;1812:12;1771:2;1859:6;1846:20;1881:96;1896:80;1969:6;1896:80;;;1881:96;;;1872:105;;1994:5;2019:6;2012:5;2005:21;2049:4;2041:6;2037:17;2027:27;;2071:4;2066:3;2062:14;2055:21;;2124:6;2157:1;2142:249;2167:6;2164:1;2161:13;2142:249;;;2250:3;2237:17;2229:6;2225:30;2274:53;2323:3;2311:10;2274:53;;;2269:3;2262:66;2351:4;2346:3;2342:14;2335:21;;2379:4;2374:3;2370:14;2363:21;;2199:192;2189:1;2186;2182:9;2177:14;;2142:249;;;2146:14;1764:633;;;;;;;;2405:128;;2486:6;2480:13;2471:22;;2498:30;2522:5;2498:30;;;2465:68;;;;;2540:130;;2620:6;2607:20;2598:29;;2632:33;2659:5;2632:33;;;2592:78;;;;;2678:434;;2776:3;2769:4;2761:6;2757:17;2753:27;2743:2;;2794:1;2791;2784:12;2743:2;2831:6;2818:20;2853:61;2868:45;2906:6;2868:45;;;2853:61;;;2844:70;;2934:6;2927:5;2920:21;2970:4;2962:6;2958:17;3003:4;2996:5;2992:16;3038:3;3029:6;3024:3;3020:16;3017:25;3014:2;;;3055:1;3052;3045:12;3014:2;3065:41;3099:6;3094:3;3089;3065:41;;;2736:376;;;;;;;;3121:442;;3223:3;3216:4;3208:6;3204:17;3200:27;3190:2;;3241:1;3238;3231:12;3190:2;3278:6;3265:20;3300:65;3315:49;3357:6;3315:49;;;3300:65;;;3291:74;;3385:6;3378:5;3371:21;3421:4;3413:6;3409:17;3454:4;3447:5;3443:16;3489:3;3480:6;3475:3;3471:16;3468:25;3465:2;;;3506:1;3503;3496:12;3465:2;3516:41;3550:6;3545:3;3540;3516:41;;;3183:380;;;;;;;;3604:785;;3709:4;3697:9;3692:3;3688:19;3684:30;3681:2;;;3727:1;3724;3717:12;3681:2;3745:20;3760:4;3745:20;;;3736:29;;3841:1;3830:9;3826:17;3813:31;3864:18;3856:6;3853:30;3850:2;;;3896:1;3893;3886:12;3850:2;3931:55;3982:3;3973:6;3962:9;3958:22;3931:55;;;3924:4;3917:5;3913:16;3906:81;3775:223;4049:2;4082:49;4127:3;4118:6;4107:9;4103:22;4082:49;;;4075:4;4068:5;4064:16;4057:75;4008:135;4221:2;4210:9;4206:18;4193:32;4245:18;4237:6;4234:30;4231:2;;;4277:1;4274;4267:12;4231:2;4312:55;4363:3;4354:6;4343:9;4339:22;4312:55;;;4305:4;4298:5;4294:16;4287:81;4153:226;3675:714;;;;;4429:785;;4534:4;4522:9;4517:3;4513:19;4509:30;4506:2;;;4552:1;4549;4542:12;4506:2;4570:20;4585:4;4570:20;;;4561:29;;4666:1;4655:9;4651:17;4638:31;4689:18;4681:6;4678:30;4675:2;;;4721:1;4718;4711:12;4675:2;4756:55;4807:3;4798:6;4787:9;4783:22;4756:55;;;4749:4;4742:5;4738:16;4731:81;4600:223;4874:2;4907:49;4952:3;4943:6;4932:9;4928:22;4907:49;;;4900:4;4893:5;4889:16;4882:75;4833:135;5046:2;5035:9;5031:18;5018:32;5070:18;5062:6;5059:30;5056:2;;;5102:1;5099;5092:12;5056:2;5137:55;5188:3;5179:6;5168:9;5164:22;5137:55;;;5130:4;5123:5;5119:16;5112:81;4978:226;4500:714;;;;;5221:130;;5301:6;5288:20;5279:29;;5313:33;5340:5;5313:33;;;5273:78;;;;;5358:702;;;5561:2;5549:9;5540:7;5536:23;5532:32;5529:2;;;5577:1;5574;5567:12;5529:2;5640:1;5629:9;5625:17;5612:31;5663:18;5655:6;5652:30;5649:2;;;5695:1;5692;5685:12;5649:2;5715:94;5801:7;5792:6;5781:9;5777:22;5715:94;;;5705:104;;5591:224;5874:2;5863:9;5859:18;5846:32;5898:18;5890:6;5887:30;5884:2;;;5930:1;5927;5920:12;5884:2;5950:94;6036:7;6027:6;6016:9;6012:22;5950:94;;;5940:104;;5825:225;5523:537;;;;;;6067:257;;6179:2;6167:9;6158:7;6154:23;6150:32;6147:2;;;6195:1;6192;6185:12;6147:2;6230:1;6247:61;6300:7;6291:6;6280:9;6276:22;6247:61;;;6237:71;;6209:105;6141:183;;;;;6331:241;;6435:2;6423:9;6414:7;6410:23;6406:32;6403:2;;;6451:1;6448;6441:12;6403:2;6486:1;6503:53;6548:7;6539:6;6528:9;6524:22;6503:53;;;6493:63;;6465:97;6397:175;;;;;6579:347;;6693:2;6681:9;6672:7;6668:23;6664:32;6661:2;;;6709:1;6706;6699:12;6661:2;6772:1;6761:9;6757:17;6744:31;6795:18;6787:6;6784:30;6781:2;;;6827:1;6824;6817:12;6781:2;6847:63;6902:7;6893:6;6882:9;6878:22;6847:63;;;6837:73;;6723:193;6655:271;;;;;6933:578;;;7074:2;7062:9;7053:7;7049:23;7045:32;7042:2;;;7090:1;7087;7080:12;7042:2;7153:1;7142:9;7138:17;7125:31;7176:18;7168:6;7165:30;7162:2;;;7208:1;7205;7198:12;7162:2;7228:63;7283:7;7274:6;7263:9;7259:22;7228:63;;;7218:73;;7104:193;7356:2;7345:9;7341:18;7328:32;7380:18;7372:6;7369:30;7366:2;;;7412:1;7409;7402:12;7366:2;7432:63;7487:7;7478:6;7467:9;7463:22;7432:63;;;7422:73;;7307:194;7036:475;;;;;;7518:1399;;;;;;7803:3;7791:9;7782:7;7778:23;7774:33;7771:2;;;7820:1;7817;7810:12;7771:2;7883:1;7872:9;7868:17;7855:31;7906:18;7898:6;7895:30;7892:2;;;7938:1;7935;7928:12;7892:2;7958:63;8013:7;8004:6;7993:9;7989:22;7958:63;;;7948:73;;7834:193;8086:2;8075:9;8071:18;8058:32;8110:18;8102:6;8099:30;8096:2;;;8142:1;8139;8132:12;8096:2;8162:63;8217:7;8208:6;8197:9;8193:22;8162:63;;;8152:73;;8037:194;8290:2;8279:9;8275:18;8262:32;8314:18;8306:6;8303:30;8300:2;;;8346:1;8343;8336:12;8300:2;8366:84;8442:7;8433:6;8422:9;8418:22;8366:84;;;8356:94;;8241:215;8515:2;8504:9;8500:18;8487:32;8539:18;8531:6;8528:30;8525:2;;;8571:1;8568;8561:12;8525:2;8591:84;8667:7;8658:6;8647:9;8643:22;8591:84;;;8581:94;;8466:215;8740:3;8729:9;8725:19;8712:33;8765:18;8757:6;8754:30;8751:2;;;8797:1;8794;8787:12;8751:2;8817:84;8893:7;8884:6;8873:9;8869:22;8817:84;;;8807:94;;8691:216;7765:1152;;;;;;;;;8924:241;;9028:2;9016:9;9007:7;9003:23;8999:32;8996:2;;;9044:1;9041;9034:12;8996:2;9079:1;9096:53;9141:7;9132:6;9121:9;9117:22;9096:53;;;9086:63;;9058:97;8990:175;;;;;9173:173;;9260:46;9302:3;9294:6;9260:46;;;9335:4;9330:3;9326:14;9312:28;;9253:93;;;;;9355:181;;9468:62;9526:3;9518:6;9468:62;;;9454:76;;9447:89;;;;;9545:229;;9682:86;9764:3;9756:6;9682:86;;;9668:100;;9661:113;;;;;9782:142;9873:45;9912:5;9873:45;;;9868:3;9861:58;9855:69;;;9931:103;10004:24;10022:5;10004:24;;;9999:3;9992:37;9986:48;;;10041:113;10124:24;10142:5;10124:24;;;10119:3;10112:37;10106:48;;;10192:690;;10337:54;10385:5;10337:54;;;10404:86;10483:6;10478:3;10404:86;;;10397:93;;10511:56;10561:5;10511:56;;;10587:7;10615:1;10600:260;10625:6;10622:1;10619:13;10600:260;;;10692:6;10686:13;10713:63;10772:3;10757:13;10713:63;;;10706:70;;10793:60;10846:6;10793:60;;;10783:70;;10657:203;10647:1;10644;10640:9;10635:14;;10600:260;;;10604:14;10873:3;10866:10;;10316:566;;;;;;;;10919:860;;11062:56;11112:5;11062:56;;;11131:82;11206:6;11201:3;11131:82;;;11124:89;;11236:3;11278:4;11270:6;11266:17;11261:3;11257:27;11305:58;11357:5;11305:58;;;11383:7;11411:1;11396:344;11421:6;11418:1;11415:13;11396:344;;;11483:9;11477:4;11473:20;11468:3;11461:33;11528:6;11522:13;11550:76;11621:4;11606:13;11550:76;;;11542:84;;11643:62;11698:6;11643:62;;;11633:72;;11728:4;11723:3;11719:14;11712:21;;11453:287;11443:1;11440;11436:9;11431:14;;11396:344;;;11400:14;11753:4;11746:11;;11770:3;11763:10;;11041:738;;;;;;;;;;11862:986;;12041:71;12106:5;12041:71;;;12125:103;12221:6;12216:3;12125:103;;;12118:110;;12251:3;12293:4;12285:6;12281:17;12276:3;12272:27;12320:73;12387:5;12320:73;;;12413:7;12441:1;12426:383;12451:6;12448:1;12445:13;12426:383;;;12513:9;12507:4;12503:20;12498:3;12491:33;12558:6;12552:13;12580:100;12675:4;12660:13;12580:100;;;12572:108;;12697:77;12767:6;12697:77;;;12687:87;;12797:4;12792:3;12788:14;12781:21;;12483:326;12473:1;12470;12466:9;12461:14;;12426:383;;;12430:14;12822:4;12815:11;;12839:3;12832:10;;12020:828;;;;;;;;;;12856:103;12929:24;12947:5;12929:24;;;12924:3;12917:37;12911:48;;;12966:113;13049:24;13067:5;13049:24;;;13044:3;13037:37;13031:48;;;13086:170;13191:59;13244:5;13191:59;;;13186:3;13179:72;13173:83;;;13263:146;13356:47;13397:5;13356:47;;;13351:3;13344:60;13338:71;;;13416:154;13513:51;13558:5;13513:51;;;13508:3;13501:64;13495:75;;;13577:360;;13707:39;13740:5;13707:39;;;13758:89;13840:6;13835:3;13758:89;;;13751:96;;13852:52;13897:6;13892:3;13885:4;13878:5;13874:16;13852:52;;;13925:6;13920:3;13916:16;13909:23;;13687:250;;;;;;13944:319;;14042:35;14071:5;14042:35;;;14089:61;14143:6;14138:3;14089:61;;;14082:68;;14155:52;14200:6;14195:3;14188:4;14181:5;14177:16;14155:52;;;14228:29;14250:6;14228:29;;;14223:3;14219:39;14212:46;;14022:241;;;;;;14270:339;;14378:35;14407:5;14378:35;;;14425:71;14489:6;14484:3;14425:71;;;14418:78;;14501:52;14546:6;14541:3;14534:4;14527:5;14523:16;14501:52;;;14574:29;14596:6;14574:29;;;14569:3;14565:39;14558:46;;14358:251;;;;;;14616:352;;14742:35;14771:5;14742:35;;;14789:89;14871:6;14866:3;14789:89;;;14782:96;;14883:52;14928:6;14923:3;14916:4;14909:5;14905:16;14883:52;;;14956:6;14951:3;14947:16;14940:23;;14722:246;;;;;;15000:884;;15137:5;15131:12;15171:1;15160:9;15156:17;15184:1;15179:268;;;;15458:1;15453:425;;;;15149:729;;15179:268;15257:4;15253:1;15242:9;15238:17;15234:28;15276:89;15358:6;15353:3;15276:89;;;15269:96;;15403:4;15399:9;15388;15384:25;15379:3;15372:38;15433:6;15428:3;15424:16;15417:23;;15186:261;15179:268;;15453:425;15522:1;15511:9;15507:17;15538:89;15620:6;15615:3;15538:89;;;15531:96;;15649:38;15681:5;15649:38;;;15703:1;15711:130;15725:6;15722:1;15719:13;15711:130;;;15790:7;15784:14;15780:1;15775:3;15771:11;15764:35;15831:1;15822:7;15818:15;15807:26;;15747:4;15744:1;15740:12;15735:17;;15711:130;;;15864:6;15859:3;15855:16;15848:23;;15460:418;;;15149:729;;15107:777;;;;;;15893:326;;16053:67;16117:2;16112:3;16053:67;;;16046:74;;16153:28;16149:1;16144:3;16140:11;16133:49;16210:2;16205:3;16201:12;16194:19;;16039:180;;;;16228:376;;16388:67;16452:2;16447:3;16388:67;;;16381:74;;16488:34;16484:1;16479:3;16475:11;16468:55;16557:9;16552:2;16547:3;16543:12;16536:31;16595:2;16590:3;16586:12;16579:19;;16374:230;;;;16613:326;;16773:67;16837:2;16832:3;16773:67;;;16766:74;;16873:28;16869:1;16864:3;16860:11;16853:49;16930:2;16925:3;16921:12;16914:19;;16759:180;;;;17012:1606;;17157:4;17152:3;17148:14;17238:4;17231:5;17227:16;17221:23;17290:3;17284:4;17280:14;17273:4;17268:3;17264:14;17257:38;17310:69;17374:4;17360:12;17310:69;;;17302:77;;17177:214;17465:4;17458:5;17454:16;17448:23;17477:63;17534:4;17529:3;17525:14;17511:12;17477:63;;;17401:145;17620:4;17613:5;17609:16;17603:23;17672:3;17666:4;17662:14;17655:4;17650:3;17646:14;17639:38;17692:69;17756:4;17742:12;17692:69;;;17684:77;;17556:217;17849:4;17842:5;17838:16;17832:23;17901:3;17895:4;17891:14;17884:4;17879:3;17875:14;17868:38;17921:111;18027:4;18013:12;17921:111;;;17913:119;;17783:261;18120:4;18113:5;18109:16;18103:23;18172:3;18166:4;18162:14;18155:4;18150:3;18146:14;18139:38;18192:111;18298:4;18284:12;18192:111;;;18184:119;;18054:261;18397:4;18390:5;18386:16;18380:23;18449:3;18443:4;18439:14;18432:4;18427:3;18423:14;18416:38;18469:111;18575:4;18561:12;18469:111;;;18461:119;;18325:267;18609:4;18602:11;;17130:1488;;;;;;18690:1592;;18821:4;18816:3;18812:14;18902:4;18895:5;18891:16;18885:23;18954:3;18948:4;18944:14;18937:4;18932:3;18928:14;18921:38;18974:69;19038:4;19024:12;18974:69;;;18966:77;;18841:214;19129:4;19122:5;19118:16;19112:23;19141:63;19198:4;19193:3;19189:14;19175:12;19141:63;;;19065:145;19284:4;19277:5;19273:16;19267:23;19336:3;19330:4;19326:14;19319:4;19314:3;19310:14;19303:38;19356:69;19420:4;19406:12;19356:69;;;19348:77;;19220:217;19513:4;19506:5;19502:16;19496:23;19565:3;19559:4;19555:14;19548:4;19543:3;19539:14;19532:38;19585:111;19691:4;19677:12;19585:111;;;19577:119;;19447:261;19784:4;19777:5;19773:16;19767:23;19836:3;19830:4;19826:14;19819:4;19814:3;19810:14;19803:38;19856:111;19962:4;19948:12;19856:111;;;19848:119;;19718:261;20061:4;20054:5;20050:16;20044:23;20113:3;20107:4;20103:14;20096:4;20091:3;20087:14;20080:38;20133:111;20239:4;20225:12;20133:111;;;20125:119;;19989:267;20273:4;20266:11;;18794:1488;;;;;;20289:258;;20431:91;20518:3;20509:6;20431:91;;;20424:98;;20539:3;20532:10;;20412:135;;;;;20554:266;;20700:95;20791:3;20782:6;20700:95;;;20693:102;;20812:3;20805:10;;20681:139;;;;;20827:260;;20970:92;21058:3;21049:6;20970:92;;;20963:99;;21079:3;21072:10;;20951:136;;;;;21094:213;;21212:2;21201:9;21197:18;21189:26;;21226:71;21294:1;21283:9;21279:17;21270:6;21226:71;;;21183:124;;;;;21314:471;;21506:2;21495:9;21491:18;21483:26;;21520:71;21588:1;21577:9;21573:17;21564:6;21520:71;;;21602:80;21678:2;21667:9;21663:18;21654:6;21602:80;;;21693:82;21771:2;21760:9;21756:18;21747:6;21693:82;;;21477:308;;;;;;;21792:352;;21952:2;21941:9;21937:18;21929:26;;21966:71;22034:1;22023:9;22019:17;22010:6;21966:71;;;22048:86;22130:2;22119:9;22115:18;22106:6;22048:86;;;21923:221;;;;;;22151:361;;22319:2;22308:9;22304:18;22296:26;;22369:9;22363:4;22359:20;22355:1;22344:9;22340:17;22333:47;22394:108;22497:4;22488:6;22394:108;;;22386:116;;22290:222;;;;;22519:429;;22721:2;22710:9;22706:18;22698:26;;22771:9;22765:4;22761:20;22757:1;22746:9;22742:17;22735:47;22796:142;22933:4;22924:6;22796:142;;;22788:150;;22692:256;;;;;22955:213;;23073:2;23062:9;23058:18;23050:26;;23087:71;23155:1;23144:9;23140:17;23131:6;23087:71;;;23044:124;;;;;23175:257;;23315:2;23304:9;23300:18;23292:26;;23329:93;23419:1;23408:9;23404:17;23395:6;23329:93;;;23286:146;;;;;23439:293;;23573:2;23562:9;23558:18;23550:26;;23623:9;23617:4;23613:20;23609:1;23598:9;23594:17;23587:47;23648:74;23717:4;23708:6;23648:74;;;23640:82;;23544:188;;;;;23739:595;;23945:2;23934:9;23930:18;23922:26;;23995:9;23989:4;23985:20;23981:1;23970:9;23966:17;23959:47;24020:74;24089:4;24080:6;24020:74;;;24012:82;;24105:72;24173:2;24162:9;24158:18;24149:6;24105:72;;;24225:9;24219:4;24215:20;24210:2;24199:9;24195:18;24188:48;24250:74;24319:4;24310:6;24250:74;;;24242:82;;23916:418;;;;;;;24341:407;;24532:2;24521:9;24517:18;24509:26;;24582:9;24576:4;24572:20;24568:1;24557:9;24553:17;24546:47;24607:131;24733:4;24607:131;;;24599:139;;24503:245;;;;24755:407;;24946:2;24935:9;24931:18;24923:26;;24996:9;24990:4;24986:20;24982:1;24971:9;24967:17;24960:47;25021:131;25147:4;25021:131;;;25013:139;;24917:245;;;;25169:407;;25360:2;25349:9;25345:18;25337:26;;25410:9;25404:4;25400:20;25396:1;25385:9;25381:17;25374:47;25435:131;25561:4;25435:131;;;25427:139;;25331:245;;;;25583:349;;25745:2;25734:9;25730:18;25722:26;;25795:9;25789:4;25785:20;25781:1;25770:9;25766:17;25759:47;25820:102;25917:4;25908:6;25820:102;;;25812:110;;25716:216;;;;;25939:256;;26001:2;25995:9;25985:19;;26039:4;26031:6;26027:17;26138:6;26126:10;26123:22;26102:18;26090:10;26087:34;26084:62;26081:2;;;26159:1;26156;26149:12;26081:2;26179:10;26175:2;26168:22;25979:216;;;;;26202:310;;26367:18;26359:6;26356:30;26353:2;;;26399:1;26396;26389:12;26353:2;26434:4;26426:6;26422:17;26414:25;;26497:4;26491;26487:15;26479:23;;26290:222;;;;26519:320;;26694:18;26686:6;26683:30;26680:2;;;26726:1;26723;26716:12;26680:2;26761:4;26753:6;26749:17;26741:25;;26824:4;26818;26814:15;26806:23;;26617:222;;;;26846:320;;27021:18;27013:6;27010:30;27007:2;;;27053:1;27050;27043:12;27007:2;27088:4;27080:6;27076:17;27068:25;;27151:4;27145;27141:15;27133:23;;26944:222;;;;27173:318;;27313:18;27305:6;27302:30;27299:2;;;27345:1;27342;27335:12;27299:2;27412:4;27408:9;27401:4;27393:6;27389:17;27385:33;27377:41;;27476:4;27470;27466:15;27458:23;;27236:255;;;;27498:322;;27642:18;27634:6;27631:30;27628:2;;;27674:1;27671;27664:12;27628:2;27741:4;27737:9;27730:4;27722:6;27718:17;27714:33;27706:41;;27805:4;27799;27795:15;27787:23;;27565:255;;;;27827:151;;27913:3;27905:11;;27951:4;27946:3;27942:14;27934:22;;27899:79;;;;27985:153;;28073:3;28065:11;;28111:4;28106:3;28102:14;28094:22;;28059:79;;;;28145:116;;28248:3;28240:11;;28234:27;;;;28268:158;;28336:3;28328:11;;28373:3;28370:1;28363:14;28405:4;28402:1;28392:18;28384:26;;28322:104;;;;28433:137;;28542:5;28536:12;28526:22;;28507:63;;;;28577:139;;28688:5;28682:12;28672:22;;28653:63;;;;28723:127;;28836:4;28826:14;;28814:36;;;;28857:118;;28947:5;28941:12;28931:22;;28912:63;;;;28982:122;;29076:5;29070:12;29060:22;;29041:63;;;;29111:108;;29209:4;29204:3;29200:14;29192:22;;29186:33;;;;29226:110;;29326:4;29321:3;29317:14;29309:22;;29303:33;;;;29343:125;;29458:4;29453:3;29449:14;29441:22;;29435:33;;;;29476:178;;29606:6;29601:3;29594:19;29643:4;29638:3;29634:14;29619:29;;29587:67;;;;;29663:174;;29789:6;29784:3;29777:19;29826:4;29821:3;29817:14;29802:29;;29770:67;;;;;29846:159;;29996:3;29981:18;;29974:31;;;;;30014:153;;30119:6;30114:3;30107:19;30156:4;30151:3;30147:14;30132:29;;30100:67;;;;;30176:163;;30291:6;30286:3;30279:19;30328:4;30323:3;30319:14;30304:29;;30272:67;;;;;30348:145;;30484:3;30469:18;;30462:31;;;;;30501:91;;30563:24;30581:5;30563:24;;;30552:35;;30546:46;;;;30599:85;;30672:5;30665:13;30658:21;30647:32;;30641:43;;;;30691:72;;30753:5;30742:16;;30736:27;;;;30770:121;;30843:42;30836:5;30832:54;30821:65;;30815:76;;;;30898:72;;30960:5;30949:16;;30943:27;;;;30977:129;;31064:37;31095:5;31064:37;;;31051:50;;31045:61;;;;31113:165;;31214:59;31267:5;31214:59;;;31201:72;;31195:83;;;;31285:130;;31386:24;31404:5;31386:24;;;31373:37;;31367:48;;;;31422:118;;31511:24;31529:5;31511:24;;;31498:37;;31492:48;;;;31547:122;;31640:24;31658:5;31640:24;;;31627:37;;31621:48;;;;31676:121;;31755:37;31786:5;31755:37;;;31742:50;;31736:61;;;;31804:108;;31883:24;31901:5;31883:24;;;31870:37;;31864:48;;;;31920:145;32001:6;31996:3;31991;31978:30;32057:1;32048:6;32043:3;32039:16;32032:27;31971:94;;;;32074:268;32139:1;32146:101;32160:6;32157:1;32154:13;32146:101;;;32236:1;32231:3;32227:11;32221:18;32217:1;32212:3;32208:11;32201:39;32182:2;32179:1;32175:10;32170:15;;32146:101;;;32262:6;32259:1;32256:13;32253:2;;;32327:1;32318:6;32313:3;32309:16;32302:27;32253:2;32123:219;;;;;32350:97;;32438:2;32434:7;32429:2;32422:5;32418:14;32414:28;32404:38;;32398:49;;;;32455:117;32524:24;32542:5;32524:24;;;32517:5;32514:35;32504:2;;32563:1;32560;32553:12;32504:2;32498:74;;32579:111;32645:21;32660:5;32645:21;;;32638:5;32635:32;32625:2;;32681:1;32678;32671:12;32625:2;32619:71;;32697:117;32766:24;32784:5;32766:24;;;32759:5;32756:35;32746:2;;32805:1;32802;32795:12;32746:2;32740:74;;32821:117;32890:24;32908:5;32890:24;;;32883:5;32880:35;32870:2;;32929:1;32926;32919:12;32870:2;32864:74;",
  "source": "// SPDX-License-Identifier: GPL-3.0\npragma solidity ^0.5.16 <0.9.0;\npragma experimental ABIEncoderV2;\n\nimport \"./ConsensusToken.sol\";\n\ncontract ConsensusGraph {\n\n  bytes32 public myId;\n  string public name;\n  address public myCreator;\n\n  constructor(bytes32 _id, string memory _name, address _creator) public {\n    myId = _id;\n    name = _name;\n    myCreator = _creator;\n  }\n\n  // internal token to be used for PoS to edit graphs and views\n  ConsensusToken public tokenContract = new ConsensusToken(\"Main Graph\", 1000, address(this));\n\n  function airdropMe() public {\n      tokenContract.approve(address(this), 9999999);\n      tokenContract.transferFrom(address(this), msg.sender, 100);\n  }\n\n\n\n\n\n  struct Node {\n    // String UUID sent from client, and used as client ID.\n    // server side ID is keccak hash of this.\n    string id;\n\n    // Original owner. Only owner can update node itself.\n    // TODO: node ownership should be handled by rules around invested stake insted of this? -KW-2021-03\n    address owner;\n\n    // JSON representation sent from client. Opaque here.\n    string json;\n  }\n\n  // Mapping from keccak256(ids) to Node\n  mapping(bytes32 => Node) public Nodes;\n\n  // List of all IDs, so client can query all nodes.\n  bytes32[] public NodeIds;\n\n  function getNodeIds() public view returns(bytes32[] memory) {\n    return NodeIds;\n  }\n\n  // Since getNode takes a \"client ID\", NewNode should also speak client IDs\n  event NewNode (\n    string indexed nodeId\n  );\n\n\n\n\n\n  struct Edge {\n    // Mirrors node struct\n    string id;\n    address owner;\n    string json;\n  }\n\n  // Mirrors nodes\n  mapping(bytes32 => Edge) public Edges;\n\n  bytes32[] public EdgeIds;\n\n  function getEdgeIds() public view returns(bytes32[] memory) {\n    return EdgeIds;\n  }\n\n  event NewEdge (\n    string indexed edgeId\n  );\n\n\n\n\n\n  /*\n    Attachment is a declaration of equivalence between nodes across different users views/graphs\n    an attachment is one user saying \"I think this list of nodes can be merged\"\n  */\n  struct Attachment {\n    string id;\n    address owner;\n    string KeyNodeId; // The node within the attachment that will represent the attachment\n    string[] NodeIds; // the list of nodes that make up this attachment\n  }\n\n  /*\n    Allow reverse-lookup, given a node, how many attachments does it belong to?\n    Writeable by anyone, this defines the canonical \"show all\" view according to display rules\n    executed in the client, and attachments can be removed from a nodes index to remove them from\n    the consensus\n  */\n  struct AttachmentIndex {\n    string NodeId;\n    string[] AttachmentIds;\n  }\n\n\n\n  /*\n    Represents a single view - can be any subset of nodes, edges, and attachments within the contract\n    The client side will be responsible for loading multiple graphs, determining the minimum set intersection (i.e. de-duping nodes)\n    And then requesting the exact list of nodes that it needs to the display the views\n\n    Graphs which are owned by the contract can be edited by any user, they are meant to be updated by all clients according to stake/point-game rules\n  */\n  struct Graph {\n    string id;\n    address owner; // can be address of a user, or of a contract. Contract graphs are maintained by all users via a points-game running from clients\n    string label; // allow users to browse graph views, give them a nice label\n    string[] NodeIds;\n    string[] EdgeIds;\n    string[] AttachmentIds;\n  }\n\n  mapping(bytes32 => Graph) public Graphs;\n\n  bytes32[] public GraphIds;\n\n\n  function getGraph(string memory stringId) public view returns(Graph memory) {\n    bytes32 id = keccak256(abi.encodePacked(stringId));\n    return Graphs[id];\n  }\n\n  /*\n    allow user to load all graphs for browsing - this does not load all the nodes, only graph metadata\n    note we can only return fixed size arrays, so randomly setting 50 for now\n    TODO: requires figure a different solution if we want to scale past a fixed number of saved views\n  */\n  function getGraphs() public view returns(Graph[50] memory) {\n    Graph[50] memory result;\n    uint idx = 0;\n    for (uint i=0; i < GraphIds.length; i++) {\n      result[idx] = Graphs[GraphIds[i]];\n      idx++;\n    }\n    return result;\n  }\n\n\n  /*\n    Allows a client user to save their preferred views to load\n  */\n  struct Entrypoint {\n    address owner; // can be address of a user, or of a contract. contract entrypoints are maintained only be the contract\n    string[] GraphId; // list of graph ids that the user has saved as their default combined view\n  }\n\n  // Allow a user to retrieve their saved initial views\n  mapping(bytes32 => Entrypoint) public Entrypoints;\n\n\n\n\n  /* ////////////////////////////////////////////////////////////////////////////\n    Writing methods below\n  *//////////////////////////////////////////////////////////////////////////////\n\n  function upsertArrays(string[] storage target, string[] memory update) internal {\n    for (uint i=0; i < update.length; i++) {\n      bool newItem = true;\n      for (uint j=0; j < target.length; j++) {\n\n        // using keccak256 to compare strings is apparently gas efficient:\n        // https://ethereum.stackexchange.com/questions/4559/operator-not-compatible-with-type-string-storage-ref-and-literal-string\n        if( keccak256(abi.encodePacked(update[i])) == keccak256(abi.encodePacked(target[j])) ) {\n          newItem = false;\n        }\n      }\n\n      if ( newItem == true) {\n        target.push(update[i]);\n      }\n    }\n  }\n\n  function upsertGraph(\n    string memory stringId,\n    string memory label,\n    string[] memory nodes,\n    string[] memory edges,\n    string[] memory attachments\n  ) public {\n    bytes32 id = keccak256(abi.encodePacked(stringId));\n\n    // graph doesnt exist, so make it\n    if (Graphs[id].owner == address(0)) {\n      GraphIds.push(id);\n      Graphs[id] = Graph(stringId, tx.origin, label, nodes, edges, attachments);\n    }\n\n    // graph is owned by the contract (anyone allowed to update), or by the sender, so allow the update\n    else if ( Graphs[id].owner == address(this) || Graphs[id].owner == tx.origin ) {\n      upsertArrays(Graphs[id].NodeIds, nodes);\n      upsertArrays(Graphs[id].EdgeIds, edges);\n      upsertArrays(Graphs[id].AttachmentIds, attachments);\n    }\n\n    // graph is owned by someone else, revert\n    else {\n      revert(\"Cannot update another owners graph view\");\n    }\n  }\n\n\n  function upsertNode(string memory stringId, string memory json) public {\n    bytes32 id = keccak256(abi.encodePacked(stringId));\n    if (Nodes[id].owner != address(0)) {\n      if (Nodes[id].owner != tx.origin) {\n        revert(\"Only owner can update node\");\n      }\n    } else {\n      NodeIds.push(id);\n    }\n    Nodes[id] = Node(stringId, tx.origin, json);\n    emit NewNode(stringId);\n  }\n\n  function upsertEdge(string memory stringId, string memory json) public {\n      bytes32 id = keccak256(abi.encodePacked(stringId));\n      if (Edges[id].owner != address(0)) {\n        if (Edges[id].owner != tx.origin) {\n          revert(\"Only owner can update edge\");\n        }\n      } else {\n        EdgeIds.push(id);\n      }\n      Edges[id] = Edge(stringId, tx.origin, json);\n      emit NewEdge(stringId);\n  }\n\n  function upsertCollections(Node[] memory nodes, Edge[] memory edges) public {\n    for (uint i=0; i < nodes.length; i++) {\n      upsertNode(nodes[i].id, nodes[i].json);\n    }\n\n    for (uint j=0; j < edges.length; j++) {\n      upsertEdge(edges[j].id, edges[j].json);\n    }\n  }\n\n}\n",
  "sourcePath": "/Users/kriswinquist/timecatcode/Consensus/public_square/contracts/ConsensusGraph.sol",
  "ast": {
    "absolutePath": "/Users/kriswinquist/timecatcode/Consensus/public_square/contracts/ConsensusGraph.sol",
    "exportedSymbols": {
      "ConsensusGraph": [
        597
      ]
    },
    "id": 598,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".16",
          "<",
          "0.9",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "36:31:0"
      },
      {
        "id": 2,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "68:33:0"
      },
      {
        "absolutePath": "/Users/kriswinquist/timecatcode/Consensus/public_square/contracts/ConsensusToken.sol",
        "file": "./ConsensusToken.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 598,
        "sourceUnit": 995,
        "src": "103:30:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [
          949
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 597,
        "linearizedBaseContracts": [
          597
        ],
        "name": "ConsensusGraph",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5,
            "name": "myId",
            "nodeType": "VariableDeclaration",
            "scope": 597,
            "src": "164:19:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 4,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "164:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 7,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 597,
            "src": "187:18:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 6,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "187:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 9,
            "name": "myCreator",
            "nodeType": "VariableDeclaration",
            "scope": 597,
            "src": "209:24:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 8,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "209:7:0",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30,
              "nodeType": "Block",
              "src": "309:65:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 20,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 18,
                      "name": "myId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "315:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 19,
                      "name": "_id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11,
                      "src": "322:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "315:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 21,
                  "nodeType": "ExpressionStatement",
                  "src": "315:10:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 24,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 22,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "331:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 23,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13,
                      "src": "338:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "331:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 25,
                  "nodeType": "ExpressionStatement",
                  "src": "331:12:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 28,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 26,
                      "name": "myCreator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9,
                      "src": "349:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 27,
                      "name": "_creator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15,
                      "src": "361:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "349:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 29,
                  "nodeType": "ExpressionStatement",
                  "src": "349:20:0"
                }
              ]
            },
            "documentation": null,
            "id": 31,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "250:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "250:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "263:19:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 12,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "263:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15,
                  "name": "_creator",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "284:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "249:52:0"
            },
            "returnParameters": {
              "id": 17,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "309:0:0"
            },
            "scope": 597,
            "src": "238:136:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 41,
            "name": "tokenContract",
            "nodeType": "VariableDeclaration",
            "scope": 597,
            "src": "442:91:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ConsensusToken_$949",
              "typeString": "contract ConsensusToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 32,
              "name": "ConsensusToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 949,
              "src": "442:14:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ConsensusToken_$949",
                "typeString": "contract ConsensusToken"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "4d61696e204772617068",
                  "id": 35,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "499:12:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_17afa9f3bd55ee9cf3f7ac666d39a1eb476efed3ecd45717245933f36af8785f",
                    "typeString": "literal_string \"Main Graph\""
                  },
                  "value": "Main Graph"
                },
                {
                  "argumentTypes": null,
                  "hexValue": "31303030",
                  "id": 36,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "513:4:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_1000_by_1",
                    "typeString": "int_const 1000"
                  },
                  "value": "1000"
                },
                {
                  "argumentTypes": null,
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "id": 38,
                      "name": "this",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1108,
                      "src": "527:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ConsensusGraph_$597",
                        "typeString": "contract ConsensusGraph"
                      }
                    }
                  ],
                  "expression": {
                    "argumentTypes": [
                      {
                        "typeIdentifier": "t_contract$_ConsensusGraph_$597",
                        "typeString": "contract ConsensusGraph"
                      }
                    ],
                    "id": 37,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "519:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": "address"
                  },
                  "id": 39,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": false,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "519:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_17afa9f3bd55ee9cf3f7ac666d39a1eb476efed3ecd45717245933f36af8785f",
                    "typeString": "literal_string \"Main Graph\""
                  },
                  {
                    "typeIdentifier": "t_rational_1000_by_1",
                    "typeString": "int_const 1000"
                  },
                  {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                ],
                "id": 34,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "lValueRequested": false,
                "nodeType": "NewExpression",
                "src": "480:18:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_creation_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_address_$returns$_t_contract$_ConsensusToken_$949_$",
                  "typeString": "function (string memory,uint256,address) returns (contract ConsensusToken)"
                },
                "typeName": {
                  "contractScope": null,
                  "id": 33,
                  "name": "ConsensusToken",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 949,
                  "src": "484:14:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ConsensusToken_$949",
                    "typeString": "contract ConsensusToken"
                  }
                }
              },
              "id": 40,
              "isConstant": false,
              "isLValue": false,
              "isPure": false,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "480:53:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ConsensusToken_$949",
                "typeString": "contract ConsensusToken"
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 64,
              "nodeType": "Block",
              "src": "566:124:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 48,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1108,
                            "src": "604:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ConsensusGraph_$597",
                              "typeString": "contract ConsensusGraph"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ConsensusGraph_$597",
                              "typeString": "contract ConsensusGraph"
                            }
                          ],
                          "id": 47,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "596:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 49,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "596:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "39393939393939",
                        "id": 50,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "611:7:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_9999999_by_1",
                          "typeString": "int_const 9999999"
                        },
                        "value": "9999999"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_9999999_by_1",
                          "typeString": "int_const 9999999"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 44,
                        "name": "tokenContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "574:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ConsensusToken_$949",
                          "typeString": "contract ConsensusToken"
                        }
                      },
                      "id": 46,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 854,
                      "src": "574:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 51,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "574:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 52,
                  "nodeType": "ExpressionStatement",
                  "src": "574:45:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 57,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1108,
                            "src": "662:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ConsensusGraph_$597",
                              "typeString": "contract ConsensusGraph"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ConsensusGraph_$597",
                              "typeString": "contract ConsensusGraph"
                            }
                          ],
                          "id": 56,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "654:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 58,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "654:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 59,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1088,
                          "src": "669:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 60,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "669:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "313030",
                        "id": 61,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "681:3:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 53,
                        "name": "tokenContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "627:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ConsensusToken_$949",
                          "typeString": "contract ConsensusToken"
                        }
                      },
                      "id": 55,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 948,
                      "src": "627:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 62,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "627:58:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 63,
                  "nodeType": "ExpressionStatement",
                  "src": "627:58:0"
                }
              ]
            },
            "documentation": null,
            "id": 65,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "airdropMe",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 42,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "556:2:0"
            },
            "returnParameters": {
              "id": 43,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "566:0:0"
            },
            "scope": 597,
            "src": "538:152:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "canonicalName": "ConsensusGraph.Node",
            "id": 72,
            "members": [
              {
                "constant": false,
                "id": 67,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 72,
                "src": "822:9:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 66,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "822:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 69,
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 72,
                "src": "1001:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 68,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1001:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 71,
                "name": "json",
                "nodeType": "VariableDeclaration",
                "scope": 72,
                "src": "1079:11:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 70,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "1079:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Node",
            "nodeType": "StructDefinition",
            "scope": 597,
            "src": "698:397:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 76,
            "name": "Nodes",
            "nodeType": "VariableDeclaration",
            "scope": 597,
            "src": "1140:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$72_storage_$",
              "typeString": "mapping(bytes32 => struct ConsensusGraph.Node)"
            },
            "typeName": {
              "id": 75,
              "keyType": {
                "id": 73,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1148:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "1140:24:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$72_storage_$",
                "typeString": "mapping(bytes32 => struct ConsensusGraph.Node)"
              },
              "valueType": {
                "contractScope": null,
                "id": 74,
                "name": "Node",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 72,
                "src": "1159:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Node_$72_storage_ptr",
                  "typeString": "struct ConsensusGraph.Node"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 79,
            "name": "NodeIds",
            "nodeType": "VariableDeclaration",
            "scope": 597,
            "src": "1235:24:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
              "typeString": "bytes32[]"
            },
            "typeName": {
              "baseType": {
                "id": 77,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1235:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "id": 78,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1235:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                "typeString": "bytes32[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 87,
              "nodeType": "Block",
              "src": "1324:25:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 85,
                    "name": "NodeIds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 79,
                    "src": "1337:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "functionReturnParameters": 84,
                  "id": 86,
                  "nodeType": "Return",
                  "src": "1330:14:0"
                }
              ]
            },
            "documentation": null,
            "id": 88,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getNodeIds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 80,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1283:2:0"
            },
            "returnParameters": {
              "id": 84,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 83,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "1306:16:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 81,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "1306:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 82,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1306:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1305:18:0"
            },
            "scope": 597,
            "src": "1264:85:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 92,
            "name": "NewNode",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 90,
                  "indexed": true,
                  "name": "nodeId",
                  "nodeType": "VariableDeclaration",
                  "scope": 92,
                  "src": "1450:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1450:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1444:31:0"
            },
            "src": "1430:46:0"
          },
          {
            "canonicalName": "ConsensusGraph.Edge",
            "id": 99,
            "members": [
              {
                "constant": false,
                "id": 94,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 99,
                "src": "1529:9:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 93,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "1529:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 96,
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 99,
                "src": "1544:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 95,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1544:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 98,
                "name": "json",
                "nodeType": "VariableDeclaration",
                "scope": 99,
                "src": "1563:11:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 97,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "1563:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Edge",
            "nodeType": "StructDefinition",
            "scope": 597,
            "src": "1484:95:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 103,
            "name": "Edges",
            "nodeType": "VariableDeclaration",
            "scope": 597,
            "src": "1602:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Edge_$99_storage_$",
              "typeString": "mapping(bytes32 => struct ConsensusGraph.Edge)"
            },
            "typeName": {
              "id": 102,
              "keyType": {
                "id": 100,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1610:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "1602:24:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Edge_$99_storage_$",
                "typeString": "mapping(bytes32 => struct ConsensusGraph.Edge)"
              },
              "valueType": {
                "contractScope": null,
                "id": 101,
                "name": "Edge",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 99,
                "src": "1621:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Edge_$99_storage_ptr",
                  "typeString": "struct ConsensusGraph.Edge"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 106,
            "name": "EdgeIds",
            "nodeType": "VariableDeclaration",
            "scope": 597,
            "src": "1644:24:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
              "typeString": "bytes32[]"
            },
            "typeName": {
              "baseType": {
                "id": 104,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1644:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "id": 105,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1644:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                "typeString": "bytes32[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 114,
              "nodeType": "Block",
              "src": "1733:25:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 112,
                    "name": "EdgeIds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 106,
                    "src": "1746:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "functionReturnParameters": 111,
                  "id": 113,
                  "nodeType": "Return",
                  "src": "1739:14:0"
                }
              ]
            },
            "documentation": null,
            "id": 115,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getEdgeIds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1692:2:0"
            },
            "returnParameters": {
              "id": 111,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 110,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 115,
                  "src": "1715:16:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 108,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "1715:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 109,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1715:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1714:18:0"
            },
            "scope": 597,
            "src": "1673:85:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 119,
            "name": "NewEdge",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 118,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 117,
                  "indexed": true,
                  "name": "edgeId",
                  "nodeType": "VariableDeclaration",
                  "scope": 119,
                  "src": "1782:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 116,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1782:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1776:31:0"
            },
            "src": "1762:46:0"
          },
          {
            "canonicalName": "ConsensusGraph.Attachment",
            "id": 129,
            "members": [
              {
                "constant": false,
                "id": 121,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 129,
                "src": "2027:9:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 120,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2027:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 123,
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 129,
                "src": "2042:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 122,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2042:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 125,
                "name": "KeyNodeId",
                "nodeType": "VariableDeclaration",
                "scope": 129,
                "src": "2061:16:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 124,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2061:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 128,
                "name": "NodeIds",
                "nodeType": "VariableDeclaration",
                "scope": 129,
                "src": "2152:16:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                  "typeString": "string[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 126,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2152:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "id": 127,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "2152:8:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                    "typeString": "string[]"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Attachment",
            "nodeType": "StructDefinition",
            "scope": 597,
            "src": "2003:220:0",
            "visibility": "public"
          },
          {
            "canonicalName": "ConsensusGraph.AttachmentIndex",
            "id": 135,
            "members": [
              {
                "constant": false,
                "id": 131,
                "name": "NodeId",
                "nodeType": "VariableDeclaration",
                "scope": 135,
                "src": "2557:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 130,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2557:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 134,
                "name": "AttachmentIds",
                "nodeType": "VariableDeclaration",
                "scope": 135,
                "src": "2576:22:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                  "typeString": "string[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 132,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2576:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "id": 133,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "2576:8:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                    "typeString": "string[]"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "AttachmentIndex",
            "nodeType": "StructDefinition",
            "scope": 597,
            "src": "2528:75:0",
            "visibility": "public"
          },
          {
            "canonicalName": "ConsensusGraph.Graph",
            "id": 151,
            "members": [
              {
                "constant": false,
                "id": 137,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 151,
                "src": "3111:9:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 136,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "3111:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 139,
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 151,
                "src": "3126:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 138,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "3126:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 141,
                "name": "label",
                "nodeType": "VariableDeclaration",
                "scope": 151,
                "src": "3275:12:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 140,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "3275:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 144,
                "name": "NodeIds",
                "nodeType": "VariableDeclaration",
                "scope": 151,
                "src": "3354:16:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                  "typeString": "string[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 142,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3354:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "id": 143,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "3354:8:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                    "typeString": "string[]"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 147,
                "name": "EdgeIds",
                "nodeType": "VariableDeclaration",
                "scope": 151,
                "src": "3376:16:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                  "typeString": "string[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 145,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3376:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "id": 146,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "3376:8:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                    "typeString": "string[]"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 150,
                "name": "AttachmentIds",
                "nodeType": "VariableDeclaration",
                "scope": 151,
                "src": "3398:22:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                  "typeString": "string[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 148,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3398:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "id": 149,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "3398:8:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                    "typeString": "string[]"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Graph",
            "nodeType": "StructDefinition",
            "scope": 597,
            "src": "3092:333:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 155,
            "name": "Graphs",
            "nodeType": "VariableDeclaration",
            "scope": 597,
            "src": "3429:39:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Graph_$151_storage_$",
              "typeString": "mapping(bytes32 => struct ConsensusGraph.Graph)"
            },
            "typeName": {
              "id": 154,
              "keyType": {
                "id": 152,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "3437:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "3429:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Graph_$151_storage_$",
                "typeString": "mapping(bytes32 => struct ConsensusGraph.Graph)"
              },
              "valueType": {
                "contractScope": null,
                "id": 153,
                "name": "Graph",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 151,
                "src": "3448:5:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Graph_$151_storage_ptr",
                  "typeString": "struct ConsensusGraph.Graph"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 158,
            "name": "GraphIds",
            "nodeType": "VariableDeclaration",
            "scope": 597,
            "src": "3473:25:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
              "typeString": "bytes32[]"
            },
            "typeName": {
              "baseType": {
                "id": 156,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "3473:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "id": 157,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "3473:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                "typeString": "bytes32[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 178,
              "nodeType": "Block",
              "src": "3580:84:0",
              "statements": [
                {
                  "assignments": [
                    166
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 166,
                      "name": "id",
                      "nodeType": "VariableDeclaration",
                      "scope": 178,
                      "src": "3586:10:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 165,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3586:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 173,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 170,
                            "name": "stringId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 160,
                            "src": "3626:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 168,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1075,
                            "src": "3609:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 169,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3609:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 171,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3609:26:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 167,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1082,
                      "src": "3599:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 172,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3599:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3586:50:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 174,
                      "name": "Graphs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 155,
                      "src": "3649:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Graph_$151_storage_$",
                        "typeString": "mapping(bytes32 => struct ConsensusGraph.Graph storage ref)"
                      }
                    },
                    "id": 176,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 175,
                      "name": "id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 166,
                      "src": "3656:2:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3649:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Graph_$151_storage",
                      "typeString": "struct ConsensusGraph.Graph storage ref"
                    }
                  },
                  "functionReturnParameters": 164,
                  "id": 177,
                  "nodeType": "Return",
                  "src": "3642:17:0"
                }
              ]
            },
            "documentation": null,
            "id": 179,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getGraph",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 160,
                  "name": "stringId",
                  "nodeType": "VariableDeclaration",
                  "scope": 179,
                  "src": "3522:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 159,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3522:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3521:24:0"
            },
            "returnParameters": {
              "id": 164,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 163,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 179,
                  "src": "3566:12:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Graph_$151_memory_ptr",
                    "typeString": "struct ConsensusGraph.Graph"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 162,
                    "name": "Graph",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 151,
                    "src": "3566:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Graph_$151_storage_ptr",
                      "typeString": "struct ConsensusGraph.Graph"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3565:14:0"
            },
            "scope": 597,
            "src": "3504:160:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 224,
              "nodeType": "Block",
              "src": "4020:178:0",
              "statements": [
                {
                  "assignments": [
                    190
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 190,
                      "name": "result",
                      "nodeType": "VariableDeclaration",
                      "scope": 224,
                      "src": "4026:23:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_Graph_$151_memory_$50_memory_ptr",
                        "typeString": "struct ConsensusGraph.Graph[50]"
                      },
                      "typeName": {
                        "baseType": {
                          "contractScope": null,
                          "id": 188,
                          "name": "Graph",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 151,
                          "src": "4026:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Graph_$151_storage_ptr",
                            "typeString": "struct ConsensusGraph.Graph"
                          }
                        },
                        "id": 189,
                        "length": {
                          "argumentTypes": null,
                          "hexValue": "3530",
                          "id": 187,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4032:2:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_50_by_1",
                            "typeString": "int_const 50"
                          },
                          "value": "50"
                        },
                        "nodeType": "ArrayTypeName",
                        "src": "4026:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Graph_$151_storage_$50_storage_ptr",
                          "typeString": "struct ConsensusGraph.Graph[50]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 191,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4026:23:0"
                },
                {
                  "assignments": [
                    193
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 193,
                      "name": "idx",
                      "nodeType": "VariableDeclaration",
                      "scope": 224,
                      "src": "4055:8:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 192,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4055:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 195,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4066:1:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4055:12:0"
                },
                {
                  "body": {
                    "id": 220,
                    "nodeType": "Block",
                    "src": "4114:61:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 215,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 207,
                              "name": "result",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 190,
                              "src": "4122:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Graph_$151_memory_$50_memory_ptr",
                                "typeString": "struct ConsensusGraph.Graph memory[50] memory"
                              }
                            },
                            "id": 209,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 208,
                              "name": "idx",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 193,
                              "src": "4129:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4122:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Graph_$151_memory",
                              "typeString": "struct ConsensusGraph.Graph memory"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 210,
                              "name": "Graphs",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 155,
                              "src": "4136:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Graph_$151_storage_$",
                                "typeString": "mapping(bytes32 => struct ConsensusGraph.Graph storage ref)"
                              }
                            },
                            "id": 214,
                            "indexExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 211,
                                "name": "GraphIds",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 158,
                                "src": "4143:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                  "typeString": "bytes32[] storage ref"
                                }
                              },
                              "id": 213,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 212,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 197,
                                "src": "4152:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "4143:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4136:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Graph_$151_storage",
                              "typeString": "struct ConsensusGraph.Graph storage ref"
                            }
                          },
                          "src": "4122:33:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Graph_$151_memory",
                            "typeString": "struct ConsensusGraph.Graph memory"
                          }
                        },
                        "id": 216,
                        "nodeType": "ExpressionStatement",
                        "src": "4122:33:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 218,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "4163:5:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 217,
                            "name": "idx",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 193,
                            "src": "4163:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 219,
                        "nodeType": "ExpressionStatement",
                        "src": "4163:5:0"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 203,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 200,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 197,
                      "src": "4088:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 201,
                        "name": "GraphIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 158,
                        "src": "4092:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 202,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4092:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4088:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 221,
                  "initializationExpression": {
                    "assignments": [
                      197
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 197,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 221,
                        "src": "4078:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 196,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4078:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 199,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 198,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4085:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4078:8:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 205,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4109:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 204,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 197,
                        "src": "4109:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 206,
                    "nodeType": "ExpressionStatement",
                    "src": "4109:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "4073:102:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 222,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 190,
                    "src": "4187:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Graph_$151_memory_$50_memory_ptr",
                      "typeString": "struct ConsensusGraph.Graph memory[50] memory"
                    }
                  },
                  "functionReturnParameters": 185,
                  "id": 223,
                  "nodeType": "Return",
                  "src": "4180:13:0"
                }
              ]
            },
            "documentation": null,
            "id": 225,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getGraphs",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 180,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3979:2:0"
            },
            "returnParameters": {
              "id": 185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 184,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 225,
                  "src": "4002:16:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Graph_$151_memory_$50_memory_ptr",
                    "typeString": "struct ConsensusGraph.Graph[50]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 181,
                      "name": "Graph",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 151,
                      "src": "4002:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Graph_$151_storage_ptr",
                        "typeString": "struct ConsensusGraph.Graph"
                      }
                    },
                    "id": 183,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "3530",
                      "id": 182,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4008:2:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_50_by_1",
                        "typeString": "int_const 50"
                      },
                      "value": "50"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "4002:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Graph_$151_storage_$50_storage_ptr",
                      "typeString": "struct ConsensusGraph.Graph[50]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4001:18:0"
            },
            "scope": 597,
            "src": "3961:237:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "canonicalName": "ConsensusGraph.Entrypoint",
            "id": 231,
            "members": [
              {
                "constant": false,
                "id": 227,
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 231,
                "src": "4300:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 226,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "4300:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 230,
                "name": "GraphId",
                "nodeType": "VariableDeclaration",
                "scope": 231,
                "src": "4423:16:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                  "typeString": "string[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 228,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4423:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "id": 229,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "4423:8:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                    "typeString": "string[]"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Entrypoint",
            "nodeType": "StructDefinition",
            "scope": 597,
            "src": "4276:244:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 235,
            "name": "Entrypoints",
            "nodeType": "VariableDeclaration",
            "scope": 597,
            "src": "4580:49:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entrypoint_$231_storage_$",
              "typeString": "mapping(bytes32 => struct ConsensusGraph.Entrypoint)"
            },
            "typeName": {
              "id": 234,
              "keyType": {
                "id": 232,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "4588:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "4580:30:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entrypoint_$231_storage_$",
                "typeString": "mapping(bytes32 => struct ConsensusGraph.Entrypoint)"
              },
              "valueType": {
                "contractScope": null,
                "id": 233,
                "name": "Entrypoint",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 231,
                "src": "4599:10:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Entrypoint_$231_storage_ptr",
                  "typeString": "struct ConsensusGraph.Entrypoint"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 310,
              "nodeType": "Block",
              "src": "4908:552:0",
              "statements": [
                {
                  "body": {
                    "id": 308,
                    "nodeType": "Block",
                    "src": "4953:503:0",
                    "statements": [
                      {
                        "assignments": [
                          256
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 256,
                            "name": "newItem",
                            "nodeType": "VariableDeclaration",
                            "scope": 308,
                            "src": "4961:12:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "typeName": {
                              "id": 255,
                              "name": "bool",
                              "nodeType": "ElementaryTypeName",
                              "src": "4961:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 258,
                        "initialValue": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 257,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4976:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "4961:19:0"
                      },
                      {
                        "body": {
                          "id": 293,
                          "nodeType": "Block",
                          "src": "5027:352:0",
                          "statements": [
                            {
                              "condition": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                "id": 286,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 273,
                                            "name": "update",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 241,
                                            "src": "5277:6:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                              "typeString": "string memory[] memory"
                                            }
                                          },
                                          "id": 275,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 274,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 245,
                                            "src": "5284:1:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "IndexAccess",
                                          "src": "5277:9:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory",
                                            "typeString": "string memory"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_string_memory",
                                            "typeString": "string memory"
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 271,
                                          "name": "abi",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 1075,
                                          "src": "5260:3:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_abi",
                                            "typeString": "abi"
                                          }
                                        },
                                        "id": 272,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "memberName": "encodePacked",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "5260:16:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                          "typeString": "function () pure returns (bytes memory)"
                                        }
                                      },
                                      "id": 276,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "5260:27:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                      }
                                    ],
                                    "id": 270,
                                    "name": "keccak256",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1082,
                                    "src": "5250:9:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                      "typeString": "function (bytes memory) pure returns (bytes32)"
                                    }
                                  },
                                  "id": 277,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5250:38:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "==",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 281,
                                            "name": "target",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 238,
                                            "src": "5319:6:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                              "typeString": "string storage ref[] storage pointer"
                                            }
                                          },
                                          "id": 283,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 282,
                                            "name": "j",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 260,
                                            "src": "5326:1:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "IndexAccess",
                                          "src": "5319:9:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 279,
                                          "name": "abi",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 1075,
                                          "src": "5302:3:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_abi",
                                            "typeString": "abi"
                                          }
                                        },
                                        "id": 280,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "memberName": "encodePacked",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "5302:16:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                          "typeString": "function () pure returns (bytes memory)"
                                        }
                                      },
                                      "id": 284,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "5302:27:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                      }
                                    ],
                                    "id": 278,
                                    "name": "keccak256",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1082,
                                    "src": "5292:9:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                      "typeString": "function (bytes memory) pure returns (bytes32)"
                                    }
                                  },
                                  "id": 285,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5292:38:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "src": "5250:80:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseBody": null,
                              "id": 292,
                              "nodeType": "IfStatement",
                              "src": "5246:125:0",
                              "trueBody": {
                                "id": 291,
                                "nodeType": "Block",
                                "src": "5333:38:0",
                                "statements": [
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 289,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                        "argumentTypes": null,
                                        "id": 287,
                                        "name": "newItem",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 256,
                                        "src": "5345:7:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      },
                                      "nodeType": "Assignment",
                                      "operator": "=",
                                      "rightHandSide": {
                                        "argumentTypes": null,
                                        "hexValue": "66616c7365",
                                        "id": 288,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "5355:5:0",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        },
                                        "value": "false"
                                      },
                                      "src": "5345:15:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    "id": 290,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5345:15:0"
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 266,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 263,
                            "name": "j",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 260,
                            "src": "5003:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 264,
                              "name": "target",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 238,
                              "src": "5007:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                "typeString": "string storage ref[] storage pointer"
                              }
                            },
                            "id": 265,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "5007:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5003:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 294,
                        "initializationExpression": {
                          "assignments": [
                            260
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 260,
                              "name": "j",
                              "nodeType": "VariableDeclaration",
                              "scope": 294,
                              "src": "4993:6:0",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "typeName": {
                                "id": 259,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "4993:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "value": null,
                              "visibility": "internal"
                            }
                          ],
                          "id": 262,
                          "initialValue": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 261,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5000:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "4993:8:0"
                        },
                        "loopExpression": {
                          "expression": {
                            "argumentTypes": null,
                            "id": 268,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "++",
                            "prefix": false,
                            "src": "5022:3:0",
                            "subExpression": {
                              "argumentTypes": null,
                              "id": 267,
                              "name": "j",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 260,
                              "src": "5022:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 269,
                          "nodeType": "ExpressionStatement",
                          "src": "5022:3:0"
                        },
                        "nodeType": "ForStatement",
                        "src": "4988:391:0"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 297,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 295,
                            "name": "newItem",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 256,
                            "src": "5392:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "74727565",
                            "id": 296,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5403:4:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "5392:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 307,
                        "nodeType": "IfStatement",
                        "src": "5387:63:0",
                        "trueBody": {
                          "id": 306,
                          "nodeType": "Block",
                          "src": "5409:41:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 301,
                                      "name": "update",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 241,
                                      "src": "5431:6:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                        "typeString": "string memory[] memory"
                                      }
                                    },
                                    "id": 303,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 302,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 245,
                                      "src": "5438:1:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "5431:9:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory",
                                      "typeString": "string memory"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 298,
                                    "name": "target",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 238,
                                    "src": "5419:6:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                      "typeString": "string storage ref[] storage pointer"
                                    }
                                  },
                                  "id": 300,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "push",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "5419:11:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$",
                                    "typeString": "function (string storage ref) returns (uint256)"
                                  }
                                },
                                "id": 304,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5419:22:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 305,
                              "nodeType": "ExpressionStatement",
                              "src": "5419:22:0"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 251,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 248,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 245,
                      "src": "4929:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 249,
                        "name": "update",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 241,
                        "src": "4933:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                          "typeString": "string memory[] memory"
                        }
                      },
                      "id": 250,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4933:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4929:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 309,
                  "initializationExpression": {
                    "assignments": [
                      245
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 245,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 309,
                        "src": "4919:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 244,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4919:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 247,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 246,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4926:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4919:8:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 253,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4948:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 252,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 245,
                        "src": "4948:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 254,
                    "nodeType": "ExpressionStatement",
                    "src": "4948:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "4914:542:0"
                }
              ]
            },
            "documentation": "//////////////////////////////////////////////////////////////////////////",
            "id": 311,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "upsertArrays",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 242,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 238,
                  "name": "target",
                  "nodeType": "VariableDeclaration",
                  "scope": 311,
                  "src": "4850:23:0",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 236,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "4850:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 237,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "4850:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 241,
                  "name": "update",
                  "nodeType": "VariableDeclaration",
                  "scope": 311,
                  "src": "4875:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 239,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "4875:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 240,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "4875:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4849:49:0"
            },
            "returnParameters": {
              "id": 243,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4908:0:0"
            },
            "scope": 597,
            "src": "4828:632:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 413,
              "nodeType": "Block",
              "src": "5636:724:0",
              "statements": [
                {
                  "assignments": [
                    328
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 328,
                      "name": "id",
                      "nodeType": "VariableDeclaration",
                      "scope": 413,
                      "src": "5642:10:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 327,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "5642:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 335,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 332,
                            "name": "stringId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 313,
                            "src": "5682:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 330,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1075,
                            "src": "5665:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 331,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "5665:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 333,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5665:26:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 329,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1082,
                      "src": "5655:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 334,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5655:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5642:50:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 336,
                          "name": "Graphs",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 155,
                          "src": "5741:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Graph_$151_storage_$",
                            "typeString": "mapping(bytes32 => struct ConsensusGraph.Graph storage ref)"
                          }
                        },
                        "id": 338,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 337,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 328,
                          "src": "5748:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5741:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Graph_$151_storage",
                          "typeString": "struct ConsensusGraph.Graph storage ref"
                        }
                      },
                      "id": 339,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 139,
                      "src": "5741:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 341,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5769:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 340,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5761:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 342,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5761:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "5741:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 380,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 372,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 365,
                              "name": "Graphs",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 155,
                              "src": "6006:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Graph_$151_storage_$",
                                "typeString": "mapping(bytes32 => struct ConsensusGraph.Graph storage ref)"
                              }
                            },
                            "id": 367,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 366,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 328,
                              "src": "6013:2:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6006:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Graph_$151_storage",
                              "typeString": "struct ConsensusGraph.Graph storage ref"
                            }
                          },
                          "id": 368,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "owner",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 139,
                          "src": "6006:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 370,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1108,
                              "src": "6034:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ConsensusGraph_$597",
                                "typeString": "contract ConsensusGraph"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_ConsensusGraph_$597",
                                "typeString": "contract ConsensusGraph"
                              }
                            ],
                            "id": 369,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6026:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 371,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6026:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "6006:33:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "||",
                      "rightExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 379,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 373,
                              "name": "Graphs",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 155,
                              "src": "6043:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Graph_$151_storage_$",
                                "typeString": "mapping(bytes32 => struct ConsensusGraph.Graph storage ref)"
                              }
                            },
                            "id": 375,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 374,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 328,
                              "src": "6050:2:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6043:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Graph_$151_storage",
                              "typeString": "struct ConsensusGraph.Graph storage ref"
                            }
                          },
                          "id": 376,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "owner",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 139,
                          "src": "6043:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 377,
                            "name": "tx",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1100,
                            "src": "6063:2:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_transaction",
                              "typeString": "tx"
                            }
                          },
                          "id": 378,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "origin",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "6063:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "6043:29:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "6006:66:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "id": 410,
                      "nodeType": "Block",
                      "src": "6292:64:0",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "43616e6e6f742075706461746520616e6f74686572206f776e6572732067726170682076696577",
                                "id": 407,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6307:41:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_3d00755dddde36b7333f308aaa8ce76f43837b3b7d3b56e8bf0f8bc2537b6b72",
                                  "typeString": "literal_string \"Cannot update another owners graph view\""
                                },
                                "value": "Cannot update another owners graph view"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_3d00755dddde36b7333f308aaa8ce76f43837b3b7d3b56e8bf0f8bc2537b6b72",
                                  "typeString": "literal_string \"Cannot update another owners graph view\""
                                }
                              ],
                              "id": 406,
                              "name": "revert",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                1093,
                                1094
                              ],
                              "referencedDeclaration": 1094,
                              "src": "6300:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                "typeString": "function (string memory) pure"
                              }
                            },
                            "id": 408,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6300:49:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 409,
                          "nodeType": "ExpressionStatement",
                          "src": "6300:49:0"
                        }
                      ]
                    },
                    "id": 411,
                    "nodeType": "IfStatement",
                    "src": "6001:355:0",
                    "trueBody": {
                      "id": 405,
                      "nodeType": "Block",
                      "src": "6075:160:0",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 382,
                                    "name": "Graphs",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 155,
                                    "src": "6096:6:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Graph_$151_storage_$",
                                      "typeString": "mapping(bytes32 => struct ConsensusGraph.Graph storage ref)"
                                    }
                                  },
                                  "id": 384,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 383,
                                    "name": "id",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 328,
                                    "src": "6103:2:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "6096:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Graph_$151_storage",
                                    "typeString": "struct ConsensusGraph.Graph storage ref"
                                  }
                                },
                                "id": 385,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "NodeIds",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 144,
                                "src": "6096:18:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                  "typeString": "string storage ref[] storage ref"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 386,
                                "name": "nodes",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 318,
                                "src": "6116:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                  "typeString": "string memory[] memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                  "typeString": "string storage ref[] storage ref"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                  "typeString": "string memory[] memory"
                                }
                              ],
                              "id": 381,
                              "name": "upsertArrays",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 311,
                              "src": "6083:12:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_array$_t_string_memory_$dyn_memory_ptr_$returns$__$",
                                "typeString": "function (string storage ref[] storage pointer,string memory[] memory)"
                              }
                            },
                            "id": 387,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6083:39:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 388,
                          "nodeType": "ExpressionStatement",
                          "src": "6083:39:0"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 390,
                                    "name": "Graphs",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 155,
                                    "src": "6143:6:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Graph_$151_storage_$",
                                      "typeString": "mapping(bytes32 => struct ConsensusGraph.Graph storage ref)"
                                    }
                                  },
                                  "id": 392,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 391,
                                    "name": "id",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 328,
                                    "src": "6150:2:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "6143:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Graph_$151_storage",
                                    "typeString": "struct ConsensusGraph.Graph storage ref"
                                  }
                                },
                                "id": 393,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "EdgeIds",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 147,
                                "src": "6143:18:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                  "typeString": "string storage ref[] storage ref"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 394,
                                "name": "edges",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 321,
                                "src": "6163:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                  "typeString": "string memory[] memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                  "typeString": "string storage ref[] storage ref"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                  "typeString": "string memory[] memory"
                                }
                              ],
                              "id": 389,
                              "name": "upsertArrays",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 311,
                              "src": "6130:12:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_array$_t_string_memory_$dyn_memory_ptr_$returns$__$",
                                "typeString": "function (string storage ref[] storage pointer,string memory[] memory)"
                              }
                            },
                            "id": 395,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6130:39:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 396,
                          "nodeType": "ExpressionStatement",
                          "src": "6130:39:0"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 398,
                                    "name": "Graphs",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 155,
                                    "src": "6190:6:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Graph_$151_storage_$",
                                      "typeString": "mapping(bytes32 => struct ConsensusGraph.Graph storage ref)"
                                    }
                                  },
                                  "id": 400,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 399,
                                    "name": "id",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 328,
                                    "src": "6197:2:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "6190:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Graph_$151_storage",
                                    "typeString": "struct ConsensusGraph.Graph storage ref"
                                  }
                                },
                                "id": 401,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "AttachmentIds",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 150,
                                "src": "6190:24:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                  "typeString": "string storage ref[] storage ref"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 402,
                                "name": "attachments",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 324,
                                "src": "6216:11:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                  "typeString": "string memory[] memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                  "typeString": "string storage ref[] storage ref"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                  "typeString": "string memory[] memory"
                                }
                              ],
                              "id": 397,
                              "name": "upsertArrays",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 311,
                              "src": "6177:12:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_array$_t_string_memory_$dyn_memory_ptr_$returns$__$",
                                "typeString": "function (string storage ref[] storage pointer,string memory[] memory)"
                              }
                            },
                            "id": 403,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6177:51:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 404,
                          "nodeType": "ExpressionStatement",
                          "src": "6177:51:0"
                        }
                      ]
                    }
                  },
                  "id": 412,
                  "nodeType": "IfStatement",
                  "src": "5737:619:0",
                  "trueBody": {
                    "id": 364,
                    "nodeType": "Block",
                    "src": "5773:113:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 347,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 328,
                              "src": "5795:2:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 344,
                              "name": "GraphIds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 158,
                              "src": "5781:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 346,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "5781:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                              "typeString": "function (bytes32) returns (uint256)"
                            }
                          },
                          "id": 348,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5781:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 349,
                        "nodeType": "ExpressionStatement",
                        "src": "5781:17:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 362,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 350,
                              "name": "Graphs",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 155,
                              "src": "5806:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Graph_$151_storage_$",
                                "typeString": "mapping(bytes32 => struct ConsensusGraph.Graph storage ref)"
                              }
                            },
                            "id": 352,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 351,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 328,
                              "src": "5813:2:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "5806:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Graph_$151_storage",
                              "typeString": "struct ConsensusGraph.Graph storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 354,
                                "name": "stringId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 313,
                                "src": "5825:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 355,
                                  "name": "tx",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1100,
                                  "src": "5835:2:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_transaction",
                                    "typeString": "tx"
                                  }
                                },
                                "id": 356,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "origin",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "5835:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 357,
                                "name": "label",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 315,
                                "src": "5846:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 358,
                                "name": "nodes",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 318,
                                "src": "5853:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                  "typeString": "string memory[] memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 359,
                                "name": "edges",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 321,
                                "src": "5860:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                  "typeString": "string memory[] memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 360,
                                "name": "attachments",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 324,
                                "src": "5867:11:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                  "typeString": "string memory[] memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                  "typeString": "string memory[] memory"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                  "typeString": "string memory[] memory"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                  "typeString": "string memory[] memory"
                                }
                              ],
                              "id": 353,
                              "name": "Graph",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 151,
                              "src": "5819:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_struct$_Graph_$151_storage_ptr_$",
                                "typeString": "type(struct ConsensusGraph.Graph storage pointer)"
                              }
                            },
                            "id": 361,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "structConstructorCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5819:60:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Graph_$151_memory",
                              "typeString": "struct ConsensusGraph.Graph memory"
                            }
                          },
                          "src": "5806:73:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Graph_$151_storage",
                            "typeString": "struct ConsensusGraph.Graph storage ref"
                          }
                        },
                        "id": 363,
                        "nodeType": "ExpressionStatement",
                        "src": "5806:73:0"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 414,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "upsertGraph",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 325,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 313,
                  "name": "stringId",
                  "nodeType": "VariableDeclaration",
                  "scope": 414,
                  "src": "5490:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 312,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5490:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 315,
                  "name": "label",
                  "nodeType": "VariableDeclaration",
                  "scope": 414,
                  "src": "5518:19:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 314,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5518:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 318,
                  "name": "nodes",
                  "nodeType": "VariableDeclaration",
                  "scope": 414,
                  "src": "5543:21:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 316,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5543:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 317,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5543:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 321,
                  "name": "edges",
                  "nodeType": "VariableDeclaration",
                  "scope": 414,
                  "src": "5570:21:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 319,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5570:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 320,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5570:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 324,
                  "name": "attachments",
                  "nodeType": "VariableDeclaration",
                  "scope": 414,
                  "src": "5597:27:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 322,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5597:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 323,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5597:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5484:144:0"
            },
            "returnParameters": {
              "id": 326,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5636:0:0"
            },
            "scope": 597,
            "src": "5464:896:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 475,
              "nodeType": "Block",
              "src": "6436:318:0",
              "statements": [
                {
                  "assignments": [
                    422
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 422,
                      "name": "id",
                      "nodeType": "VariableDeclaration",
                      "scope": 475,
                      "src": "6442:10:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 421,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "6442:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 429,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 426,
                            "name": "stringId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 416,
                            "src": "6482:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 424,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1075,
                            "src": "6465:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 425,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "6465:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 427,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6465:26:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 423,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1082,
                      "src": "6455:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 428,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6455:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6442:50:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 437,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 430,
                          "name": "Nodes",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 76,
                          "src": "6502:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$72_storage_$",
                            "typeString": "mapping(bytes32 => struct ConsensusGraph.Node storage ref)"
                          }
                        },
                        "id": 432,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 431,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 422,
                          "src": "6508:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "6502:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Node_$72_storage",
                          "typeString": "struct ConsensusGraph.Node storage ref"
                        }
                      },
                      "id": 433,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 69,
                      "src": "6502:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 435,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6529:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 434,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6521:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 436,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6521:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "6502:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 458,
                    "nodeType": "Block",
                    "src": "6642:31:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 455,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 422,
                              "src": "6663:2:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 452,
                              "name": "NodeIds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "6650:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 454,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "6650:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                              "typeString": "function (bytes32) returns (uint256)"
                            }
                          },
                          "id": 456,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6650:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 457,
                        "nodeType": "ExpressionStatement",
                        "src": "6650:16:0"
                      }
                    ]
                  },
                  "id": 459,
                  "nodeType": "IfStatement",
                  "src": "6498:175:0",
                  "trueBody": {
                    "id": 451,
                    "nodeType": "Block",
                    "src": "6533:103:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 444,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 438,
                                "name": "Nodes",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 76,
                                "src": "6545:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$72_storage_$",
                                  "typeString": "mapping(bytes32 => struct ConsensusGraph.Node storage ref)"
                                }
                              },
                              "id": 440,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 439,
                                "name": "id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 422,
                                "src": "6551:2:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "6545:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Node_$72_storage",
                                "typeString": "struct ConsensusGraph.Node storage ref"
                              }
                            },
                            "id": 441,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "owner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 69,
                            "src": "6545:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 442,
                              "name": "tx",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1100,
                              "src": "6564:2:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_transaction",
                                "typeString": "tx"
                              }
                            },
                            "id": 443,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "origin",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "6564:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "6545:28:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 450,
                        "nodeType": "IfStatement",
                        "src": "6541:89:0",
                        "trueBody": {
                          "id": 449,
                          "nodeType": "Block",
                          "src": "6575:55:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "4f6e6c79206f776e65722063616e20757064617465206e6f6465",
                                    "id": 446,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6592:28:0",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_6ea48d9ebb4fb27712901c6dc48d5a651fdcd40222094aaa670273d76355e57f",
                                      "typeString": "literal_string \"Only owner can update node\""
                                    },
                                    "value": "Only owner can update node"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_6ea48d9ebb4fb27712901c6dc48d5a651fdcd40222094aaa670273d76355e57f",
                                      "typeString": "literal_string \"Only owner can update node\""
                                    }
                                  ],
                                  "id": 445,
                                  "name": "revert",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    1093,
                                    1094
                                  ],
                                  "referencedDeclaration": 1094,
                                  "src": "6585:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (string memory) pure"
                                  }
                                },
                                "id": 447,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6585:36:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 448,
                              "nodeType": "ExpressionStatement",
                              "src": "6585:36:0"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 469,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 460,
                        "name": "Nodes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "6678:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$72_storage_$",
                          "typeString": "mapping(bytes32 => struct ConsensusGraph.Node storage ref)"
                        }
                      },
                      "id": 462,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 461,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 422,
                        "src": "6684:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "6678:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Node_$72_storage",
                        "typeString": "struct ConsensusGraph.Node storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 464,
                          "name": "stringId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 416,
                          "src": "6695:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 465,
                            "name": "tx",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1100,
                            "src": "6705:2:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_transaction",
                              "typeString": "tx"
                            }
                          },
                          "id": 466,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "origin",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "6705:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 467,
                          "name": "json",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 418,
                          "src": "6716:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 463,
                        "name": "Node",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 72,
                        "src": "6690:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Node_$72_storage_ptr_$",
                          "typeString": "type(struct ConsensusGraph.Node storage pointer)"
                        }
                      },
                      "id": 468,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6690:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Node_$72_memory",
                        "typeString": "struct ConsensusGraph.Node memory"
                      }
                    },
                    "src": "6678:43:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Node_$72_storage",
                      "typeString": "struct ConsensusGraph.Node storage ref"
                    }
                  },
                  "id": 470,
                  "nodeType": "ExpressionStatement",
                  "src": "6678:43:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 472,
                        "name": "stringId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 416,
                        "src": "6740:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 471,
                      "name": "NewNode",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 92,
                      "src": "6732:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 473,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6732:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 474,
                  "nodeType": "EmitStatement",
                  "src": "6727:22:0"
                }
              ]
            },
            "documentation": null,
            "id": 476,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "upsertNode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 419,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 416,
                  "name": "stringId",
                  "nodeType": "VariableDeclaration",
                  "scope": 476,
                  "src": "6385:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 415,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6385:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 418,
                  "name": "json",
                  "nodeType": "VariableDeclaration",
                  "scope": 476,
                  "src": "6409:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 417,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6409:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6384:44:0"
            },
            "returnParameters": {
              "id": 420,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6436:0:0"
            },
            "scope": 597,
            "src": "6365:389:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 537,
              "nodeType": "Block",
              "src": "6829:338:0",
              "statements": [
                {
                  "assignments": [
                    484
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 484,
                      "name": "id",
                      "nodeType": "VariableDeclaration",
                      "scope": 537,
                      "src": "6837:10:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 483,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "6837:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 491,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 488,
                            "name": "stringId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 478,
                            "src": "6877:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 486,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1075,
                            "src": "6860:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 487,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "6860:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 489,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6860:26:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 485,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1082,
                      "src": "6850:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 490,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6850:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6837:50:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 499,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 492,
                          "name": "Edges",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 103,
                          "src": "6899:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Edge_$99_storage_$",
                            "typeString": "mapping(bytes32 => struct ConsensusGraph.Edge storage ref)"
                          }
                        },
                        "id": 494,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 493,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 484,
                          "src": "6905:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "6899:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Edge_$99_storage",
                          "typeString": "struct ConsensusGraph.Edge storage ref"
                        }
                      },
                      "id": 495,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 96,
                      "src": "6899:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 497,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6926:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 496,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6918:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 498,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6918:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "6899:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 520,
                    "nodeType": "Block",
                    "src": "7047:35:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 517,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 484,
                              "src": "7070:2:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 514,
                              "name": "EdgeIds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 106,
                              "src": "7057:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 516,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "7057:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                              "typeString": "function (bytes32) returns (uint256)"
                            }
                          },
                          "id": 518,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7057:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 519,
                        "nodeType": "ExpressionStatement",
                        "src": "7057:16:0"
                      }
                    ]
                  },
                  "id": 521,
                  "nodeType": "IfStatement",
                  "src": "6895:187:0",
                  "trueBody": {
                    "id": 513,
                    "nodeType": "Block",
                    "src": "6930:111:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 506,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 500,
                                "name": "Edges",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 103,
                                "src": "6944:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Edge_$99_storage_$",
                                  "typeString": "mapping(bytes32 => struct ConsensusGraph.Edge storage ref)"
                                }
                              },
                              "id": 502,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 501,
                                "name": "id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 484,
                                "src": "6950:2:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "6944:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Edge_$99_storage",
                                "typeString": "struct ConsensusGraph.Edge storage ref"
                              }
                            },
                            "id": 503,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "owner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 96,
                            "src": "6944:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 504,
                              "name": "tx",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1100,
                              "src": "6963:2:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_transaction",
                                "typeString": "tx"
                              }
                            },
                            "id": 505,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "origin",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "6963:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "6944:28:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 512,
                        "nodeType": "IfStatement",
                        "src": "6940:93:0",
                        "trueBody": {
                          "id": 511,
                          "nodeType": "Block",
                          "src": "6974:59:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "4f6e6c79206f776e65722063616e207570646174652065646765",
                                    "id": 508,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6993:28:0",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_04de989888fe8bb79a6f31b461a4f8c479620cf07299c675d0a87529caa80894",
                                      "typeString": "literal_string \"Only owner can update edge\""
                                    },
                                    "value": "Only owner can update edge"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_04de989888fe8bb79a6f31b461a4f8c479620cf07299c675d0a87529caa80894",
                                      "typeString": "literal_string \"Only owner can update edge\""
                                    }
                                  ],
                                  "id": 507,
                                  "name": "revert",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    1093,
                                    1094
                                  ],
                                  "referencedDeclaration": 1094,
                                  "src": "6986:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (string memory) pure"
                                  }
                                },
                                "id": 509,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6986:36:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 510,
                              "nodeType": "ExpressionStatement",
                              "src": "6986:36:0"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 531,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 522,
                        "name": "Edges",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 103,
                        "src": "7089:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Edge_$99_storage_$",
                          "typeString": "mapping(bytes32 => struct ConsensusGraph.Edge storage ref)"
                        }
                      },
                      "id": 524,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 523,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 484,
                        "src": "7095:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "7089:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Edge_$99_storage",
                        "typeString": "struct ConsensusGraph.Edge storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 526,
                          "name": "stringId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 478,
                          "src": "7106:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 527,
                            "name": "tx",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1100,
                            "src": "7116:2:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_transaction",
                              "typeString": "tx"
                            }
                          },
                          "id": 528,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "origin",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "7116:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 529,
                          "name": "json",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 480,
                          "src": "7127:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 525,
                        "name": "Edge",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 99,
                        "src": "7101:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Edge_$99_storage_ptr_$",
                          "typeString": "type(struct ConsensusGraph.Edge storage pointer)"
                        }
                      },
                      "id": 530,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7101:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Edge_$99_memory",
                        "typeString": "struct ConsensusGraph.Edge memory"
                      }
                    },
                    "src": "7089:43:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Edge_$99_storage",
                      "typeString": "struct ConsensusGraph.Edge storage ref"
                    }
                  },
                  "id": 532,
                  "nodeType": "ExpressionStatement",
                  "src": "7089:43:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 534,
                        "name": "stringId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 478,
                        "src": "7153:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 533,
                      "name": "NewEdge",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119,
                      "src": "7145:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 535,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7145:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 536,
                  "nodeType": "EmitStatement",
                  "src": "7140:22:0"
                }
              ]
            },
            "documentation": null,
            "id": 538,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "upsertEdge",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 481,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 478,
                  "name": "stringId",
                  "nodeType": "VariableDeclaration",
                  "scope": 538,
                  "src": "6778:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 477,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6778:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 480,
                  "name": "json",
                  "nodeType": "VariableDeclaration",
                  "scope": 538,
                  "src": "6802:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 479,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6802:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6777:44:0"
            },
            "returnParameters": {
              "id": 482,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6829:0:0"
            },
            "scope": 597,
            "src": "6758:409:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 595,
              "nodeType": "Block",
              "src": "7247:198:0",
              "statements": [
                {
                  "body": {
                    "id": 569,
                    "nodeType": "Block",
                    "src": "7291:53:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 559,
                                  "name": "nodes",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 541,
                                  "src": "7310:5:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_Node_$72_memory_$dyn_memory_ptr",
                                    "typeString": "struct ConsensusGraph.Node memory[] memory"
                                  }
                                },
                                "id": 561,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 560,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 548,
                                  "src": "7316:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "7310:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Node_$72_memory",
                                  "typeString": "struct ConsensusGraph.Node memory"
                                }
                              },
                              "id": 562,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "id",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 67,
                              "src": "7310:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory",
                                "typeString": "string memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 563,
                                  "name": "nodes",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 541,
                                  "src": "7323:5:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_Node_$72_memory_$dyn_memory_ptr",
                                    "typeString": "struct ConsensusGraph.Node memory[] memory"
                                  }
                                },
                                "id": 565,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 564,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 548,
                                  "src": "7329:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "7323:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Node_$72_memory",
                                  "typeString": "struct ConsensusGraph.Node memory"
                                }
                              },
                              "id": 566,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "json",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 71,
                              "src": "7323:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory",
                                "typeString": "string memory"
                              },
                              {
                                "typeIdentifier": "t_string_memory",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 558,
                            "name": "upsertNode",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 476,
                            "src": "7299:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 567,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7299:38:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 568,
                        "nodeType": "ExpressionStatement",
                        "src": "7299:38:0"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 554,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 551,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 548,
                      "src": "7268:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 552,
                        "name": "nodes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 541,
                        "src": "7272:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Node_$72_memory_$dyn_memory_ptr",
                          "typeString": "struct ConsensusGraph.Node memory[] memory"
                        }
                      },
                      "id": 553,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "7272:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7268:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 570,
                  "initializationExpression": {
                    "assignments": [
                      548
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 548,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 570,
                        "src": "7258:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 547,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "7258:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 550,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 549,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7265:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "7258:8:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 556,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "7286:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 555,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 548,
                        "src": "7286:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 557,
                    "nodeType": "ExpressionStatement",
                    "src": "7286:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "7253:91:0"
                },
                {
                  "body": {
                    "id": 593,
                    "nodeType": "Block",
                    "src": "7388:53:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 583,
                                  "name": "edges",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 544,
                                  "src": "7407:5:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_Edge_$99_memory_$dyn_memory_ptr",
                                    "typeString": "struct ConsensusGraph.Edge memory[] memory"
                                  }
                                },
                                "id": 585,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 584,
                                  "name": "j",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 572,
                                  "src": "7413:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "7407:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Edge_$99_memory",
                                  "typeString": "struct ConsensusGraph.Edge memory"
                                }
                              },
                              "id": 586,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "id",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 94,
                              "src": "7407:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory",
                                "typeString": "string memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 587,
                                  "name": "edges",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 544,
                                  "src": "7420:5:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_Edge_$99_memory_$dyn_memory_ptr",
                                    "typeString": "struct ConsensusGraph.Edge memory[] memory"
                                  }
                                },
                                "id": 589,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 588,
                                  "name": "j",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 572,
                                  "src": "7426:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "7420:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Edge_$99_memory",
                                  "typeString": "struct ConsensusGraph.Edge memory"
                                }
                              },
                              "id": 590,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "json",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 98,
                              "src": "7420:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory",
                                "typeString": "string memory"
                              },
                              {
                                "typeIdentifier": "t_string_memory",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 582,
                            "name": "upsertEdge",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 538,
                            "src": "7396:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 591,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7396:38:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 592,
                        "nodeType": "ExpressionStatement",
                        "src": "7396:38:0"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 578,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 575,
                      "name": "j",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 572,
                      "src": "7365:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 576,
                        "name": "edges",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 544,
                        "src": "7369:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Edge_$99_memory_$dyn_memory_ptr",
                          "typeString": "struct ConsensusGraph.Edge memory[] memory"
                        }
                      },
                      "id": 577,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "7369:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7365:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 594,
                  "initializationExpression": {
                    "assignments": [
                      572
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 572,
                        "name": "j",
                        "nodeType": "VariableDeclaration",
                        "scope": 594,
                        "src": "7355:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 571,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "7355:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 574,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 573,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7362:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "7355:8:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 580,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "7383:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 579,
                        "name": "j",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 572,
                        "src": "7383:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 581,
                    "nodeType": "ExpressionStatement",
                    "src": "7383:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "7350:91:0"
                }
              ]
            },
            "documentation": null,
            "id": 596,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "upsertCollections",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 545,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 541,
                  "name": "nodes",
                  "nodeType": "VariableDeclaration",
                  "scope": 596,
                  "src": "7198:19:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Node_$72_memory_$dyn_memory_ptr",
                    "typeString": "struct ConsensusGraph.Node[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 539,
                      "name": "Node",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 72,
                      "src": "7198:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Node_$72_storage_ptr",
                        "typeString": "struct ConsensusGraph.Node"
                      }
                    },
                    "id": 540,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "7198:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Node_$72_storage_$dyn_storage_ptr",
                      "typeString": "struct ConsensusGraph.Node[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 544,
                  "name": "edges",
                  "nodeType": "VariableDeclaration",
                  "scope": 596,
                  "src": "7219:19:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Edge_$99_memory_$dyn_memory_ptr",
                    "typeString": "struct ConsensusGraph.Edge[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 542,
                      "name": "Edge",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 99,
                      "src": "7219:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Edge_$99_storage_ptr",
                        "typeString": "struct ConsensusGraph.Edge"
                      }
                    },
                    "id": 543,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "7219:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Edge_$99_storage_$dyn_storage_ptr",
                      "typeString": "struct ConsensusGraph.Edge[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7197:42:0"
            },
            "returnParameters": {
              "id": 546,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7247:0:0"
            },
            "scope": 597,
            "src": "7171:274:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 598,
        "src": "135:7313:0"
      }
    ],
    "src": "36:7413:0"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/Users/kriswinquist/timecatcode/Consensus/public_square/contracts/ConsensusGraph.sol",
      "exportedSymbols": {
        "ConsensusGraph": [
          597
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.5",
            ".16",
            "<",
            "0.9",
            ".0"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "36:31:0"
      },
      {
        "attributes": {
          "literals": [
            "experimental",
            "ABIEncoderV2"
          ]
        },
        "id": 2,
        "name": "PragmaDirective",
        "src": "68:33:0"
      },
      {
        "attributes": {
          "SourceUnit": 995,
          "absolutePath": "/Users/kriswinquist/timecatcode/Consensus/public_square/contracts/ConsensusToken.sol",
          "file": "./ConsensusToken.sol",
          "scope": 598,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3,
        "name": "ImportDirective",
        "src": "103:30:0"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            949
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            597
          ],
          "name": "ConsensusGraph",
          "scope": 598
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "myId",
              "scope": 597,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "bytes32",
                  "type": "bytes32"
                },
                "id": 4,
                "name": "ElementaryTypeName",
                "src": "164:7:0"
              }
            ],
            "id": 5,
            "name": "VariableDeclaration",
            "src": "164:19:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "name",
              "scope": 597,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string"
                },
                "id": 6,
                "name": "ElementaryTypeName",
                "src": "187:6:0"
              }
            ],
            "id": 7,
            "name": "VariableDeclaration",
            "src": "187:18:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "myCreator",
              "scope": 597,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "stateMutability": "nonpayable",
                  "type": "address"
                },
                "id": 8,
                "name": "ElementaryTypeName",
                "src": "209:7:0"
              }
            ],
            "id": 9,
            "name": "VariableDeclaration",
            "src": "209:24:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "modifiers": [
                null
              ],
              "name": "",
              "scope": 597,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_id",
                      "scope": 31,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 10,
                        "name": "ElementaryTypeName",
                        "src": "250:7:0"
                      }
                    ],
                    "id": 11,
                    "name": "VariableDeclaration",
                    "src": "250:11:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_name",
                      "scope": 31,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 12,
                        "name": "ElementaryTypeName",
                        "src": "263:6:0"
                      }
                    ],
                    "id": 13,
                    "name": "VariableDeclaration",
                    "src": "263:19:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_creator",
                      "scope": 31,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 14,
                        "name": "ElementaryTypeName",
                        "src": "284:7:0"
                      }
                    ],
                    "id": 15,
                    "name": "VariableDeclaration",
                    "src": "284:16:0"
                  }
                ],
                "id": 16,
                "name": "ParameterList",
                "src": "249:52:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 17,
                "name": "ParameterList",
                "src": "309:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5,
                              "type": "bytes32",
                              "value": "myId"
                            },
                            "id": 18,
                            "name": "Identifier",
                            "src": "315:4:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 11,
                              "type": "bytes32",
                              "value": "_id"
                            },
                            "id": 19,
                            "name": "Identifier",
                            "src": "322:3:0"
                          }
                        ],
                        "id": 20,
                        "name": "Assignment",
                        "src": "315:10:0"
                      }
                    ],
                    "id": 21,
                    "name": "ExpressionStatement",
                    "src": "315:10:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7,
                              "type": "string storage ref",
                              "value": "name"
                            },
                            "id": 22,
                            "name": "Identifier",
                            "src": "331:4:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13,
                              "type": "string memory",
                              "value": "_name"
                            },
                            "id": 23,
                            "name": "Identifier",
                            "src": "338:5:0"
                          }
                        ],
                        "id": 24,
                        "name": "Assignment",
                        "src": "331:12:0"
                      }
                    ],
                    "id": 25,
                    "name": "ExpressionStatement",
                    "src": "331:12:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9,
                              "type": "address",
                              "value": "myCreator"
                            },
                            "id": 26,
                            "name": "Identifier",
                            "src": "349:9:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15,
                              "type": "address",
                              "value": "_creator"
                            },
                            "id": 27,
                            "name": "Identifier",
                            "src": "361:8:0"
                          }
                        ],
                        "id": 28,
                        "name": "Assignment",
                        "src": "349:20:0"
                      }
                    ],
                    "id": 29,
                    "name": "ExpressionStatement",
                    "src": "349:20:0"
                  }
                ],
                "id": 30,
                "name": "Block",
                "src": "309:65:0"
              }
            ],
            "id": 31,
            "name": "FunctionDefinition",
            "src": "238:136:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenContract",
              "scope": 597,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract ConsensusToken",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ConsensusToken",
                  "referencedDeclaration": 949,
                  "type": "contract ConsensusToken"
                },
                "id": 32,
                "name": "UserDefinedTypeName",
                "src": "442:14:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": false,
                  "isStructConstructorCall": false,
                  "lValueRequested": false,
                  "names": [
                    null
                  ],
                  "type": "contract ConsensusToken",
                  "type_conversion": false
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_17afa9f3bd55ee9cf3f7ac666d39a1eb476efed3ecd45717245933f36af8785f",
                          "typeString": "literal_string \"Main Graph\""
                        },
                        {
                          "typeIdentifier": "t_rational_1000_by_1",
                          "typeString": "int_const 1000"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "type": "function (string memory,uint256,address) returns (contract ConsensusToken)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "ConsensusToken",
                          "referencedDeclaration": 949,
                          "type": "contract ConsensusToken"
                        },
                        "id": 33,
                        "name": "UserDefinedTypeName",
                        "src": "484:14:0"
                      }
                    ],
                    "id": 34,
                    "name": "NewExpression",
                    "src": "480:18:0"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "4d61696e204772617068",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "string",
                      "type": "literal_string \"Main Graph\"",
                      "value": "Main Graph"
                    },
                    "id": 35,
                    "name": "Literal",
                    "src": "499:12:0"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "31303030",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 1000",
                      "value": "1000"
                    },
                    "id": 36,
                    "name": "Literal",
                    "src": "513:4:0"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "isStructConstructorCall": false,
                      "lValueRequested": false,
                      "names": [
                        null
                      ],
                      "type": "address",
                      "type_conversion": true
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ConsensusGraph_$597",
                              "typeString": "contract ConsensusGraph"
                            }
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "type": "type(address)",
                          "value": "address"
                        },
                        "id": 37,
                        "name": "ElementaryTypeNameExpression",
                        "src": "519:7:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 1108,
                          "type": "contract ConsensusGraph",
                          "value": "this"
                        },
                        "id": 38,
                        "name": "Identifier",
                        "src": "527:4:0"
                      }
                    ],
                    "id": 39,
                    "name": "FunctionCall",
                    "src": "519:13:0"
                  }
                ],
                "id": 40,
                "name": "FunctionCall",
                "src": "480:53:0"
              }
            ],
            "id": 41,
            "name": "VariableDeclaration",
            "src": "442:91:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "airdropMe",
              "scope": 597,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 42,
                "name": "ParameterList",
                "src": "556:2:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 43,
                "name": "ParameterList",
                "src": "566:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_rational_9999999_by_1",
                                  "typeString": "int_const 9999999"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "approve",
                              "referencedDeclaration": 854,
                              "type": "function (address,uint256) external returns (bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 41,
                                  "type": "contract ConsensusToken",
                                  "value": "tokenContract"
                                },
                                "id": 44,
                                "name": "Identifier",
                                "src": "574:13:0"
                              }
                            ],
                            "id": 46,
                            "name": "MemberAccess",
                            "src": "574:21:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_ConsensusGraph_$597",
                                      "typeString": "contract ConsensusGraph"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 47,
                                "name": "ElementaryTypeNameExpression",
                                "src": "596:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1108,
                                  "type": "contract ConsensusGraph",
                                  "value": "this"
                                },
                                "id": 48,
                                "name": "Identifier",
                                "src": "604:4:0"
                              }
                            ],
                            "id": 49,
                            "name": "FunctionCall",
                            "src": "596:13:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "39393939393939",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 9999999",
                              "value": "9999999"
                            },
                            "id": 50,
                            "name": "Literal",
                            "src": "611:7:0"
                          }
                        ],
                        "id": 51,
                        "name": "FunctionCall",
                        "src": "574:45:0"
                      }
                    ],
                    "id": 52,
                    "name": "ExpressionStatement",
                    "src": "574:45:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "transferFrom",
                              "referencedDeclaration": 948,
                              "type": "function (address,address,uint256) external returns (bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 41,
                                  "type": "contract ConsensusToken",
                                  "value": "tokenContract"
                                },
                                "id": 53,
                                "name": "Identifier",
                                "src": "627:13:0"
                              }
                            ],
                            "id": 55,
                            "name": "MemberAccess",
                            "src": "627:26:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_ConsensusGraph_$597",
                                      "typeString": "contract ConsensusGraph"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 56,
                                "name": "ElementaryTypeNameExpression",
                                "src": "654:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1108,
                                  "type": "contract ConsensusGraph",
                                  "value": "this"
                                },
                                "id": 57,
                                "name": "Identifier",
                                "src": "662:4:0"
                              }
                            ],
                            "id": 58,
                            "name": "FunctionCall",
                            "src": "654:13:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1088,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 59,
                                "name": "Identifier",
                                "src": "669:3:0"
                              }
                            ],
                            "id": 60,
                            "name": "MemberAccess",
                            "src": "669:10:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "313030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 100",
                              "value": "100"
                            },
                            "id": 61,
                            "name": "Literal",
                            "src": "681:3:0"
                          }
                        ],
                        "id": 62,
                        "name": "FunctionCall",
                        "src": "627:58:0"
                      }
                    ],
                    "id": 63,
                    "name": "ExpressionStatement",
                    "src": "627:58:0"
                  }
                ],
                "id": 64,
                "name": "Block",
                "src": "566:124:0"
              }
            ],
            "id": 65,
            "name": "FunctionDefinition",
            "src": "538:152:0"
          },
          {
            "attributes": {
              "canonicalName": "ConsensusGraph.Node",
              "name": "Node",
              "scope": 597,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "id",
                  "scope": 72,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 66,
                    "name": "ElementaryTypeName",
                    "src": "822:6:0"
                  }
                ],
                "id": 67,
                "name": "VariableDeclaration",
                "src": "822:9:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "owner",
                  "scope": 72,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "stateMutability": "nonpayable",
                      "type": "address"
                    },
                    "id": 68,
                    "name": "ElementaryTypeName",
                    "src": "1001:7:0"
                  }
                ],
                "id": 69,
                "name": "VariableDeclaration",
                "src": "1001:13:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "json",
                  "scope": 72,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 70,
                    "name": "ElementaryTypeName",
                    "src": "1079:6:0"
                  }
                ],
                "id": 71,
                "name": "VariableDeclaration",
                "src": "1079:11:0"
              }
            ],
            "id": 72,
            "name": "StructDefinition",
            "src": "698:397:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "Nodes",
              "scope": 597,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => struct ConsensusGraph.Node)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => struct ConsensusGraph.Node)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 73,
                    "name": "ElementaryTypeName",
                    "src": "1148:7:0"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Node",
                      "referencedDeclaration": 72,
                      "type": "struct ConsensusGraph.Node"
                    },
                    "id": 74,
                    "name": "UserDefinedTypeName",
                    "src": "1159:4:0"
                  }
                ],
                "id": 75,
                "name": "Mapping",
                "src": "1140:24:0"
              }
            ],
            "id": 76,
            "name": "VariableDeclaration",
            "src": "1140:37:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "NodeIds",
              "scope": 597,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32[]",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "length": null,
                  "type": "bytes32[]"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 77,
                    "name": "ElementaryTypeName",
                    "src": "1235:7:0"
                  }
                ],
                "id": 78,
                "name": "ArrayTypeName",
                "src": "1235:9:0"
              }
            ],
            "id": 79,
            "name": "VariableDeclaration",
            "src": "1235:24:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getNodeIds",
              "scope": 597,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 80,
                "name": "ParameterList",
                "src": "1283:2:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 88,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "bytes32[]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "bytes32[]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 81,
                            "name": "ElementaryTypeName",
                            "src": "1306:7:0"
                          }
                        ],
                        "id": 82,
                        "name": "ArrayTypeName",
                        "src": "1306:9:0"
                      }
                    ],
                    "id": 83,
                    "name": "VariableDeclaration",
                    "src": "1306:16:0"
                  }
                ],
                "id": 84,
                "name": "ParameterList",
                "src": "1305:18:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 84
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 79,
                          "type": "bytes32[] storage ref",
                          "value": "NodeIds"
                        },
                        "id": 85,
                        "name": "Identifier",
                        "src": "1337:7:0"
                      }
                    ],
                    "id": 86,
                    "name": "Return",
                    "src": "1330:14:0"
                  }
                ],
                "id": 87,
                "name": "Block",
                "src": "1324:25:0"
              }
            ],
            "id": 88,
            "name": "FunctionDefinition",
            "src": "1264:85:0"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "NewNode"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "nodeId",
                      "scope": 92,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 89,
                        "name": "ElementaryTypeName",
                        "src": "1450:6:0"
                      }
                    ],
                    "id": 90,
                    "name": "VariableDeclaration",
                    "src": "1450:21:0"
                  }
                ],
                "id": 91,
                "name": "ParameterList",
                "src": "1444:31:0"
              }
            ],
            "id": 92,
            "name": "EventDefinition",
            "src": "1430:46:0"
          },
          {
            "attributes": {
              "canonicalName": "ConsensusGraph.Edge",
              "name": "Edge",
              "scope": 597,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "id",
                  "scope": 99,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 93,
                    "name": "ElementaryTypeName",
                    "src": "1529:6:0"
                  }
                ],
                "id": 94,
                "name": "VariableDeclaration",
                "src": "1529:9:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "owner",
                  "scope": 99,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "stateMutability": "nonpayable",
                      "type": "address"
                    },
                    "id": 95,
                    "name": "ElementaryTypeName",
                    "src": "1544:7:0"
                  }
                ],
                "id": 96,
                "name": "VariableDeclaration",
                "src": "1544:13:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "json",
                  "scope": 99,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 97,
                    "name": "ElementaryTypeName",
                    "src": "1563:6:0"
                  }
                ],
                "id": 98,
                "name": "VariableDeclaration",
                "src": "1563:11:0"
              }
            ],
            "id": 99,
            "name": "StructDefinition",
            "src": "1484:95:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "Edges",
              "scope": 597,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => struct ConsensusGraph.Edge)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => struct ConsensusGraph.Edge)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 100,
                    "name": "ElementaryTypeName",
                    "src": "1610:7:0"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Edge",
                      "referencedDeclaration": 99,
                      "type": "struct ConsensusGraph.Edge"
                    },
                    "id": 101,
                    "name": "UserDefinedTypeName",
                    "src": "1621:4:0"
                  }
                ],
                "id": 102,
                "name": "Mapping",
                "src": "1602:24:0"
              }
            ],
            "id": 103,
            "name": "VariableDeclaration",
            "src": "1602:37:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "EdgeIds",
              "scope": 597,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32[]",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "length": null,
                  "type": "bytes32[]"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 104,
                    "name": "ElementaryTypeName",
                    "src": "1644:7:0"
                  }
                ],
                "id": 105,
                "name": "ArrayTypeName",
                "src": "1644:9:0"
              }
            ],
            "id": 106,
            "name": "VariableDeclaration",
            "src": "1644:24:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getEdgeIds",
              "scope": 597,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 107,
                "name": "ParameterList",
                "src": "1692:2:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 115,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "bytes32[]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "bytes32[]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 108,
                            "name": "ElementaryTypeName",
                            "src": "1715:7:0"
                          }
                        ],
                        "id": 109,
                        "name": "ArrayTypeName",
                        "src": "1715:9:0"
                      }
                    ],
                    "id": 110,
                    "name": "VariableDeclaration",
                    "src": "1715:16:0"
                  }
                ],
                "id": 111,
                "name": "ParameterList",
                "src": "1714:18:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 111
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 106,
                          "type": "bytes32[] storage ref",
                          "value": "EdgeIds"
                        },
                        "id": 112,
                        "name": "Identifier",
                        "src": "1746:7:0"
                      }
                    ],
                    "id": 113,
                    "name": "Return",
                    "src": "1739:14:0"
                  }
                ],
                "id": 114,
                "name": "Block",
                "src": "1733:25:0"
              }
            ],
            "id": 115,
            "name": "FunctionDefinition",
            "src": "1673:85:0"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "NewEdge"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "edgeId",
                      "scope": 119,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 116,
                        "name": "ElementaryTypeName",
                        "src": "1782:6:0"
                      }
                    ],
                    "id": 117,
                    "name": "VariableDeclaration",
                    "src": "1782:21:0"
                  }
                ],
                "id": 118,
                "name": "ParameterList",
                "src": "1776:31:0"
              }
            ],
            "id": 119,
            "name": "EventDefinition",
            "src": "1762:46:0"
          },
          {
            "attributes": {
              "canonicalName": "ConsensusGraph.Attachment",
              "name": "Attachment",
              "scope": 597,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "id",
                  "scope": 129,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 120,
                    "name": "ElementaryTypeName",
                    "src": "2027:6:0"
                  }
                ],
                "id": 121,
                "name": "VariableDeclaration",
                "src": "2027:9:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "owner",
                  "scope": 129,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "stateMutability": "nonpayable",
                      "type": "address"
                    },
                    "id": 122,
                    "name": "ElementaryTypeName",
                    "src": "2042:7:0"
                  }
                ],
                "id": 123,
                "name": "VariableDeclaration",
                "src": "2042:13:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "KeyNodeId",
                  "scope": 129,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 124,
                    "name": "ElementaryTypeName",
                    "src": "2061:6:0"
                  }
                ],
                "id": 125,
                "name": "VariableDeclaration",
                "src": "2061:16:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "NodeIds",
                  "scope": 129,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string[]",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "length": null,
                      "type": "string[]"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 126,
                        "name": "ElementaryTypeName",
                        "src": "2152:6:0"
                      }
                    ],
                    "id": 127,
                    "name": "ArrayTypeName",
                    "src": "2152:8:0"
                  }
                ],
                "id": 128,
                "name": "VariableDeclaration",
                "src": "2152:16:0"
              }
            ],
            "id": 129,
            "name": "StructDefinition",
            "src": "2003:220:0"
          },
          {
            "attributes": {
              "canonicalName": "ConsensusGraph.AttachmentIndex",
              "name": "AttachmentIndex",
              "scope": 597,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "NodeId",
                  "scope": 135,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 130,
                    "name": "ElementaryTypeName",
                    "src": "2557:6:0"
                  }
                ],
                "id": 131,
                "name": "VariableDeclaration",
                "src": "2557:13:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "AttachmentIds",
                  "scope": 135,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string[]",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "length": null,
                      "type": "string[]"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 132,
                        "name": "ElementaryTypeName",
                        "src": "2576:6:0"
                      }
                    ],
                    "id": 133,
                    "name": "ArrayTypeName",
                    "src": "2576:8:0"
                  }
                ],
                "id": 134,
                "name": "VariableDeclaration",
                "src": "2576:22:0"
              }
            ],
            "id": 135,
            "name": "StructDefinition",
            "src": "2528:75:0"
          },
          {
            "attributes": {
              "canonicalName": "ConsensusGraph.Graph",
              "name": "Graph",
              "scope": 597,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "id",
                  "scope": 151,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 136,
                    "name": "ElementaryTypeName",
                    "src": "3111:6:0"
                  }
                ],
                "id": 137,
                "name": "VariableDeclaration",
                "src": "3111:9:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "owner",
                  "scope": 151,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "stateMutability": "nonpayable",
                      "type": "address"
                    },
                    "id": 138,
                    "name": "ElementaryTypeName",
                    "src": "3126:7:0"
                  }
                ],
                "id": 139,
                "name": "VariableDeclaration",
                "src": "3126:13:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "label",
                  "scope": 151,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 140,
                    "name": "ElementaryTypeName",
                    "src": "3275:6:0"
                  }
                ],
                "id": 141,
                "name": "VariableDeclaration",
                "src": "3275:12:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "NodeIds",
                  "scope": 151,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string[]",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "length": null,
                      "type": "string[]"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 142,
                        "name": "ElementaryTypeName",
                        "src": "3354:6:0"
                      }
                    ],
                    "id": 143,
                    "name": "ArrayTypeName",
                    "src": "3354:8:0"
                  }
                ],
                "id": 144,
                "name": "VariableDeclaration",
                "src": "3354:16:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "EdgeIds",
                  "scope": 151,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string[]",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "length": null,
                      "type": "string[]"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 145,
                        "name": "ElementaryTypeName",
                        "src": "3376:6:0"
                      }
                    ],
                    "id": 146,
                    "name": "ArrayTypeName",
                    "src": "3376:8:0"
                  }
                ],
                "id": 147,
                "name": "VariableDeclaration",
                "src": "3376:16:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "AttachmentIds",
                  "scope": 151,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string[]",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "length": null,
                      "type": "string[]"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 148,
                        "name": "ElementaryTypeName",
                        "src": "3398:6:0"
                      }
                    ],
                    "id": 149,
                    "name": "ArrayTypeName",
                    "src": "3398:8:0"
                  }
                ],
                "id": 150,
                "name": "VariableDeclaration",
                "src": "3398:22:0"
              }
            ],
            "id": 151,
            "name": "StructDefinition",
            "src": "3092:333:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "Graphs",
              "scope": 597,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => struct ConsensusGraph.Graph)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => struct ConsensusGraph.Graph)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 152,
                    "name": "ElementaryTypeName",
                    "src": "3437:7:0"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Graph",
                      "referencedDeclaration": 151,
                      "type": "struct ConsensusGraph.Graph"
                    },
                    "id": 153,
                    "name": "UserDefinedTypeName",
                    "src": "3448:5:0"
                  }
                ],
                "id": 154,
                "name": "Mapping",
                "src": "3429:25:0"
              }
            ],
            "id": 155,
            "name": "VariableDeclaration",
            "src": "3429:39:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "GraphIds",
              "scope": 597,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32[]",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "length": null,
                  "type": "bytes32[]"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 156,
                    "name": "ElementaryTypeName",
                    "src": "3473:7:0"
                  }
                ],
                "id": 157,
                "name": "ArrayTypeName",
                "src": "3473:9:0"
              }
            ],
            "id": 158,
            "name": "VariableDeclaration",
            "src": "3473:25:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getGraph",
              "scope": 597,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "stringId",
                      "scope": 179,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 159,
                        "name": "ElementaryTypeName",
                        "src": "3522:6:0"
                      }
                    ],
                    "id": 160,
                    "name": "VariableDeclaration",
                    "src": "3522:22:0"
                  }
                ],
                "id": 161,
                "name": "ParameterList",
                "src": "3521:24:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 179,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "struct ConsensusGraph.Graph",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Graph",
                          "referencedDeclaration": 151,
                          "type": "struct ConsensusGraph.Graph"
                        },
                        "id": 162,
                        "name": "UserDefinedTypeName",
                        "src": "3566:5:0"
                      }
                    ],
                    "id": 163,
                    "name": "VariableDeclaration",
                    "src": "3566:12:0"
                  }
                ],
                "id": 164,
                "name": "ParameterList",
                "src": "3565:14:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        166
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "id",
                          "scope": 178,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 165,
                            "name": "ElementaryTypeName",
                            "src": "3586:7:0"
                          }
                        ],
                        "id": 166,
                        "name": "VariableDeclaration",
                        "src": "3586:10:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1082,
                              "type": "function (bytes memory) pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 167,
                            "name": "Identifier",
                            "src": "3599:9:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "member_name": "encodePacked",
                                  "referencedDeclaration": null,
                                  "type": "function () pure returns (bytes memory)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1075,
                                      "type": "abi",
                                      "value": "abi"
                                    },
                                    "id": 168,
                                    "name": "Identifier",
                                    "src": "3609:3:0"
                                  }
                                ],
                                "id": 169,
                                "name": "MemberAccess",
                                "src": "3609:16:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 160,
                                  "type": "string memory",
                                  "value": "stringId"
                                },
                                "id": 170,
                                "name": "Identifier",
                                "src": "3626:8:0"
                              }
                            ],
                            "id": 171,
                            "name": "FunctionCall",
                            "src": "3609:26:0"
                          }
                        ],
                        "id": 172,
                        "name": "FunctionCall",
                        "src": "3599:37:0"
                      }
                    ],
                    "id": 173,
                    "name": "VariableDeclarationStatement",
                    "src": "3586:50:0"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 164
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "struct ConsensusGraph.Graph storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 155,
                              "type": "mapping(bytes32 => struct ConsensusGraph.Graph storage ref)",
                              "value": "Graphs"
                            },
                            "id": 174,
                            "name": "Identifier",
                            "src": "3649:6:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 166,
                              "type": "bytes32",
                              "value": "id"
                            },
                            "id": 175,
                            "name": "Identifier",
                            "src": "3656:2:0"
                          }
                        ],
                        "id": 176,
                        "name": "IndexAccess",
                        "src": "3649:10:0"
                      }
                    ],
                    "id": 177,
                    "name": "Return",
                    "src": "3642:17:0"
                  }
                ],
                "id": 178,
                "name": "Block",
                "src": "3580:84:0"
              }
            ],
            "id": 179,
            "name": "FunctionDefinition",
            "src": "3504:160:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getGraphs",
              "scope": 597,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 180,
                "name": "ParameterList",
                "src": "3979:2:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 225,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "struct ConsensusGraph.Graph[50]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "struct ConsensusGraph.Graph[50]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Graph",
                              "referencedDeclaration": 151,
                              "type": "struct ConsensusGraph.Graph"
                            },
                            "id": 181,
                            "name": "UserDefinedTypeName",
                            "src": "4002:5:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "3530",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 50",
                              "value": "50"
                            },
                            "id": 182,
                            "name": "Literal",
                            "src": "4008:2:0"
                          }
                        ],
                        "id": 183,
                        "name": "ArrayTypeName",
                        "src": "4002:9:0"
                      }
                    ],
                    "id": 184,
                    "name": "VariableDeclaration",
                    "src": "4002:16:0"
                  }
                ],
                "id": 185,
                "name": "ParameterList",
                "src": "4001:18:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        190
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "result",
                          "scope": 224,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct ConsensusGraph.Graph[50]",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "type": "struct ConsensusGraph.Graph[50]"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "contractScope": null,
                                  "name": "Graph",
                                  "referencedDeclaration": 151,
                                  "type": "struct ConsensusGraph.Graph"
                                },
                                "id": 188,
                                "name": "UserDefinedTypeName",
                                "src": "4026:5:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "3530",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 50",
                                  "value": "50"
                                },
                                "id": 187,
                                "name": "Literal",
                                "src": "4032:2:0"
                              }
                            ],
                            "id": 189,
                            "name": "ArrayTypeName",
                            "src": "4026:9:0"
                          }
                        ],
                        "id": 190,
                        "name": "VariableDeclaration",
                        "src": "4026:23:0"
                      }
                    ],
                    "id": 191,
                    "name": "VariableDeclarationStatement",
                    "src": "4026:23:0"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        193
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "idx",
                          "scope": 224,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 192,
                            "name": "ElementaryTypeName",
                            "src": "4055:4:0"
                          }
                        ],
                        "id": 193,
                        "name": "VariableDeclaration",
                        "src": "4055:8:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "30",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "number",
                          "type": "int_const 0",
                          "value": "0"
                        },
                        "id": 194,
                        "name": "Literal",
                        "src": "4066:1:0"
                      }
                    ],
                    "id": 195,
                    "name": "VariableDeclarationStatement",
                    "src": "4055:12:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            197
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 221,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 196,
                                "name": "ElementaryTypeName",
                                "src": "4078:4:0"
                              }
                            ],
                            "id": 197,
                            "name": "VariableDeclaration",
                            "src": "4078:6:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 198,
                            "name": "Literal",
                            "src": "4085:1:0"
                          }
                        ],
                        "id": 199,
                        "name": "VariableDeclarationStatement",
                        "src": "4078:8:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 197,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 200,
                            "name": "Identifier",
                            "src": "4088:1:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 158,
                                  "type": "bytes32[] storage ref",
                                  "value": "GraphIds"
                                },
                                "id": 201,
                                "name": "Identifier",
                                "src": "4092:8:0"
                              }
                            ],
                            "id": 202,
                            "name": "MemberAccess",
                            "src": "4092:15:0"
                          }
                        ],
                        "id": 203,
                        "name": "BinaryOperation",
                        "src": "4088:19:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 197,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 204,
                                "name": "Identifier",
                                "src": "4109:1:0"
                              }
                            ],
                            "id": 205,
                            "name": "UnaryOperation",
                            "src": "4109:3:0"
                          }
                        ],
                        "id": 206,
                        "name": "ExpressionStatement",
                        "src": "4109:3:0"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "struct ConsensusGraph.Graph memory"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "struct ConsensusGraph.Graph memory"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 190,
                                          "type": "struct ConsensusGraph.Graph memory[50] memory",
                                          "value": "result"
                                        },
                                        "id": 207,
                                        "name": "Identifier",
                                        "src": "4122:6:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 193,
                                          "type": "uint256",
                                          "value": "idx"
                                        },
                                        "id": 208,
                                        "name": "Identifier",
                                        "src": "4129:3:0"
                                      }
                                    ],
                                    "id": 209,
                                    "name": "IndexAccess",
                                    "src": "4122:11:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct ConsensusGraph.Graph storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 155,
                                          "type": "mapping(bytes32 => struct ConsensusGraph.Graph storage ref)",
                                          "value": "Graphs"
                                        },
                                        "id": 210,
                                        "name": "Identifier",
                                        "src": "4136:6:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "bytes32"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 158,
                                              "type": "bytes32[] storage ref",
                                              "value": "GraphIds"
                                            },
                                            "id": 211,
                                            "name": "Identifier",
                                            "src": "4143:8:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 197,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 212,
                                            "name": "Identifier",
                                            "src": "4152:1:0"
                                          }
                                        ],
                                        "id": 213,
                                        "name": "IndexAccess",
                                        "src": "4143:11:0"
                                      }
                                    ],
                                    "id": 214,
                                    "name": "IndexAccess",
                                    "src": "4136:19:0"
                                  }
                                ],
                                "id": 215,
                                "name": "Assignment",
                                "src": "4122:33:0"
                              }
                            ],
                            "id": 216,
                            "name": "ExpressionStatement",
                            "src": "4122:33:0"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "++",
                                  "prefix": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 193,
                                      "type": "uint256",
                                      "value": "idx"
                                    },
                                    "id": 217,
                                    "name": "Identifier",
                                    "src": "4163:3:0"
                                  }
                                ],
                                "id": 218,
                                "name": "UnaryOperation",
                                "src": "4163:5:0"
                              }
                            ],
                            "id": 219,
                            "name": "ExpressionStatement",
                            "src": "4163:5:0"
                          }
                        ],
                        "id": 220,
                        "name": "Block",
                        "src": "4114:61:0"
                      }
                    ],
                    "id": 221,
                    "name": "ForStatement",
                    "src": "4073:102:0"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 185
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 190,
                          "type": "struct ConsensusGraph.Graph memory[50] memory",
                          "value": "result"
                        },
                        "id": 222,
                        "name": "Identifier",
                        "src": "4187:6:0"
                      }
                    ],
                    "id": 223,
                    "name": "Return",
                    "src": "4180:13:0"
                  }
                ],
                "id": 224,
                "name": "Block",
                "src": "4020:178:0"
              }
            ],
            "id": 225,
            "name": "FunctionDefinition",
            "src": "3961:237:0"
          },
          {
            "attributes": {
              "canonicalName": "ConsensusGraph.Entrypoint",
              "name": "Entrypoint",
              "scope": 597,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "owner",
                  "scope": 231,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "stateMutability": "nonpayable",
                      "type": "address"
                    },
                    "id": 226,
                    "name": "ElementaryTypeName",
                    "src": "4300:7:0"
                  }
                ],
                "id": 227,
                "name": "VariableDeclaration",
                "src": "4300:13:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "GraphId",
                  "scope": 231,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string[]",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "length": null,
                      "type": "string[]"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 228,
                        "name": "ElementaryTypeName",
                        "src": "4423:6:0"
                      }
                    ],
                    "id": 229,
                    "name": "ArrayTypeName",
                    "src": "4423:8:0"
                  }
                ],
                "id": 230,
                "name": "VariableDeclaration",
                "src": "4423:16:0"
              }
            ],
            "id": 231,
            "name": "StructDefinition",
            "src": "4276:244:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "Entrypoints",
              "scope": 597,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => struct ConsensusGraph.Entrypoint)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => struct ConsensusGraph.Entrypoint)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 232,
                    "name": "ElementaryTypeName",
                    "src": "4588:7:0"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Entrypoint",
                      "referencedDeclaration": 231,
                      "type": "struct ConsensusGraph.Entrypoint"
                    },
                    "id": 233,
                    "name": "UserDefinedTypeName",
                    "src": "4599:10:0"
                  }
                ],
                "id": 234,
                "name": "Mapping",
                "src": "4580:30:0"
              }
            ],
            "id": 235,
            "name": "VariableDeclaration",
            "src": "4580:49:0"
          },
          {
            "attributes": {
              "documentation": "//////////////////////////////////////////////////////////////////////////",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "upsertArrays",
              "scope": 597,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "target",
                      "scope": 311,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "string[]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "string[]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string"
                            },
                            "id": 236,
                            "name": "ElementaryTypeName",
                            "src": "4850:6:0"
                          }
                        ],
                        "id": 237,
                        "name": "ArrayTypeName",
                        "src": "4850:8:0"
                      }
                    ],
                    "id": 238,
                    "name": "VariableDeclaration",
                    "src": "4850:23:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "update",
                      "scope": 311,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string[]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "string[]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string"
                            },
                            "id": 239,
                            "name": "ElementaryTypeName",
                            "src": "4875:6:0"
                          }
                        ],
                        "id": 240,
                        "name": "ArrayTypeName",
                        "src": "4875:8:0"
                      }
                    ],
                    "id": 241,
                    "name": "VariableDeclaration",
                    "src": "4875:22:0"
                  }
                ],
                "id": 242,
                "name": "ParameterList",
                "src": "4849:49:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 243,
                "name": "ParameterList",
                "src": "4908:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            245
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 309,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 244,
                                "name": "ElementaryTypeName",
                                "src": "4919:4:0"
                              }
                            ],
                            "id": 245,
                            "name": "VariableDeclaration",
                            "src": "4919:6:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 246,
                            "name": "Literal",
                            "src": "4926:1:0"
                          }
                        ],
                        "id": 247,
                        "name": "VariableDeclarationStatement",
                        "src": "4919:8:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 245,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 248,
                            "name": "Identifier",
                            "src": "4929:1:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 241,
                                  "type": "string memory[] memory",
                                  "value": "update"
                                },
                                "id": 249,
                                "name": "Identifier",
                                "src": "4933:6:0"
                              }
                            ],
                            "id": 250,
                            "name": "MemberAccess",
                            "src": "4933:13:0"
                          }
                        ],
                        "id": 251,
                        "name": "BinaryOperation",
                        "src": "4929:17:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 245,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 252,
                                "name": "Identifier",
                                "src": "4948:1:0"
                              }
                            ],
                            "id": 253,
                            "name": "UnaryOperation",
                            "src": "4948:3:0"
                          }
                        ],
                        "id": 254,
                        "name": "ExpressionStatement",
                        "src": "4948:3:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                256
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "newItem",
                                  "scope": 308,
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "type": "bool",
                                  "value": null,
                                  "visibility": "internal"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "bool",
                                      "type": "bool"
                                    },
                                    "id": 255,
                                    "name": "ElementaryTypeName",
                                    "src": "4961:4:0"
                                  }
                                ],
                                "id": 256,
                                "name": "VariableDeclaration",
                                "src": "4961:12:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "74727565",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "true"
                                },
                                "id": 257,
                                "name": "Literal",
                                "src": "4976:4:0"
                              }
                            ],
                            "id": 258,
                            "name": "VariableDeclarationStatement",
                            "src": "4961:19:0"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "assignments": [
                                    260
                                  ]
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "constant": false,
                                      "name": "j",
                                      "scope": 294,
                                      "stateVariable": false,
                                      "storageLocation": "default",
                                      "type": "uint256",
                                      "value": null,
                                      "visibility": "internal"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "name": "uint",
                                          "type": "uint256"
                                        },
                                        "id": 259,
                                        "name": "ElementaryTypeName",
                                        "src": "4993:4:0"
                                      }
                                    ],
                                    "id": 260,
                                    "name": "VariableDeclaration",
                                    "src": "4993:6:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 261,
                                    "name": "Literal",
                                    "src": "5000:1:0"
                                  }
                                ],
                                "id": 262,
                                "name": "VariableDeclarationStatement",
                                "src": "4993:8:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "<",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 260,
                                      "type": "uint256",
                                      "value": "j"
                                    },
                                    "id": 263,
                                    "name": "Identifier",
                                    "src": "5003:1:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "length",
                                      "referencedDeclaration": null,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 238,
                                          "type": "string storage ref[] storage pointer",
                                          "value": "target"
                                        },
                                        "id": 264,
                                        "name": "Identifier",
                                        "src": "5007:6:0"
                                      }
                                    ],
                                    "id": 265,
                                    "name": "MemberAccess",
                                    "src": "5007:13:0"
                                  }
                                ],
                                "id": 266,
                                "name": "BinaryOperation",
                                "src": "5003:17:0"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "++",
                                      "prefix": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 260,
                                          "type": "uint256",
                                          "value": "j"
                                        },
                                        "id": 267,
                                        "name": "Identifier",
                                        "src": "5022:1:0"
                                      }
                                    ],
                                    "id": 268,
                                    "name": "UnaryOperation",
                                    "src": "5022:3:0"
                                  }
                                ],
                                "id": 269,
                                "name": "ExpressionStatement",
                                "src": "5022:3:0"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "falseBody": null
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          },
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "operator": "==",
                                          "type": "bool"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "isStructConstructorCall": false,
                                              "lValueRequested": false,
                                              "names": [
                                                null
                                              ],
                                              "type": "bytes32",
                                              "type_conversion": false
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": [
                                                    {
                                                      "typeIdentifier": "t_bytes_memory_ptr",
                                                      "typeString": "bytes memory"
                                                    }
                                                  ],
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1082,
                                                  "type": "function (bytes memory) pure returns (bytes32)",
                                                  "value": "keccak256"
                                                },
                                                "id": 270,
                                                "name": "Identifier",
                                                "src": "5250:9:0"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "isStructConstructorCall": false,
                                                  "lValueRequested": false,
                                                  "names": [
                                                    null
                                                  ],
                                                  "type": "bytes memory",
                                                  "type_conversion": false
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": [
                                                        {
                                                          "typeIdentifier": "t_string_memory",
                                                          "typeString": "string memory"
                                                        }
                                                      ],
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": true,
                                                      "lValueRequested": false,
                                                      "member_name": "encodePacked",
                                                      "referencedDeclaration": null,
                                                      "type": "function () pure returns (bytes memory)"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1075,
                                                          "type": "abi",
                                                          "value": "abi"
                                                        },
                                                        "id": 271,
                                                        "name": "Identifier",
                                                        "src": "5260:3:0"
                                                      }
                                                    ],
                                                    "id": 272,
                                                    "name": "MemberAccess",
                                                    "src": "5260:16:0"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "string memory"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 241,
                                                          "type": "string memory[] memory",
                                                          "value": "update"
                                                        },
                                                        "id": 273,
                                                        "name": "Identifier",
                                                        "src": "5277:6:0"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 245,
                                                          "type": "uint256",
                                                          "value": "i"
                                                        },
                                                        "id": 274,
                                                        "name": "Identifier",
                                                        "src": "5284:1:0"
                                                      }
                                                    ],
                                                    "id": 275,
                                                    "name": "IndexAccess",
                                                    "src": "5277:9:0"
                                                  }
                                                ],
                                                "id": 276,
                                                "name": "FunctionCall",
                                                "src": "5260:27:0"
                                              }
                                            ],
                                            "id": 277,
                                            "name": "FunctionCall",
                                            "src": "5250:38:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "isStructConstructorCall": false,
                                              "lValueRequested": false,
                                              "names": [
                                                null
                                              ],
                                              "type": "bytes32",
                                              "type_conversion": false
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": [
                                                    {
                                                      "typeIdentifier": "t_bytes_memory_ptr",
                                                      "typeString": "bytes memory"
                                                    }
                                                  ],
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1082,
                                                  "type": "function (bytes memory) pure returns (bytes32)",
                                                  "value": "keccak256"
                                                },
                                                "id": 278,
                                                "name": "Identifier",
                                                "src": "5292:9:0"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "isStructConstructorCall": false,
                                                  "lValueRequested": false,
                                                  "names": [
                                                    null
                                                  ],
                                                  "type": "bytes memory",
                                                  "type_conversion": false
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": [
                                                        {
                                                          "typeIdentifier": "t_string_storage",
                                                          "typeString": "string storage ref"
                                                        }
                                                      ],
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": true,
                                                      "lValueRequested": false,
                                                      "member_name": "encodePacked",
                                                      "referencedDeclaration": null,
                                                      "type": "function () pure returns (bytes memory)"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1075,
                                                          "type": "abi",
                                                          "value": "abi"
                                                        },
                                                        "id": 279,
                                                        "name": "Identifier",
                                                        "src": "5302:3:0"
                                                      }
                                                    ],
                                                    "id": 280,
                                                    "name": "MemberAccess",
                                                    "src": "5302:16:0"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "string storage ref"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 238,
                                                          "type": "string storage ref[] storage pointer",
                                                          "value": "target"
                                                        },
                                                        "id": 281,
                                                        "name": "Identifier",
                                                        "src": "5319:6:0"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 260,
                                                          "type": "uint256",
                                                          "value": "j"
                                                        },
                                                        "id": 282,
                                                        "name": "Identifier",
                                                        "src": "5326:1:0"
                                                      }
                                                    ],
                                                    "id": 283,
                                                    "name": "IndexAccess",
                                                    "src": "5319:9:0"
                                                  }
                                                ],
                                                "id": 284,
                                                "name": "FunctionCall",
                                                "src": "5302:27:0"
                                              }
                                            ],
                                            "id": 285,
                                            "name": "FunctionCall",
                                            "src": "5292:38:0"
                                          }
                                        ],
                                        "id": 286,
                                        "name": "BinaryOperation",
                                        "src": "5250:80:0"
                                      },
                                      {
                                        "children": [
                                          {
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "operator": "=",
                                                  "type": "bool"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 256,
                                                      "type": "bool",
                                                      "value": "newItem"
                                                    },
                                                    "id": 287,
                                                    "name": "Identifier",
                                                    "src": "5345:7:0"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "hexvalue": "66616c7365",
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": true,
                                                      "lValueRequested": false,
                                                      "subdenomination": null,
                                                      "token": "bool",
                                                      "type": "bool",
                                                      "value": "false"
                                                    },
                                                    "id": 288,
                                                    "name": "Literal",
                                                    "src": "5355:5:0"
                                                  }
                                                ],
                                                "id": 289,
                                                "name": "Assignment",
                                                "src": "5345:15:0"
                                              }
                                            ],
                                            "id": 290,
                                            "name": "ExpressionStatement",
                                            "src": "5345:15:0"
                                          }
                                        ],
                                        "id": 291,
                                        "name": "Block",
                                        "src": "5333:38:0"
                                      }
                                    ],
                                    "id": 292,
                                    "name": "IfStatement",
                                    "src": "5246:125:0"
                                  }
                                ],
                                "id": 293,
                                "name": "Block",
                                "src": "5027:352:0"
                              }
                            ],
                            "id": 294,
                            "name": "ForStatement",
                            "src": "4988:391:0"
                          },
                          {
                            "attributes": {
                              "falseBody": null
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 256,
                                      "type": "bool",
                                      "value": "newItem"
                                    },
                                    "id": 295,
                                    "name": "Identifier",
                                    "src": "5392:7:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "74727565",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "bool",
                                      "type": "bool",
                                      "value": "true"
                                    },
                                    "id": 296,
                                    "name": "Literal",
                                    "src": "5403:4:0"
                                  }
                                ],
                                "id": 297,
                                "name": "BinaryOperation",
                                "src": "5392:15:0"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "isStructConstructorCall": false,
                                          "lValueRequested": false,
                                          "names": [
                                            null
                                          ],
                                          "type": "uint256",
                                          "type_conversion": false
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_string_memory",
                                                  "typeString": "string memory"
                                                }
                                              ],
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "push",
                                              "referencedDeclaration": null,
                                              "type": "function (string storage ref) returns (uint256)"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 238,
                                                  "type": "string storage ref[] storage pointer",
                                                  "value": "target"
                                                },
                                                "id": 298,
                                                "name": "Identifier",
                                                "src": "5419:6:0"
                                              }
                                            ],
                                            "id": 300,
                                            "name": "MemberAccess",
                                            "src": "5419:11:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "string memory"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 241,
                                                  "type": "string memory[] memory",
                                                  "value": "update"
                                                },
                                                "id": 301,
                                                "name": "Identifier",
                                                "src": "5431:6:0"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 245,
                                                  "type": "uint256",
                                                  "value": "i"
                                                },
                                                "id": 302,
                                                "name": "Identifier",
                                                "src": "5438:1:0"
                                              }
                                            ],
                                            "id": 303,
                                            "name": "IndexAccess",
                                            "src": "5431:9:0"
                                          }
                                        ],
                                        "id": 304,
                                        "name": "FunctionCall",
                                        "src": "5419:22:0"
                                      }
                                    ],
                                    "id": 305,
                                    "name": "ExpressionStatement",
                                    "src": "5419:22:0"
                                  }
                                ],
                                "id": 306,
                                "name": "Block",
                                "src": "5409:41:0"
                              }
                            ],
                            "id": 307,
                            "name": "IfStatement",
                            "src": "5387:63:0"
                          }
                        ],
                        "id": 308,
                        "name": "Block",
                        "src": "4953:503:0"
                      }
                    ],
                    "id": 309,
                    "name": "ForStatement",
                    "src": "4914:542:0"
                  }
                ],
                "id": 310,
                "name": "Block",
                "src": "4908:552:0"
              }
            ],
            "id": 311,
            "name": "FunctionDefinition",
            "src": "4828:632:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "upsertGraph",
              "scope": 597,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "stringId",
                      "scope": 414,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 312,
                        "name": "ElementaryTypeName",
                        "src": "5490:6:0"
                      }
                    ],
                    "id": 313,
                    "name": "VariableDeclaration",
                    "src": "5490:22:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "label",
                      "scope": 414,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 314,
                        "name": "ElementaryTypeName",
                        "src": "5518:6:0"
                      }
                    ],
                    "id": 315,
                    "name": "VariableDeclaration",
                    "src": "5518:19:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "nodes",
                      "scope": 414,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string[]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "string[]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string"
                            },
                            "id": 316,
                            "name": "ElementaryTypeName",
                            "src": "5543:6:0"
                          }
                        ],
                        "id": 317,
                        "name": "ArrayTypeName",
                        "src": "5543:8:0"
                      }
                    ],
                    "id": 318,
                    "name": "VariableDeclaration",
                    "src": "5543:21:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "edges",
                      "scope": 414,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string[]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "string[]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string"
                            },
                            "id": 319,
                            "name": "ElementaryTypeName",
                            "src": "5570:6:0"
                          }
                        ],
                        "id": 320,
                        "name": "ArrayTypeName",
                        "src": "5570:8:0"
                      }
                    ],
                    "id": 321,
                    "name": "VariableDeclaration",
                    "src": "5570:21:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "attachments",
                      "scope": 414,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string[]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "string[]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string"
                            },
                            "id": 322,
                            "name": "ElementaryTypeName",
                            "src": "5597:6:0"
                          }
                        ],
                        "id": 323,
                        "name": "ArrayTypeName",
                        "src": "5597:8:0"
                      }
                    ],
                    "id": 324,
                    "name": "VariableDeclaration",
                    "src": "5597:27:0"
                  }
                ],
                "id": 325,
                "name": "ParameterList",
                "src": "5484:144:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 326,
                "name": "ParameterList",
                "src": "5636:0:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        328
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "id",
                          "scope": 413,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 327,
                            "name": "ElementaryTypeName",
                            "src": "5642:7:0"
                          }
                        ],
                        "id": 328,
                        "name": "VariableDeclaration",
                        "src": "5642:10:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1082,
                              "type": "function (bytes memory) pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 329,
                            "name": "Identifier",
                            "src": "5655:9:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "member_name": "encodePacked",
                                  "referencedDeclaration": null,
                                  "type": "function () pure returns (bytes memory)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1075,
                                      "type": "abi",
                                      "value": "abi"
                                    },
                                    "id": 330,
                                    "name": "Identifier",
                                    "src": "5665:3:0"
                                  }
                                ],
                                "id": 331,
                                "name": "MemberAccess",
                                "src": "5665:16:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 313,
                                  "type": "string memory",
                                  "value": "stringId"
                                },
                                "id": 332,
                                "name": "Identifier",
                                "src": "5682:8:0"
                              }
                            ],
                            "id": 333,
                            "name": "FunctionCall",
                            "src": "5665:26:0"
                          }
                        ],
                        "id": 334,
                        "name": "FunctionCall",
                        "src": "5655:37:0"
                      }
                    ],
                    "id": 335,
                    "name": "VariableDeclarationStatement",
                    "src": "5642:50:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "owner",
                              "referencedDeclaration": 139,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct ConsensusGraph.Graph storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 155,
                                      "type": "mapping(bytes32 => struct ConsensusGraph.Graph storage ref)",
                                      "value": "Graphs"
                                    },
                                    "id": 336,
                                    "name": "Identifier",
                                    "src": "5741:6:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 328,
                                      "type": "bytes32",
                                      "value": "id"
                                    },
                                    "id": 337,
                                    "name": "Identifier",
                                    "src": "5748:2:0"
                                  }
                                ],
                                "id": 338,
                                "name": "IndexAccess",
                                "src": "5741:10:0"
                              }
                            ],
                            "id": 339,
                            "name": "MemberAccess",
                            "src": "5741:16:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address payable",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 340,
                                "name": "ElementaryTypeNameExpression",
                                "src": "5761:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 341,
                                "name": "Literal",
                                "src": "5769:1:0"
                              }
                            ],
                            "id": 342,
                            "name": "FunctionCall",
                            "src": "5761:10:0"
                          }
                        ],
                        "id": 343,
                        "name": "BinaryOperation",
                        "src": "5741:30:0"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "push",
                                      "referencedDeclaration": null,
                                      "type": "function (bytes32) returns (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 158,
                                          "type": "bytes32[] storage ref",
                                          "value": "GraphIds"
                                        },
                                        "id": 344,
                                        "name": "Identifier",
                                        "src": "5781:8:0"
                                      }
                                    ],
                                    "id": 346,
                                    "name": "MemberAccess",
                                    "src": "5781:13:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 328,
                                      "type": "bytes32",
                                      "value": "id"
                                    },
                                    "id": 347,
                                    "name": "Identifier",
                                    "src": "5795:2:0"
                                  }
                                ],
                                "id": 348,
                                "name": "FunctionCall",
                                "src": "5781:17:0"
                              }
                            ],
                            "id": 349,
                            "name": "ExpressionStatement",
                            "src": "5781:17:0"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "struct ConsensusGraph.Graph storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "struct ConsensusGraph.Graph storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 155,
                                          "type": "mapping(bytes32 => struct ConsensusGraph.Graph storage ref)",
                                          "value": "Graphs"
                                        },
                                        "id": 350,
                                        "name": "Identifier",
                                        "src": "5806:6:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 328,
                                          "type": "bytes32",
                                          "value": "id"
                                        },
                                        "id": 351,
                                        "name": "Identifier",
                                        "src": "5813:2:0"
                                      }
                                    ],
                                    "id": 352,
                                    "name": "IndexAccess",
                                    "src": "5806:10:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": true,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "struct ConsensusGraph.Graph memory",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            },
                                            {
                                              "typeIdentifier": "t_address_payable",
                                              "typeString": "address payable"
                                            },
                                            {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            },
                                            {
                                              "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                              "typeString": "string memory[] memory"
                                            },
                                            {
                                              "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                              "typeString": "string memory[] memory"
                                            },
                                            {
                                              "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                              "typeString": "string memory[] memory"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 151,
                                          "type": "type(struct ConsensusGraph.Graph storage pointer)",
                                          "value": "Graph"
                                        },
                                        "id": 353,
                                        "name": "Identifier",
                                        "src": "5819:5:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 313,
                                          "type": "string memory",
                                          "value": "stringId"
                                        },
                                        "id": 354,
                                        "name": "Identifier",
                                        "src": "5825:8:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "origin",
                                          "referencedDeclaration": null,
                                          "type": "address payable"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1100,
                                              "type": "tx",
                                              "value": "tx"
                                            },
                                            "id": 355,
                                            "name": "Identifier",
                                            "src": "5835:2:0"
                                          }
                                        ],
                                        "id": 356,
                                        "name": "MemberAccess",
                                        "src": "5835:9:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 315,
                                          "type": "string memory",
                                          "value": "label"
                                        },
                                        "id": 357,
                                        "name": "Identifier",
                                        "src": "5846:5:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 318,
                                          "type": "string memory[] memory",
                                          "value": "nodes"
                                        },
                                        "id": 358,
                                        "name": "Identifier",
                                        "src": "5853:5:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 321,
                                          "type": "string memory[] memory",
                                          "value": "edges"
                                        },
                                        "id": 359,
                                        "name": "Identifier",
                                        "src": "5860:5:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 324,
                                          "type": "string memory[] memory",
                                          "value": "attachments"
                                        },
                                        "id": 360,
                                        "name": "Identifier",
                                        "src": "5867:11:0"
                                      }
                                    ],
                                    "id": 361,
                                    "name": "FunctionCall",
                                    "src": "5819:60:0"
                                  }
                                ],
                                "id": 362,
                                "name": "Assignment",
                                "src": "5806:73:0"
                              }
                            ],
                            "id": 363,
                            "name": "ExpressionStatement",
                            "src": "5806:73:0"
                          }
                        ],
                        "id": 364,
                        "name": "Block",
                        "src": "5773:113:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "||",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "owner",
                                      "referencedDeclaration": 139,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ConsensusGraph.Graph storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 155,
                                              "type": "mapping(bytes32 => struct ConsensusGraph.Graph storage ref)",
                                              "value": "Graphs"
                                            },
                                            "id": 365,
                                            "name": "Identifier",
                                            "src": "6006:6:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 328,
                                              "type": "bytes32",
                                              "value": "id"
                                            },
                                            "id": 366,
                                            "name": "Identifier",
                                            "src": "6013:2:0"
                                          }
                                        ],
                                        "id": 367,
                                        "name": "IndexAccess",
                                        "src": "6006:10:0"
                                      }
                                    ],
                                    "id": 368,
                                    "name": "MemberAccess",
                                    "src": "6006:16:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "address",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_contract$_ConsensusGraph_$597",
                                              "typeString": "contract ConsensusGraph"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(address)",
                                          "value": "address"
                                        },
                                        "id": 369,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "6026:7:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1108,
                                          "type": "contract ConsensusGraph",
                                          "value": "this"
                                        },
                                        "id": 370,
                                        "name": "Identifier",
                                        "src": "6034:4:0"
                                      }
                                    ],
                                    "id": 371,
                                    "name": "FunctionCall",
                                    "src": "6026:13:0"
                                  }
                                ],
                                "id": 372,
                                "name": "BinaryOperation",
                                "src": "6006:33:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "owner",
                                      "referencedDeclaration": 139,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ConsensusGraph.Graph storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 155,
                                              "type": "mapping(bytes32 => struct ConsensusGraph.Graph storage ref)",
                                              "value": "Graphs"
                                            },
                                            "id": 373,
                                            "name": "Identifier",
                                            "src": "6043:6:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 328,
                                              "type": "bytes32",
                                              "value": "id"
                                            },
                                            "id": 374,
                                            "name": "Identifier",
                                            "src": "6050:2:0"
                                          }
                                        ],
                                        "id": 375,
                                        "name": "IndexAccess",
                                        "src": "6043:10:0"
                                      }
                                    ],
                                    "id": 376,
                                    "name": "MemberAccess",
                                    "src": "6043:16:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "origin",
                                      "referencedDeclaration": null,
                                      "type": "address payable"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1100,
                                          "type": "tx",
                                          "value": "tx"
                                        },
                                        "id": 377,
                                        "name": "Identifier",
                                        "src": "6063:2:0"
                                      }
                                    ],
                                    "id": 378,
                                    "name": "MemberAccess",
                                    "src": "6063:9:0"
                                  }
                                ],
                                "id": 379,
                                "name": "BinaryOperation",
                                "src": "6043:29:0"
                              }
                            ],
                            "id": 380,
                            "name": "BinaryOperation",
                            "src": "6006:66:0"
                          },
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "tuple()",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                              "typeString": "string storage ref[] storage ref"
                                            },
                                            {
                                              "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                              "typeString": "string memory[] memory"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 311,
                                          "type": "function (string storage ref[] storage pointer,string memory[] memory)",
                                          "value": "upsertArrays"
                                        },
                                        "id": 381,
                                        "name": "Identifier",
                                        "src": "6083:12:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "NodeIds",
                                          "referencedDeclaration": 144,
                                          "type": "string storage ref[] storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "struct ConsensusGraph.Graph storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 155,
                                                  "type": "mapping(bytes32 => struct ConsensusGraph.Graph storage ref)",
                                                  "value": "Graphs"
                                                },
                                                "id": 382,
                                                "name": "Identifier",
                                                "src": "6096:6:0"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 328,
                                                  "type": "bytes32",
                                                  "value": "id"
                                                },
                                                "id": 383,
                                                "name": "Identifier",
                                                "src": "6103:2:0"
                                              }
                                            ],
                                            "id": 384,
                                            "name": "IndexAccess",
                                            "src": "6096:10:0"
                                          }
                                        ],
                                        "id": 385,
                                        "name": "MemberAccess",
                                        "src": "6096:18:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 318,
                                          "type": "string memory[] memory",
                                          "value": "nodes"
                                        },
                                        "id": 386,
                                        "name": "Identifier",
                                        "src": "6116:5:0"
                                      }
                                    ],
                                    "id": 387,
                                    "name": "FunctionCall",
                                    "src": "6083:39:0"
                                  }
                                ],
                                "id": 388,
                                "name": "ExpressionStatement",
                                "src": "6083:39:0"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "tuple()",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                              "typeString": "string storage ref[] storage ref"
                                            },
                                            {
                                              "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                              "typeString": "string memory[] memory"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 311,
                                          "type": "function (string storage ref[] storage pointer,string memory[] memory)",
                                          "value": "upsertArrays"
                                        },
                                        "id": 389,
                                        "name": "Identifier",
                                        "src": "6130:12:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "EdgeIds",
                                          "referencedDeclaration": 147,
                                          "type": "string storage ref[] storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "struct ConsensusGraph.Graph storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 155,
                                                  "type": "mapping(bytes32 => struct ConsensusGraph.Graph storage ref)",
                                                  "value": "Graphs"
                                                },
                                                "id": 390,
                                                "name": "Identifier",
                                                "src": "6143:6:0"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 328,
                                                  "type": "bytes32",
                                                  "value": "id"
                                                },
                                                "id": 391,
                                                "name": "Identifier",
                                                "src": "6150:2:0"
                                              }
                                            ],
                                            "id": 392,
                                            "name": "IndexAccess",
                                            "src": "6143:10:0"
                                          }
                                        ],
                                        "id": 393,
                                        "name": "MemberAccess",
                                        "src": "6143:18:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 321,
                                          "type": "string memory[] memory",
                                          "value": "edges"
                                        },
                                        "id": 394,
                                        "name": "Identifier",
                                        "src": "6163:5:0"
                                      }
                                    ],
                                    "id": 395,
                                    "name": "FunctionCall",
                                    "src": "6130:39:0"
                                  }
                                ],
                                "id": 396,
                                "name": "ExpressionStatement",
                                "src": "6130:39:0"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "tuple()",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                              "typeString": "string storage ref[] storage ref"
                                            },
                                            {
                                              "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                                              "typeString": "string memory[] memory"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 311,
                                          "type": "function (string storage ref[] storage pointer,string memory[] memory)",
                                          "value": "upsertArrays"
                                        },
                                        "id": 397,
                                        "name": "Identifier",
                                        "src": "6177:12:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "AttachmentIds",
                                          "referencedDeclaration": 150,
                                          "type": "string storage ref[] storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "struct ConsensusGraph.Graph storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 155,
                                                  "type": "mapping(bytes32 => struct ConsensusGraph.Graph storage ref)",
                                                  "value": "Graphs"
                                                },
                                                "id": 398,
                                                "name": "Identifier",
                                                "src": "6190:6:0"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 328,
                                                  "type": "bytes32",
                                                  "value": "id"
                                                },
                                                "id": 399,
                                                "name": "Identifier",
                                                "src": "6197:2:0"
                                              }
                                            ],
                                            "id": 400,
                                            "name": "IndexAccess",
                                            "src": "6190:10:0"
                                          }
                                        ],
                                        "id": 401,
                                        "name": "MemberAccess",
                                        "src": "6190:24:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 324,
                                          "type": "string memory[] memory",
                                          "value": "attachments"
                                        },
                                        "id": 402,
                                        "name": "Identifier",
                                        "src": "6216:11:0"
                                      }
                                    ],
                                    "id": 403,
                                    "name": "FunctionCall",
                                    "src": "6177:51:0"
                                  }
                                ],
                                "id": 404,
                                "name": "ExpressionStatement",
                                "src": "6177:51:0"
                              }
                            ],
                            "id": 405,
                            "name": "Block",
                            "src": "6075:160:0"
                          },
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "tuple()",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_stringliteral_3d00755dddde36b7333f308aaa8ce76f43837b3b7d3b56e8bf0f8bc2537b6b72",
                                              "typeString": "literal_string \"Cannot update another owners graph view\""
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            1093,
                                            1094
                                          ],
                                          "referencedDeclaration": 1094,
                                          "type": "function (string memory) pure",
                                          "value": "revert"
                                        },
                                        "id": 406,
                                        "name": "Identifier",
                                        "src": "6300:6:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "43616e6e6f742075706461746520616e6f74686572206f776e6572732067726170682076696577",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "string",
                                          "type": "literal_string \"Cannot update another owners graph view\"",
                                          "value": "Cannot update another owners graph view"
                                        },
                                        "id": 407,
                                        "name": "Literal",
                                        "src": "6307:41:0"
                                      }
                                    ],
                                    "id": 408,
                                    "name": "FunctionCall",
                                    "src": "6300:49:0"
                                  }
                                ],
                                "id": 409,
                                "name": "ExpressionStatement",
                                "src": "6300:49:0"
                              }
                            ],
                            "id": 410,
                            "name": "Block",
                            "src": "6292:64:0"
                          }
                        ],
                        "id": 411,
                        "name": "IfStatement",
                        "src": "6001:355:0"
                      }
                    ],
                    "id": 412,
                    "name": "IfStatement",
                    "src": "5737:619:0"
                  }
                ],
                "id": 413,
                "name": "Block",
                "src": "5636:724:0"
              }
            ],
            "id": 414,
            "name": "FunctionDefinition",
            "src": "5464:896:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "upsertNode",
              "scope": 597,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "stringId",
                      "scope": 476,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 415,
                        "name": "ElementaryTypeName",
                        "src": "6385:6:0"
                      }
                    ],
                    "id": 416,
                    "name": "VariableDeclaration",
                    "src": "6385:22:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "json",
                      "scope": 476,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 417,
                        "name": "ElementaryTypeName",
                        "src": "6409:6:0"
                      }
                    ],
                    "id": 418,
                    "name": "VariableDeclaration",
                    "src": "6409:18:0"
                  }
                ],
                "id": 419,
                "name": "ParameterList",
                "src": "6384:44:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 420,
                "name": "ParameterList",
                "src": "6436:0:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        422
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "id",
                          "scope": 475,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 421,
                            "name": "ElementaryTypeName",
                            "src": "6442:7:0"
                          }
                        ],
                        "id": 422,
                        "name": "VariableDeclaration",
                        "src": "6442:10:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1082,
                              "type": "function (bytes memory) pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 423,
                            "name": "Identifier",
                            "src": "6455:9:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "member_name": "encodePacked",
                                  "referencedDeclaration": null,
                                  "type": "function () pure returns (bytes memory)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1075,
                                      "type": "abi",
                                      "value": "abi"
                                    },
                                    "id": 424,
                                    "name": "Identifier",
                                    "src": "6465:3:0"
                                  }
                                ],
                                "id": 425,
                                "name": "MemberAccess",
                                "src": "6465:16:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 416,
                                  "type": "string memory",
                                  "value": "stringId"
                                },
                                "id": 426,
                                "name": "Identifier",
                                "src": "6482:8:0"
                              }
                            ],
                            "id": 427,
                            "name": "FunctionCall",
                            "src": "6465:26:0"
                          }
                        ],
                        "id": 428,
                        "name": "FunctionCall",
                        "src": "6455:37:0"
                      }
                    ],
                    "id": 429,
                    "name": "VariableDeclarationStatement",
                    "src": "6442:50:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "owner",
                              "referencedDeclaration": 69,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct ConsensusGraph.Node storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 76,
                                      "type": "mapping(bytes32 => struct ConsensusGraph.Node storage ref)",
                                      "value": "Nodes"
                                    },
                                    "id": 430,
                                    "name": "Identifier",
                                    "src": "6502:5:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 422,
                                      "type": "bytes32",
                                      "value": "id"
                                    },
                                    "id": 431,
                                    "name": "Identifier",
                                    "src": "6508:2:0"
                                  }
                                ],
                                "id": 432,
                                "name": "IndexAccess",
                                "src": "6502:9:0"
                              }
                            ],
                            "id": 433,
                            "name": "MemberAccess",
                            "src": "6502:15:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address payable",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 434,
                                "name": "ElementaryTypeNameExpression",
                                "src": "6521:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 435,
                                "name": "Literal",
                                "src": "6529:1:0"
                              }
                            ],
                            "id": 436,
                            "name": "FunctionCall",
                            "src": "6521:10:0"
                          }
                        ],
                        "id": 437,
                        "name": "BinaryOperation",
                        "src": "6502:29:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "falseBody": null
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "!=",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "owner",
                                      "referencedDeclaration": 69,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ConsensusGraph.Node storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 76,
                                              "type": "mapping(bytes32 => struct ConsensusGraph.Node storage ref)",
                                              "value": "Nodes"
                                            },
                                            "id": 438,
                                            "name": "Identifier",
                                            "src": "6545:5:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 422,
                                              "type": "bytes32",
                                              "value": "id"
                                            },
                                            "id": 439,
                                            "name": "Identifier",
                                            "src": "6551:2:0"
                                          }
                                        ],
                                        "id": 440,
                                        "name": "IndexAccess",
                                        "src": "6545:9:0"
                                      }
                                    ],
                                    "id": 441,
                                    "name": "MemberAccess",
                                    "src": "6545:15:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "origin",
                                      "referencedDeclaration": null,
                                      "type": "address payable"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1100,
                                          "type": "tx",
                                          "value": "tx"
                                        },
                                        "id": 442,
                                        "name": "Identifier",
                                        "src": "6564:2:0"
                                      }
                                    ],
                                    "id": 443,
                                    "name": "MemberAccess",
                                    "src": "6564:9:0"
                                  }
                                ],
                                "id": 444,
                                "name": "BinaryOperation",
                                "src": "6545:28:0"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "isStructConstructorCall": false,
                                          "lValueRequested": false,
                                          "names": [
                                            null
                                          ],
                                          "type": "tuple()",
                                          "type_conversion": false
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_stringliteral_6ea48d9ebb4fb27712901c6dc48d5a651fdcd40222094aaa670273d76355e57f",
                                                  "typeString": "literal_string \"Only owner can update node\""
                                                }
                                              ],
                                              "overloadedDeclarations": [
                                                1093,
                                                1094
                                              ],
                                              "referencedDeclaration": 1094,
                                              "type": "function (string memory) pure",
                                              "value": "revert"
                                            },
                                            "id": 445,
                                            "name": "Identifier",
                                            "src": "6585:6:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "hexvalue": "4f6e6c79206f776e65722063616e20757064617465206e6f6465",
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "subdenomination": null,
                                              "token": "string",
                                              "type": "literal_string \"Only owner can update node\"",
                                              "value": "Only owner can update node"
                                            },
                                            "id": 446,
                                            "name": "Literal",
                                            "src": "6592:28:0"
                                          }
                                        ],
                                        "id": 447,
                                        "name": "FunctionCall",
                                        "src": "6585:36:0"
                                      }
                                    ],
                                    "id": 448,
                                    "name": "ExpressionStatement",
                                    "src": "6585:36:0"
                                  }
                                ],
                                "id": 449,
                                "name": "Block",
                                "src": "6575:55:0"
                              }
                            ],
                            "id": 450,
                            "name": "IfStatement",
                            "src": "6541:89:0"
                          }
                        ],
                        "id": 451,
                        "name": "Block",
                        "src": "6533:103:0"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "push",
                                      "referencedDeclaration": null,
                                      "type": "function (bytes32) returns (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 79,
                                          "type": "bytes32[] storage ref",
                                          "value": "NodeIds"
                                        },
                                        "id": 452,
                                        "name": "Identifier",
                                        "src": "6650:7:0"
                                      }
                                    ],
                                    "id": 454,
                                    "name": "MemberAccess",
                                    "src": "6650:12:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 422,
                                      "type": "bytes32",
                                      "value": "id"
                                    },
                                    "id": 455,
                                    "name": "Identifier",
                                    "src": "6663:2:0"
                                  }
                                ],
                                "id": 456,
                                "name": "FunctionCall",
                                "src": "6650:16:0"
                              }
                            ],
                            "id": 457,
                            "name": "ExpressionStatement",
                            "src": "6650:16:0"
                          }
                        ],
                        "id": 458,
                        "name": "Block",
                        "src": "6642:31:0"
                      }
                    ],
                    "id": 459,
                    "name": "IfStatement",
                    "src": "6498:175:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "struct ConsensusGraph.Node storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct ConsensusGraph.Node storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 76,
                                  "type": "mapping(bytes32 => struct ConsensusGraph.Node storage ref)",
                                  "value": "Nodes"
                                },
                                "id": 460,
                                "name": "Identifier",
                                "src": "6678:5:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 422,
                                  "type": "bytes32",
                                  "value": "id"
                                },
                                "id": 461,
                                "name": "Identifier",
                                "src": "6684:2:0"
                              }
                            ],
                            "id": 462,
                            "name": "IndexAccess",
                            "src": "6678:9:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": true,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "struct ConsensusGraph.Node memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    },
                                    {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    },
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 72,
                                  "type": "type(struct ConsensusGraph.Node storage pointer)",
                                  "value": "Node"
                                },
                                "id": 463,
                                "name": "Identifier",
                                "src": "6690:4:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 416,
                                  "type": "string memory",
                                  "value": "stringId"
                                },
                                "id": 464,
                                "name": "Identifier",
                                "src": "6695:8:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "origin",
                                  "referencedDeclaration": null,
                                  "type": "address payable"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1100,
                                      "type": "tx",
                                      "value": "tx"
                                    },
                                    "id": 465,
                                    "name": "Identifier",
                                    "src": "6705:2:0"
                                  }
                                ],
                                "id": 466,
                                "name": "MemberAccess",
                                "src": "6705:9:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 418,
                                  "type": "string memory",
                                  "value": "json"
                                },
                                "id": 467,
                                "name": "Identifier",
                                "src": "6716:4:0"
                              }
                            ],
                            "id": 468,
                            "name": "FunctionCall",
                            "src": "6690:31:0"
                          }
                        ],
                        "id": 469,
                        "name": "Assignment",
                        "src": "6678:43:0"
                      }
                    ],
                    "id": 470,
                    "name": "ExpressionStatement",
                    "src": "6678:43:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 92,
                              "type": "function (string memory)",
                              "value": "NewNode"
                            },
                            "id": 471,
                            "name": "Identifier",
                            "src": "6732:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 416,
                              "type": "string memory",
                              "value": "stringId"
                            },
                            "id": 472,
                            "name": "Identifier",
                            "src": "6740:8:0"
                          }
                        ],
                        "id": 473,
                        "name": "FunctionCall",
                        "src": "6732:17:0"
                      }
                    ],
                    "id": 474,
                    "name": "EmitStatement",
                    "src": "6727:22:0"
                  }
                ],
                "id": 475,
                "name": "Block",
                "src": "6436:318:0"
              }
            ],
            "id": 476,
            "name": "FunctionDefinition",
            "src": "6365:389:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "upsertEdge",
              "scope": 597,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "stringId",
                      "scope": 538,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 477,
                        "name": "ElementaryTypeName",
                        "src": "6778:6:0"
                      }
                    ],
                    "id": 478,
                    "name": "VariableDeclaration",
                    "src": "6778:22:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "json",
                      "scope": 538,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 479,
                        "name": "ElementaryTypeName",
                        "src": "6802:6:0"
                      }
                    ],
                    "id": 480,
                    "name": "VariableDeclaration",
                    "src": "6802:18:0"
                  }
                ],
                "id": 481,
                "name": "ParameterList",
                "src": "6777:44:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 482,
                "name": "ParameterList",
                "src": "6829:0:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        484
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "id",
                          "scope": 537,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 483,
                            "name": "ElementaryTypeName",
                            "src": "6837:7:0"
                          }
                        ],
                        "id": 484,
                        "name": "VariableDeclaration",
                        "src": "6837:10:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1082,
                              "type": "function (bytes memory) pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 485,
                            "name": "Identifier",
                            "src": "6850:9:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "member_name": "encodePacked",
                                  "referencedDeclaration": null,
                                  "type": "function () pure returns (bytes memory)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1075,
                                      "type": "abi",
                                      "value": "abi"
                                    },
                                    "id": 486,
                                    "name": "Identifier",
                                    "src": "6860:3:0"
                                  }
                                ],
                                "id": 487,
                                "name": "MemberAccess",
                                "src": "6860:16:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 478,
                                  "type": "string memory",
                                  "value": "stringId"
                                },
                                "id": 488,
                                "name": "Identifier",
                                "src": "6877:8:0"
                              }
                            ],
                            "id": 489,
                            "name": "FunctionCall",
                            "src": "6860:26:0"
                          }
                        ],
                        "id": 490,
                        "name": "FunctionCall",
                        "src": "6850:37:0"
                      }
                    ],
                    "id": 491,
                    "name": "VariableDeclarationStatement",
                    "src": "6837:50:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "owner",
                              "referencedDeclaration": 96,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct ConsensusGraph.Edge storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 103,
                                      "type": "mapping(bytes32 => struct ConsensusGraph.Edge storage ref)",
                                      "value": "Edges"
                                    },
                                    "id": 492,
                                    "name": "Identifier",
                                    "src": "6899:5:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 484,
                                      "type": "bytes32",
                                      "value": "id"
                                    },
                                    "id": 493,
                                    "name": "Identifier",
                                    "src": "6905:2:0"
                                  }
                                ],
                                "id": 494,
                                "name": "IndexAccess",
                                "src": "6899:9:0"
                              }
                            ],
                            "id": 495,
                            "name": "MemberAccess",
                            "src": "6899:15:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address payable",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 496,
                                "name": "ElementaryTypeNameExpression",
                                "src": "6918:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 497,
                                "name": "Literal",
                                "src": "6926:1:0"
                              }
                            ],
                            "id": 498,
                            "name": "FunctionCall",
                            "src": "6918:10:0"
                          }
                        ],
                        "id": 499,
                        "name": "BinaryOperation",
                        "src": "6899:29:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "falseBody": null
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "!=",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "owner",
                                      "referencedDeclaration": 96,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ConsensusGraph.Edge storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 103,
                                              "type": "mapping(bytes32 => struct ConsensusGraph.Edge storage ref)",
                                              "value": "Edges"
                                            },
                                            "id": 500,
                                            "name": "Identifier",
                                            "src": "6944:5:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 484,
                                              "type": "bytes32",
                                              "value": "id"
                                            },
                                            "id": 501,
                                            "name": "Identifier",
                                            "src": "6950:2:0"
                                          }
                                        ],
                                        "id": 502,
                                        "name": "IndexAccess",
                                        "src": "6944:9:0"
                                      }
                                    ],
                                    "id": 503,
                                    "name": "MemberAccess",
                                    "src": "6944:15:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "origin",
                                      "referencedDeclaration": null,
                                      "type": "address payable"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1100,
                                          "type": "tx",
                                          "value": "tx"
                                        },
                                        "id": 504,
                                        "name": "Identifier",
                                        "src": "6963:2:0"
                                      }
                                    ],
                                    "id": 505,
                                    "name": "MemberAccess",
                                    "src": "6963:9:0"
                                  }
                                ],
                                "id": 506,
                                "name": "BinaryOperation",
                                "src": "6944:28:0"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "isStructConstructorCall": false,
                                          "lValueRequested": false,
                                          "names": [
                                            null
                                          ],
                                          "type": "tuple()",
                                          "type_conversion": false
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_stringliteral_04de989888fe8bb79a6f31b461a4f8c479620cf07299c675d0a87529caa80894",
                                                  "typeString": "literal_string \"Only owner can update edge\""
                                                }
                                              ],
                                              "overloadedDeclarations": [
                                                1093,
                                                1094
                                              ],
                                              "referencedDeclaration": 1094,
                                              "type": "function (string memory) pure",
                                              "value": "revert"
                                            },
                                            "id": 507,
                                            "name": "Identifier",
                                            "src": "6986:6:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "hexvalue": "4f6e6c79206f776e65722063616e207570646174652065646765",
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "subdenomination": null,
                                              "token": "string",
                                              "type": "literal_string \"Only owner can update edge\"",
                                              "value": "Only owner can update edge"
                                            },
                                            "id": 508,
                                            "name": "Literal",
                                            "src": "6993:28:0"
                                          }
                                        ],
                                        "id": 509,
                                        "name": "FunctionCall",
                                        "src": "6986:36:0"
                                      }
                                    ],
                                    "id": 510,
                                    "name": "ExpressionStatement",
                                    "src": "6986:36:0"
                                  }
                                ],
                                "id": 511,
                                "name": "Block",
                                "src": "6974:59:0"
                              }
                            ],
                            "id": 512,
                            "name": "IfStatement",
                            "src": "6940:93:0"
                          }
                        ],
                        "id": 513,
                        "name": "Block",
                        "src": "6930:111:0"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "push",
                                      "referencedDeclaration": null,
                                      "type": "function (bytes32) returns (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 106,
                                          "type": "bytes32[] storage ref",
                                          "value": "EdgeIds"
                                        },
                                        "id": 514,
                                        "name": "Identifier",
                                        "src": "7057:7:0"
                                      }
                                    ],
                                    "id": 516,
                                    "name": "MemberAccess",
                                    "src": "7057:12:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 484,
                                      "type": "bytes32",
                                      "value": "id"
                                    },
                                    "id": 517,
                                    "name": "Identifier",
                                    "src": "7070:2:0"
                                  }
                                ],
                                "id": 518,
                                "name": "FunctionCall",
                                "src": "7057:16:0"
                              }
                            ],
                            "id": 519,
                            "name": "ExpressionStatement",
                            "src": "7057:16:0"
                          }
                        ],
                        "id": 520,
                        "name": "Block",
                        "src": "7047:35:0"
                      }
                    ],
                    "id": 521,
                    "name": "IfStatement",
                    "src": "6895:187:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "struct ConsensusGraph.Edge storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct ConsensusGraph.Edge storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 103,
                                  "type": "mapping(bytes32 => struct ConsensusGraph.Edge storage ref)",
                                  "value": "Edges"
                                },
                                "id": 522,
                                "name": "Identifier",
                                "src": "7089:5:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 484,
                                  "type": "bytes32",
                                  "value": "id"
                                },
                                "id": 523,
                                "name": "Identifier",
                                "src": "7095:2:0"
                              }
                            ],
                            "id": 524,
                            "name": "IndexAccess",
                            "src": "7089:9:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": true,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "struct ConsensusGraph.Edge memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    },
                                    {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    },
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 99,
                                  "type": "type(struct ConsensusGraph.Edge storage pointer)",
                                  "value": "Edge"
                                },
                                "id": 525,
                                "name": "Identifier",
                                "src": "7101:4:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 478,
                                  "type": "string memory",
                                  "value": "stringId"
                                },
                                "id": 526,
                                "name": "Identifier",
                                "src": "7106:8:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "origin",
                                  "referencedDeclaration": null,
                                  "type": "address payable"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1100,
                                      "type": "tx",
                                      "value": "tx"
                                    },
                                    "id": 527,
                                    "name": "Identifier",
                                    "src": "7116:2:0"
                                  }
                                ],
                                "id": 528,
                                "name": "MemberAccess",
                                "src": "7116:9:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 480,
                                  "type": "string memory",
                                  "value": "json"
                                },
                                "id": 529,
                                "name": "Identifier",
                                "src": "7127:4:0"
                              }
                            ],
                            "id": 530,
                            "name": "FunctionCall",
                            "src": "7101:31:0"
                          }
                        ],
                        "id": 531,
                        "name": "Assignment",
                        "src": "7089:43:0"
                      }
                    ],
                    "id": 532,
                    "name": "ExpressionStatement",
                    "src": "7089:43:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 119,
                              "type": "function (string memory)",
                              "value": "NewEdge"
                            },
                            "id": 533,
                            "name": "Identifier",
                            "src": "7145:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 478,
                              "type": "string memory",
                              "value": "stringId"
                            },
                            "id": 534,
                            "name": "Identifier",
                            "src": "7153:8:0"
                          }
                        ],
                        "id": 535,
                        "name": "FunctionCall",
                        "src": "7145:17:0"
                      }
                    ],
                    "id": 536,
                    "name": "EmitStatement",
                    "src": "7140:22:0"
                  }
                ],
                "id": 537,
                "name": "Block",
                "src": "6829:338:0"
              }
            ],
            "id": 538,
            "name": "FunctionDefinition",
            "src": "6758:409:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "upsertCollections",
              "scope": 597,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "nodes",
                      "scope": 596,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "struct ConsensusGraph.Node[]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "struct ConsensusGraph.Node[]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Node",
                              "referencedDeclaration": 72,
                              "type": "struct ConsensusGraph.Node"
                            },
                            "id": 539,
                            "name": "UserDefinedTypeName",
                            "src": "7198:4:0"
                          }
                        ],
                        "id": 540,
                        "name": "ArrayTypeName",
                        "src": "7198:6:0"
                      }
                    ],
                    "id": 541,
                    "name": "VariableDeclaration",
                    "src": "7198:19:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "edges",
                      "scope": 596,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "struct ConsensusGraph.Edge[]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "struct ConsensusGraph.Edge[]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Edge",
                              "referencedDeclaration": 99,
                              "type": "struct ConsensusGraph.Edge"
                            },
                            "id": 542,
                            "name": "UserDefinedTypeName",
                            "src": "7219:4:0"
                          }
                        ],
                        "id": 543,
                        "name": "ArrayTypeName",
                        "src": "7219:6:0"
                      }
                    ],
                    "id": 544,
                    "name": "VariableDeclaration",
                    "src": "7219:19:0"
                  }
                ],
                "id": 545,
                "name": "ParameterList",
                "src": "7197:42:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 546,
                "name": "ParameterList",
                "src": "7247:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            548
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 570,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 547,
                                "name": "ElementaryTypeName",
                                "src": "7258:4:0"
                              }
                            ],
                            "id": 548,
                            "name": "VariableDeclaration",
                            "src": "7258:6:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 549,
                            "name": "Literal",
                            "src": "7265:1:0"
                          }
                        ],
                        "id": 550,
                        "name": "VariableDeclarationStatement",
                        "src": "7258:8:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 548,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 551,
                            "name": "Identifier",
                            "src": "7268:1:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 541,
                                  "type": "struct ConsensusGraph.Node memory[] memory",
                                  "value": "nodes"
                                },
                                "id": 552,
                                "name": "Identifier",
                                "src": "7272:5:0"
                              }
                            ],
                            "id": 553,
                            "name": "MemberAccess",
                            "src": "7272:12:0"
                          }
                        ],
                        "id": 554,
                        "name": "BinaryOperation",
                        "src": "7268:16:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 548,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 555,
                                "name": "Identifier",
                                "src": "7286:1:0"
                              }
                            ],
                            "id": 556,
                            "name": "UnaryOperation",
                            "src": "7286:3:0"
                          }
                        ],
                        "id": 557,
                        "name": "ExpressionStatement",
                        "src": "7286:3:0"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_string_memory",
                                          "typeString": "string memory"
                                        },
                                        {
                                          "typeIdentifier": "t_string_memory",
                                          "typeString": "string memory"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 476,
                                      "type": "function (string memory,string memory)",
                                      "value": "upsertNode"
                                    },
                                    "id": 558,
                                    "name": "Identifier",
                                    "src": "7299:10:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "id",
                                      "referencedDeclaration": 67,
                                      "type": "string memory"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ConsensusGraph.Node memory"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 541,
                                              "type": "struct ConsensusGraph.Node memory[] memory",
                                              "value": "nodes"
                                            },
                                            "id": 559,
                                            "name": "Identifier",
                                            "src": "7310:5:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 548,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 560,
                                            "name": "Identifier",
                                            "src": "7316:1:0"
                                          }
                                        ],
                                        "id": 561,
                                        "name": "IndexAccess",
                                        "src": "7310:8:0"
                                      }
                                    ],
                                    "id": 562,
                                    "name": "MemberAccess",
                                    "src": "7310:11:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "json",
                                      "referencedDeclaration": 71,
                                      "type": "string memory"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ConsensusGraph.Node memory"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 541,
                                              "type": "struct ConsensusGraph.Node memory[] memory",
                                              "value": "nodes"
                                            },
                                            "id": 563,
                                            "name": "Identifier",
                                            "src": "7323:5:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 548,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 564,
                                            "name": "Identifier",
                                            "src": "7329:1:0"
                                          }
                                        ],
                                        "id": 565,
                                        "name": "IndexAccess",
                                        "src": "7323:8:0"
                                      }
                                    ],
                                    "id": 566,
                                    "name": "MemberAccess",
                                    "src": "7323:13:0"
                                  }
                                ],
                                "id": 567,
                                "name": "FunctionCall",
                                "src": "7299:38:0"
                              }
                            ],
                            "id": 568,
                            "name": "ExpressionStatement",
                            "src": "7299:38:0"
                          }
                        ],
                        "id": 569,
                        "name": "Block",
                        "src": "7291:53:0"
                      }
                    ],
                    "id": 570,
                    "name": "ForStatement",
                    "src": "7253:91:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            572
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "j",
                              "scope": 594,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 571,
                                "name": "ElementaryTypeName",
                                "src": "7355:4:0"
                              }
                            ],
                            "id": 572,
                            "name": "VariableDeclaration",
                            "src": "7355:6:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 573,
                            "name": "Literal",
                            "src": "7362:1:0"
                          }
                        ],
                        "id": 574,
                        "name": "VariableDeclarationStatement",
                        "src": "7355:8:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 572,
                              "type": "uint256",
                              "value": "j"
                            },
                            "id": 575,
                            "name": "Identifier",
                            "src": "7365:1:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 544,
                                  "type": "struct ConsensusGraph.Edge memory[] memory",
                                  "value": "edges"
                                },
                                "id": 576,
                                "name": "Identifier",
                                "src": "7369:5:0"
                              }
                            ],
                            "id": 577,
                            "name": "MemberAccess",
                            "src": "7369:12:0"
                          }
                        ],
                        "id": 578,
                        "name": "BinaryOperation",
                        "src": "7365:16:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 572,
                                  "type": "uint256",
                                  "value": "j"
                                },
                                "id": 579,
                                "name": "Identifier",
                                "src": "7383:1:0"
                              }
                            ],
                            "id": 580,
                            "name": "UnaryOperation",
                            "src": "7383:3:0"
                          }
                        ],
                        "id": 581,
                        "name": "ExpressionStatement",
                        "src": "7383:3:0"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_string_memory",
                                          "typeString": "string memory"
                                        },
                                        {
                                          "typeIdentifier": "t_string_memory",
                                          "typeString": "string memory"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 538,
                                      "type": "function (string memory,string memory)",
                                      "value": "upsertEdge"
                                    },
                                    "id": 582,
                                    "name": "Identifier",
                                    "src": "7396:10:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "id",
                                      "referencedDeclaration": 94,
                                      "type": "string memory"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ConsensusGraph.Edge memory"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 544,
                                              "type": "struct ConsensusGraph.Edge memory[] memory",
                                              "value": "edges"
                                            },
                                            "id": 583,
                                            "name": "Identifier",
                                            "src": "7407:5:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 572,
                                              "type": "uint256",
                                              "value": "j"
                                            },
                                            "id": 584,
                                            "name": "Identifier",
                                            "src": "7413:1:0"
                                          }
                                        ],
                                        "id": 585,
                                        "name": "IndexAccess",
                                        "src": "7407:8:0"
                                      }
                                    ],
                                    "id": 586,
                                    "name": "MemberAccess",
                                    "src": "7407:11:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "json",
                                      "referencedDeclaration": 98,
                                      "type": "string memory"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ConsensusGraph.Edge memory"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 544,
                                              "type": "struct ConsensusGraph.Edge memory[] memory",
                                              "value": "edges"
                                            },
                                            "id": 587,
                                            "name": "Identifier",
                                            "src": "7420:5:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 572,
                                              "type": "uint256",
                                              "value": "j"
                                            },
                                            "id": 588,
                                            "name": "Identifier",
                                            "src": "7426:1:0"
                                          }
                                        ],
                                        "id": 589,
                                        "name": "IndexAccess",
                                        "src": "7420:8:0"
                                      }
                                    ],
                                    "id": 590,
                                    "name": "MemberAccess",
                                    "src": "7420:13:0"
                                  }
                                ],
                                "id": 591,
                                "name": "FunctionCall",
                                "src": "7396:38:0"
                              }
                            ],
                            "id": 592,
                            "name": "ExpressionStatement",
                            "src": "7396:38:0"
                          }
                        ],
                        "id": 593,
                        "name": "Block",
                        "src": "7388:53:0"
                      }
                    ],
                    "id": 594,
                    "name": "ForStatement",
                    "src": "7350:91:0"
                  }
                ],
                "id": 595,
                "name": "Block",
                "src": "7247:198:0"
              }
            ],
            "id": 596,
            "name": "FunctionDefinition",
            "src": "7171:274:0"
          }
        ],
        "id": 597,
        "name": "ContractDefinition",
        "src": "135:7313:0"
      }
    ],
    "id": 598,
    "name": "SourceUnit",
    "src": "36:7413:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "1337": {
      "events": {},
      "links": {},
      "address": "0xbd9E099a3b6440c46DbFBbD8587971fA006cD0bF",
      "transactionHash": "0x7d37df5063736dd04210938dbbe6eec8b9ba3cf868310660dc18daaa8f4b4937"
    }
  },
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-03-28T06:21:00.175Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}
 export default ConsensusGraphABI
