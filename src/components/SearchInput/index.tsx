'use client'

import styles from './index.module.css'
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {GenresT, YearsT} from "@/types/types";

type SearchInputPropsT = {
    title: string
    setTitle: Dispatch<SetStateAction<string>>
}

export const SearchInput = () => {

    const router = useRouter()
    const searchParams = useSearchParams()
    const title = searchParams.get('title') ? searchParams.get('title') as string : ''

    return (
        <div className={styles.searchMoviesWrapper}>
            <div className={styles.inputContainer}>
                <input className={styles.input} type={'text'} placeholder={"Название фильма"} value={title}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {

                           const title = e.currentTarget.value
                           const year: YearsT = searchParams.get('release_year') ? searchParams.get('release_year') as YearsT : '0'
                           const genre: GenresT = searchParams.get('genre') ? searchParams.get('genre') as GenresT : '0'
                           router.replace(`?title=${title}&release_year=${year}&genre=${genre}`)
                           router.replace(`?title=${e.target.value}`)

                       }}/>
                <div className={styles.clearButton} onClick={() => {

                }}></div>
            </div>
            {/*<SearchResult searchTerm={debounce}/>*/}
        </div>
    )
}
