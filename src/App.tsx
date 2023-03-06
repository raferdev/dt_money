import { ThemeProvider } from 'styled-components'
import { TransactionProvider } from './contexts/TransactionContext.js'
import { Transactions } from './pages/transactions/index.js'
import { GlobalStyle } from './styles/global.js'
import { defaultTheme } from './styles/themes/default.js'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  )
}
