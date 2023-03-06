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
    fecthTransactions: (query?:string) => Promise<void>
}

interface TransactionProviderProps {
    children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({children}:TransactionProviderProps) {

    const  [transactions, setTransactions] = useState<Transaction[]>([])

    async function fecthTransactions(query?:string) {
        const url = new URL("http://localhost:5000/transactions")

        if(query) {
            url.searchParams.append("q",query)
        }

        const response = await fetch(url)
        const data = await response.json();
        
        setTransactions(data)
    }

    useEffect(()=> {
        fecthTransactions()
    },[])

    return (
        <TransactionContext.Provider value={{transactions,fecthTransactions}}>
            {children}
        </TransactionContext.Provider>
    )
}