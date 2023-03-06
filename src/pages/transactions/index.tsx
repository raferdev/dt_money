import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header/index.js";
import { Summary } from "../../components/Summary/index.js";
import { TransactionContext } from "../../contexts/TransactionContext.js";
import { SearchForm } from "./components/SearchForm/index.js";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles.js";


export function Transactions() {
    const {transactions} = useContext(TransactionContext)
    return (
        <div>
            <Header/>
            <Summary/>
            <TransactionsContainer>
                <SearchForm/>
            <TransactionsTable>
                <tbody>

                    {
                    transactions.map(transaction => {
                    return  (
                        <tr key={transaction.id}>
                        <td width="50%">{transaction.description}</td>
                        <PriceHighLight variant={transaction.type}>{transaction.price}</PriceHighLight>
                        <td>{transaction.category}</td>
                        <td>{transaction.createdAt}</td>
                        </tr>
                        )
                        })
                    }
                    
                </tbody>
            </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}