import * as Dialog  from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles.js";
import * as z from 'zod';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionContext.js";

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income','outcome'])
})

type NewTransactionFormSchema = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
    const {createNewTransaction} = useContext(TransactionContext)
    const {
        control,
        register,
         handleSubmit,
         formState:{isSubmitting},
         reset
        
        } = useForm<NewTransactionFormSchema>({
            resolver: zodResolver(newTransactionFormSchema)
        })
    
    
    async function hangleCreateNewTransaction(data:NewTransactionFormSchema){
        createNewTransaction(data)

        reset()
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
            
            <Controller
             control={control}
              name="type"
               render={({field}) => {
                return (
            <TransactionType onValueChange={field.onChange} value={field.value}>
            <TransactionTypeButton value="income" variant="income">
                <ArrowCircleUp size={24}/>
                 Debit
                </TransactionTypeButton>
            <TransactionTypeButton value="outcome" variant="outcome">
                <ArrowCircleDown size={24}/>
                 Credit
                </TransactionTypeButton>
            </TransactionType>
                )
             } } />

            <button type="submit" disabled={isSubmitting}>
            Submit
            </button>
            
            </form>
            
        </Content>
    </Dialog.Portal>
    )
}