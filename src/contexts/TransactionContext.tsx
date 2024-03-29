import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { createContext } from 'use-context-selector'
import { DATA } from '../assets/build_data.js'
import { api } from '../lib/axios.js'

export interface Transaction {
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
      try {
        const response = await api.post('transactions', {
          description,
          type,
          category,
          price,
          createdAt: new Date(),
        })

        setTransactions((transactions) => [response.data, ...transactions])
      } catch (e) {
        setTransactions((transactions) => {
          const transaction = {
            id: transactions.length,
            description,
            type,
            category,
            price,
            createdAt: new Date().toString(),
          }
          return [transaction, ...transactions]
        })
      }
    },
    [],
  )

  const fecthTransactions = useCallback(async (query?: string) => {
    try {
      const response = await api.get('transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        },
      })
      setTransactions(response.data)
    } catch (e) {
      setTransactions(DATA)
    }
  }, [])

  useEffect(() => {
    fecthTransactions()
  }, [fecthTransactions])

  const contextObject = useMemo(() => {
    return { transactions, fecthTransactions, createNewTransaction }
  }, [transactions, fecthTransactions, createNewTransaction])

  return (
    <TransactionContext.Provider value={contextObject}>
      {children}
    </TransactionContext.Provider>
  )
}
