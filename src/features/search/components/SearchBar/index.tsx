import styles from './index.module.css'
import {useDebounce} from "../../hooks/useDebounce"
import {useEffect, useState} from "react";
import {SearchResult} from "../SearchResult";
// import {useLocation} from "react-router";
import queryString from "query-string";

export const SearchInput = () => {
    const [value, setValue] = useState('');

    const location = useLocation()

    useEffect(() => {
        const searchParams = queryString.parse(location.search);

        if (searchParams?.title) {
            setValue(searchParams.title as string)
        }

    }, []);

    const debounce = useDebounce(value, 1000)

    return (
        <div className={styles.searchMoviesWrapper}>
            <div className={styles.inputContainer}>
            <input className={styles.input} type={'text'} placeholder={"Название фильма"} value={value}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                       setValue(e.target.value)
                   }}/>
                <div className={styles.clearButton} onClick={() => {
                    setValue('')
                }}></div>
            </div>
            <SearchResult searchTerm={debounce}/>
        </div>
    )
}
