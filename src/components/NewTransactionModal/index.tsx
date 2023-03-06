import * as Dialog  from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { CloseButton, Content, Overlay } from "./styles.js";

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
            
            <button type="submit">
            Submit
            </button>
            
            </form>
            
        </Content>
    </Dialog.Portal>
    )
}