"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { useMedicalContract } from "@/hooks/useContract"
import { isAddress } from "viem"

const SampleIntegration = () => {
  const { isConnected } = useAccount()

  const [patient, setPatient] = useState("")
  const [name, setName] = useState("")
  const [diagnosis, setDiagnosis] = useState("")
  const [prescription, setPrescription] = useState("")

  const { data, actions, state } = useMedicalContract()

  const handleAddReport = async () => {
    if (!isAddress(patient)) return
    await actions.addReport(patient, name, diagnosis, prescription)
  }

  const handleUpdateReport = async () => {
    if (!isAddress(patient)) return
    await actions.updateReport(patient, name, diagnosis, prescription)
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <p>Please connect your wallet.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Medical Report Manager</h1>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Patient Address (0x...)"
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Diagnosis"
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Prescription"
          value={prescription}
          onChange={(e) => setPrescription(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        onClick={handleAddReport}
        className="w-full bg-blue-600 text-white p-2 rounded"
        disabled={state.isLoading}
      >
        {state.isLoading ? "Processing..." : "Add Report"}
      </button>

      <button
        onClick={handleUpdateReport}
        className="w-full bg-yellow-600 text-white p-2 rounded"
        disabled={state.isLoading}
      >
        {state.isLoading ? "Processing..." : "Update Report"}
      </button>

      {data.report && (
        <div className="p-4 border rounded mt-4">
          <h2 className="text-xl font-semibold mb-2">Your Report</h2>
          <p><strong>Name:</strong> {data.report.patientName}</p>
          <p><strong>Diagnosis:</strong> {data.report.diagnosis}</p>
          <p><strong>Prescription:</strong> {data.report.prescription}</p>
          <p><strong>Timestamp:</strong> {data.report.timestamp}</p>
        </div>
      )}

      {state.hash && (
        <div className="text-sm break-all mt-2">{state.hash}</div>
      )}

      {state.error && (
        <p className="text-red-600">Error: {state.error.message}</p>
      )}
    </div>
  )
}

export default SampleIntegration