'use client'

import {GENRES, YEARS} from "@/constants/constants";
import styles from './index.module.css'
import {Dropdown} from "@/shared/ui/Dropdown";
import {useRouter, useSearchParams} from "next/navigation";
import * as sea from "node:sea";
import {GenresT, YearsT} from "@/types/types";
// import {GenresT, YearsT} from "@/types/types";
// import {Dispatch, SetStateAction} from "react";
// type SearchFiltersPropsT = {
//     genre: GenresT
//     year: YearsT
//     setGenre: Dispatch<SetStateAction<GenresT>>
//     setYear: Dispatch<SetStateAction<YearsT>>
// }

export const SearchFilters = () => {

    const setGenre = (genre: GenresT) => {
        const router = useRouter()
        const searchParams = useSearchParams()
        const title = searchParams.get('title') ? searchParams.get('title') : ''
        const year: YearsT = searchParams.get('release_year') ? searchParams.get('release_year') as YearsT : '0'
        router.replace(`?title=${title}&release_year=${year}&genre=${genre}`)
    }

    const setYear = (year: YearsT) => {
        const router = useRouter()
        const searchParams = useSearchParams()
        const title = searchParams.get('title') ? searchParams.get('title') : ''
        const genre: GenresT = searchParams.get('genre') ? searchParams.get('genre') as GenresT : '0'
        router.replace(`?title=${title}&release_year=${year}&genre=${genre}`)
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Фильтр</div>
            <div className={styles.selectWrapper}>
                <label htmlFor="genre">Жанр</label>
                <Dropdown items={GENRES} defaultValue={'0'} setItem={setGenre}/>
            </div>
            <div className={styles.selectWrapper}>
                <label htmlFor="release_year">Год выпуска</label>
                <Dropdown items={YEARS} defaultValue={'0'} setItem={setYear}/>
            </div>
        </div>
    );
}

