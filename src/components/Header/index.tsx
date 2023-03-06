import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles.js";
import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt=""/>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                    <NewTransactionButton>
                        New Transaction
                    </NewTransactionButton>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay/>
                        <Dialog.Content>
                            <Dialog.Title>New Transaction</Dialog.Title>
                            <Dialog.Close/>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}