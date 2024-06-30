'use client'

import {GENRES, YEARS} from "@/constants/constants";
import styles from './index.module.css'
import {Dropdown} from "@/shared/ui/dropdown";
import {GenresT, YearsT} from "@/types/types";
import {Dispatch, SetStateAction} from "react";

type SearchFiltersPropsT = {
    genre: GenresT
    year: YearsT
    setGenre: Dispatch<SetStateAction<GenresT>>
    setYear: Dispatch<SetStateAction<YearsT>>
}

export const SearchFilters = (props: SearchFiltersPropsT) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Фильтр</div>
            <div className={styles.selectWrapper}>
                <label htmlFor="genre">Жанр</label>
                <Dropdown items={GENRES} defaultValue={props.genre} setItem={props.setGenre}/>
            </div>
            <div className={styles.selectWrapper}>
                <label htmlFor="release_year">Год выпуска</label>
                <Dropdown items={YEARS} defaultValue={props.year} setItem={props.setYear}/>
            </div>
        </div>
    );
}

