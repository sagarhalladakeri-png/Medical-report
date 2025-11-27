export const contractAddress = "0x1922574ec6EdD10A525D0eEf53a494f5346e7994";

export const contractABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "patient", "type": "address" }
    ],
    "name": "ReportCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "patient", "type": "address" }
    ],
    "name": "ReportUpdated",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "patient", "type": "address" },
      { "internalType": "string", "name": "name", "type": "string" },
      { "internalType": "string", "name": "diagnosis", "type": "string" },
      { "internalType": "string", "name": "prescription", "type": "string" }
    ],
    "name": "addReport",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ],
    "name": "reports",
    "outputs": [
      { "internalType": "string", "name": "patientName", "type": "string" },
      { "internalType": "string", "name": "diagnosis", "type": "string" },
      { "internalType": "string", "name": "prescription", "type": "string" },
      { "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "patient", "type": "address" },
      { "internalType": "string", "name": "name", "type": "string" },
      { "internalType": "string", "name": "diagnosis", "type": "string" },
      { "internalType": "string", "name": "prescription", "type": "string" }
    ],
    "name": "updateReport",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;