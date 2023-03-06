import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles.js";

import * as z from 'zod';

import {zodResolver} from '@hookform/resolvers/zod';
import { useContext } from "react";
import { TransactionContext } from "../../../../contexts/TransactionContext.js";

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const {fecthTransactions} = useContext(TransactionContext)
    const {
        register,
         handleSubmit,
        formState:{isSubmitting}
        } = useForm<SearchFormInput>(
       { resolver: zodResolver(searchFormSchema),}
    );

   async function hangleSearchTransaction(data:SearchFormInput) {
    await fecthTransactions(data.query)
    }
    
    return(
        <SearchFormContainer onSubmit={handleSubmit(hangleSearchTransaction)}>
            <input type='text' placeholder="Search transactions..." {...register}/>

            <button type='submit' disabled={isSubmitting}>
                <MagnifyingGlass size={20}/>
                Search
            </button>
        </SearchFormContainer>
    )
}