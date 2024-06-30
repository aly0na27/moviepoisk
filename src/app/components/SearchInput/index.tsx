import styles from './index.module.css'
// import {useDebounce} from "../../hooks/useDebounce"
import {Dispatch, SetStateAction, useEffect, useState} from "react";

// import {useLocation} from "react-router";
import queryString from "query-string";
type SearchInputPropsT = {
    title: string
    setTitle: Dispatch<SetStateAction<string>>
}

export const SearchInput = (props: SearchInputPropsT) => {

    // const location = useLocation()

    // useEffect(() => {
    //     const searchParams = queryString.parse(location.search);
    //
    //     if (searchParams?.title) {
    //         setValue(searchParams.title as string)
    //     }
    //
    // }, []);

    // const debounce = useDebounce(props.title, 1000)

    return (
        <div className={styles.searchMoviesWrapper}>
            <div className={styles.inputContainer}>
                <input className={styles.input} type={'text'} placeholder={"Название фильма"} value={props.title}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                           props.setTitle(e.target.value)
                       }}/>
                <div className={styles.clearButton} onClick={() => {
                    props.setTitle('')
                }}></div>
            </div>
            {/*<SearchResult searchTerm={debounce}/>*/}
        </div>
    )
}
