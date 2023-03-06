import { SummaryCard, SummaryContainer } from "./styles.js";
import {ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from 'phosphor-react'
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionContext.js";
import { priceFormatter } from "../../utils/formatter.js";

export function Summary() {
    const {transactions} = useContext(TransactionContext);
   
   const summary = transactions.reduce(
    (acc,transaction)=>{
        if(transaction.type==='income') {
            acc.income+=transaction.price;
            acc.total+=transaction.price;
        } else {
            acc.outcome+=transaction.price;
            acc.total+=transaction.price;
        }
        return acc
    }
   ,{
    income:0,
    outcome:0,
    total:0
   })
   
    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Debits</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>{priceFormatter.format(summary.income)}</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Credits</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>
                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </SummaryCard>
            <SummaryCard variant={'green'}>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#ffff"/>
                </header>
                <strong>{priceFormatter.format(summary.total)}</strong>
            </SummaryCard>

        </SummaryContainer>
    )
}