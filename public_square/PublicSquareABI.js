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
          "name": "name",
          "type": "string"
        }
      ],
      "name": "NewConsensusGraph",
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
      "name": "consensusGraphIds",
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
      "name": "consensusGraphs",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "creator",
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
      "name": "getConsensusGraphIds",
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
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "createConsensusGraph",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"NewConsensusGraph\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"consensusGraphIds\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"consensusGraphs\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"createConsensusGraph\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getConsensusGraphIds\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/dmedani/codes/Consensus/public_square/contracts/PublicSquare.sol\":\"PublicSquare\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/dmedani/codes/Consensus/public_square/contracts/PublicSquare.sol\":{\"keccak256\":\"0xa07b7d21c9ec25261c93eebef0e162f60773e95334e50bc1e5bdb56e0d1aad07\",\"urls\":[\"bzz-raw://77ca7fb756f5b2b4a699ed4ab1b947576708ea2756e955313618b36977e7e019\",\"dweb:/ipfs/QmaBe415xbw5zZBJoUKbR9dFn9EiZkqZNUuVj5et1VfZ8S\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50610764806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806315069d1b146100515780633efc34af1461012b578063f991f59b1461016d578063fdad28cf14610228575b600080fd5b61007d6004803603602081101561006757600080fd5b8101908080359060200190929190505050610287565b60405180806020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828103825284818151815260200191508051906020019080838360005b838110156100ef5780820151818401526020810190506100d4565b50505050905090810190601f16801561011c5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6101576004803603602081101561014157600080fd5b8101908080359060200190929190505050610363565b6040518082815260200191505060405180910390f35b6102266004803603602081101561018357600080fd5b81019080803590602001906401000000008111156101a057600080fd5b8201836020820111156101b257600080fd5b803590602001918460018302840111640100000000831117156101d457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610384565b005b610230610632565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610273578082015181840152602081019050610258565b505050509050019250505060405180910390f35b6000602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103335780601f1061030857610100808354040283529160200191610333565b820191906000526020600020905b81548152906001019060200180831161031657829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b6001818154811061037057fe5b906000526020600020016000915090505481565b6000816040516020018082805190602001908083835b602083106103bd578051825260208201915060208101905060208303925061039a565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146104d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f477261706820616c72656164792065786973747300000000000000000000000081525060200191505060405180910390fd5b600181908060018154018082558091505090600182039060005260206000200160009091929091909150555060405180604001604052808381526020013373ffffffffffffffffffffffffffffffffffffffff16815250600080838152602001908152602001600020600082015181600001908051906020019061055692919061068a565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050816040518082805190602001908083835b602083106105d557805182526020820191506020810190506020830392506105b2565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207fe3fd22ad33c380decf3ce2b3fcbd374614d7ca2c8e45e272f1b263eba6b89d8c60405160405180910390a25050565b6060600180548060200260200160405190810160405280929190818152602001828054801561068057602002820191906000526020600020905b81548152602001906001019080831161066c575b5050505050905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106106cb57805160ff19168380011785556106f9565b828001600101855582156106f9579182015b828111156106f85782518255916020019190600101906106dd565b5b509050610706919061070a565b5090565b61072c91905b80821115610728576000816000905550600101610710565b5090565b9056fea265627a7a72315820038fb68af2b261599de61293c497b5f90c159e7334355ca60f4522c614bb77ba64736f6c63430005100032",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806315069d1b146100515780633efc34af1461012b578063f991f59b1461016d578063fdad28cf14610228575b600080fd5b61007d6004803603602081101561006757600080fd5b8101908080359060200190929190505050610287565b60405180806020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828103825284818151815260200191508051906020019080838360005b838110156100ef5780820151818401526020810190506100d4565b50505050905090810190601f16801561011c5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6101576004803603602081101561014157600080fd5b8101908080359060200190929190505050610363565b6040518082815260200191505060405180910390f35b6102266004803603602081101561018357600080fd5b81019080803590602001906401000000008111156101a057600080fd5b8201836020820111156101b257600080fd5b803590602001918460018302840111640100000000831117156101d457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610384565b005b610230610632565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610273578082015181840152602081019050610258565b505050509050019250505060405180910390f35b6000602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103335780601f1061030857610100808354040283529160200191610333565b820191906000526020600020905b81548152906001019060200180831161031657829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b6001818154811061037057fe5b906000526020600020016000915090505481565b6000816040516020018082805190602001908083835b602083106103bd578051825260208201915060208101905060208303925061039a565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146104d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f477261706820616c72656164792065786973747300000000000000000000000081525060200191505060405180910390fd5b600181908060018154018082558091505090600182039060005260206000200160009091929091909150555060405180604001604052808381526020013373ffffffffffffffffffffffffffffffffffffffff16815250600080838152602001908152602001600020600082015181600001908051906020019061055692919061068a565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050816040518082805190602001908083835b602083106105d557805182526020820191506020810190506020830392506105b2565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207fe3fd22ad33c380decf3ce2b3fcbd374614d7ca2c8e45e272f1b263eba6b89d8c60405160405180910390a25050565b6060600180548060200260200160405190810160405280929190818152602001828054801561068057602002820191906000526020600020905b81548152602001906001019080831161066c575b5050505050905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106106cb57805160ff19168380011785556106f9565b828001600101855582156106f9579182015b828111156106f85782518255916020019190600101906106dd565b5b509050610706919061070a565b5090565b61072c91905b80821115610728576000816000905550600101610710565b5090565b9056fea265627a7a72315820038fb68af2b261599de61293c497b5f90c159e7334355ca60f4522c614bb77ba64736f6c63430005100032",
  "sourceMap": "70:824:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;70:824:0;;;;;;;",
  "deployedSourceMap": "70:824:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;70:824:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;216:57;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;216:57:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;216:57:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;333:34;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;333:34:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;539:352;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;539:352:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;539:352:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;539:352:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;539:352:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;539:352:0;;;;;;;;;;;;;;;:::i;:::-;;372:105;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;372:105:0;;;;;;;;;;;;;;;;;216:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;333:34::-;;;;;;;;;;;;;;;;;;;;;;;;;:::o;539:352::-;604:10;644:4;627:22;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;627:22:0;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;627:22:0;;;617:33;;;;;;604:46;;701:1;662:41;;:15;:19;678:2;662:19;;;;;;;;;;;:27;;;;;;;;;;;;:41;;;658:96;;715:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;658:96;762:17;785:2;762:26;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;762:26:0;;;;;;;;;;;;;;;;;;;;;;818:32;;;;;;;;833:4;818:32;;;;839:10;818:32;;;;;796:15;:19;812:2;796:19;;;;;;;;;;;:54;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;881:4;863:23;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;863:23:0;;;;;;;;;;;;;;;;;;;;;;;;;;539:352;;:::o;372:105::-;424:16;455:17;448:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;372:105;:::o;70:824::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "// SPDX-License-Identifier: GPL-3.0\npragma solidity >=0.5.16 <0.9.0;\n\ncontract PublicSquare {\n  struct ConsensusGraph {\n    string name;\n    address creator;\n  }\n\n  // Mapping from keccak256(ids) to ConsensusGraph\n  mapping(bytes32 => ConsensusGraph) public consensusGraphs;\n  \n  // List of all ids, so client can query all graphs\n  bytes32[] public consensusGraphIds;\n\n  function getConsensusGraphIds() public view returns(bytes32[] memory) {\n    return consensusGraphIds;\n  }\n\n  event NewConsensusGraph (\n    string indexed name\n  );\n\n  function createConsensusGraph(string memory name) public {\n      bytes32 id = keccak256(abi.encodePacked(name));\n      if (consensusGraphs[id].creator != address(0)) {\n        revert(\"Graph already exists\");\n      }\n\n      consensusGraphIds.push(id);\n      consensusGraphs[id] = ConsensusGraph(name, msg.sender);\n      emit NewConsensusGraph(name);\n  }\n\n}\n",
  "sourcePath": "/Users/dmedani/codes/Consensus/public_square/contracts/PublicSquare.sol",
  "ast": {
    "absolutePath": "/Users/dmedani/codes/Consensus/public_square/contracts/PublicSquare.sol",
    "exportedSymbols": {
      "PublicSquare": [
        76
      ]
    },
    "id": 77,
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
        "id": 76,
        "linearizedBaseContracts": [
          76
        ],
        "name": "PublicSquare",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "PublicSquare.ConsensusGraph",
            "id": 6,
            "members": [
              {
                "constant": false,
                "id": 3,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "scope": 6,
                "src": "124:11:0",
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
                  "src": "124:6:0",
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
                "name": "creator",
                "nodeType": "VariableDeclaration",
                "scope": 6,
                "src": "141:15:0",
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
                  "src": "141:7:0",
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
            "name": "ConsensusGraph",
            "nodeType": "StructDefinition",
            "scope": 76,
            "src": "96:65:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10,
            "name": "consensusGraphs",
            "nodeType": "VariableDeclaration",
            "scope": 76,
            "src": "216:57:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_ConsensusGraph_$6_storage_$",
              "typeString": "mapping(bytes32 => struct PublicSquare.ConsensusGraph)"
            },
            "typeName": {
              "id": 9,
              "keyType": {
                "id": 7,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "224:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "216:34:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_ConsensusGraph_$6_storage_$",
                "typeString": "mapping(bytes32 => struct PublicSquare.ConsensusGraph)"
              },
              "valueType": {
                "contractScope": null,
                "id": 8,
                "name": "ConsensusGraph",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 6,
                "src": "235:14:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_ConsensusGraph_$6_storage_ptr",
                  "typeString": "struct PublicSquare.ConsensusGraph"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 13,
            "name": "consensusGraphIds",
            "nodeType": "VariableDeclaration",
            "scope": 76,
            "src": "333:34:0",
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
                "src": "333:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "id": 12,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "333:9:0",
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
              "id": 21,
              "nodeType": "Block",
              "src": "442:35:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 19,
                    "name": "consensusGraphIds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13,
                    "src": "455:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "functionReturnParameters": 18,
                  "id": 20,
                  "nodeType": "Return",
                  "src": "448:24:0"
                }
              ]
            },
            "documentation": null,
            "id": 22,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getConsensusGraphIds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "401:2:0"
            },
            "returnParameters": {
              "id": 18,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 22,
                  "src": "424:16:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 15,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "424:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 16,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "424:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "423:18:0"
            },
            "scope": 76,
            "src": "372:105:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 26,
            "name": "NewConsensusGraph",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 25,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24,
                  "indexed": true,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "511:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "511:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "505:29:0"
            },
            "src": "481:54:0"
          },
          {
            "body": {
              "id": 74,
              "nodeType": "Block",
              "src": "596:295:0",
              "statements": [
                {
                  "assignments": [
                    32
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32,
                      "name": "id",
                      "nodeType": "VariableDeclaration",
                      "scope": 74,
                      "src": "604:10:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 31,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "604:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 39,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 36,
                            "name": "name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28,
                            "src": "644:4:0",
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
                            "id": 34,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 78,
                            "src": "627:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 35,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "627:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 37,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "627:22:0",
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
                      "id": 33,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 85,
                      "src": "617:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 38,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "617:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "604:46:0"
                },
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
                          "id": 40,
                          "name": "consensusGraphs",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10,
                          "src": "662:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_ConsensusGraph_$6_storage_$",
                            "typeString": "mapping(bytes32 => struct PublicSquare.ConsensusGraph storage ref)"
                          }
                        },
                        "id": 42,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 41,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32,
                          "src": "678:2:0",
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
                        "src": "662:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ConsensusGraph_$6_storage",
                          "typeString": "struct PublicSquare.ConsensusGraph storage ref"
                        }
                      },
                      "id": 43,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "creator",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5,
                      "src": "662:27:0",
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
                          "id": 45,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "701:1:0",
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
                        "id": 44,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "693:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 46,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "693:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "662:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 53,
                  "nodeType": "IfStatement",
                  "src": "658:96:0",
                  "trueBody": {
                    "id": 52,
                    "nodeType": "Block",
                    "src": "705:49:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "477261706820616c726561647920657869737473",
                              "id": 49,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "722:22:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d992c8f4086877270ca8ecdad03828917d1a7e57d90799acfae622f78c70bc6c",
                                "typeString": "literal_string \"Graph already exists\""
                              },
                              "value": "Graph already exists"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_d992c8f4086877270ca8ecdad03828917d1a7e57d90799acfae622f78c70bc6c",
                                "typeString": "literal_string \"Graph already exists\""
                              }
                            ],
                            "id": 48,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              96,
                              97
                            ],
                            "referencedDeclaration": 97,
                            "src": "715:6:0",
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
                          "src": "715:30:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 51,
                        "nodeType": "ExpressionStatement",
                        "src": "715:30:0"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 57,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32,
                        "src": "785:2:0",
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
                        "id": 54,
                        "name": "consensusGraphIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13,
                        "src": "762:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 56,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "762:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) returns (uint256)"
                      }
                    },
                    "id": 58,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "762:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 59,
                  "nodeType": "ExpressionStatement",
                  "src": "762:26:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 68,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 60,
                        "name": "consensusGraphs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "796:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_ConsensusGraph_$6_storage_$",
                          "typeString": "mapping(bytes32 => struct PublicSquare.ConsensusGraph storage ref)"
                        }
                      },
                      "id": 62,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 61,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32,
                        "src": "812:2:0",
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
                      "src": "796:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ConsensusGraph_$6_storage",
                        "typeString": "struct PublicSquare.ConsensusGraph storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 64,
                          "name": "name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28,
                          "src": "833:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 65,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 91,
                            "src": "839:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 66,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "839:10:0",
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
                        "id": 63,
                        "name": "ConsensusGraph",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6,
                        "src": "818:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_ConsensusGraph_$6_storage_ptr_$",
                          "typeString": "type(struct PublicSquare.ConsensusGraph storage pointer)"
                        }
                      },
                      "id": 67,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "818:32:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ConsensusGraph_$6_memory",
                        "typeString": "struct PublicSquare.ConsensusGraph memory"
                      }
                    },
                    "src": "796:54:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ConsensusGraph_$6_storage",
                      "typeString": "struct PublicSquare.ConsensusGraph storage ref"
                    }
                  },
                  "id": 69,
                  "nodeType": "ExpressionStatement",
                  "src": "796:54:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 71,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28,
                        "src": "881:4:0",
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
                      "id": 70,
                      "name": "NewConsensusGraph",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26,
                      "src": "863:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 72,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "863:23:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 73,
                  "nodeType": "EmitStatement",
                  "src": "858:28:0"
                }
              ]
            },
            "documentation": null,
            "id": 75,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createConsensusGraph",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 29,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "scope": 75,
                  "src": "569:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "569:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "568:20:0"
            },
            "returnParameters": {
              "id": 30,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "596:0:0"
            },
            "scope": 76,
            "src": "539:352:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 77,
        "src": "70:824:0"
      }
    ],
    "src": "36:859:0"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/Users/dmedani/codes/Consensus/public_square/contracts/PublicSquare.sol",
      "exportedSymbols": {
        "PublicSquare": [
          76
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
            76
          ],
          "name": "PublicSquare",
          "scope": 77
        },
        "children": [
          {
            "attributes": {
              "canonicalName": "PublicSquare.ConsensusGraph",
              "name": "ConsensusGraph",
              "scope": 76,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "name",
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
                    "src": "124:6:0"
                  }
                ],
                "id": 3,
                "name": "VariableDeclaration",
                "src": "124:11:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "creator",
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
                    "src": "141:7:0"
                  }
                ],
                "id": 5,
                "name": "VariableDeclaration",
                "src": "141:15:0"
              }
            ],
            "id": 6,
            "name": "StructDefinition",
            "src": "96:65:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "consensusGraphs",
              "scope": 76,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => struct PublicSquare.ConsensusGraph)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => struct PublicSquare.ConsensusGraph)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 7,
                    "name": "ElementaryTypeName",
                    "src": "224:7:0"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "ConsensusGraph",
                      "referencedDeclaration": 6,
                      "type": "struct PublicSquare.ConsensusGraph"
                    },
                    "id": 8,
                    "name": "UserDefinedTypeName",
                    "src": "235:14:0"
                  }
                ],
                "id": 9,
                "name": "Mapping",
                "src": "216:34:0"
              }
            ],
            "id": 10,
            "name": "VariableDeclaration",
            "src": "216:57:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "consensusGraphIds",
              "scope": 76,
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
                    "src": "333:7:0"
                  }
                ],
                "id": 12,
                "name": "ArrayTypeName",
                "src": "333:9:0"
              }
            ],
            "id": 13,
            "name": "VariableDeclaration",
            "src": "333:34:0"
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
              "name": "getConsensusGraphIds",
              "scope": 76,
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
                "id": 14,
                "name": "ParameterList",
                "src": "401:2:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 22,
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
                            "id": 15,
                            "name": "ElementaryTypeName",
                            "src": "424:7:0"
                          }
                        ],
                        "id": 16,
                        "name": "ArrayTypeName",
                        "src": "424:9:0"
                      }
                    ],
                    "id": 17,
                    "name": "VariableDeclaration",
                    "src": "424:16:0"
                  }
                ],
                "id": 18,
                "name": "ParameterList",
                "src": "423:18:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 18
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
                          "value": "consensusGraphIds"
                        },
                        "id": 19,
                        "name": "Identifier",
                        "src": "455:17:0"
                      }
                    ],
                    "id": 20,
                    "name": "Return",
                    "src": "448:24:0"
                  }
                ],
                "id": 21,
                "name": "Block",
                "src": "442:35:0"
              }
            ],
            "id": 22,
            "name": "FunctionDefinition",
            "src": "372:105:0"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "NewConsensusGraph"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "name",
                      "scope": 26,
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
                        "id": 23,
                        "name": "ElementaryTypeName",
                        "src": "511:6:0"
                      }
                    ],
                    "id": 24,
                    "name": "VariableDeclaration",
                    "src": "511:19:0"
                  }
                ],
                "id": 25,
                "name": "ParameterList",
                "src": "505:29:0"
              }
            ],
            "id": 26,
            "name": "EventDefinition",
            "src": "481:54:0"
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
              "name": "createConsensusGraph",
              "scope": 76,
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
                      "name": "name",
                      "scope": 75,
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
                        "id": 27,
                        "name": "ElementaryTypeName",
                        "src": "569:6:0"
                      }
                    ],
                    "id": 28,
                    "name": "VariableDeclaration",
                    "src": "569:18:0"
                  }
                ],
                "id": 29,
                "name": "ParameterList",
                "src": "568:20:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 30,
                "name": "ParameterList",
                "src": "596:0:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        32
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "id",
                          "scope": 74,
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
                            "id": 31,
                            "name": "ElementaryTypeName",
                            "src": "604:7:0"
                          }
                        ],
                        "id": 32,
                        "name": "VariableDeclaration",
                        "src": "604:10:0"
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
                              "referencedDeclaration": 85,
                              "type": "function (bytes memory) pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 33,
                            "name": "Identifier",
                            "src": "617:9:0"
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
                                      "referencedDeclaration": 78,
                                      "type": "abi",
                                      "value": "abi"
                                    },
                                    "id": 34,
                                    "name": "Identifier",
                                    "src": "627:3:0"
                                  }
                                ],
                                "id": 35,
                                "name": "MemberAccess",
                                "src": "627:16:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 28,
                                  "type": "string memory",
                                  "value": "name"
                                },
                                "id": 36,
                                "name": "Identifier",
                                "src": "644:4:0"
                              }
                            ],
                            "id": 37,
                            "name": "FunctionCall",
                            "src": "627:22:0"
                          }
                        ],
                        "id": 38,
                        "name": "FunctionCall",
                        "src": "617:33:0"
                      }
                    ],
                    "id": 39,
                    "name": "VariableDeclarationStatement",
                    "src": "604:46:0"
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
                              "member_name": "creator",
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
                                  "type": "struct PublicSquare.ConsensusGraph storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10,
                                      "type": "mapping(bytes32 => struct PublicSquare.ConsensusGraph storage ref)",
                                      "value": "consensusGraphs"
                                    },
                                    "id": 40,
                                    "name": "Identifier",
                                    "src": "662:15:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 32,
                                      "type": "bytes32",
                                      "value": "id"
                                    },
                                    "id": 41,
                                    "name": "Identifier",
                                    "src": "678:2:0"
                                  }
                                ],
                                "id": 42,
                                "name": "IndexAccess",
                                "src": "662:19:0"
                              }
                            ],
                            "id": 43,
                            "name": "MemberAccess",
                            "src": "662:27:0"
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
                                "id": 44,
                                "name": "ElementaryTypeNameExpression",
                                "src": "693:7:0"
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
                                "id": 45,
                                "name": "Literal",
                                "src": "701:1:0"
                              }
                            ],
                            "id": 46,
                            "name": "FunctionCall",
                            "src": "693:10:0"
                          }
                        ],
                        "id": 47,
                        "name": "BinaryOperation",
                        "src": "662:41:0"
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
                                          "typeIdentifier": "t_stringliteral_d992c8f4086877270ca8ecdad03828917d1a7e57d90799acfae622f78c70bc6c",
                                          "typeString": "literal_string \"Graph already exists\""
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        96,
                                        97
                                      ],
                                      "referencedDeclaration": 97,
                                      "type": "function (string memory) pure",
                                      "value": "revert"
                                    },
                                    "id": 48,
                                    "name": "Identifier",
                                    "src": "715:6:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "477261706820616c726561647920657869737473",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "string",
                                      "type": "literal_string \"Graph already exists\"",
                                      "value": "Graph already exists"
                                    },
                                    "id": 49,
                                    "name": "Literal",
                                    "src": "722:22:0"
                                  }
                                ],
                                "id": 50,
                                "name": "FunctionCall",
                                "src": "715:30:0"
                              }
                            ],
                            "id": 51,
                            "name": "ExpressionStatement",
                            "src": "715:30:0"
                          }
                        ],
                        "id": 52,
                        "name": "Block",
                        "src": "705:49:0"
                      }
                    ],
                    "id": 53,
                    "name": "IfStatement",
                    "src": "658:96:0"
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
                                  "value": "consensusGraphIds"
                                },
                                "id": 54,
                                "name": "Identifier",
                                "src": "762:17:0"
                              }
                            ],
                            "id": 56,
                            "name": "MemberAccess",
                            "src": "762:22:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 32,
                              "type": "bytes32",
                              "value": "id"
                            },
                            "id": 57,
                            "name": "Identifier",
                            "src": "785:2:0"
                          }
                        ],
                        "id": 58,
                        "name": "FunctionCall",
                        "src": "762:26:0"
                      }
                    ],
                    "id": 59,
                    "name": "ExpressionStatement",
                    "src": "762:26:0"
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
                          "type": "struct PublicSquare.ConsensusGraph storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct PublicSquare.ConsensusGraph storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10,
                                  "type": "mapping(bytes32 => struct PublicSquare.ConsensusGraph storage ref)",
                                  "value": "consensusGraphs"
                                },
                                "id": 60,
                                "name": "Identifier",
                                "src": "796:15:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 32,
                                  "type": "bytes32",
                                  "value": "id"
                                },
                                "id": 61,
                                "name": "Identifier",
                                "src": "812:2:0"
                              }
                            ],
                            "id": 62,
                            "name": "IndexAccess",
                            "src": "796:19:0"
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
                              "type": "struct PublicSquare.ConsensusGraph memory",
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
                                  "type": "type(struct PublicSquare.ConsensusGraph storage pointer)",
                                  "value": "ConsensusGraph"
                                },
                                "id": 63,
                                "name": "Identifier",
                                "src": "818:14:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 28,
                                  "type": "string memory",
                                  "value": "name"
                                },
                                "id": 64,
                                "name": "Identifier",
                                "src": "833:4:0"
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
                                      "referencedDeclaration": 91,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 65,
                                    "name": "Identifier",
                                    "src": "839:3:0"
                                  }
                                ],
                                "id": 66,
                                "name": "MemberAccess",
                                "src": "839:10:0"
                              }
                            ],
                            "id": 67,
                            "name": "FunctionCall",
                            "src": "818:32:0"
                          }
                        ],
                        "id": 68,
                        "name": "Assignment",
                        "src": "796:54:0"
                      }
                    ],
                    "id": 69,
                    "name": "ExpressionStatement",
                    "src": "796:54:0"
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
                              "referencedDeclaration": 26,
                              "type": "function (string memory)",
                              "value": "NewConsensusGraph"
                            },
                            "id": 70,
                            "name": "Identifier",
                            "src": "863:17:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 28,
                              "type": "string memory",
                              "value": "name"
                            },
                            "id": 71,
                            "name": "Identifier",
                            "src": "881:4:0"
                          }
                        ],
                        "id": 72,
                        "name": "FunctionCall",
                        "src": "863:23:0"
                      }
                    ],
                    "id": 73,
                    "name": "EmitStatement",
                    "src": "858:28:0"
                  }
                ],
                "id": 74,
                "name": "Block",
                "src": "596:295:0"
              }
            ],
            "id": 75,
            "name": "FunctionDefinition",
            "src": "539:352:0"
          }
        ],
        "id": 76,
        "name": "ContractDefinition",
        "src": "70:824:0"
      }
    ],
    "id": 77,
    "name": "SourceUnit",
    "src": "36:859:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "1616025073007": {
      "events": {},
      "links": {},
      "address": "0xE3659Ee7B051cc7B78161e410aCb4b8b09cE1e4A",
      "transactionHash": "0x4f80d6ccf1f09d14bdd44436bcd06bfa32108623c6eef82a25e6ae86d23ee49e"
    }
  },
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-03-18T01:29:15.433Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}
 export default PublicSquareABI
