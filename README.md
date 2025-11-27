# Medical Report dApp

## **Contract Address**

**0x1922574ec6EdD10A525D0eEf53a494f5346e7994**  
View on Flare Explorer:  
https://coston2-explorer.flare.network/address/0x1922574ec6EdD10A525D0eEf53a494f5346e7994

---

## **Description**

The Medical Report dApp is a decentralized system for storing and updating medical reports directly on the Flare blockchain.  
Each patient has a single medical report containing their:

- Name
- Diagnosis
- Prescription
- Timestamp of last update

The contract owner (e.g., hospital admin or authorized medical provider) can create and update reports for any patient address.

This provides a transparent, tamper-proof way to maintain medical records without relying on centralized databases.

---

## **Features**

### ✔ On-Chain Medical Records

Each patient's data is stored directly in a public smart contract mapping.

### ✔ Add Medical Reports

The admin can add a new report for any patient.

### ✔ Update Medical Reports

Existing reports can be updated with new diagnosis or prescription information.

### ✔ Read Access

Anyone may read a patient’s medical report—useful for verifiable medical transparency or patient-owned data systems.

### ✔ Event Logging

Every report creation or update emits blockchain events for auditability.

### ✔ Wallet-Based Authentication

The UI uses Wagmi + Wallet providers to ensure secure interaction with the contract.

---

## **How It Solves the Problem**

Traditional medical records are stored in centralized systems that are:

- Prone to data loss
- Vulnerable to unauthorized tampering
- Hard to verify externally
- Owned by organizations rather than patients

This project solves these issues through **blockchain-based medical data storage**:

### 🛡 Tamper-Proof

Once recorded on-chain, data cannot be altered without permission, ensuring authenticity.

### 🧑‍⚕️ Patient Ownership

Records are tied to the patient’s wallet address, giving users greater control over their medical identity.

### 🌍 Global Accessibility

Any authorized provider can access or update the data anywhere in the world.

### 📜 Full Transparency & Auditability

Blockchain event logs allow tracking of all updates and changes.

### 🔐 Eliminates Centralized Failures

No central server = no single point of failure.

---

This dApp demonstrates how blockchain can redefine medical record management by prioritizing security, transparency, and decentralized ownership.
