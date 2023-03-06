import * as Dialog  from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles.js";

export function NewTransactionModal() {
    return(
        <Dialog.Portal>
        <Overlay/>
        <Content>
            <Dialog.Title>New Transaction</Dialog.Title>
            <CloseButton>
                <X size={24}/>
            </CloseButton>
            
            <form>
                <input type='text' placeholder="Description" required/>
                <input type='number' placeholder="Price" required/>
                <input type='text' placeholder="Category" required/>
            <TransactionType>
            <TransactionTypeButton variant="income">
                <ArrowCircleUp size={24}/>
                 Debit
                </TransactionTypeButton>
            <TransactionTypeButton variant="outcome">
                <ArrowCircleDown size={24}/>
                 Credit
                </TransactionTypeButton>
            </TransactionType>

            <button type="submit">
            Submit
            </button>
            
            </form>
            
        </Content>
    </Dialog.Portal>
    )
}