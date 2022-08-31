import web3 from "./web3";

const address = "0xef96fed46b2bf5456de4ed8b28302d87d3feef07";
const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "projectStarter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "projectTitle",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "projectDesc",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "goalAmount",
        type: "uint256",
      },
    ],
    name: "ProjectStarted",
    type: "event",
  },
  {
    inputs: [],
    name: "returnAllProjects",
    outputs: [
      {
        internalType: "contract Project[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "durationInDays",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pricePerToken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maximumTokenSale",
        type: "uint256",
      },
    ],
    name: "startProject",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const SharifStarterContractInstance = new web3.eth.Contract(abi, address);

export default SharifStarterContractInstance;