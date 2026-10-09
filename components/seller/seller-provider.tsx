"use client"
import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react"
import type { SituationKey } from "@/lib/content"

interface SellerCtx {
  address: string
  situation: SituationKey | null
  setAddress: (v: string) => void
  setSituation: (v: SituationKey | null) => void
  reset: () => void
  submitted: boolean
  setSubmitted: (v: boolean) => void
  loading: boolean
  setLoading: (v: boolean) => void
}

const SellerContext = createContext<SellerCtx>({
  address: "",
  situation: null,
  setAddress: () => {},
  setSituation: () => {},
  reset: () => {},
  submitted: false,
  setSubmitted: () => {},
  loading: false,
  setLoading: () => {},
})

export function SellerProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState("")
  const [situation, setSituation] = useState<SituationKey | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const reset = useCallback(() => {
    setAddress("")
    setSituation(null)
    setSubmitted(false)
    setLoading(false)
  }, [])

  return (
    <SellerContext.Provider
      value={{
        address,
        situation,
        setAddress,
        setSituation,
        reset,
        submitted,
        setSubmitted,
        loading,
        setLoading,
      }}
    >
      {children}
    </SellerContext.Provider>
  )
}

export function useSeller() {
  return useContext(SellerContext)
}
