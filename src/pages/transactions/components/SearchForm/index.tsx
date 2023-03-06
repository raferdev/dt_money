import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles.js";

import * as z from 'zod';

import {zodResolver} from '@hookform/resolvers/zod';

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const {
        register,
         handleSubmit,
        formState:{isSubmitting}
        } = useForm<SearchFormInput>(
       { resolver: zodResolver(searchFormSchema),}
    );

   async function hangleSearchTransaction(data:SearchFormInput) {
    console.log(data)
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