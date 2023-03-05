import { SummaryCard, SummaryContainer } from "./styles.js";
import {ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from 'phosphor-react'

export function Summary() {
    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Debits</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>US$ 15,0000.00</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Credits</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>
                <strong>US$ 15,0000.00</strong>
            </SummaryCard>
            <SummaryCard variant={'green'}>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#ffff"/>
                </header>
                <strong>US$ 15,0000.00</strong>
            </SummaryCard>

        </SummaryContainer>
    )
}