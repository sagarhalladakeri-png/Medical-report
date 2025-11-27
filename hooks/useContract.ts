"use client"

import { useState, useEffect } from "react"
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export interface ReportData {
  patientName: string
  diagnosis: string
  prescription: string
  timestamp: string
}

export const useMedicalContract = () => {
  const { address } = useAccount()
  const [report, setReport] = useState<ReportData | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const { data: fetchedReport, refetch: refetchReport } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "reports",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  })

  const { writeContractAsync, data: hash, isPending, error } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })

  useEffect(() => {
    if (fetchedReport) {
      const r = fetchedReport as any
      if (r.patientName) {
        setReport({
          patientName: r.patientName,
          diagnosis: r.diagnosis,
          prescription: r.prescription,
          timestamp: r.timestamp.toString(),
        })
      }
    }
  }, [fetchedReport])

  useEffect(() => {
    if (isConfirmed) refetchReport()
  }, [isConfirmed, refetchReport])

  const addReport = async (patient: string, name: string, diagnosis: string, prescription: string) => {
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "addReport",
        args: [patient, name, diagnosis, prescription],
      })
    } catch (err) {
      console.error("Error adding report:", err)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const updateReport = async (patient: string, name: string, diagnosis: string, prescription: string) => {
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "updateReport",
        args: [patient, name, diagnosis, prescription],
      })
    } catch (err) {
      console.error("Error updating report:", err)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return {
    data: {
      report,
    },
    actions: {
      addReport,
      updateReport,
    },
    state: {
      isLoading: isLoading || isPending || isConfirming,
      isPending,
      isConfirming,
      isConfirmed,
      hash,
      error,
    },
  }
}