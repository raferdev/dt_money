import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header/index.js'
import { Summary } from '../../components/Summary/index.js'
import { TransactionContext } from '../../contexts/TransactionContext.js'
import { dateFormatter, priceFormatter } from '../../utils/formatter.js'
import { SearchForm } from './components/SearchForm/index.js'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles.js'

export function Transactions() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
