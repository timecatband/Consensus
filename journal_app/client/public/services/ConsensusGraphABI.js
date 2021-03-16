ConsensusGraphABI = 
{
  "contractName": "ConsensusGraph",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "citizenId",
          "type": "bytes32"
        }
      ],
      "name": "NewCitizen",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "edgeId",
          "type": "bytes32"
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
          "internalType": "bytes32",
          "name": "nodeId",
          "type": "bytes32"
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
      "name": "edgeIds",
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
      "name": "edges",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "id",
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
          "name": "json",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
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
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
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
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
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
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"citizenId\",\"type\":\"bytes32\"}],\"name\":\"NewCitizen\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"edgeId\",\"type\":\"bytes32\"}],\"name\":\"NewEdge\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"nodeId\",\"type\":\"bytes32\"}],\"name\":\"NewNode\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"edgeIds\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"edges\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"nodeIds\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"nodes\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"name\":\"upsertEdge\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"name\":\"upsertNode\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/racarr/Consensus/Consensus/solidity/contracts/Consensus.sol\":\"ConsensusGraph\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/racarr/Consensus/Consensus/solidity/contracts/Consensus.sol\":{\"keccak256\":\"0x8c66b47182c4858ebdbb9b618b40573c0d6032692cb44c01019087aee2f152e8\",\"urls\":[\"bzz-raw://d3bc568ecbe5aa651710e2f00bd5e29dc1515b9b393330194f7546c98b88825e\",\"dweb:/ipfs/QmcKcw9dVEeDTBbCqPpvQrkQBKka4H5rfGh6ovp3CZaNiN\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50610bc6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806319d22320146100675780635045880d1461012c57806398543166146101f1578063ae6b89c214610233578063c4a9816914610275578063d86e697d14610356575b600080fd5b61012a6004803603604081101561007d57600080fd5b8101908080359060200190929190803590602001906401000000008111156100a457600080fd5b8201836020820111156100b657600080fd5b803590602001918460018302840111640100000000831117156100d857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610437565b005b6101ef6004803603604081101561014257600080fd5b81019080803590602001909291908035906020019064010000000081111561016957600080fd5b82018360208201111561017b57600080fd5b8035906020019184600183028401116401000000008311171561019d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061068d565b005b61021d6004803603602081101561020757600080fd5b81019080803590602001909291905050506108e6565b6040518082815260200191505060405180910390f35b61025f6004803603602081101561024957600080fd5b8101908080359060200190929190505050610907565b6040518082815260200191505060405180910390f35b6102a16004803603602081101561028b57600080fd5b8101908080359060200190929190505050610928565b60405180806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828103825285818151815260200191508051906020019080838360005b838110156103195780820151818401526020810190506102fe565b50505050905090810190601f1680156103465780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6103826004803603602081101561036c57600080fd5b8101908080359060200190929190505050610a0a565b60405180806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828103825285818151815260200191508051906020019080838360005b838110156103fa5780820151818401526020810190506103df565b50505050905090810190601f1680156104275780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b600073ffffffffffffffffffffffffffffffffffffffff1660008084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461057b573373ffffffffffffffffffffffffffffffffffffffff1660008084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610576576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f4f6e6c79206f776e65722063616e20757064617465206e6f646500000000000081525060200191505060405180910390fd5b6105a8565b60018290806001815401808255809150509060018203906000526020600020016000909192909190915055505b60405180606001604052808281526020013373ffffffffffffffffffffffffffffffffffffffff168152602001838152506000808481526020019081526020016000206000820151816000019080519060200190610607929190610aec565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155905050817fb0cd47a7093fb93a9ce97304d3afb8df43e02e48502e47fd5fbb6c4020d935b560405160405180910390a25050565b600073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107d3573373ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f4f6e6c79206f776e65722063616e20757064617465206564676500000000000081525060200191505060405180910390fd5b610800565b60038290806001815401808255809150509060018203906000526020600020016000909192909190915055505b60405180606001604052808281526020013373ffffffffffffffffffffffffffffffffffffffff16815260200183815250600260008481526020019081526020016000206000820151816000019080519060200190610860929190610aec565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155905050817fbed31bf7ba963e37385a3c060defc7b561d75ed2e8fbe9d5aeac57be68b1326e60405160405180910390a25050565b600181815481106108f357fe5b906000526020600020016000915090505481565b6003818154811061091457fe5b906000526020600020016000915090505481565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109d45780601f106109a9576101008083540402835291602001916109d4565b820191906000526020600020905b8154815290600101906020018083116109b757829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154905083565b6000602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ab65780601f10610a8b57610100808354040283529160200191610ab6565b820191906000526020600020905b815481529060010190602001808311610a9957829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154905083565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610b2d57805160ff1916838001178555610b5b565b82800160010185558215610b5b579182015b82811115610b5a578251825591602001919060010190610b3f565b5b509050610b689190610b6c565b5090565b610b8e91905b80821115610b8a576000816000905550600101610b72565b5090565b9056fea265627a7a72315820e477d727a2bc44f02ef9d8a4202cbc383cdf554dad3b78a5c8a128d4a933ab3c64736f6c63430005100032",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100625760003560e01c806319d22320146100675780635045880d1461012c57806398543166146101f1578063ae6b89c214610233578063c4a9816914610275578063d86e697d14610356575b600080fd5b61012a6004803603604081101561007d57600080fd5b8101908080359060200190929190803590602001906401000000008111156100a457600080fd5b8201836020820111156100b657600080fd5b803590602001918460018302840111640100000000831117156100d857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610437565b005b6101ef6004803603604081101561014257600080fd5b81019080803590602001909291908035906020019064010000000081111561016957600080fd5b82018360208201111561017b57600080fd5b8035906020019184600183028401116401000000008311171561019d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061068d565b005b61021d6004803603602081101561020757600080fd5b81019080803590602001909291905050506108e6565b6040518082815260200191505060405180910390f35b61025f6004803603602081101561024957600080fd5b8101908080359060200190929190505050610907565b6040518082815260200191505060405180910390f35b6102a16004803603602081101561028b57600080fd5b8101908080359060200190929190505050610928565b60405180806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828103825285818151815260200191508051906020019080838360005b838110156103195780820151818401526020810190506102fe565b50505050905090810190601f1680156103465780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6103826004803603602081101561036c57600080fd5b8101908080359060200190929190505050610a0a565b60405180806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828103825285818151815260200191508051906020019080838360005b838110156103fa5780820151818401526020810190506103df565b50505050905090810190601f1680156104275780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b600073ffffffffffffffffffffffffffffffffffffffff1660008084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461057b573373ffffffffffffffffffffffffffffffffffffffff1660008084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610576576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f4f6e6c79206f776e65722063616e20757064617465206e6f646500000000000081525060200191505060405180910390fd5b6105a8565b60018290806001815401808255809150509060018203906000526020600020016000909192909190915055505b60405180606001604052808281526020013373ffffffffffffffffffffffffffffffffffffffff168152602001838152506000808481526020019081526020016000206000820151816000019080519060200190610607929190610aec565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155905050817fb0cd47a7093fb93a9ce97304d3afb8df43e02e48502e47fd5fbb6c4020d935b560405160405180910390a25050565b600073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107d3573373ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f4f6e6c79206f776e65722063616e20757064617465206564676500000000000081525060200191505060405180910390fd5b610800565b60038290806001815401808255809150509060018203906000526020600020016000909192909190915055505b60405180606001604052808281526020013373ffffffffffffffffffffffffffffffffffffffff16815260200183815250600260008481526020019081526020016000206000820151816000019080519060200190610860929190610aec565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155905050817fbed31bf7ba963e37385a3c060defc7b561d75ed2e8fbe9d5aeac57be68b1326e60405160405180910390a25050565b600181815481106108f357fe5b906000526020600020016000915090505481565b6003818154811061091457fe5b906000526020600020016000915090505481565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109d45780601f106109a9576101008083540402835291602001916109d4565b820191906000526020600020905b8154815290600101906020018083116109b757829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154905083565b6000602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ab65780601f10610a8b57610100808354040283529160200191610ab6565b820191906000526020600020905b815481529060010190602001808311610a9957829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154905083565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610b2d57805160ff1916838001178555610b5b565b82800160010185558215610b5b579182015b82811115610b5a578251825591602001919060010190610b3f565b5b509050610b689190610b6c565b5090565b610b8e91905b80821115610b8a576000816000905550600101610b72565b5090565b9056fea265627a7a72315820e477d727a2bc44f02ef9d8a4202cbc383cdf554dad3b78a5c8a128d4a933ab3c64736f6c63430005100032",
  "sourceMap": "0:1193:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;0:1193:0;;;;;;;",
  "deployedSourceMap": "0:1193:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;0:1193:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;529:329;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;529:329:0;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;529:329:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;529:329:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;529:329:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;529:329:0;;;;;;;;;;;;;;;:::i;:::-;;862;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;862:329:0;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;862:329:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;862:329:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;862:329:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;862:329:0;;;;;;;;;;;;;;;:::i;:::-;;214:24;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;214:24:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;284;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;284:24:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;243:37;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;243:37:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;243:37:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;173;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;173:37:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;173:37:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;529:329;627:1;600:29;;:5;:9;606:2;600:9;;;;;;;;;;;:15;;;;;;;;;;;;:29;;;596:188;;664:10;645:29;;:5;:9;651:2;645:9;;;;;;;;;;;:15;;;;;;;;;;;;:29;;;641:94;;688:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;641:94;596:188;;;759:7;772:2;759:16;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;759:16:0;;;;;;;;;;;;;;;;;;;;;;596:188;803:26;;;;;;;;808:4;803:26;;;;814:10;803:26;;;;;;826:2;803:26;;;791:5;:9;797:2;791:9;;;;;;;;;;;:38;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;850:2;842:11;;;;;;;;;;529:329;;:::o;862:::-;960:1;933:29;;:5;:9;939:2;933:9;;;;;;;;;;;:15;;;;;;;;;;;;:29;;;929:188;;997:10;978:29;;:5;:9;984:2;978:9;;;;;;;;;;;:15;;;;;;;;;;;;:29;;;974:94;;1021:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;974:94;929:188;;;1092:7;1105:2;1092:16;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1092:16:0;;;;;;;;;;;;;;;;;;;;;;929:188;1136:26;;;;;;;;1141:4;1136:26;;;;1147:10;1136:26;;;;;;1159:2;1136:26;;;1124:5;:9;1130:2;1124:9;;;;;;;;;;;:38;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1183:2;1175:11;;;;;;;;;;862:329;;:::o;214:24::-;;;;;;;;;;;;;;;;;;;;;;;;;:::o;284:::-;;;;;;;;;;;;;;;;;;;;;;;;;:::o;243:37::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;173:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;0:1193::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "contract ConsensusGraph {\n  struct Node {\n    string json;\n    address owner;\n    bytes32 id;\n  }\n  struct Edge {\n    string json;\n    address owner;\n    bytes32 id;\n  }\n\n  mapping(bytes32 => Node) public nodes;\n  bytes32[] public nodeIds;\n\n  mapping(bytes32 => Edge) public edges;\n  bytes32[] public edgeIds;\n\n\n  // This event is emitted when a citizen is registered\n  event NewCitizen (\n    bytes32 indexed citizenId\n  );\n\n  event NewNode (\n    bytes32 indexed nodeId\n  );\n\n  event NewEdge (\n    bytes32 indexed edgeId\n  );\n\n  function upsertNode(bytes32 id, string memory json) public {\n      if (nodes[id].owner != address(0)) {\n        if (nodes[id].owner != msg.sender) {\n          revert(\"Only owner can update node\");\n        }\n      } else {\n        nodeIds.push(id);\n      }\n      nodes[id] = Node(json, msg.sender, id);\n      emit NewNode(id);\n  }\n\n  function upsertEdge(bytes32 id, string memory json) public {\n      if (edges[id].owner != address(0)) {\n        if (edges[id].owner != msg.sender) {\n          revert(\"Only owner can update edge\");\n        }\n      } else {\n        edgeIds.push(id);\n      }\n      edges[id] = Edge(json, msg.sender, id);\n      emit NewEdge(id);\n  }\n}\n",
  "sourcePath": "/Users/racarr/Consensus/Consensus/solidity/contracts/Consensus.sol",
  "ast": {
    "absolutePath": "/Users/racarr/Consensus/Consensus/solidity/contracts/Consensus.sol",
    "exportedSymbols": {
      "ConsensusGraph": [
        147
      ]
    },
    "id": 148,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 147,
        "linearizedBaseContracts": [
          147
        ],
        "name": "ConsensusGraph",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "ConsensusGraph.Node",
            "id": 7,
            "members": [
              {
                "constant": false,
                "id": 2,
                "name": "json",
                "nodeType": "VariableDeclaration",
                "scope": 7,
                "src": "46:11:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 1,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "46:6:0",
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
                "id": 4,
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 7,
                "src": "63:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 3,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "63:7:0",
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
                "id": 6,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 7,
                "src": "82:10:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 5,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "82:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Node",
            "nodeType": "StructDefinition",
            "scope": 147,
            "src": "28:69:0",
            "visibility": "public"
          },
          {
            "canonicalName": "ConsensusGraph.Edge",
            "id": 14,
            "members": [
              {
                "constant": false,
                "id": 9,
                "name": "json",
                "nodeType": "VariableDeclaration",
                "scope": 14,
                "src": "118:11:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 8,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "118:6:0",
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
                "id": 11,
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 14,
                "src": "135:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 10,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "135:7:0",
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
                "id": 13,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 14,
                "src": "154:10:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 12,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "154:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Edge",
            "nodeType": "StructDefinition",
            "scope": 147,
            "src": "100:69:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 18,
            "name": "nodes",
            "nodeType": "VariableDeclaration",
            "scope": 147,
            "src": "173:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$7_storage_$",
              "typeString": "mapping(bytes32 => struct ConsensusGraph.Node)"
            },
            "typeName": {
              "id": 17,
              "keyType": {
                "id": 15,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "181:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "173:24:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$7_storage_$",
                "typeString": "mapping(bytes32 => struct ConsensusGraph.Node)"
              },
              "valueType": {
                "contractScope": null,
                "id": 16,
                "name": "Node",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 7,
                "src": "192:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Node_$7_storage_ptr",
                  "typeString": "struct ConsensusGraph.Node"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 21,
            "name": "nodeIds",
            "nodeType": "VariableDeclaration",
            "scope": 147,
            "src": "214:24:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
              "typeString": "bytes32[]"
            },
            "typeName": {
              "baseType": {
                "id": 19,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "214:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "id": 20,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "214:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                "typeString": "bytes32[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 25,
            "name": "edges",
            "nodeType": "VariableDeclaration",
            "scope": 147,
            "src": "243:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Edge_$14_storage_$",
              "typeString": "mapping(bytes32 => struct ConsensusGraph.Edge)"
            },
            "typeName": {
              "id": 24,
              "keyType": {
                "id": 22,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "251:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "243:24:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Edge_$14_storage_$",
                "typeString": "mapping(bytes32 => struct ConsensusGraph.Edge)"
              },
              "valueType": {
                "contractScope": null,
                "id": 23,
                "name": "Edge",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 14,
                "src": "262:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Edge_$14_storage_ptr",
                  "typeString": "struct ConsensusGraph.Edge"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 28,
            "name": "edgeIds",
            "nodeType": "VariableDeclaration",
            "scope": 147,
            "src": "284:24:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
              "typeString": "bytes32[]"
            },
            "typeName": {
              "baseType": {
                "id": 26,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "284:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "id": 27,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "284:9:0",
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
            "id": 32,
            "name": "NewCitizen",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 31,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30,
                  "indexed": true,
                  "name": "citizenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 32,
                  "src": "393:25:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "393:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "387:35:0"
            },
            "src": "370:53:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 36,
            "name": "NewNode",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 35,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34,
                  "indexed": true,
                  "name": "nodeId",
                  "nodeType": "VariableDeclaration",
                  "scope": 36,
                  "src": "447:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 33,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "441:32:0"
            },
            "src": "427:47:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 40,
            "name": "NewEdge",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 39,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38,
                  "indexed": true,
                  "name": "edgeId",
                  "nodeType": "VariableDeclaration",
                  "scope": 40,
                  "src": "498:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 37,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "498:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "492:32:0"
            },
            "src": "478:47:0"
          },
          {
            "body": {
              "id": 92,
              "nodeType": "Block",
              "src": "588:270:0",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 54,
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
                          "id": 47,
                          "name": "nodes",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18,
                          "src": "600:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$7_storage_$",
                            "typeString": "mapping(bytes32 => struct ConsensusGraph.Node storage ref)"
                          }
                        },
                        "id": 49,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 48,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42,
                          "src": "606:2:0",
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
                        "src": "600:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Node_$7_storage",
                          "typeString": "struct ConsensusGraph.Node storage ref"
                        }
                      },
                      "id": 50,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4,
                      "src": "600:15:0",
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
                          "id": 52,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "627:1:0",
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
                        "id": 51,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "619:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 53,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "619:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "600:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 75,
                    "nodeType": "Block",
                    "src": "749:35:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 72,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42,
                              "src": "772:2:0",
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
                              "id": 69,
                              "name": "nodeIds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21,
                              "src": "759:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 71,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "759:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                              "typeString": "function (bytes32) returns (uint256)"
                            }
                          },
                          "id": 73,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "759:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 74,
                        "nodeType": "ExpressionStatement",
                        "src": "759:16:0"
                      }
                    ]
                  },
                  "id": 76,
                  "nodeType": "IfStatement",
                  "src": "596:188:0",
                  "trueBody": {
                    "id": 68,
                    "nodeType": "Block",
                    "src": "631:112:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 61,
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
                                "id": 55,
                                "name": "nodes",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18,
                                "src": "645:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$7_storage_$",
                                  "typeString": "mapping(bytes32 => struct ConsensusGraph.Node storage ref)"
                                }
                              },
                              "id": 57,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 56,
                                "name": "id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42,
                                "src": "651:2:0",
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
                              "src": "645:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Node_$7_storage",
                                "typeString": "struct ConsensusGraph.Node storage ref"
                              }
                            },
                            "id": 58,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "owner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4,
                            "src": "645:15:0",
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
                              "id": 59,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 162,
                              "src": "664:3:0",
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
                            "src": "664:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "645:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 67,
                        "nodeType": "IfStatement",
                        "src": "641:94:0",
                        "trueBody": {
                          "id": 66,
                          "nodeType": "Block",
                          "src": "676:59:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "4f6e6c79206f776e65722063616e20757064617465206e6f6465",
                                    "id": 63,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "695:28:0",
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
                                  "id": 62,
                                  "name": "revert",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    167,
                                    168
                                  ],
                                  "referencedDeclaration": 168,
                                  "src": "688:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (string memory) pure"
                                  }
                                },
                                "id": 64,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "688:36:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 65,
                              "nodeType": "ExpressionStatement",
                              "src": "688:36:0"
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
                    "id": 86,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 77,
                        "name": "nodes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "791:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$7_storage_$",
                          "typeString": "mapping(bytes32 => struct ConsensusGraph.Node storage ref)"
                        }
                      },
                      "id": 79,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 78,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42,
                        "src": "797:2:0",
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
                      "src": "791:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Node_$7_storage",
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
                          "id": 81,
                          "name": "json",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44,
                          "src": "808:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 82,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 162,
                            "src": "814:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 83,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "814:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 84,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42,
                          "src": "826:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
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
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 80,
                        "name": "Node",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "803:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Node_$7_storage_ptr_$",
                          "typeString": "type(struct ConsensusGraph.Node storage pointer)"
                        }
                      },
                      "id": 85,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "803:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Node_$7_memory",
                        "typeString": "struct ConsensusGraph.Node memory"
                      }
                    },
                    "src": "791:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Node_$7_storage",
                      "typeString": "struct ConsensusGraph.Node storage ref"
                    }
                  },
                  "id": 87,
                  "nodeType": "ExpressionStatement",
                  "src": "791:38:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 89,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42,
                        "src": "850:2:0",
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
                      "id": 88,
                      "name": "NewNode",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36,
                      "src": "842:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 90,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "842:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 91,
                  "nodeType": "EmitStatement",
                  "src": "837:16:0"
                }
              ]
            },
            "documentation": null,
            "id": 93,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "upsertNode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 45,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 93,
                  "src": "549:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "549:7:0",
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
                  "id": 44,
                  "name": "json",
                  "nodeType": "VariableDeclaration",
                  "scope": 93,
                  "src": "561:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 43,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "561:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "548:32:0"
            },
            "returnParameters": {
              "id": 46,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "588:0:0"
            },
            "scope": 147,
            "src": "529:329:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 145,
              "nodeType": "Block",
              "src": "921:270:0",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 107,
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
                          "id": 100,
                          "name": "edges",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25,
                          "src": "933:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Edge_$14_storage_$",
                            "typeString": "mapping(bytes32 => struct ConsensusGraph.Edge storage ref)"
                          }
                        },
                        "id": 102,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 101,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 95,
                          "src": "939:2:0",
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
                        "src": "933:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Edge_$14_storage",
                          "typeString": "struct ConsensusGraph.Edge storage ref"
                        }
                      },
                      "id": 103,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11,
                      "src": "933:15:0",
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
                          "id": 105,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "960:1:0",
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
                        "id": 104,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "952:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 106,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "952:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "933:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 128,
                    "nodeType": "Block",
                    "src": "1082:35:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 125,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 95,
                              "src": "1105:2:0",
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
                              "id": 122,
                              "name": "edgeIds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28,
                              "src": "1092:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 124,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1092:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                              "typeString": "function (bytes32) returns (uint256)"
                            }
                          },
                          "id": 126,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1092:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 127,
                        "nodeType": "ExpressionStatement",
                        "src": "1092:16:0"
                      }
                    ]
                  },
                  "id": 129,
                  "nodeType": "IfStatement",
                  "src": "929:188:0",
                  "trueBody": {
                    "id": 121,
                    "nodeType": "Block",
                    "src": "964:112:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 114,
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
                                "id": 108,
                                "name": "edges",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 25,
                                "src": "978:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Edge_$14_storage_$",
                                  "typeString": "mapping(bytes32 => struct ConsensusGraph.Edge storage ref)"
                                }
                              },
                              "id": 110,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 109,
                                "name": "id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 95,
                                "src": "984:2:0",
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
                              "src": "978:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Edge_$14_storage",
                                "typeString": "struct ConsensusGraph.Edge storage ref"
                              }
                            },
                            "id": 111,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "owner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 11,
                            "src": "978:15:0",
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
                              "id": 112,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 162,
                              "src": "997:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 113,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "997:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "978:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 120,
                        "nodeType": "IfStatement",
                        "src": "974:94:0",
                        "trueBody": {
                          "id": 119,
                          "nodeType": "Block",
                          "src": "1009:59:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "4f6e6c79206f776e65722063616e207570646174652065646765",
                                    "id": 116,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1028:28:0",
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
                                  "id": 115,
                                  "name": "revert",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    167,
                                    168
                                  ],
                                  "referencedDeclaration": 168,
                                  "src": "1021:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (string memory) pure"
                                  }
                                },
                                "id": 117,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1021:36:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 118,
                              "nodeType": "ExpressionStatement",
                              "src": "1021:36:0"
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
                    "id": 139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 130,
                        "name": "edges",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25,
                        "src": "1124:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Edge_$14_storage_$",
                          "typeString": "mapping(bytes32 => struct ConsensusGraph.Edge storage ref)"
                        }
                      },
                      "id": 132,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 131,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 95,
                        "src": "1130:2:0",
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
                      "src": "1124:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Edge_$14_storage",
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
                          "id": 134,
                          "name": "json",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 97,
                          "src": "1141:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 135,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 162,
                            "src": "1147:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 136,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1147:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 137,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 95,
                          "src": "1159:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
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
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 133,
                        "name": "Edge",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14,
                        "src": "1136:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Edge_$14_storage_ptr_$",
                          "typeString": "type(struct ConsensusGraph.Edge storage pointer)"
                        }
                      },
                      "id": 138,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1136:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Edge_$14_memory",
                        "typeString": "struct ConsensusGraph.Edge memory"
                      }
                    },
                    "src": "1124:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Edge_$14_storage",
                      "typeString": "struct ConsensusGraph.Edge storage ref"
                    }
                  },
                  "id": 140,
                  "nodeType": "ExpressionStatement",
                  "src": "1124:38:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 142,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 95,
                        "src": "1183:2:0",
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
                      "id": 141,
                      "name": "NewEdge",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40,
                      "src": "1175:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1175:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 144,
                  "nodeType": "EmitStatement",
                  "src": "1170:16:0"
                }
              ]
            },
            "documentation": null,
            "id": 146,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "upsertEdge",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 98,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 95,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 146,
                  "src": "882:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 94,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "882:7:0",
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
                  "id": 97,
                  "name": "json",
                  "nodeType": "VariableDeclaration",
                  "scope": 146,
                  "src": "894:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 96,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "894:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "881:32:0"
            },
            "returnParameters": {
              "id": 99,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "921:0:0"
            },
            "scope": 147,
            "src": "862:329:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 148,
        "src": "0:1193:0"
      }
    ],
    "src": "0:1194:0"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/Users/racarr/Consensus/Consensus/solidity/contracts/Consensus.sol",
      "exportedSymbols": {
        "ConsensusGraph": [
          147
        ]
      }
    },
    "children": [
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
            147
          ],
          "name": "ConsensusGraph",
          "scope": 148
        },
        "children": [
          {
            "attributes": {
              "canonicalName": "ConsensusGraph.Node",
              "name": "Node",
              "scope": 147,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "json",
                  "scope": 7,
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
                    "id": 1,
                    "name": "ElementaryTypeName",
                    "src": "46:6:0"
                  }
                ],
                "id": 2,
                "name": "VariableDeclaration",
                "src": "46:11:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "owner",
                  "scope": 7,
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
                    "id": 3,
                    "name": "ElementaryTypeName",
                    "src": "63:7:0"
                  }
                ],
                "id": 4,
                "name": "VariableDeclaration",
                "src": "63:13:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "id",
                  "scope": 7,
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
                    "id": 5,
                    "name": "ElementaryTypeName",
                    "src": "82:7:0"
                  }
                ],
                "id": 6,
                "name": "VariableDeclaration",
                "src": "82:10:0"
              }
            ],
            "id": 7,
            "name": "StructDefinition",
            "src": "28:69:0"
          },
          {
            "attributes": {
              "canonicalName": "ConsensusGraph.Edge",
              "name": "Edge",
              "scope": 147,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "json",
                  "scope": 14,
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
                    "id": 8,
                    "name": "ElementaryTypeName",
                    "src": "118:6:0"
                  }
                ],
                "id": 9,
                "name": "VariableDeclaration",
                "src": "118:11:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "owner",
                  "scope": 14,
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
                    "id": 10,
                    "name": "ElementaryTypeName",
                    "src": "135:7:0"
                  }
                ],
                "id": 11,
                "name": "VariableDeclaration",
                "src": "135:13:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "id",
                  "scope": 14,
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
                    "id": 12,
                    "name": "ElementaryTypeName",
                    "src": "154:7:0"
                  }
                ],
                "id": 13,
                "name": "VariableDeclaration",
                "src": "154:10:0"
              }
            ],
            "id": 14,
            "name": "StructDefinition",
            "src": "100:69:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "nodes",
              "scope": 147,
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
                    "id": 15,
                    "name": "ElementaryTypeName",
                    "src": "181:7:0"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Node",
                      "referencedDeclaration": 7,
                      "type": "struct ConsensusGraph.Node"
                    },
                    "id": 16,
                    "name": "UserDefinedTypeName",
                    "src": "192:4:0"
                  }
                ],
                "id": 17,
                "name": "Mapping",
                "src": "173:24:0"
              }
            ],
            "id": 18,
            "name": "VariableDeclaration",
            "src": "173:37:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "nodeIds",
              "scope": 147,
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
                    "id": 19,
                    "name": "ElementaryTypeName",
                    "src": "214:7:0"
                  }
                ],
                "id": 20,
                "name": "ArrayTypeName",
                "src": "214:9:0"
              }
            ],
            "id": 21,
            "name": "VariableDeclaration",
            "src": "214:24:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "edges",
              "scope": 147,
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
                    "id": 22,
                    "name": "ElementaryTypeName",
                    "src": "251:7:0"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Edge",
                      "referencedDeclaration": 14,
                      "type": "struct ConsensusGraph.Edge"
                    },
                    "id": 23,
                    "name": "UserDefinedTypeName",
                    "src": "262:4:0"
                  }
                ],
                "id": 24,
                "name": "Mapping",
                "src": "243:24:0"
              }
            ],
            "id": 25,
            "name": "VariableDeclaration",
            "src": "243:37:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "edgeIds",
              "scope": 147,
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
                    "id": 26,
                    "name": "ElementaryTypeName",
                    "src": "284:7:0"
                  }
                ],
                "id": 27,
                "name": "ArrayTypeName",
                "src": "284:9:0"
              }
            ],
            "id": 28,
            "name": "VariableDeclaration",
            "src": "284:24:0"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "NewCitizen"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "citizenId",
                      "scope": 32,
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
                        "id": 29,
                        "name": "ElementaryTypeName",
                        "src": "393:7:0"
                      }
                    ],
                    "id": 30,
                    "name": "VariableDeclaration",
                    "src": "393:25:0"
                  }
                ],
                "id": 31,
                "name": "ParameterList",
                "src": "387:35:0"
              }
            ],
            "id": 32,
            "name": "EventDefinition",
            "src": "370:53:0"
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
                      "scope": 36,
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
                        "id": 33,
                        "name": "ElementaryTypeName",
                        "src": "447:7:0"
                      }
                    ],
                    "id": 34,
                    "name": "VariableDeclaration",
                    "src": "447:22:0"
                  }
                ],
                "id": 35,
                "name": "ParameterList",
                "src": "441:32:0"
              }
            ],
            "id": 36,
            "name": "EventDefinition",
            "src": "427:47:0"
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
                      "scope": 40,
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
                        "id": 37,
                        "name": "ElementaryTypeName",
                        "src": "498:7:0"
                      }
                    ],
                    "id": 38,
                    "name": "VariableDeclaration",
                    "src": "498:22:0"
                  }
                ],
                "id": 39,
                "name": "ParameterList",
                "src": "492:32:0"
              }
            ],
            "id": 40,
            "name": "EventDefinition",
            "src": "478:47:0"
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
              "scope": 147,
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
                      "name": "id",
                      "scope": 93,
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
                        "id": 41,
                        "name": "ElementaryTypeName",
                        "src": "549:7:0"
                      }
                    ],
                    "id": 42,
                    "name": "VariableDeclaration",
                    "src": "549:10:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "json",
                      "scope": 93,
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
                        "id": 43,
                        "name": "ElementaryTypeName",
                        "src": "561:6:0"
                      }
                    ],
                    "id": 44,
                    "name": "VariableDeclaration",
                    "src": "561:18:0"
                  }
                ],
                "id": 45,
                "name": "ParameterList",
                "src": "548:32:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 46,
                "name": "ParameterList",
                "src": "588:0:0"
              },
              {
                "children": [
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
                              "referencedDeclaration": 4,
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
                                      "referencedDeclaration": 18,
                                      "type": "mapping(bytes32 => struct ConsensusGraph.Node storage ref)",
                                      "value": "nodes"
                                    },
                                    "id": 47,
                                    "name": "Identifier",
                                    "src": "600:5:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 42,
                                      "type": "bytes32",
                                      "value": "id"
                                    },
                                    "id": 48,
                                    "name": "Identifier",
                                    "src": "606:2:0"
                                  }
                                ],
                                "id": 49,
                                "name": "IndexAccess",
                                "src": "600:9:0"
                              }
                            ],
                            "id": 50,
                            "name": "MemberAccess",
                            "src": "600:15:0"
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
                                "id": 51,
                                "name": "ElementaryTypeNameExpression",
                                "src": "619:7:0"
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
                                "id": 52,
                                "name": "Literal",
                                "src": "627:1:0"
                              }
                            ],
                            "id": 53,
                            "name": "FunctionCall",
                            "src": "619:10:0"
                          }
                        ],
                        "id": 54,
                        "name": "BinaryOperation",
                        "src": "600:29:0"
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
                                      "referencedDeclaration": 4,
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
                                              "referencedDeclaration": 18,
                                              "type": "mapping(bytes32 => struct ConsensusGraph.Node storage ref)",
                                              "value": "nodes"
                                            },
                                            "id": 55,
                                            "name": "Identifier",
                                            "src": "645:5:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 42,
                                              "type": "bytes32",
                                              "value": "id"
                                            },
                                            "id": 56,
                                            "name": "Identifier",
                                            "src": "651:2:0"
                                          }
                                        ],
                                        "id": 57,
                                        "name": "IndexAccess",
                                        "src": "645:9:0"
                                      }
                                    ],
                                    "id": 58,
                                    "name": "MemberAccess",
                                    "src": "645:15:0"
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
                                          "referencedDeclaration": 162,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 59,
                                        "name": "Identifier",
                                        "src": "664:3:0"
                                      }
                                    ],
                                    "id": 60,
                                    "name": "MemberAccess",
                                    "src": "664:10:0"
                                  }
                                ],
                                "id": 61,
                                "name": "BinaryOperation",
                                "src": "645:29:0"
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
                                                167,
                                                168
                                              ],
                                              "referencedDeclaration": 168,
                                              "type": "function (string memory) pure",
                                              "value": "revert"
                                            },
                                            "id": 62,
                                            "name": "Identifier",
                                            "src": "688:6:0"
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
                                            "id": 63,
                                            "name": "Literal",
                                            "src": "695:28:0"
                                          }
                                        ],
                                        "id": 64,
                                        "name": "FunctionCall",
                                        "src": "688:36:0"
                                      }
                                    ],
                                    "id": 65,
                                    "name": "ExpressionStatement",
                                    "src": "688:36:0"
                                  }
                                ],
                                "id": 66,
                                "name": "Block",
                                "src": "676:59:0"
                              }
                            ],
                            "id": 67,
                            "name": "IfStatement",
                            "src": "641:94:0"
                          }
                        ],
                        "id": 68,
                        "name": "Block",
                        "src": "631:112:0"
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
                                          "referencedDeclaration": 21,
                                          "type": "bytes32[] storage ref",
                                          "value": "nodeIds"
                                        },
                                        "id": 69,
                                        "name": "Identifier",
                                        "src": "759:7:0"
                                      }
                                    ],
                                    "id": 71,
                                    "name": "MemberAccess",
                                    "src": "759:12:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 42,
                                      "type": "bytes32",
                                      "value": "id"
                                    },
                                    "id": 72,
                                    "name": "Identifier",
                                    "src": "772:2:0"
                                  }
                                ],
                                "id": 73,
                                "name": "FunctionCall",
                                "src": "759:16:0"
                              }
                            ],
                            "id": 74,
                            "name": "ExpressionStatement",
                            "src": "759:16:0"
                          }
                        ],
                        "id": 75,
                        "name": "Block",
                        "src": "749:35:0"
                      }
                    ],
                    "id": 76,
                    "name": "IfStatement",
                    "src": "596:188:0"
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
                                  "referencedDeclaration": 18,
                                  "type": "mapping(bytes32 => struct ConsensusGraph.Node storage ref)",
                                  "value": "nodes"
                                },
                                "id": 77,
                                "name": "Identifier",
                                "src": "791:5:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 42,
                                  "type": "bytes32",
                                  "value": "id"
                                },
                                "id": 78,
                                "name": "Identifier",
                                "src": "797:2:0"
                              }
                            ],
                            "id": 79,
                            "name": "IndexAccess",
                            "src": "791:9:0"
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
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7,
                                  "type": "type(struct ConsensusGraph.Node storage pointer)",
                                  "value": "Node"
                                },
                                "id": 80,
                                "name": "Identifier",
                                "src": "803:4:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 44,
                                  "type": "string memory",
                                  "value": "json"
                                },
                                "id": 81,
                                "name": "Identifier",
                                "src": "808:4:0"
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
                                      "referencedDeclaration": 162,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 82,
                                    "name": "Identifier",
                                    "src": "814:3:0"
                                  }
                                ],
                                "id": 83,
                                "name": "MemberAccess",
                                "src": "814:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 42,
                                  "type": "bytes32",
                                  "value": "id"
                                },
                                "id": 84,
                                "name": "Identifier",
                                "src": "826:2:0"
                              }
                            ],
                            "id": 85,
                            "name": "FunctionCall",
                            "src": "803:26:0"
                          }
                        ],
                        "id": 86,
                        "name": "Assignment",
                        "src": "791:38:0"
                      }
                    ],
                    "id": 87,
                    "name": "ExpressionStatement",
                    "src": "791:38:0"
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
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 36,
                              "type": "function (bytes32)",
                              "value": "NewNode"
                            },
                            "id": 88,
                            "name": "Identifier",
                            "src": "842:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 42,
                              "type": "bytes32",
                              "value": "id"
                            },
                            "id": 89,
                            "name": "Identifier",
                            "src": "850:2:0"
                          }
                        ],
                        "id": 90,
                        "name": "FunctionCall",
                        "src": "842:11:0"
                      }
                    ],
                    "id": 91,
                    "name": "EmitStatement",
                    "src": "837:16:0"
                  }
                ],
                "id": 92,
                "name": "Block",
                "src": "588:270:0"
              }
            ],
            "id": 93,
            "name": "FunctionDefinition",
            "src": "529:329:0"
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
              "scope": 147,
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
                      "name": "id",
                      "scope": 146,
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
                        "id": 94,
                        "name": "ElementaryTypeName",
                        "src": "882:7:0"
                      }
                    ],
                    "id": 95,
                    "name": "VariableDeclaration",
                    "src": "882:10:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "json",
                      "scope": 146,
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
                        "id": 96,
                        "name": "ElementaryTypeName",
                        "src": "894:6:0"
                      }
                    ],
                    "id": 97,
                    "name": "VariableDeclaration",
                    "src": "894:18:0"
                  }
                ],
                "id": 98,
                "name": "ParameterList",
                "src": "881:32:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 99,
                "name": "ParameterList",
                "src": "921:0:0"
              },
              {
                "children": [
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
                              "referencedDeclaration": 11,
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
                                      "referencedDeclaration": 25,
                                      "type": "mapping(bytes32 => struct ConsensusGraph.Edge storage ref)",
                                      "value": "edges"
                                    },
                                    "id": 100,
                                    "name": "Identifier",
                                    "src": "933:5:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 95,
                                      "type": "bytes32",
                                      "value": "id"
                                    },
                                    "id": 101,
                                    "name": "Identifier",
                                    "src": "939:2:0"
                                  }
                                ],
                                "id": 102,
                                "name": "IndexAccess",
                                "src": "933:9:0"
                              }
                            ],
                            "id": 103,
                            "name": "MemberAccess",
                            "src": "933:15:0"
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
                                "id": 104,
                                "name": "ElementaryTypeNameExpression",
                                "src": "952:7:0"
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
                                "id": 105,
                                "name": "Literal",
                                "src": "960:1:0"
                              }
                            ],
                            "id": 106,
                            "name": "FunctionCall",
                            "src": "952:10:0"
                          }
                        ],
                        "id": 107,
                        "name": "BinaryOperation",
                        "src": "933:29:0"
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
                                      "referencedDeclaration": 11,
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
                                              "referencedDeclaration": 25,
                                              "type": "mapping(bytes32 => struct ConsensusGraph.Edge storage ref)",
                                              "value": "edges"
                                            },
                                            "id": 108,
                                            "name": "Identifier",
                                            "src": "978:5:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 95,
                                              "type": "bytes32",
                                              "value": "id"
                                            },
                                            "id": 109,
                                            "name": "Identifier",
                                            "src": "984:2:0"
                                          }
                                        ],
                                        "id": 110,
                                        "name": "IndexAccess",
                                        "src": "978:9:0"
                                      }
                                    ],
                                    "id": 111,
                                    "name": "MemberAccess",
                                    "src": "978:15:0"
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
                                          "referencedDeclaration": 162,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 112,
                                        "name": "Identifier",
                                        "src": "997:3:0"
                                      }
                                    ],
                                    "id": 113,
                                    "name": "MemberAccess",
                                    "src": "997:10:0"
                                  }
                                ],
                                "id": 114,
                                "name": "BinaryOperation",
                                "src": "978:29:0"
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
                                                167,
                                                168
                                              ],
                                              "referencedDeclaration": 168,
                                              "type": "function (string memory) pure",
                                              "value": "revert"
                                            },
                                            "id": 115,
                                            "name": "Identifier",
                                            "src": "1021:6:0"
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
                                            "id": 116,
                                            "name": "Literal",
                                            "src": "1028:28:0"
                                          }
                                        ],
                                        "id": 117,
                                        "name": "FunctionCall",
                                        "src": "1021:36:0"
                                      }
                                    ],
                                    "id": 118,
                                    "name": "ExpressionStatement",
                                    "src": "1021:36:0"
                                  }
                                ],
                                "id": 119,
                                "name": "Block",
                                "src": "1009:59:0"
                              }
                            ],
                            "id": 120,
                            "name": "IfStatement",
                            "src": "974:94:0"
                          }
                        ],
                        "id": 121,
                        "name": "Block",
                        "src": "964:112:0"
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
                                          "referencedDeclaration": 28,
                                          "type": "bytes32[] storage ref",
                                          "value": "edgeIds"
                                        },
                                        "id": 122,
                                        "name": "Identifier",
                                        "src": "1092:7:0"
                                      }
                                    ],
                                    "id": 124,
                                    "name": "MemberAccess",
                                    "src": "1092:12:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 95,
                                      "type": "bytes32",
                                      "value": "id"
                                    },
                                    "id": 125,
                                    "name": "Identifier",
                                    "src": "1105:2:0"
                                  }
                                ],
                                "id": 126,
                                "name": "FunctionCall",
                                "src": "1092:16:0"
                              }
                            ],
                            "id": 127,
                            "name": "ExpressionStatement",
                            "src": "1092:16:0"
                          }
                        ],
                        "id": 128,
                        "name": "Block",
                        "src": "1082:35:0"
                      }
                    ],
                    "id": 129,
                    "name": "IfStatement",
                    "src": "929:188:0"
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
                                  "referencedDeclaration": 25,
                                  "type": "mapping(bytes32 => struct ConsensusGraph.Edge storage ref)",
                                  "value": "edges"
                                },
                                "id": 130,
                                "name": "Identifier",
                                "src": "1124:5:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 95,
                                  "type": "bytes32",
                                  "value": "id"
                                },
                                "id": 131,
                                "name": "Identifier",
                                "src": "1130:2:0"
                              }
                            ],
                            "id": 132,
                            "name": "IndexAccess",
                            "src": "1124:9:0"
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
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14,
                                  "type": "type(struct ConsensusGraph.Edge storage pointer)",
                                  "value": "Edge"
                                },
                                "id": 133,
                                "name": "Identifier",
                                "src": "1136:4:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 97,
                                  "type": "string memory",
                                  "value": "json"
                                },
                                "id": 134,
                                "name": "Identifier",
                                "src": "1141:4:0"
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
                                      "referencedDeclaration": 162,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 135,
                                    "name": "Identifier",
                                    "src": "1147:3:0"
                                  }
                                ],
                                "id": 136,
                                "name": "MemberAccess",
                                "src": "1147:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 95,
                                  "type": "bytes32",
                                  "value": "id"
                                },
                                "id": 137,
                                "name": "Identifier",
                                "src": "1159:2:0"
                              }
                            ],
                            "id": 138,
                            "name": "FunctionCall",
                            "src": "1136:26:0"
                          }
                        ],
                        "id": 139,
                        "name": "Assignment",
                        "src": "1124:38:0"
                      }
                    ],
                    "id": 140,
                    "name": "ExpressionStatement",
                    "src": "1124:38:0"
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
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 40,
                              "type": "function (bytes32)",
                              "value": "NewEdge"
                            },
                            "id": 141,
                            "name": "Identifier",
                            "src": "1175:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 95,
                              "type": "bytes32",
                              "value": "id"
                            },
                            "id": 142,
                            "name": "Identifier",
                            "src": "1183:2:0"
                          }
                        ],
                        "id": 143,
                        "name": "FunctionCall",
                        "src": "1175:11:0"
                      }
                    ],
                    "id": 144,
                    "name": "EmitStatement",
                    "src": "1170:16:0"
                  }
                ],
                "id": 145,
                "name": "Block",
                "src": "921:270:0"
              }
            ],
            "id": 146,
            "name": "FunctionDefinition",
            "src": "862:329:0"
          }
        ],
        "id": 147,
        "name": "ContractDefinition",
        "src": "0:1193:0"
      }
    ],
    "id": 148,
    "name": "SourceUnit",
    "src": "0:1194:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-03-16T09:11:14.782Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}ConsensusGraphABI = 
{
  "contractName": "ConsensusGraph",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "citizenId",
          "type": "bytes32"
        }
      ],
      "name": "NewCitizen",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "edgeId",
          "type": "bytes32"
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
          "internalType": "bytes32",
          "name": "nodeId",
          "type": "bytes32"
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
      "name": "edgeIds",
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
      "name": "edges",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "id",
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
          "name": "json",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
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
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"citizenId\",\"type\":\"bytes32\"}],\"name\":\"NewCitizen\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"edgeId\",\"type\":\"bytes32\"}],\"name\":\"NewEdge\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"nodeId\",\"type\":\"bytes32\"}],\"name\":\"NewNode\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"edgeIds\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"edges\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"id\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"nodeIds\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"nodes\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"id\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringId\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"name\":\"upsertEdge\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringId\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"name\":\"upsertNode\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/racarr/Consensus/Consensus/solidity/contracts/Consensus.sol\":\"ConsensusGraph\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/racarr/Consensus/Consensus/solidity/contracts/Consensus.sol\":{\"keccak256\":\"0xf2559d76ffb24cbe45d8fdaa38a04d5b5c0bfd128e12e16f79be81ac11e20537\",\"urls\":[\"bzz-raw://db38053929588050651e087308712b45bf9c994996fbec336bb5b90b93bf4433\",\"dweb:/ipfs/QmP6GJMUV2zJS1doTMh18taCxzYUFD8Nkbm1EH9PeECLXc\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50610fee806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80638037b3e21461006757806398543166146101b9578063ae6b89c2146101fb578063c2f118251461023d578063c4a981691461038f578063d86e697d146104d5575b600080fd5b6101b76004803603604081101561007d57600080fd5b810190808035906020019064010000000081111561009a57600080fd5b8201836020820111156100ac57600080fd5b803590602001918460018302840111640100000000831117156100ce57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561013157600080fd5b82018360208201111561014357600080fd5b8035906020019184600183028401116401000000008311171561016557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061061b565b005b6101e5600480360360208110156101cf57600080fd5b81019080803590602001909291905050506108fb565b6040518082815260200191505060405180910390f35b6102276004803603602081101561021157600080fd5b810190808035906020019092919050505061091c565b6040518082815260200191505060405180910390f35b61038d6004803603604081101561025357600080fd5b810190808035906020019064010000000081111561027057600080fd5b82018360208201111561028257600080fd5b803590602001918460018302840111640100000000831117156102a457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561030757600080fd5b82018360208201111561031957600080fd5b8035906020019184600183028401116401000000008311171561033b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061093d565b005b6103bb600480360360208110156103a557600080fd5b8101908080359060200190929190505050610c20565b60405180806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001838103835286818151815260200191508051906020019080838360005b83811015610431578082015181840152602081019050610416565b50505050905090810190601f16801561045e5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561049757808201518184015260208101905061047c565b50505050905090810190601f1680156104c45780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b610501600480360360208110156104eb57600080fd5b8101908080359060200190929190505050610d9a565b60405180806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001838103835286818151815260200191508051906020019080838360005b8381101561057757808201518184015260208101905061055c565b50505050905090810190601f1680156105a45780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156105dd5780820151818401526020810190506105c2565b50505050905090810190601f16801561060a5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b6000826040516020018082805190602001908083835b602083106106545780518252602082019150602081019050602083039250610631565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107d5573373ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f4f6e6c79206f776e65722063616e20757064617465206e6f646500000000000081525060200191505060405180910390fd5b610802565b60018190806001815401808255809150509060018203906000526020600020016000909192909190915055505b60405180606001604052808381526020013373ffffffffffffffffffffffffffffffffffffffff168152602001848152506000808381526020019081526020016000206000820151816000019080519060200190610861929190610f14565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020190805190602001906108c5929190610f14565b50905050807fb0cd47a7093fb93a9ce97304d3afb8df43e02e48502e47fd5fbb6c4020d935b560405160405180910390a2505050565b6001818154811061090857fe5b906000526020600020016000915090505481565b6003818154811061092957fe5b906000526020600020016000915090505481565b6000826040516020018082805190602001908083835b602083106109765780518252602082019150602081019050602083039250610953565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610af9573373ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610af4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f4f6e6c79206f776e65722063616e20757064617465206564676500000000000081525060200191505060405180910390fd5b610b26565b60038190806001815401808255809150509060018203906000526020600020016000909192909190915055505b60405180606001604052808381526020013373ffffffffffffffffffffffffffffffffffffffff16815260200184815250600260008381526020019081526020016000206000820151816000019080519060200190610b86929190610f14565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019080519060200190610bea929190610f14565b50905050807fbed31bf7ba963e37385a3c060defc7b561d75ed2e8fbe9d5aeac57be68b1326e60405160405180910390a2505050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ccc5780601f10610ca157610100808354040283529160200191610ccc565b820191906000526020600020905b815481529060010190602001808311610caf57829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d905780601f10610d6557610100808354040283529160200191610d90565b820191906000526020600020905b815481529060010190602001808311610d7357829003601f168201915b5050505050905083565b6000602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e465780601f10610e1b57610100808354040283529160200191610e46565b820191906000526020600020905b815481529060010190602001808311610e2957829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f0a5780601f10610edf57610100808354040283529160200191610f0a565b820191906000526020600020905b815481529060010190602001808311610eed57829003601f168201915b5050505050905083565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610f5557805160ff1916838001178555610f83565b82800160010185558215610f83579182015b82811115610f82578251825591602001919060010190610f67565b5b509050610f909190610f94565b5090565b610fb691905b80821115610fb2576000816000905550600101610f9a565b5090565b9056fea265627a7a72315820d803d85fb904f3e90264706b48ca7ff4eeee5d2a65e4e0798a1c2a126891999a64736f6c63430005100032",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100625760003560e01c80638037b3e21461006757806398543166146101b9578063ae6b89c2146101fb578063c2f118251461023d578063c4a981691461038f578063d86e697d146104d5575b600080fd5b6101b76004803603604081101561007d57600080fd5b810190808035906020019064010000000081111561009a57600080fd5b8201836020820111156100ac57600080fd5b803590602001918460018302840111640100000000831117156100ce57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561013157600080fd5b82018360208201111561014357600080fd5b8035906020019184600183028401116401000000008311171561016557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061061b565b005b6101e5600480360360208110156101cf57600080fd5b81019080803590602001909291905050506108fb565b6040518082815260200191505060405180910390f35b6102276004803603602081101561021157600080fd5b810190808035906020019092919050505061091c565b6040518082815260200191505060405180910390f35b61038d6004803603604081101561025357600080fd5b810190808035906020019064010000000081111561027057600080fd5b82018360208201111561028257600080fd5b803590602001918460018302840111640100000000831117156102a457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561030757600080fd5b82018360208201111561031957600080fd5b8035906020019184600183028401116401000000008311171561033b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061093d565b005b6103bb600480360360208110156103a557600080fd5b8101908080359060200190929190505050610c20565b60405180806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001838103835286818151815260200191508051906020019080838360005b83811015610431578082015181840152602081019050610416565b50505050905090810190601f16801561045e5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561049757808201518184015260208101905061047c565b50505050905090810190601f1680156104c45780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b610501600480360360208110156104eb57600080fd5b8101908080359060200190929190505050610d9a565b60405180806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001838103835286818151815260200191508051906020019080838360005b8381101561057757808201518184015260208101905061055c565b50505050905090810190601f1680156105a45780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156105dd5780820151818401526020810190506105c2565b50505050905090810190601f16801561060a5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b6000826040516020018082805190602001908083835b602083106106545780518252602082019150602081019050602083039250610631565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107d5573373ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f4f6e6c79206f776e65722063616e20757064617465206e6f646500000000000081525060200191505060405180910390fd5b610802565b60018190806001815401808255809150509060018203906000526020600020016000909192909190915055505b60405180606001604052808381526020013373ffffffffffffffffffffffffffffffffffffffff168152602001848152506000808381526020019081526020016000206000820151816000019080519060200190610861929190610f14565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020190805190602001906108c5929190610f14565b50905050807fb0cd47a7093fb93a9ce97304d3afb8df43e02e48502e47fd5fbb6c4020d935b560405160405180910390a2505050565b6001818154811061090857fe5b906000526020600020016000915090505481565b6003818154811061092957fe5b906000526020600020016000915090505481565b6000826040516020018082805190602001908083835b602083106109765780518252602082019150602081019050602083039250610953565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610af9573373ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610af4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f4f6e6c79206f776e65722063616e20757064617465206564676500000000000081525060200191505060405180910390fd5b610b26565b60038190806001815401808255809150509060018203906000526020600020016000909192909190915055505b60405180606001604052808381526020013373ffffffffffffffffffffffffffffffffffffffff16815260200184815250600260008381526020019081526020016000206000820151816000019080519060200190610b86929190610f14565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019080519060200190610bea929190610f14565b50905050807fbed31bf7ba963e37385a3c060defc7b561d75ed2e8fbe9d5aeac57be68b1326e60405160405180910390a2505050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ccc5780601f10610ca157610100808354040283529160200191610ccc565b820191906000526020600020905b815481529060010190602001808311610caf57829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d905780601f10610d6557610100808354040283529160200191610d90565b820191906000526020600020905b815481529060010190602001808311610d7357829003601f168201915b5050505050905083565b6000602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e465780601f10610e1b57610100808354040283529160200191610e46565b820191906000526020600020905b815481529060010190602001808311610e2957829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f0a5780601f10610edf57610100808354040283529160200191610f0a565b820191906000526020600020905b815481529060010190602001808311610eed57829003601f168201915b5050505050905083565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610f5557805160ff1916838001178555610f83565b82800160010185558215610f83579182015b82811115610f82578251825591602001919060010190610f67565b5b509050610f909190610f94565b5090565b610fb691905b80821115610fb2576000816000905550600101610f9a565b5090565b9056fea265627a7a72315820d803d85fb904f3e90264706b48ca7ff4eeee5d2a65e4e0798a1c2a126891999a64736f6c63430005100032",
  "sourceMap": "0:1343:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;0:1343:0;;;;;;;",
  "deployedSourceMap": "0:1343:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;0:1343:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;527:405;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;527:405:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;527:405:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;527:405:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;527:405:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;527:405:0;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;527:405:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;527:405:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;527:405:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;527:405:0;;;;;;;;;;;;;;;:::i;:::-;;212:24;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;212:24:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;282;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;282:24:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;936:405;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;936:405:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;936:405:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;936:405:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;936:405:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;936:405:0;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;936:405:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;936:405:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;936:405:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;936:405:0;;;;;;;;;;;;;;;:::i;:::-;;241:37;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;241:37:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;241:37:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;241:37:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;171;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;171:37:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;171:37:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;171:37:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;527:405;606:10;646:8;629:26;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;629:26:0;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;629:26:0;;;619:37;;;;;;606:50;;695:1;668:29;;:5;:9;674:2;668:9;;;;;;;;;;;:15;;;;;;;;;;;;:29;;;664:188;;732:10;713:29;;:5;:9;719:2;713:9;;;;;;;;;;;:15;;;;;;;;;;;;:29;;;709:94;;756:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;709:94;664:188;;;827:7;840:2;827:16;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;827:16:0;;;;;;;;;;;;;;;;;;;;;;664:188;871:32;;;;;;;;876:4;871:32;;;;882:10;871:32;;;;;;894:8;871:32;;;859:5;:9;865:2;859:9;;;;;;;;;;;:44;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;924:2;916:11;;;;;;;;;;527:405;;;:::o;212:24::-;;;;;;;;;;;;;;;;;;;;;;;;;:::o;282:::-;;;;;;;;;;;;;;;;;;;;;;;;;:::o;936:405::-;1015:10;1055:8;1038:26;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1038:26:0;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1038:26:0;;;1028:37;;;;;;1015:50;;1104:1;1077:29;;:5;:9;1083:2;1077:9;;;;;;;;;;;:15;;;;;;;;;;;;:29;;;1073:188;;1141:10;1122:29;;:5;:9;1128:2;1122:9;;;;;;;;;;;:15;;;;;;;;;;;;:29;;;1118:94;;1165:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1118:94;1073:188;;;1236:7;1249:2;1236:16;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1236:16:0;;;;;;;;;;;;;;;;;;;;;;1073:188;1280:32;;;;;;;;1285:4;1280:32;;;;1291:10;1280:32;;;;;;1303:8;1280:32;;;1268:5;:9;1274:2;1268:9;;;;;;;;;;;:44;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;1333:2;1325:11;;;;;;;;;;936:405;;;:::o;241:37::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;171:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;0:1343::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "contract ConsensusGraph {\n  struct Node {\n    string json;\n    address owner;\n    string id;\n  }\n  struct Edge {\n    string json;\n    address owner;\n    string id;\n  }\n\n  mapping(bytes32 => Node) public nodes;\n  bytes32[] public nodeIds;\n\n  mapping(bytes32 => Edge) public edges;\n  bytes32[] public edgeIds;\n\n\n  // This event is emitted when a citizen is registered\n  event NewCitizen (\n    bytes32 indexed citizenId\n  );\n\n  event NewNode (\n    bytes32 indexed nodeId\n  );\n\n  event NewEdge (\n    bytes32 indexed edgeId\n  );\n\n  function upsertNode(string memory stringId, string memory json) public {\n      bytes32 id = keccak256(abi.encodePacked(stringId));\n      if (nodes[id].owner != address(0)) {\n        if (nodes[id].owner != msg.sender) {\n          revert(\"Only owner can update node\");\n        }\n      } else {\n        nodeIds.push(id);\n      }\n      nodes[id] = Node(json, msg.sender, stringId);\n      emit NewNode(id);\n  }\n\n  function upsertEdge(string memory stringId, string memory json) public {\n      bytes32 id = keccak256(abi.encodePacked(stringId));\n      if (edges[id].owner != address(0)) {\n        if (edges[id].owner != msg.sender) {\n          revert(\"Only owner can update edge\");\n        }\n      } else {\n        edgeIds.push(id);\n      }\n      edges[id] = Edge(json, msg.sender, stringId);\n      emit NewEdge(id);\n  }\n}\n",
  "sourcePath": "/Users/racarr/Consensus/Consensus/solidity/contracts/Consensus.sol",
  "ast": {
    "absolutePath": "/Users/racarr/Consensus/Consensus/solidity/contracts/Consensus.sol",
    "exportedSymbols": {
      "ConsensusGraph": [
        165
      ]
    },
    "id": 166,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 165,
        "linearizedBaseContracts": [
          165
        ],
        "name": "ConsensusGraph",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "ConsensusGraph.Node",
            "id": 7,
            "members": [
              {
                "constant": false,
                "id": 2,
                "name": "json",
                "nodeType": "VariableDeclaration",
                "scope": 7,
                "src": "46:11:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 1,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "46:6:0",
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
                "id": 4,
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 7,
                "src": "63:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 3,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "63:7:0",
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
                "id": 6,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 7,
                "src": "82:9:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 5,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "82:6:0",
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
            "scope": 165,
            "src": "28:68:0",
            "visibility": "public"
          },
          {
            "canonicalName": "ConsensusGraph.Edge",
            "id": 14,
            "members": [
              {
                "constant": false,
                "id": 9,
                "name": "json",
                "nodeType": "VariableDeclaration",
                "scope": 14,
                "src": "117:11:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 8,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "117:6:0",
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
                "id": 11,
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 14,
                "src": "134:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 10,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "134:7:0",
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
                "id": 13,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 14,
                "src": "153:9:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 12,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "153:6:0",
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
            "scope": 165,
            "src": "99:68:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 18,
            "name": "nodes",
            "nodeType": "VariableDeclaration",
            "scope": 165,
            "src": "171:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$7_storage_$",
              "typeString": "mapping(bytes32 => struct ConsensusGraph.Node)"
            },
            "typeName": {
              "id": 17,
              "keyType": {
                "id": 15,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "179:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "171:24:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$7_storage_$",
                "typeString": "mapping(bytes32 => struct ConsensusGraph.Node)"
              },
              "valueType": {
                "contractScope": null,
                "id": 16,
                "name": "Node",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 7,
                "src": "190:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Node_$7_storage_ptr",
                  "typeString": "struct ConsensusGraph.Node"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 21,
            "name": "nodeIds",
            "nodeType": "VariableDeclaration",
            "scope": 165,
            "src": "212:24:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
              "typeString": "bytes32[]"
            },
            "typeName": {
              "baseType": {
                "id": 19,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "212:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "id": 20,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "212:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                "typeString": "bytes32[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 25,
            "name": "edges",
            "nodeType": "VariableDeclaration",
            "scope": 165,
            "src": "241:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Edge_$14_storage_$",
              "typeString": "mapping(bytes32 => struct ConsensusGraph.Edge)"
            },
            "typeName": {
              "id": 24,
              "keyType": {
                "id": 22,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "249:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "241:24:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Edge_$14_storage_$",
                "typeString": "mapping(bytes32 => struct ConsensusGraph.Edge)"
              },
              "valueType": {
                "contractScope": null,
                "id": 23,
                "name": "Edge",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 14,
                "src": "260:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Edge_$14_storage_ptr",
                  "typeString": "struct ConsensusGraph.Edge"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 28,
            "name": "edgeIds",
            "nodeType": "VariableDeclaration",
            "scope": 165,
            "src": "282:24:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
              "typeString": "bytes32[]"
            },
            "typeName": {
              "baseType": {
                "id": 26,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "282:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "id": 27,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "282:9:0",
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
            "id": 32,
            "name": "NewCitizen",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 31,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30,
                  "indexed": true,
                  "name": "citizenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 32,
                  "src": "391:25:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "391:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "385:35:0"
            },
            "src": "368:53:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 36,
            "name": "NewNode",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 35,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34,
                  "indexed": true,
                  "name": "nodeId",
                  "nodeType": "VariableDeclaration",
                  "scope": 36,
                  "src": "445:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 33,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "439:32:0"
            },
            "src": "425:47:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 40,
            "name": "NewEdge",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 39,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38,
                  "indexed": true,
                  "name": "edgeId",
                  "nodeType": "VariableDeclaration",
                  "scope": 40,
                  "src": "496:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 37,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "496:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "490:32:0"
            },
            "src": "476:47:0"
          },
          {
            "body": {
              "id": 101,
              "nodeType": "Block",
              "src": "598:334:0",
              "statements": [
                {
                  "assignments": [
                    48
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 48,
                      "name": "id",
                      "nodeType": "VariableDeclaration",
                      "scope": 101,
                      "src": "606:10:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 47,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "606:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 55,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 52,
                            "name": "stringId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42,
                            "src": "646:8:0",
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
                            "id": 50,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 167,
                            "src": "629:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 51,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "629:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 53,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "629:26:0",
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
                      "id": 49,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 174,
                      "src": "619:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 54,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "619:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "606:50:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 63,
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
                          "id": 56,
                          "name": "nodes",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18,
                          "src": "668:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$7_storage_$",
                            "typeString": "mapping(bytes32 => struct ConsensusGraph.Node storage ref)"
                          }
                        },
                        "id": 58,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 57,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48,
                          "src": "674:2:0",
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
                        "src": "668:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Node_$7_storage",
                          "typeString": "struct ConsensusGraph.Node storage ref"
                        }
                      },
                      "id": 59,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4,
                      "src": "668:15:0",
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
                          "id": 61,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "695:1:0",
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
                        "id": 60,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "687:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 62,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "687:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "668:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 84,
                    "nodeType": "Block",
                    "src": "817:35:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 81,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48,
                              "src": "840:2:0",
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
                              "id": 78,
                              "name": "nodeIds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21,
                              "src": "827:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 80,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "827:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                              "typeString": "function (bytes32) returns (uint256)"
                            }
                          },
                          "id": 82,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "827:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 83,
                        "nodeType": "ExpressionStatement",
                        "src": "827:16:0"
                      }
                    ]
                  },
                  "id": 85,
                  "nodeType": "IfStatement",
                  "src": "664:188:0",
                  "trueBody": {
                    "id": 77,
                    "nodeType": "Block",
                    "src": "699:112:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 70,
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
                                "id": 64,
                                "name": "nodes",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18,
                                "src": "713:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$7_storage_$",
                                  "typeString": "mapping(bytes32 => struct ConsensusGraph.Node storage ref)"
                                }
                              },
                              "id": 66,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 65,
                                "name": "id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48,
                                "src": "719:2:0",
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
                              "src": "713:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Node_$7_storage",
                                "typeString": "struct ConsensusGraph.Node storage ref"
                              }
                            },
                            "id": 67,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "owner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4,
                            "src": "713:15:0",
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
                              "id": 68,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 180,
                              "src": "732:3:0",
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
                            "src": "732:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "713:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 76,
                        "nodeType": "IfStatement",
                        "src": "709:94:0",
                        "trueBody": {
                          "id": 75,
                          "nodeType": "Block",
                          "src": "744:59:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "4f6e6c79206f776e65722063616e20757064617465206e6f6465",
                                    "id": 72,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "763:28:0",
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
                                  "id": 71,
                                  "name": "revert",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    185,
                                    186
                                  ],
                                  "referencedDeclaration": 186,
                                  "src": "756:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (string memory) pure"
                                  }
                                },
                                "id": 73,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "756:36:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 74,
                              "nodeType": "ExpressionStatement",
                              "src": "756:36:0"
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
                    "id": 95,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 86,
                        "name": "nodes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "859:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Node_$7_storage_$",
                          "typeString": "mapping(bytes32 => struct ConsensusGraph.Node storage ref)"
                        }
                      },
                      "id": 88,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 87,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48,
                        "src": "865:2:0",
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
                      "src": "859:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Node_$7_storage",
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
                          "id": 90,
                          "name": "json",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44,
                          "src": "876:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 91,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 180,
                            "src": "882:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 92,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "882:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 93,
                          "name": "stringId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42,
                          "src": "894:8:0",
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
                        "id": 89,
                        "name": "Node",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "871:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Node_$7_storage_ptr_$",
                          "typeString": "type(struct ConsensusGraph.Node storage pointer)"
                        }
                      },
                      "id": 94,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "871:32:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Node_$7_memory",
                        "typeString": "struct ConsensusGraph.Node memory"
                      }
                    },
                    "src": "859:44:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Node_$7_storage",
                      "typeString": "struct ConsensusGraph.Node storage ref"
                    }
                  },
                  "id": 96,
                  "nodeType": "ExpressionStatement",
                  "src": "859:44:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 98,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48,
                        "src": "924:2:0",
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
                      "id": 97,
                      "name": "NewNode",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36,
                      "src": "916:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 99,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "916:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 100,
                  "nodeType": "EmitStatement",
                  "src": "911:16:0"
                }
              ]
            },
            "documentation": null,
            "id": 102,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "upsertNode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 45,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42,
                  "name": "stringId",
                  "nodeType": "VariableDeclaration",
                  "scope": 102,
                  "src": "547:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "547:6:0",
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
                  "id": 44,
                  "name": "json",
                  "nodeType": "VariableDeclaration",
                  "scope": 102,
                  "src": "571:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 43,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "571:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "546:44:0"
            },
            "returnParameters": {
              "id": 46,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "598:0:0"
            },
            "scope": 165,
            "src": "527:405:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 163,
              "nodeType": "Block",
              "src": "1007:334:0",
              "statements": [
                {
                  "assignments": [
                    110
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 110,
                      "name": "id",
                      "nodeType": "VariableDeclaration",
                      "scope": 163,
                      "src": "1015:10:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 109,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1015:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 117,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 114,
                            "name": "stringId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 104,
                            "src": "1055:8:0",
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
                            "id": 112,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 167,
                            "src": "1038:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 113,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1038:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 115,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1038:26:0",
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
                      "id": 111,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 174,
                      "src": "1028:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1028:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1015:50:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 125,
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
                          "id": 118,
                          "name": "edges",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25,
                          "src": "1077:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Edge_$14_storage_$",
                            "typeString": "mapping(bytes32 => struct ConsensusGraph.Edge storage ref)"
                          }
                        },
                        "id": 120,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 119,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 110,
                          "src": "1083:2:0",
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
                        "src": "1077:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Edge_$14_storage",
                          "typeString": "struct ConsensusGraph.Edge storage ref"
                        }
                      },
                      "id": 121,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11,
                      "src": "1077:15:0",
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
                          "id": 123,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1104:1:0",
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
                        "id": 122,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1096:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 124,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1096:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "1077:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 146,
                    "nodeType": "Block",
                    "src": "1226:35:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 143,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 110,
                              "src": "1249:2:0",
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
                              "id": 140,
                              "name": "edgeIds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28,
                              "src": "1236:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 142,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1236:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                              "typeString": "function (bytes32) returns (uint256)"
                            }
                          },
                          "id": 144,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1236:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 145,
                        "nodeType": "ExpressionStatement",
                        "src": "1236:16:0"
                      }
                    ]
                  },
                  "id": 147,
                  "nodeType": "IfStatement",
                  "src": "1073:188:0",
                  "trueBody": {
                    "id": 139,
                    "nodeType": "Block",
                    "src": "1108:112:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 132,
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
                                "id": 126,
                                "name": "edges",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 25,
                                "src": "1122:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Edge_$14_storage_$",
                                  "typeString": "mapping(bytes32 => struct ConsensusGraph.Edge storage ref)"
                                }
                              },
                              "id": 128,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 127,
                                "name": "id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 110,
                                "src": "1128:2:0",
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
                              "src": "1122:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Edge_$14_storage",
                                "typeString": "struct ConsensusGraph.Edge storage ref"
                              }
                            },
                            "id": 129,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "owner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 11,
                            "src": "1122:15:0",
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
                              "id": 130,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 180,
                              "src": "1141:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 131,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1141:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "1122:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 138,
                        "nodeType": "IfStatement",
                        "src": "1118:94:0",
                        "trueBody": {
                          "id": 137,
                          "nodeType": "Block",
                          "src": "1153:59:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "4f6e6c79206f776e65722063616e207570646174652065646765",
                                    "id": 134,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1172:28:0",
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
                                  "id": 133,
                                  "name": "revert",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    185,
                                    186
                                  ],
                                  "referencedDeclaration": 186,
                                  "src": "1165:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (string memory) pure"
                                  }
                                },
                                "id": 135,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1165:36:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 136,
                              "nodeType": "ExpressionStatement",
                              "src": "1165:36:0"
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
                    "id": 157,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 148,
                        "name": "edges",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25,
                        "src": "1268:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Edge_$14_storage_$",
                          "typeString": "mapping(bytes32 => struct ConsensusGraph.Edge storage ref)"
                        }
                      },
                      "id": 150,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 149,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 110,
                        "src": "1274:2:0",
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
                      "src": "1268:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Edge_$14_storage",
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
                          "id": 152,
                          "name": "json",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 106,
                          "src": "1285:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 153,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 180,
                            "src": "1291:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 154,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1291:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 155,
                          "name": "stringId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 104,
                          "src": "1303:8:0",
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
                        "id": 151,
                        "name": "Edge",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14,
                        "src": "1280:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Edge_$14_storage_ptr_$",
                          "typeString": "type(struct ConsensusGraph.Edge storage pointer)"
                        }
                      },
                      "id": 156,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1280:32:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Edge_$14_memory",
                        "typeString": "struct ConsensusGraph.Edge memory"
                      }
                    },
                    "src": "1268:44:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Edge_$14_storage",
                      "typeString": "struct ConsensusGraph.Edge storage ref"
                    }
                  },
                  "id": 158,
                  "nodeType": "ExpressionStatement",
                  "src": "1268:44:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 160,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 110,
                        "src": "1333:2:0",
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
                      "id": 159,
                      "name": "NewEdge",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40,
                      "src": "1325:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1325:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 162,
                  "nodeType": "EmitStatement",
                  "src": "1320:16:0"
                }
              ]
            },
            "documentation": null,
            "id": 164,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "upsertEdge",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 104,
                  "name": "stringId",
                  "nodeType": "VariableDeclaration",
                  "scope": 164,
                  "src": "956:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 103,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "956:6:0",
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
                  "id": 106,
                  "name": "json",
                  "nodeType": "VariableDeclaration",
                  "scope": 164,
                  "src": "980:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "980:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "955:44:0"
            },
            "returnParameters": {
              "id": 108,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1007:0:0"
            },
            "scope": 165,
            "src": "936:405:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 166,
        "src": "0:1343:0"
      }
    ],
    "src": "0:1344:0"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/Users/racarr/Consensus/Consensus/solidity/contracts/Consensus.sol",
      "exportedSymbols": {
        "ConsensusGraph": [
          165
        ]
      }
    },
    "children": [
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
            165
          ],
          "name": "ConsensusGraph",
          "scope": 166
        },
        "children": [
          {
            "attributes": {
              "canonicalName": "ConsensusGraph.Node",
              "name": "Node",
              "scope": 165,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "json",
                  "scope": 7,
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
                    "id": 1,
                    "name": "ElementaryTypeName",
                    "src": "46:6:0"
                  }
                ],
                "id": 2,
                "name": "VariableDeclaration",
                "src": "46:11:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "owner",
                  "scope": 7,
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
                    "id": 3,
                    "name": "ElementaryTypeName",
                    "src": "63:7:0"
                  }
                ],
                "id": 4,
                "name": "VariableDeclaration",
                "src": "63:13:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "id",
                  "scope": 7,
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
                    "id": 5,
                    "name": "ElementaryTypeName",
                    "src": "82:6:0"
                  }
                ],
                "id": 6,
                "name": "VariableDeclaration",
                "src": "82:9:0"
              }
            ],
            "id": 7,
            "name": "StructDefinition",
            "src": "28:68:0"
          },
          {
            "attributes": {
              "canonicalName": "ConsensusGraph.Edge",
              "name": "Edge",
              "scope": 165,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "json",
                  "scope": 14,
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
                    "id": 8,
                    "name": "ElementaryTypeName",
                    "src": "117:6:0"
                  }
                ],
                "id": 9,
                "name": "VariableDeclaration",
                "src": "117:11:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "owner",
                  "scope": 14,
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
                    "id": 10,
                    "name": "ElementaryTypeName",
                    "src": "134:7:0"
                  }
                ],
                "id": 11,
                "name": "VariableDeclaration",
                "src": "134:13:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "id",
                  "scope": 14,
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
                    "id": 12,
                    "name": "ElementaryTypeName",
                    "src": "153:6:0"
                  }
                ],
                "id": 13,
                "name": "VariableDeclaration",
                "src": "153:9:0"
              }
            ],
            "id": 14,
            "name": "StructDefinition",
            "src": "99:68:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "nodes",
              "scope": 165,
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
                    "id": 15,
                    "name": "ElementaryTypeName",
                    "src": "179:7:0"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Node",
                      "referencedDeclaration": 7,
                      "type": "struct ConsensusGraph.Node"
                    },
                    "id": 16,
                    "name": "UserDefinedTypeName",
                    "src": "190:4:0"
                  }
                ],
                "id": 17,
                "name": "Mapping",
                "src": "171:24:0"
              }
            ],
            "id": 18,
            "name": "VariableDeclaration",
            "src": "171:37:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "nodeIds",
              "scope": 165,
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
                    "id": 19,
                    "name": "ElementaryTypeName",
                    "src": "212:7:0"
                  }
                ],
                "id": 20,
                "name": "ArrayTypeName",
                "src": "212:9:0"
              }
            ],
            "id": 21,
            "name": "VariableDeclaration",
            "src": "212:24:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "edges",
              "scope": 165,
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
                    "id": 22,
                    "name": "ElementaryTypeName",
                    "src": "249:7:0"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Edge",
                      "referencedDeclaration": 14,
                      "type": "struct ConsensusGraph.Edge"
                    },
                    "id": 23,
                    "name": "UserDefinedTypeName",
                    "src": "260:4:0"
                  }
                ],
                "id": 24,
                "name": "Mapping",
                "src": "241:24:0"
              }
            ],
            "id": 25,
            "name": "VariableDeclaration",
            "src": "241:37:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "edgeIds",
              "scope": 165,
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
                    "id": 26,
                    "name": "ElementaryTypeName",
                    "src": "282:7:0"
                  }
                ],
                "id": 27,
                "name": "ArrayTypeName",
                "src": "282:9:0"
              }
            ],
            "id": 28,
            "name": "VariableDeclaration",
            "src": "282:24:0"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "NewCitizen"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "citizenId",
                      "scope": 32,
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
                        "id": 29,
                        "name": "ElementaryTypeName",
                        "src": "391:7:0"
                      }
                    ],
                    "id": 30,
                    "name": "VariableDeclaration",
                    "src": "391:25:0"
                  }
                ],
                "id": 31,
                "name": "ParameterList",
                "src": "385:35:0"
              }
            ],
            "id": 32,
            "name": "EventDefinition",
            "src": "368:53:0"
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
                      "scope": 36,
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
                        "id": 33,
                        "name": "ElementaryTypeName",
                        "src": "445:7:0"
                      }
                    ],
                    "id": 34,
                    "name": "VariableDeclaration",
                    "src": "445:22:0"
                  }
                ],
                "id": 35,
                "name": "ParameterList",
                "src": "439:32:0"
              }
            ],
            "id": 36,
            "name": "EventDefinition",
            "src": "425:47:0"
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
                      "scope": 40,
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
                        "id": 37,
                        "name": "ElementaryTypeName",
                        "src": "496:7:0"
                      }
                    ],
                    "id": 38,
                    "name": "VariableDeclaration",
                    "src": "496:22:0"
                  }
                ],
                "id": 39,
                "name": "ParameterList",
                "src": "490:32:0"
              }
            ],
            "id": 40,
            "name": "EventDefinition",
            "src": "476:47:0"
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
              "scope": 165,
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
                      "scope": 102,
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
                        "id": 41,
                        "name": "ElementaryTypeName",
                        "src": "547:6:0"
                      }
                    ],
                    "id": 42,
                    "name": "VariableDeclaration",
                    "src": "547:22:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "json",
                      "scope": 102,
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
                        "id": 43,
                        "name": "ElementaryTypeName",
                        "src": "571:6:0"
                      }
                    ],
                    "id": 44,
                    "name": "VariableDeclaration",
                    "src": "571:18:0"
                  }
                ],
                "id": 45,
                "name": "ParameterList",
                "src": "546:44:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 46,
                "name": "ParameterList",
                "src": "598:0:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        48
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "id",
                          "scope": 101,
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
                            "id": 47,
                            "name": "ElementaryTypeName",
                            "src": "606:7:0"
                          }
                        ],
                        "id": 48,
                        "name": "VariableDeclaration",
                        "src": "606:10:0"
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
                              "referencedDeclaration": 174,
                              "type": "function (bytes memory) pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 49,
                            "name": "Identifier",
                            "src": "619:9:0"
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
                                      "referencedDeclaration": 167,
                                      "type": "abi",
                                      "value": "abi"
                                    },
                                    "id": 50,
                                    "name": "Identifier",
                                    "src": "629:3:0"
                                  }
                                ],
                                "id": 51,
                                "name": "MemberAccess",
                                "src": "629:16:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 42,
                                  "type": "string memory",
                                  "value": "stringId"
                                },
                                "id": 52,
                                "name": "Identifier",
                                "src": "646:8:0"
                              }
                            ],
                            "id": 53,
                            "name": "FunctionCall",
                            "src": "629:26:0"
                          }
                        ],
                        "id": 54,
                        "name": "FunctionCall",
                        "src": "619:37:0"
                      }
                    ],
                    "id": 55,
                    "name": "VariableDeclarationStatement",
                    "src": "606:50:0"
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
                              "referencedDeclaration": 4,
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
                                      "referencedDeclaration": 18,
                                      "type": "mapping(bytes32 => struct ConsensusGraph.Node storage ref)",
                                      "value": "nodes"
                                    },
                                    "id": 56,
                                    "name": "Identifier",
                                    "src": "668:5:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 48,
                                      "type": "bytes32",
                                      "value": "id"
                                    },
                                    "id": 57,
                                    "name": "Identifier",
                                    "src": "674:2:0"
                                  }
                                ],
                                "id": 58,
                                "name": "IndexAccess",
                                "src": "668:9:0"
                              }
                            ],
                            "id": 59,
                            "name": "MemberAccess",
                            "src": "668:15:0"
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
                                "id": 60,
                                "name": "ElementaryTypeNameExpression",
                                "src": "687:7:0"
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
                                "id": 61,
                                "name": "Literal",
                                "src": "695:1:0"
                              }
                            ],
                            "id": 62,
                            "name": "FunctionCall",
                            "src": "687:10:0"
                          }
                        ],
                        "id": 63,
                        "name": "BinaryOperation",
                        "src": "668:29:0"
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
                                      "referencedDeclaration": 4,
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
                                              "referencedDeclaration": 18,
                                              "type": "mapping(bytes32 => struct ConsensusGraph.Node storage ref)",
                                              "value": "nodes"
                                            },
                                            "id": 64,
                                            "name": "Identifier",
                                            "src": "713:5:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 48,
                                              "type": "bytes32",
                                              "value": "id"
                                            },
                                            "id": 65,
                                            "name": "Identifier",
                                            "src": "719:2:0"
                                          }
                                        ],
                                        "id": 66,
                                        "name": "IndexAccess",
                                        "src": "713:9:0"
                                      }
                                    ],
                                    "id": 67,
                                    "name": "MemberAccess",
                                    "src": "713:15:0"
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
                                          "referencedDeclaration": 180,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 68,
                                        "name": "Identifier",
                                        "src": "732:3:0"
                                      }
                                    ],
                                    "id": 69,
                                    "name": "MemberAccess",
                                    "src": "732:10:0"
                                  }
                                ],
                                "id": 70,
                                "name": "BinaryOperation",
                                "src": "713:29:0"
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
                                                185,
                                                186
                                              ],
                                              "referencedDeclaration": 186,
                                              "type": "function (string memory) pure",
                                              "value": "revert"
                                            },
                                            "id": 71,
                                            "name": "Identifier",
                                            "src": "756:6:0"
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
                                            "id": 72,
                                            "name": "Literal",
                                            "src": "763:28:0"
                                          }
                                        ],
                                        "id": 73,
                                        "name": "FunctionCall",
                                        "src": "756:36:0"
                                      }
                                    ],
                                    "id": 74,
                                    "name": "ExpressionStatement",
                                    "src": "756:36:0"
                                  }
                                ],
                                "id": 75,
                                "name": "Block",
                                "src": "744:59:0"
                              }
                            ],
                            "id": 76,
                            "name": "IfStatement",
                            "src": "709:94:0"
                          }
                        ],
                        "id": 77,
                        "name": "Block",
                        "src": "699:112:0"
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
                                          "referencedDeclaration": 21,
                                          "type": "bytes32[] storage ref",
                                          "value": "nodeIds"
                                        },
                                        "id": 78,
                                        "name": "Identifier",
                                        "src": "827:7:0"
                                      }
                                    ],
                                    "id": 80,
                                    "name": "MemberAccess",
                                    "src": "827:12:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 48,
                                      "type": "bytes32",
                                      "value": "id"
                                    },
                                    "id": 81,
                                    "name": "Identifier",
                                    "src": "840:2:0"
                                  }
                                ],
                                "id": 82,
                                "name": "FunctionCall",
                                "src": "827:16:0"
                              }
                            ],
                            "id": 83,
                            "name": "ExpressionStatement",
                            "src": "827:16:0"
                          }
                        ],
                        "id": 84,
                        "name": "Block",
                        "src": "817:35:0"
                      }
                    ],
                    "id": 85,
                    "name": "IfStatement",
                    "src": "664:188:0"
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
                                  "referencedDeclaration": 18,
                                  "type": "mapping(bytes32 => struct ConsensusGraph.Node storage ref)",
                                  "value": "nodes"
                                },
                                "id": 86,
                                "name": "Identifier",
                                "src": "859:5:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 48,
                                  "type": "bytes32",
                                  "value": "id"
                                },
                                "id": 87,
                                "name": "Identifier",
                                "src": "865:2:0"
                              }
                            ],
                            "id": 88,
                            "name": "IndexAccess",
                            "src": "859:9:0"
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
                                  "referencedDeclaration": 7,
                                  "type": "type(struct ConsensusGraph.Node storage pointer)",
                                  "value": "Node"
                                },
                                "id": 89,
                                "name": "Identifier",
                                "src": "871:4:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 44,
                                  "type": "string memory",
                                  "value": "json"
                                },
                                "id": 90,
                                "name": "Identifier",
                                "src": "876:4:0"
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
                                      "referencedDeclaration": 180,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 91,
                                    "name": "Identifier",
                                    "src": "882:3:0"
                                  }
                                ],
                                "id": 92,
                                "name": "MemberAccess",
                                "src": "882:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 42,
                                  "type": "string memory",
                                  "value": "stringId"
                                },
                                "id": 93,
                                "name": "Identifier",
                                "src": "894:8:0"
                              }
                            ],
                            "id": 94,
                            "name": "FunctionCall",
                            "src": "871:32:0"
                          }
                        ],
                        "id": 95,
                        "name": "Assignment",
                        "src": "859:44:0"
                      }
                    ],
                    "id": 96,
                    "name": "ExpressionStatement",
                    "src": "859:44:0"
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
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 36,
                              "type": "function (bytes32)",
                              "value": "NewNode"
                            },
                            "id": 97,
                            "name": "Identifier",
                            "src": "916:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 48,
                              "type": "bytes32",
                              "value": "id"
                            },
                            "id": 98,
                            "name": "Identifier",
                            "src": "924:2:0"
                          }
                        ],
                        "id": 99,
                        "name": "FunctionCall",
                        "src": "916:11:0"
                      }
                    ],
                    "id": 100,
                    "name": "EmitStatement",
                    "src": "911:16:0"
                  }
                ],
                "id": 101,
                "name": "Block",
                "src": "598:334:0"
              }
            ],
            "id": 102,
            "name": "FunctionDefinition",
            "src": "527:405:0"
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
              "scope": 165,
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
                      "scope": 164,
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
                        "id": 103,
                        "name": "ElementaryTypeName",
                        "src": "956:6:0"
                      }
                    ],
                    "id": 104,
                    "name": "VariableDeclaration",
                    "src": "956:22:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "json",
                      "scope": 164,
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
                        "id": 105,
                        "name": "ElementaryTypeName",
                        "src": "980:6:0"
                      }
                    ],
                    "id": 106,
                    "name": "VariableDeclaration",
                    "src": "980:18:0"
                  }
                ],
                "id": 107,
                "name": "ParameterList",
                "src": "955:44:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 108,
                "name": "ParameterList",
                "src": "1007:0:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        110
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "id",
                          "scope": 163,
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
                            "id": 109,
                            "name": "ElementaryTypeName",
                            "src": "1015:7:0"
                          }
                        ],
                        "id": 110,
                        "name": "VariableDeclaration",
                        "src": "1015:10:0"
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
                              "referencedDeclaration": 174,
                              "type": "function (bytes memory) pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 111,
                            "name": "Identifier",
                            "src": "1028:9:0"
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
                                      "referencedDeclaration": 167,
                                      "type": "abi",
                                      "value": "abi"
                                    },
                                    "id": 112,
                                    "name": "Identifier",
                                    "src": "1038:3:0"
                                  }
                                ],
                                "id": 113,
                                "name": "MemberAccess",
                                "src": "1038:16:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 104,
                                  "type": "string memory",
                                  "value": "stringId"
                                },
                                "id": 114,
                                "name": "Identifier",
                                "src": "1055:8:0"
                              }
                            ],
                            "id": 115,
                            "name": "FunctionCall",
                            "src": "1038:26:0"
                          }
                        ],
                        "id": 116,
                        "name": "FunctionCall",
                        "src": "1028:37:0"
                      }
                    ],
                    "id": 117,
                    "name": "VariableDeclarationStatement",
                    "src": "1015:50:0"
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
                              "referencedDeclaration": 11,
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
                                      "referencedDeclaration": 25,
                                      "type": "mapping(bytes32 => struct ConsensusGraph.Edge storage ref)",
                                      "value": "edges"
                                    },
                                    "id": 118,
                                    "name": "Identifier",
                                    "src": "1077:5:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 110,
                                      "type": "bytes32",
                                      "value": "id"
                                    },
                                    "id": 119,
                                    "name": "Identifier",
                                    "src": "1083:2:0"
                                  }
                                ],
                                "id": 120,
                                "name": "IndexAccess",
                                "src": "1077:9:0"
                              }
                            ],
                            "id": 121,
                            "name": "MemberAccess",
                            "src": "1077:15:0"
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
                                "id": 122,
                                "name": "ElementaryTypeNameExpression",
                                "src": "1096:7:0"
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
                                "id": 123,
                                "name": "Literal",
                                "src": "1104:1:0"
                              }
                            ],
                            "id": 124,
                            "name": "FunctionCall",
                            "src": "1096:10:0"
                          }
                        ],
                        "id": 125,
                        "name": "BinaryOperation",
                        "src": "1077:29:0"
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
                                      "referencedDeclaration": 11,
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
                                              "referencedDeclaration": 25,
                                              "type": "mapping(bytes32 => struct ConsensusGraph.Edge storage ref)",
                                              "value": "edges"
                                            },
                                            "id": 126,
                                            "name": "Identifier",
                                            "src": "1122:5:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 110,
                                              "type": "bytes32",
                                              "value": "id"
                                            },
                                            "id": 127,
                                            "name": "Identifier",
                                            "src": "1128:2:0"
                                          }
                                        ],
                                        "id": 128,
                                        "name": "IndexAccess",
                                        "src": "1122:9:0"
                                      }
                                    ],
                                    "id": 129,
                                    "name": "MemberAccess",
                                    "src": "1122:15:0"
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
                                          "referencedDeclaration": 180,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 130,
                                        "name": "Identifier",
                                        "src": "1141:3:0"
                                      }
                                    ],
                                    "id": 131,
                                    "name": "MemberAccess",
                                    "src": "1141:10:0"
                                  }
                                ],
                                "id": 132,
                                "name": "BinaryOperation",
                                "src": "1122:29:0"
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
                                                185,
                                                186
                                              ],
                                              "referencedDeclaration": 186,
                                              "type": "function (string memory) pure",
                                              "value": "revert"
                                            },
                                            "id": 133,
                                            "name": "Identifier",
                                            "src": "1165:6:0"
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
                                            "id": 134,
                                            "name": "Literal",
                                            "src": "1172:28:0"
                                          }
                                        ],
                                        "id": 135,
                                        "name": "FunctionCall",
                                        "src": "1165:36:0"
                                      }
                                    ],
                                    "id": 136,
                                    "name": "ExpressionStatement",
                                    "src": "1165:36:0"
                                  }
                                ],
                                "id": 137,
                                "name": "Block",
                                "src": "1153:59:0"
                              }
                            ],
                            "id": 138,
                            "name": "IfStatement",
                            "src": "1118:94:0"
                          }
                        ],
                        "id": 139,
                        "name": "Block",
                        "src": "1108:112:0"
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
                                          "referencedDeclaration": 28,
                                          "type": "bytes32[] storage ref",
                                          "value": "edgeIds"
                                        },
                                        "id": 140,
                                        "name": "Identifier",
                                        "src": "1236:7:0"
                                      }
                                    ],
                                    "id": 142,
                                    "name": "MemberAccess",
                                    "src": "1236:12:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 110,
                                      "type": "bytes32",
                                      "value": "id"
                                    },
                                    "id": 143,
                                    "name": "Identifier",
                                    "src": "1249:2:0"
                                  }
                                ],
                                "id": 144,
                                "name": "FunctionCall",
                                "src": "1236:16:0"
                              }
                            ],
                            "id": 145,
                            "name": "ExpressionStatement",
                            "src": "1236:16:0"
                          }
                        ],
                        "id": 146,
                        "name": "Block",
                        "src": "1226:35:0"
                      }
                    ],
                    "id": 147,
                    "name": "IfStatement",
                    "src": "1073:188:0"
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
                                  "referencedDeclaration": 25,
                                  "type": "mapping(bytes32 => struct ConsensusGraph.Edge storage ref)",
                                  "value": "edges"
                                },
                                "id": 148,
                                "name": "Identifier",
                                "src": "1268:5:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 110,
                                  "type": "bytes32",
                                  "value": "id"
                                },
                                "id": 149,
                                "name": "Identifier",
                                "src": "1274:2:0"
                              }
                            ],
                            "id": 150,
                            "name": "IndexAccess",
                            "src": "1268:9:0"
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
                                  "referencedDeclaration": 14,
                                  "type": "type(struct ConsensusGraph.Edge storage pointer)",
                                  "value": "Edge"
                                },
                                "id": 151,
                                "name": "Identifier",
                                "src": "1280:4:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 106,
                                  "type": "string memory",
                                  "value": "json"
                                },
                                "id": 152,
                                "name": "Identifier",
                                "src": "1285:4:0"
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
                                      "referencedDeclaration": 180,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 153,
                                    "name": "Identifier",
                                    "src": "1291:3:0"
                                  }
                                ],
                                "id": 154,
                                "name": "MemberAccess",
                                "src": "1291:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 104,
                                  "type": "string memory",
                                  "value": "stringId"
                                },
                                "id": 155,
                                "name": "Identifier",
                                "src": "1303:8:0"
                              }
                            ],
                            "id": 156,
                            "name": "FunctionCall",
                            "src": "1280:32:0"
                          }
                        ],
                        "id": 157,
                        "name": "Assignment",
                        "src": "1268:44:0"
                      }
                    ],
                    "id": 158,
                    "name": "ExpressionStatement",
                    "src": "1268:44:0"
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
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 40,
                              "type": "function (bytes32)",
                              "value": "NewEdge"
                            },
                            "id": 159,
                            "name": "Identifier",
                            "src": "1325:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 110,
                              "type": "bytes32",
                              "value": "id"
                            },
                            "id": 160,
                            "name": "Identifier",
                            "src": "1333:2:0"
                          }
                        ],
                        "id": 161,
                        "name": "FunctionCall",
                        "src": "1325:11:0"
                      }
                    ],
                    "id": 162,
                    "name": "EmitStatement",
                    "src": "1320:16:0"
                  }
                ],
                "id": 163,
                "name": "Block",
                "src": "1007:334:0"
              }
            ],
            "id": 164,
            "name": "FunctionDefinition",
            "src": "936:405:0"
          }
        ],
        "id": 165,
        "name": "ContractDefinition",
        "src": "0:1343:0"
      }
    ],
    "id": 166,
    "name": "SourceUnit",
    "src": "0:1344:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-03-16T21:10:10.307Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}