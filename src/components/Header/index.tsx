import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles.js";
import logoImg from '../../assets/logo.svg'


export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt=""/>
                <NewTransactionButton>New Transaction</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}