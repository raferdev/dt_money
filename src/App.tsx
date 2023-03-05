import { ThemeProvider } from "styled-components"
import { Transactions } from "./pages/transactions/index.js"
import { defaultTheme } from "./styles/themes/default.js"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions/>
    </ThemeProvider>
  )
}
