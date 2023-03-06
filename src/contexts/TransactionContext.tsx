import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
    id: number;
    description: string;
    type: 'income'|'outcome';
    price: number;
    category: string;
    createdAt: string;
}
interface TransactionContextType {
    transactions: Transaction[]
}

interface TransactionProviderProps {
    children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({children}:TransactionProviderProps) {
    const  [transactions, setTransactions] = useState<Transaction[]>([])
    async function loadTransactions() {
        const response = await fetch('http://localhost:5000/transactions')
        const data = await response.json();
        
        setTransactions(data)
    }

    useEffect(()=> {
        loadTransactions()
    },[])
    return (
        <TransactionContext.Provider value={{transactions}}>
            {children}
        </TransactionContext.Provider>
    )
}