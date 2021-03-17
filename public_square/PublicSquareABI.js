const PublicSquareABI = 
{
  "contractName": "PublicSquare",
  "abi": [
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
      "name": "nodeIds",
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
      "name": "nodes",
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
          "name": "json",
          "type": "string"
        }
      ],
      "name": "upsertNode",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"string\",\"name\":\"nodeId\",\"type\":\"string\"}],\"name\":\"NewNode\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"nodeIds\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"nodes\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"id\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringId\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"name\":\"upsertNode\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/dmedani/codes/Consensus/public_square/contracts/PublicSquare.sol\":\"PublicSquare\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/dmedani/codes/Consensus/public_square/contracts/PublicSquare.sol\":{\"keccak256\":\"0x05e76d174ee4919497cfb3ea12bcc1318b2d5bd60e5db9999db7f9672b60689e\",\"urls\":[\"bzz-raw://d3b3d3430ea90e26f6f15ddb6184640e1a923453a6a66abe0b42888025e18feb\",\"dweb:/ipfs/QmfEbAjnXQtE3HMoKMrxVhhfpZb2mXgiXhfStmfSxtDi7g\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b506107a8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80638037b3e2146100465780639854316614610198578063d86e697d146101da575b600080fd5b6101966004803603604081101561005c57600080fd5b810190808035906020019064010000000081111561007957600080fd5b82018360208201111561008b57600080fd5b803590602001918460018302840111640100000000831117156100ad57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561011057600080fd5b82018360208201111561012257600080fd5b8035906020019184600183028401116401000000008311171561014457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506102b4565b005b6101c4600480360360208110156101ae57600080fd5b81019080803590602001909291905050506105d1565b6040518082815260200191505060405180910390f35b610206600480360360208110156101f057600080fd5b81019080803590602001909291905050506105f2565b60405180806020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828103825284818151815260200191508051906020019080838360005b8381101561027857808201518184015260208101905061025d565b50505050905090810190601f1680156102a55780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6000826040516020018082805190602001908083835b602083106102ed57805182526020820191506020810190506020830392506102ca565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461046e573373ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610469576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f4f6e6c79206f776e65722063616e20757064617465206e6f646500000000000081525060200191505060405180910390fd5b61049b565b60018190806001815401808255809150509060018203906000526020600020016000909192909190915055505b60405180604001604052808481526020013373ffffffffffffffffffffffffffffffffffffffff1681525060008083815260200190815260200160002060008201518160000190805190602001906104f49291906106ce565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050826040518082805190602001908083835b602083106105735780518252602082019150602081019050602083039250610550565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207fed6f16cbbb8c3446efae3e9dc5f621b6987bbe160a2b866cfdbd5933188a01a760405160405180910390a2505050565b600181815481106105de57fe5b906000526020600020016000915090505481565b6000602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561069e5780601f106106735761010080835404028352916020019161069e565b820191906000526020600020905b81548152906001019060200180831161068157829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061070f57805160ff191683800117855561073d565b8280016001018555821561073d579182015b8281111561073c578251825591602001919060010190610721565b5b50905061074a919061074e565b5090565b61077091905b8082111561076c576000816000905550600101610754565b5090565b9056fea265627a7a7231582000a16048267ee8f67395b7aab11bb2d24b5b9aa66e6fa1b391dbe82ddc3b127e64736f6c63430005100032",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c80638037b3e2146100465780639854316614610198578063d86e697d146101da575b600080fd5b6101966004803603604081101561005c57600080fd5b810190808035906020019064010000000081111561007957600080fd5b82018360208201111561008b57600080fd5b803590602001918460018302840111640100000000831117156100ad57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561011057600080fd5b82018360208201111561012257600080fd5b8035906020019184600183028401116401000000008311171561014457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506102b4565b005b6101c4600480360360208110156101ae57600080fd5b81019080803590602001909291905050506105d1565b6040518082815260200191505060405180910390f35b610206600480360360208110156101f057600080fd5b81019080803590602001909291905050506105f2565b60405180806020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828103825284818151815260200191508051906020019080838360005b8381101561027857808201518184015260208101905061025d565b50505050905090810190601f1680156102a55780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6000826040516020018082805190602001908083835b602083106102ed57805182526020820191506020810190506020830392506102ca565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461046e573373ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610469576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f4f6e6c79206f776e65722063616e20757064617465206e6f646500000000000081525060200191505060405180910390fd5b61049b565b60018190806001815401808255809150509060018203906000526020600020016000909192909190915055505b60405180604001604052808481526020013373ffffffffffffffffffffffffffffffffffffffff1681525060008083815260200190815260200160002060008201518160000190805190602001906104f49291906106ce565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050826040518082805190602001908083835b602083106105735780518252602082019150602081019050602083039250610550565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207fed6f16cbbb8c3446efae3e9dc5f621b6987bbe160a2b866cfdbd5933188a01a760405160405180910390a2505050565b600181815481106105de57fe5b906000526020600020016000915090505481565b6000602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561069e5780601f106106735761010080835404028352916020019161069e565b820191906000526020600020905b81548152906001019060200180831161068157829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061070f57805160ff191683800117855561073d565b8280016001018555821561073d579182015b8281111561073c578251825591602001919060010190610721565b5b50905061074a919061074e565b5090565b61077091905b8082111561076c576000816000905550600101610754565b5090565b9056fea265627a7a7231582000a16048267ee8f67395b7aab11bb2d24b5b9aa66e6fa1b391dbe82ddc3b127e64736f6c63430005100032",
  "sourceMap": "70:786:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;70:786:0;;;;;;;",
  "deployedSourceMap": "70:786:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;70:786:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;448:405;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;448:405:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;448:405:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;448:405:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;448:405:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;448:405:0;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;448:405:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;448:405:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;448:405:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;448:405:0;;;;;;;;;;;;;;;:::i;:::-;;287:24;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;287:24:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;193:37;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;193:37:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;193:37:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;448:405;527:10;567:8;550:26;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;550:26:0;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;550:26:0;;;540:37;;;;;;527:50;;616:1;589:29;;:5;:9;595:2;589:9;;;;;;;;;;;:15;;;;;;;;;;;;:29;;;585:188;;653:10;634:29;;:5;:9;640:2;634:9;;;;;;;;;;;:15;;;;;;;;;;;;:29;;;630:94;;677:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;630:94;585:188;;;748:7;761:2;748:16;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;748:16:0;;;;;;;;;;;;;;;;;;;;;;585:188;792:26;;;;;;;;797:8;792:26;;;;807:10;792:26;;;;;780:5;:9;786:2;780:9;;;;;;;;;;;:38;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;839:8;831:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;831:17:0;;;;;;;;;;;;;;;;;;;;;;;;;;448:405;;;:::o;287:24::-;;;;;;;;;;;;;;;;;;;;;;;;;:::o;193:37::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;70:786::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "// SPDX-License-Identifier: GPL-3.0\npragma solidity >=0.5.16 <0.9.0;\n\ncontract PublicSquare {\n  struct Node {\n    string id;\n    address owner;\n  }\n \n  // Mapping from keccak256(ids) to Node\n  mapping(bytes32 => Node) public nodes;\n  // List of all IDs, so client can query all nodes.\n  bytes32[] public nodeIds;\n\n  // Since getNode takes a \"client ID\", NewNode should also\n  // speak client IDs\n  event NewNode (\n    string indexed nodeId\n  );\n\n  function upsertNode(string memory stringId, string memory json) public {\n      bytes32 id = keccak256(abi.encodePacked(stringId));\n      if (nodes[id].owner != address(0)) {\n        if (nodes[id].owner != msg.sender) {\n          revert(\"Only owner can update node\");\n        }\n      } else {\n        nodeIds.push(id);\n      }\n      nodes[id] = Node(stringId, msg.sender);\n      emit NewNode(stringId);\n  }\n\n}\n",
  "sourcePath": "/Users/dmedani/codes/Consensus/public_square/contracts/PublicSquare.sol",
  "ast": {
    "absolutePath": "/Users/dmedani/codes/Consensus/public_square/contracts/PublicSquare.sol",
    "exportedSymbols": {
      "PublicSquare": [
        79
      ]
    },
    "id": 80,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          ">=",
          "0.5",
          ".16",
          "<",
          "0.9",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "36:32:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 79,
        "linearizedBaseContracts": [
          79
        ],
        "name": "PublicSquare",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "PublicSquare.Node",
            "id": 6,
            "members": [
              {
                "constant": false,
                "id": 3,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 6,
                "src": "114:9:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 2,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "114:6:0",
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
                "id": 5,
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 6,
                "src": "129:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 4,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "129:7:0",
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
            "name": "Node",
            "nodeType": "StructDefinition",
            "scope": 79,
            "src": "96:51:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10,
            "name": "nodes",
            "nodeType": "VariableDeclaration",
            "scope": 79,
            "src": "193:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$6_storage_$",
              "typeString": "mapping(bytes32 => struct PublicSquare.Node)"
            },
            "typeName": {
              "id": 9,
              "keyType": {
                "id": 7,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "201:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "193:24:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$6_storage_$",
                "typeString": "mapping(bytes32 => struct PublicSquare.Node)"
              },
              "valueType": {
                "contractScope": null,
                "id": 8,
                "name": "Node",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 6,
                "src": "212:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Node_$6_storage_ptr",
                  "typeString": "struct PublicSquare.Node"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 13,
            "name": "nodeIds",
            "nodeType": "VariableDeclaration",
            "scope": 79,
            "src": "287:24:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
              "typeString": "bytes32[]"
            },
            "typeName": {
              "baseType": {
                "id": 11,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "287:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "id": 12,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "287:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                "typeString": "bytes32[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 17,
            "name": "NewNode",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 16,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15,
                  "indexed": true,
                  "name": "nodeId",
                  "nodeType": "VariableDeclaration",
                  "scope": 17,
                  "src": "418:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 14,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "418:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "412:31:0"
            },
            "src": "398:46:0"
          },
          {
            "body": {
              "id": 77,
              "nodeType": "Block",
              "src": "519:334:0",
              "statements": [
                {
                  "assignments": [
                    25
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25,
                      "name": "id",
                      "nodeType": "VariableDeclaration",
                      "scope": 77,
                      "src": "527:10:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 24,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "527:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 32,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 29,
                            "name": "stringId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19,
                            "src": "567:8:0",
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
                            "id": 27,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 81,
                            "src": "550:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 28,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "550:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "550:26:0",
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
                      "id": 26,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 88,
                      "src": "540:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 31,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "540:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "527:50:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 40,
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
                          "id": 33,
                          "name": "nodes",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10,
                          "src": "589:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$6_storage_$",
                            "typeString": "mapping(bytes32 => struct PublicSquare.Node storage ref)"
                          }
                        },
                        "id": 35,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 34,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25,
                          "src": "595:2:0",
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
                        "src": "589:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Node_$6_storage",
                          "typeString": "struct PublicSquare.Node storage ref"
                        }
                      },
                      "id": 36,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5,
                      "src": "589:15:0",
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
                          "id": 38,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "616:1:0",
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
                        "id": 37,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "608:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 39,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "608:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "589:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 61,
                    "nodeType": "Block",
                    "src": "738:35:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 58,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25,
                              "src": "761:2:0",
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
                              "id": 55,
                              "name": "nodeIds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13,
                              "src": "748:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 57,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "748:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                              "typeString": "function (bytes32) returns (uint256)"
                            }
                          },
                          "id": 59,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "748:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 60,
                        "nodeType": "ExpressionStatement",
                        "src": "748:16:0"
                      }
                    ]
                  },
                  "id": 62,
                  "nodeType": "IfStatement",
                  "src": "585:188:0",
                  "trueBody": {
                    "id": 54,
                    "nodeType": "Block",
                    "src": "620:112:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 47,
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
                                "id": 41,
                                "name": "nodes",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10,
                                "src": "634:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$6_storage_$",
                                  "typeString": "mapping(bytes32 => struct PublicSquare.Node storage ref)"
                                }
                              },
                              "id": 43,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 42,
                                "name": "id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 25,
                                "src": "640:2:0",
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
                              "src": "634:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Node_$6_storage",
                                "typeString": "struct PublicSquare.Node storage ref"
                              }
                            },
                            "id": 44,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "owner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 5,
                            "src": "634:15:0",
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
                              "id": 45,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 94,
                              "src": "653:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 46,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "653:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "634:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 53,
                        "nodeType": "IfStatement",
                        "src": "630:94:0",
                        "trueBody": {
                          "id": 52,
                          "nodeType": "Block",
                          "src": "665:59:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "4f6e6c79206f776e65722063616e20757064617465206e6f6465",
                                    "id": 49,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "684:28:0",
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
                                  "id": 48,
                                  "name": "revert",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    99,
                                    100
                                  ],
                                  "referencedDeclaration": 100,
                                  "src": "677:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (string memory) pure"
                                  }
                                },
                                "id": 50,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "677:36:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 51,
                              "nodeType": "ExpressionStatement",
                              "src": "677:36:0"
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
                    "id": 71,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 63,
                        "name": "nodes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "780:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$6_storage_$",
                          "typeString": "mapping(bytes32 => struct PublicSquare.Node storage ref)"
                        }
                      },
                      "id": 65,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 64,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25,
                        "src": "786:2:0",
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
                      "src": "780:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Node_$6_storage",
                        "typeString": "struct PublicSquare.Node storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 67,
                          "name": "stringId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19,
                          "src": "797:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 68,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 94,
                            "src": "807:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 69,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "807:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
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
                          }
                        ],
                        "id": 66,
                        "name": "Node",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6,
                        "src": "792:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Node_$6_storage_ptr_$",
                          "typeString": "type(struct PublicSquare.Node storage pointer)"
                        }
                      },
                      "id": 70,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "792:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Node_$6_memory",
                        "typeString": "struct PublicSquare.Node memory"
                      }
                    },
                    "src": "780:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Node_$6_storage",
                      "typeString": "struct PublicSquare.Node storage ref"
                    }
                  },
                  "id": 72,
                  "nodeType": "ExpressionStatement",
                  "src": "780:38:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 74,
                        "name": "stringId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19,
                        "src": "839:8:0",
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
                      "id": 73,
                      "name": "NewNode",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17,
                      "src": "831:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 75,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "831:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 76,
                  "nodeType": "EmitStatement",
                  "src": "826:22:0"
                }
              ]
            },
            "documentation": null,
            "id": 78,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "upsertNode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19,
                  "name": "stringId",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "468:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "468:6:0",
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
                  "id": 21,
                  "name": "json",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "492:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "492:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "467:44:0"
            },
            "returnParameters": {
              "id": 23,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "519:0:0"
            },
            "scope": 79,
            "src": "448:405:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 80,
        "src": "70:786:0"
      }
    ],
    "src": "36:821:0"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/Users/dmedani/codes/Consensus/public_square/contracts/PublicSquare.sol",
      "exportedSymbols": {
        "PublicSquare": [
          79
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            ">=",
            "0.5",
            ".16",
            "<",
            "0.9",
            ".0"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "36:32:0"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            79
          ],
          "name": "PublicSquare",
          "scope": 80
        },
        "children": [
          {
            "attributes": {
              "canonicalName": "PublicSquare.Node",
              "name": "Node",
              "scope": 79,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "id",
                  "scope": 6,
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
                    "id": 2,
                    "name": "ElementaryTypeName",
                    "src": "114:6:0"
                  }
                ],
                "id": 3,
                "name": "VariableDeclaration",
                "src": "114:9:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "owner",
                  "scope": 6,
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
                    "id": 4,
                    "name": "ElementaryTypeName",
                    "src": "129:7:0"
                  }
                ],
                "id": 5,
                "name": "VariableDeclaration",
                "src": "129:13:0"
              }
            ],
            "id": 6,
            "name": "StructDefinition",
            "src": "96:51:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "nodes",
              "scope": 79,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => struct PublicSquare.Node)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => struct PublicSquare.Node)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 7,
                    "name": "ElementaryTypeName",
                    "src": "201:7:0"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Node",
                      "referencedDeclaration": 6,
                      "type": "struct PublicSquare.Node"
                    },
                    "id": 8,
                    "name": "UserDefinedTypeName",
                    "src": "212:4:0"
                  }
                ],
                "id": 9,
                "name": "Mapping",
                "src": "193:24:0"
              }
            ],
            "id": 10,
            "name": "VariableDeclaration",
            "src": "193:37:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "nodeIds",
              "scope": 79,
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
                    "id": 11,
                    "name": "ElementaryTypeName",
                    "src": "287:7:0"
                  }
                ],
                "id": 12,
                "name": "ArrayTypeName",
                "src": "287:9:0"
              }
            ],
            "id": 13,
            "name": "VariableDeclaration",
            "src": "287:24:0"
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
                      "scope": 17,
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
                        "id": 14,
                        "name": "ElementaryTypeName",
                        "src": "418:6:0"
                      }
                    ],
                    "id": 15,
                    "name": "VariableDeclaration",
                    "src": "418:21:0"
                  }
                ],
                "id": 16,
                "name": "ParameterList",
                "src": "412:31:0"
              }
            ],
            "id": 17,
            "name": "EventDefinition",
            "src": "398:46:0"
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
              "scope": 79,
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
                      "scope": 78,
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
                        "id": 18,
                        "name": "ElementaryTypeName",
                        "src": "468:6:0"
                      }
                    ],
                    "id": 19,
                    "name": "VariableDeclaration",
                    "src": "468:22:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "json",
                      "scope": 78,
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
                        "id": 20,
                        "name": "ElementaryTypeName",
                        "src": "492:6:0"
                      }
                    ],
                    "id": 21,
                    "name": "VariableDeclaration",
                    "src": "492:18:0"
                  }
                ],
                "id": 22,
                "name": "ParameterList",
                "src": "467:44:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 23,
                "name": "ParameterList",
                "src": "519:0:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        25
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "id",
                          "scope": 77,
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
                            "id": 24,
                            "name": "ElementaryTypeName",
                            "src": "527:7:0"
                          }
                        ],
                        "id": 25,
                        "name": "VariableDeclaration",
                        "src": "527:10:0"
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
                              "referencedDeclaration": 88,
                              "type": "function (bytes memory) pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 26,
                            "name": "Identifier",
                            "src": "540:9:0"
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
                                      "referencedDeclaration": 81,
                                      "type": "abi",
                                      "value": "abi"
                                    },
                                    "id": 27,
                                    "name": "Identifier",
                                    "src": "550:3:0"
                                  }
                                ],
                                "id": 28,
                                "name": "MemberAccess",
                                "src": "550:16:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 19,
                                  "type": "string memory",
                                  "value": "stringId"
                                },
                                "id": 29,
                                "name": "Identifier",
                                "src": "567:8:0"
                              }
                            ],
                            "id": 30,
                            "name": "FunctionCall",
                            "src": "550:26:0"
                          }
                        ],
                        "id": 31,
                        "name": "FunctionCall",
                        "src": "540:37:0"
                      }
                    ],
                    "id": 32,
                    "name": "VariableDeclarationStatement",
                    "src": "527:50:0"
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
                              "referencedDeclaration": 5,
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
                                  "type": "struct PublicSquare.Node storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10,
                                      "type": "mapping(bytes32 => struct PublicSquare.Node storage ref)",
                                      "value": "nodes"
                                    },
                                    "id": 33,
                                    "name": "Identifier",
                                    "src": "589:5:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 25,
                                      "type": "bytes32",
                                      "value": "id"
                                    },
                                    "id": 34,
                                    "name": "Identifier",
                                    "src": "595:2:0"
                                  }
                                ],
                                "id": 35,
                                "name": "IndexAccess",
                                "src": "589:9:0"
                              }
                            ],
                            "id": 36,
                            "name": "MemberAccess",
                            "src": "589:15:0"
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
                                "id": 37,
                                "name": "ElementaryTypeNameExpression",
                                "src": "608:7:0"
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
                                "id": 38,
                                "name": "Literal",
                                "src": "616:1:0"
                              }
                            ],
                            "id": 39,
                            "name": "FunctionCall",
                            "src": "608:10:0"
                          }
                        ],
                        "id": 40,
                        "name": "BinaryOperation",
                        "src": "589:29:0"
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
                                      "referencedDeclaration": 5,
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
                                          "type": "struct PublicSquare.Node storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 10,
                                              "type": "mapping(bytes32 => struct PublicSquare.Node storage ref)",
                                              "value": "nodes"
                                            },
                                            "id": 41,
                                            "name": "Identifier",
                                            "src": "634:5:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 25,
                                              "type": "bytes32",
                                              "value": "id"
                                            },
                                            "id": 42,
                                            "name": "Identifier",
                                            "src": "640:2:0"
                                          }
                                        ],
                                        "id": 43,
                                        "name": "IndexAccess",
                                        "src": "634:9:0"
                                      }
                                    ],
                                    "id": 44,
                                    "name": "MemberAccess",
                                    "src": "634:15:0"
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
                                          "referencedDeclaration": 94,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 45,
                                        "name": "Identifier",
                                        "src": "653:3:0"
                                      }
                                    ],
                                    "id": 46,
                                    "name": "MemberAccess",
                                    "src": "653:10:0"
                                  }
                                ],
                                "id": 47,
                                "name": "BinaryOperation",
                                "src": "634:29:0"
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
                                                99,
                                                100
                                              ],
                                              "referencedDeclaration": 100,
                                              "type": "function (string memory) pure",
                                              "value": "revert"
                                            },
                                            "id": 48,
                                            "name": "Identifier",
                                            "src": "677:6:0"
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
                                            "id": 49,
                                            "name": "Literal",
                                            "src": "684:28:0"
                                          }
                                        ],
                                        "id": 50,
                                        "name": "FunctionCall",
                                        "src": "677:36:0"
                                      }
                                    ],
                                    "id": 51,
                                    "name": "ExpressionStatement",
                                    "src": "677:36:0"
                                  }
                                ],
                                "id": 52,
                                "name": "Block",
                                "src": "665:59:0"
                              }
                            ],
                            "id": 53,
                            "name": "IfStatement",
                            "src": "630:94:0"
                          }
                        ],
                        "id": 54,
                        "name": "Block",
                        "src": "620:112:0"
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
                                          "referencedDeclaration": 13,
                                          "type": "bytes32[] storage ref",
                                          "value": "nodeIds"
                                        },
                                        "id": 55,
                                        "name": "Identifier",
                                        "src": "748:7:0"
                                      }
                                    ],
                                    "id": 57,
                                    "name": "MemberAccess",
                                    "src": "748:12:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 25,
                                      "type": "bytes32",
                                      "value": "id"
                                    },
                                    "id": 58,
                                    "name": "Identifier",
                                    "src": "761:2:0"
                                  }
                                ],
                                "id": 59,
                                "name": "FunctionCall",
                                "src": "748:16:0"
                              }
                            ],
                            "id": 60,
                            "name": "ExpressionStatement",
                            "src": "748:16:0"
                          }
                        ],
                        "id": 61,
                        "name": "Block",
                        "src": "738:35:0"
                      }
                    ],
                    "id": 62,
                    "name": "IfStatement",
                    "src": "585:188:0"
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
                          "type": "struct PublicSquare.Node storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct PublicSquare.Node storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10,
                                  "type": "mapping(bytes32 => struct PublicSquare.Node storage ref)",
                                  "value": "nodes"
                                },
                                "id": 63,
                                "name": "Identifier",
                                "src": "780:5:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 25,
                                  "type": "bytes32",
                                  "value": "id"
                                },
                                "id": 64,
                                "name": "Identifier",
                                "src": "786:2:0"
                              }
                            ],
                            "id": 65,
                            "name": "IndexAccess",
                            "src": "780:9:0"
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
                              "type": "struct PublicSquare.Node memory",
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
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6,
                                  "type": "type(struct PublicSquare.Node storage pointer)",
                                  "value": "Node"
                                },
                                "id": 66,
                                "name": "Identifier",
                                "src": "792:4:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 19,
                                  "type": "string memory",
                                  "value": "stringId"
                                },
                                "id": 67,
                                "name": "Identifier",
                                "src": "797:8:0"
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
                                      "referencedDeclaration": 94,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 68,
                                    "name": "Identifier",
                                    "src": "807:3:0"
                                  }
                                ],
                                "id": 69,
                                "name": "MemberAccess",
                                "src": "807:10:0"
                              }
                            ],
                            "id": 70,
                            "name": "FunctionCall",
                            "src": "792:26:0"
                          }
                        ],
                        "id": 71,
                        "name": "Assignment",
                        "src": "780:38:0"
                      }
                    ],
                    "id": 72,
                    "name": "ExpressionStatement",
                    "src": "780:38:0"
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
                              "referencedDeclaration": 17,
                              "type": "function (string memory)",
                              "value": "NewNode"
                            },
                            "id": 73,
                            "name": "Identifier",
                            "src": "831:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 19,
                              "type": "string memory",
                              "value": "stringId"
                            },
                            "id": 74,
                            "name": "Identifier",
                            "src": "839:8:0"
                          }
                        ],
                        "id": 75,
                        "name": "FunctionCall",
                        "src": "831:17:0"
                      }
                    ],
                    "id": 76,
                    "name": "EmitStatement",
                    "src": "826:22:0"
                  }
                ],
                "id": 77,
                "name": "Block",
                "src": "519:334:0"
              }
            ],
            "id": 78,
            "name": "FunctionDefinition",
            "src": "448:405:0"
          }
        ],
        "id": 79,
        "name": "ContractDefinition",
        "src": "70:786:0"
      }
    ],
    "id": 80,
    "name": "SourceUnit",
    "src": "36:821:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-03-17T23:55:02.541Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}
 export default PublicSquareABI
