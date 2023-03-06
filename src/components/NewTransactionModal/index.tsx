import * as Dialog  from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles.js";
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income','outcome'])
})

type NewTransactionFormSchema = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
    const {
        register,
         handleSubmit,
         formState:{isSubmitting}
        
        } = useForm<NewTransactionFormSchema>({
            resolver: zodResolver(newTransactionFormSchema)
        })
    
    
    function hangleCreateNewTransaction(data:NewTransactionFormSchema){

    }
    
    return(
        <Dialog.Portal>
        <Overlay/>
        <Content>
            <Dialog.Title>New Transaction</Dialog.Title>
            <CloseButton>
                <X size={24}/>
            </CloseButton>
            
            <form onSubmit={handleSubmit(hangleCreateNewTransaction)}>
                <input type='text' placeholder="Description" required {...register('description')}/>
                <input type='number' placeholder="Price" required {...register('price')}/>
                <input type='text' placeholder="Category" required {...register('type')}/>
            <TransactionType>
            <TransactionTypeButton value="income" variant="income">
                <ArrowCircleUp size={24}/>
                 Debit
                </TransactionTypeButton>
            <TransactionTypeButton value="outcome" variant="outcome">
                <ArrowCircleDown size={24}/>
                 Credit
                </TransactionTypeButton>
            </TransactionType>

            <button type="submit" disabled={isSubmitting}>
            Submit
            </button>
            
            </form>
            
        </Content>
    </Dialog.Portal>
    )
}