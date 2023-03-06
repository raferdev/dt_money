import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios.js'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}
interface CreateTransactionProps {
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
}
interface TransactionContextType {
  transactions: Transaction[]
  fecthTransactions: (query?: string) => Promise<void>
  createNewTransaction: (data: CreateTransactionProps) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const createNewTransaction = useCallback(
    async ({ description, type, category, price }: CreateTransactionProps) => {
      const response = await api.post('transactions', {
        description,
        type,
        category,
        price,
        createdAt: new Date(),
      })

      setTransactions((transactions) => [response.data, ...transactions])
    },
    [],
  )

  const fecthTransactions = useCallback(async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(response.data)
  }, [])

  useEffect(() => {
    fecthTransactions()
  }, [fecthTransactions])

  return (
    <TransactionContext.Provider
      value={{ transactions, fecthTransactions, createNewTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
