import { SummaryCard, SummaryContainer } from './styles.js'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { priceFormatter } from '../../utils/formatter.js'
import { useSummary } from '../../hooks/useSummary.js'

export function Summary() {
  const summary = useSummary()
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Debits</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Credits</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant={'green'}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#ffff" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
