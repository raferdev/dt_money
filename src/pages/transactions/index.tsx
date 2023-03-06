import { Header } from "../../components/Header/index.js";
import { Summary } from "../../components/Summary/index.js";
import { SearchForm } from "./components/SearchForm/index.js";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles.js";

export function Transactions() {
    return (
        <div>
            <Header/>
            <Summary/>
            <TransactionsContainer>
                <SearchForm/>
            <TransactionsTable>
                <tbody>
                    <tr>
                    <td width="50%">Website Development</td>
                    <PriceHighLight variant={'income'}>US$ 13,000.00</PriceHighLight>
                    <td>Sell</td>
                    <td>12/02/2023</td>
                    </tr>
                    <tr>
                    <td width="50%">Hamburguer</td>
                    <PriceHighLight variant={'outcome'}>US$ - 13,000.00</PriceHighLight>
                    <td>Food</td>
                    <td>12/02/2023</td>
                    </tr>
                    
                </tbody>
            </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}