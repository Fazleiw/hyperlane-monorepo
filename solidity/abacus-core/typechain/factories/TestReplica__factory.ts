/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestReplica, TestReplicaInterface } from "../TestReplica";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "Checkpoint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updaterManager",
        type: "address",
      },
    ],
    name: "NewUpdaterManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        indexed: true,
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    name: "Process",
    type: "event",
  },
  {
    inputs: [],
    name: "PROCESS_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RESERVE_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "checkpoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "checkpointedIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_remoteDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_updaterManager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_checkpointedIndex",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "messages",
    outputs: [
      {
        internalType: "enum Replica.MessageStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "process",
    outputs: [
      {
        internalType: "bool",
        name: "_success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_leaf",
        type: "bytes32",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "prove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "proveAndProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "remoteDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "setCheckpoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "setMessageProven",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updaterManager",
        type: "address",
      },
    ],
    name: "setUpdaterManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
      {
        internalType: "bytes32[32]",
        name: "proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "testBranchRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "testProcess",
    outputs: [
      {
        internalType: "bool",
        name: "_success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updaterManager",
    outputs: [
      {
        internalType: "contract IUpdaterManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e060405234801561001057600080fd5b50604051612c15380380612c158339818101604052606081101561003357600080fd5b50516001600160e01b031960e082901b16608052620cf85060a0819052613a9860c081905263ffffffff90921691612b7d610098600039806107265280610f08525080610ee75280610fdf5280611415525080610c3f5280610c935250612b7d6000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c8063928bc4b2116100d85780639df6c8e11161008c578063f2fde38b11610066578063f2fde38b1461061b578063ff14f6431461064e578063ffa1ad741461070057610182565b80639df6c8e1146105ee578063d88beda2146105f6578063eb5e91ff146105fe57610182565b806396ae1a89116100bd57806396ae1a89146104eb5780639776120e146105915780639868a273146105c457610182565b8063928bc4b21461043d578063961681dc146104e357610182565b806355d719821161013a578063715018a611610114578063715018a6146103e35780638d3638f4146103eb5780638da5cb5b1461040c57610182565b806355d719821461024a57806355f6cfb61461028f5780636188af0e1461033557610182565b80632bbd59ca1161016b5780632bbd59ca146101a9578063371d3071146101e75780634f410a801461022557610182565b8063226098901461018757806325e3beda146101a1575b600080fd5b61018f61071e565b60408051918252519081900360200190f35b61018f610724565b6101c6600480360360208110156101bf57600080fd5b5035610748565b604051808260028111156101d657fe5b815260200191505060405180910390f35b61021160048036036104408110156101fe57600080fd5b508035906020810190610420013561075d565b604080519115158252519081900360200190f35b6102486004803603604081101561023b57600080fd5b5080359060200135610884565b005b6102486004803603606081101561026057600080fd5b5063ffffffff8135169073ffffffffffffffffffffffffffffffffffffffff6020820135169060400135610896565b610248600480360360208110156102a557600080fd5b8101906020810181356401000000008111156102c057600080fd5b8201836020820111156102d257600080fd5b803590602001918460018302840111640100000000831117156102f457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a16945050505050565b610248600480360361044081101561034c57600080fd5b81019060208101813564010000000081111561036757600080fd5b82018360208201111561037957600080fd5b8035906020019184600183028401116401000000008311171561039b57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955092935050506104008201359050610aa0565b610248610b26565b6103f3610c3d565b6040805163ffffffff9092168252519081900360200190f35b610414610c61565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102116004803603602081101561045357600080fd5b81019060208101813564010000000081111561046e57600080fd5b82018360208201111561048057600080fd5b803590602001918460018302840111640100000000831117156104a257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c7d945050505050565b6103f36112e8565b6102116004803603602081101561050157600080fd5b81019060208101813564010000000081111561051c57600080fd5b82018360208201111561052e57600080fd5b8035906020019184600183028401116401000000008311171561055057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506112f4945050505050565b610248600480360360208110156105a757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611305565b61018f60048036036104408110156105db57600080fd5b50803590602081019061042001356113b9565b6104146113f7565b61018f611413565b61018f6004803603602081101561061457600080fd5b5035611437565b6102486004803603602081101561063157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611449565b6102486004803603606081101561066457600080fd5b81359160208101359181019060608101604082013564010000000081111561068b57600080fd5b82018360208201111561069d57600080fd5b803590602001918460018302840111640100000000831117156106bf57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506115eb945050505050565b610708611831565b6040805160ff9092168252519081900360200190f35b609a5481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60986020526000908152604090205460ff1681565b60008060008581526098602052604090205460ff16600281111561077d57fe5b146107e957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f214d6573736167655374617475732e4e6f6e6500000000000000000000000000604482015290519081900360640190fd5b600061081f8585602080602002604051908101604052809291908260208002808284376000920191909152508791506118369050565b60008181526099602052604090205490915015610877575050600083815260986020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600190811790915561087d565b60009150505b9392505050565b60009182526099602052604090912055565b600054610100900460ff16806108af57506108af6118e1565b806108bd575060005460ff16155b610912576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612a58602e913960400191505060405180910390fd5b600054610100900460ff1615801561097857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b610981836118f2565b609780546401000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffffffff909116177fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff8616179055609a8290558015610a1057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b50505050565b6000610a228282611a18565b9050600160986000610a557fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008516611a3c565b8152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001836002811115610a9757fe5b02179055505050565b610ab28380519060200120838361075d565b610b1d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f2170726f76650000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610a1083610c7d565b610b2e611a7b565b73ffffffffffffffffffffffffffffffffffffffff16610b4c610c61565b73ffffffffffffffffffffffffffffffffffffffff1614610bce57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60335460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7f000000000000000000000000000000000000000000000000000000000000000081565b60335473ffffffffffffffffffffffffffffffffffffffff1690565b600080610c8a8382611a18565b905063ffffffff7f000000000000000000000000000000000000000000000000000000000000000016610cde7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611a7f565b63ffffffff1614610d5057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f2164657374696e6174696f6e0000000000000000000000000000000000000000604482015290519081900360640190fd5b6000610d7d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611a3c565b9050600160008281526098602052604090205460ff166002811115610d9e57fe5b14610e0a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f2170726f76656e00000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b609754640100000000900460ff16600114610e8657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f217265656e7472616e7400000000000000000000000000000000000000000000604482015290519081900360640190fd5b609780547fffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffffffff169055600081815260986020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660021790557f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000015a1015610f9857604080517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048083019190915260248201527f2167617300000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000610fc57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611ab5565b6040805161010080825261012082019092529192506000917f000000000000000000000000000000000000000000000000000000000000000090839083602082018180368337019050509050600061103e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008916611ac8565b6110697fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008a16611af8565b6110be6110977fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008c16611b29565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000016611b9a565b604051602401808463ffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156111105781810151838201526020016110f8565b50505050905090810190601f16801561113d5780820380516001836020036101000a031916815260200191505b50604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f56d5d4750000000000000000000000000000000000000000000000000000000017815281519197506000965086955090935091508390508a88f198503d9450838511156111dc578394505b848252846000602084013e816040518082805190602001908083835b6020831061123557805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016111f8565b5181516020939093036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180199091169216919091179052604051920182900382209350508b1515915089907fd42de95a9b26f1be134c8ecce389dc4fcfa18753d01661b7b361233569e8fe4890600090a45050609780547fffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffffffff1664010000000017905550949695505050505050565b60975463ffffffff1681565b60006112ff82610c7d565b92915050565b61130d611a7b565b73ffffffffffffffffffffffffffffffffffffffff1661132b610c61565b73ffffffffffffffffffffffffffffffffffffffff16146113ad57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6113b681611bde565b50565b60006113ef8484602080602002604051908101604052809291908260208002808284376000920191909152508691506118369050565b949350505050565b60655473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60996020526000908152604090205481565b611451611a7b565b73ffffffffffffffffffffffffffffffffffffffff1661146f610c61565b73ffffffffffffffffffffffffffffffffffffffff16146114f157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811661155d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612a116026913960400191505060405180910390fd5b60335460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b609a54821161165b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6c642075706461746500000000000000000000000000000000000000000000604482015290519081900360640190fd5b6065546097546040517f382386b200000000000000000000000000000000000000000000000000000000815263ffffffff90911660048201818152602483018790526044830186905260806064840190815285516084850152855173ffffffffffffffffffffffffffffffffffffffff9095169463382386b2948993899389939192909160a490910190602085019080838360005b838110156117085781810151838201526020016116f0565b50505050905090810190601f1680156117355780820380516001836020036101000a031916815260200191505b509550505050505060206040518083038186803b15801561175557600080fd5b505afa158015611769573d6000803e3d6000fd5b505050506040513d602081101561177f57600080fd5b50516117ec57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f2175706461746572207369670000000000000000000000000000000000000000604482015290519081900360640190fd5b600083815260996020526040808220849055609a84905551839185917fb84fecc2f02e6bac34681511728ae2976bd7c0a0121ff91a9348515759ed237f9190a3505050565b600081565b8260005b60208110156118d957600183821c16600085836020811061185757fe5b60200201519050816001141561189d57808460405160200180838152602001828152602001925050506040516020818303038152906040528051906020012093506118cf565b838160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012093505b505060010161183a565b509392505050565b60006118ec30611ccb565b15905090565b600054610100900460ff168061190b575061190b6118e1565b80611919575060005460ff16155b61196e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612a58602e913960400191505060405180910390fd5b600054610100900460ff161580156119d457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b6119dc611cd1565b6119e582611bde565b8015611a1457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b815160009060208401611a3364ffffffffff85168284611df4565b95945050505050565b600080611a4883611e4a565b6bffffffffffffffffffffffff1690506000611a6384611e5e565b6bffffffffffffffffffffffff169091209392505050565b3390565b60006112ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660286004611e72565b919050565b60006112ff611ac383611e93565b611ec4565b60006112ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316826004611e72565b60006112ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660046020611ec7565b60006112ff604c80611b5c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616611e5e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000861692916bffffffffffffffffffffffff91909116036000612072565b6060600080611ba884611e5e565b6bffffffffffffffffffffffff1690506040519150819250611bcd8483602001612102565b508181016020016040529052919050565b611be781611ccb565b611c5257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f21636f6e747261637420757064617465724d616e616765720000000000000000604482015290519081900360640190fd5b6065805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517f958d788fb4c373604cd4c73aa8c592de127d0819b49bb4dc02c8ecd666e965bf9181900360200190a150565b3b151590565b600054610100900460ff1680611cea5750611cea6118e1565b80611cf8575060005460ff16155b611d4d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612a58602e913960400191505060405180910390fd5b600054610100900460ff16158015611db357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b611dbb61222e565b611dc3612340565b80156113b657600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b600080611e0184846124d0565b9050604051811115611e11575060005b80611e3f577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000091505061087d565b611a33858585612542565b60781c6bffffffffffffffffffffffff1690565b60181c6bffffffffffffffffffffffff1690565b60008160200360080260ff16611e89858585611ec7565b901c949350505050565b60006112ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316602c6020611ec7565b90565b600060ff8216611ed95750600061087d565b611ee284611e5e565b6bffffffffffffffffffffffff16611efd8460ff85166124d0565b1115611fdc57611f3e611f0f85611e4a565b6bffffffffffffffffffffffff16611f2686611e5e565b6bffffffffffffffffffffffff16858560ff16612555565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611fa1578181015183820152602001611f89565b50505050905090810190601f168015611fce5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60208260ff161115612039576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180612a86603a913960400191505060405180910390fd5b60088202600061204886611e4a565b6bffffffffffffffffffffffff1690506000612063836126b0565b91909501511695945050505050565b60008061207e86611e4a565b6bffffffffffffffffffffffff169050612097866126f9565b6120ab856120a584896124d0565b906124d0565b11156120da577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009150506113ef565b6120e481866124d0565b90506120f88364ffffffffff168286611df4565b9695505050505050565b600061210d83612723565b612162576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180612ac06028913960400191505060405180910390fd5b61216b83612735565b6121c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180612ae8602b913960400191505060405180910390fd5b60006121cb84611e5e565b6bffffffffffffffffffffffff16905060006121e685611e4a565b6bffffffffffffffffffffffff169050600060405190508481111561220b5760206060fd5b8285848460045afa506120f861222087612772565b64ffffffffff168685612542565b600054610100900460ff168061224757506122476118e1565b80612255575060005460ff16155b6122aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612a58602e913960400191505060405180910390fd5b600054610100900460ff16158015611dc357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff9091166101001716600117905580156113b657600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b600054610100900460ff168061235957506123596118e1565b80612367575060005460ff16155b6123bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612a58602e913960400191505060405180910390fd5b600054610100900460ff1615801561242257600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b600061242c611a7b565b603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35080156113b657600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b818101828110156112ff57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f766572666c6f7720647572696e67206164646974696f6e2e00000000000000604482015290519081900360640190fd5b606092831b9190911790911b1760181b90565b6060600061256286612778565b915050600061257086612778565b915050600061257e86612778565b915050600061258c86612778565b915050838383836040516020018080612b13603591397fffffffffffff000000000000000000000000000000000000000000000000000060d087811b821660358401527f2077697468206c656e6774682030780000000000000000000000000000000000603b84015286901b16604a8201526050016021612a3782397fffffffffffff000000000000000000000000000000000000000000000000000060d094851b811660218301527f2077697468206c656e677468203078000000000000000000000000000000000060278301529290931b9091166036830152507f2e00000000000000000000000000000000000000000000000000000000000000603c82015260408051601d818403018152603d90920190529b9a5050505050505050505050565b7f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091011d90565b600061270482611e5e565b61270d83611e4a565b016bffffffffffffffffffffffff169050919050565b600061272e8261284c565b1592915050565b600061274082612772565b64ffffffffff1664ffffffffff141561275b57506000611ab0565b6000612766836126f9565b60405110199392505050565b60d81c90565b600080601f5b600f8160ff1611156127e05760ff600882021684901c61279d81612874565b61ffff16841793508160ff166010146127b857601084901b93505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161277e565b50600f5b60ff8160ff1610156128465760ff600882021684901c61280381612874565b61ffff16831792508160ff1660001461281e57601083901b92505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016127e4565b50915091565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009081161490565b600061288660048360ff16901c6128a4565b60ff161760081b62ffff001661289b826128a4565b60ff1617919050565b600060f08083179060ff821614156128c0576030915050611ab0565b8060ff1660f114156128d6576031915050611ab0565b8060ff1660f214156128ec576032915050611ab0565b8060ff1660f31415612902576033915050611ab0565b8060ff1660f41415612918576034915050611ab0565b8060ff1660f5141561292e576035915050611ab0565b8060ff1660f61415612944576036915050611ab0565b8060ff1660f7141561295a576037915050611ab0565b8060ff1660f81415612970576038915050611ab0565b8060ff1660f91415612986576039915050611ab0565b8060ff1660fa141561299c576061915050611ab0565b8060ff1660fb14156129b2576062915050611ab0565b8060ff1660fc14156129c8576063915050611ab0565b8060ff1660fd14156129de576064915050611ab0565b8060ff1660fe14156129f4576065915050611ab0565b8060ff1660ff1415612a0a576066915050611ab0565b5091905056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573732e20417474656d7074656420746f20696e646578206174206f6666736574203078496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656454797065644d656d566965772f696e646578202d20417474656d7074656420746f20696e646578206d6f7265207468616e20333220627974657354797065644d656d566965772f636f7079546f202d204e756c6c20706f696e74657220646572656654797065644d656d566965772f636f7079546f202d20496e76616c696420706f696e74657220646572656654797065644d656d566965772f696e646578202d204f76657272616e2074686520766965772e20536c696365206973206174203078a26469706673582212206039f5ee80799896d95544b3b38fe303409349fe65192e374d34f470299a26b364736f6c63430007060033";

export class TestReplica__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestReplica> {
    return super.deploy(
      _localDomain,
      arg1,
      arg2,
      overrides || {}
    ) as Promise<TestReplica>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _localDomain,
      arg1,
      arg2,
      overrides || {}
    );
  }
  attach(address: string): TestReplica {
    return super.attach(address) as TestReplica;
  }
  connect(signer: Signer): TestReplica__factory {
    return super.connect(signer) as TestReplica__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestReplicaInterface {
    return new utils.Interface(_abi) as TestReplicaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestReplica {
    return new Contract(address, _abi, signerOrProvider) as TestReplica;
  }
}
