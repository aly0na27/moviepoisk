import {SearchInput} from "../../features/search/components/SearchBar";
import styles from './index.module.css'
import {SearchFilters} from "../../features/search/components/SearchFilters";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/store.ts";
import {searchSlice} from "../../features/search/slices/searchSlice.ts";
import queryString from "query-string";
import {GenresT, YearsT} from "../../types/types.ts";
import {selectGenre, selectPage, selectTitle, selectYear} from "../../app/selectors.ts";

function MoviesList() {
    const dispatch = useAppDispatch()

    const title = useAppSelector(selectTitle)
    const genre = useAppSelector(selectGenre)
    const year = useAppSelector(selectYear)
    const currPage = useAppSelector(selectPage)

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const searchParams = queryString.parse(location.search);

        if (searchParams?.title) {
            dispatch(searchSlice.actions.setTitle(searchParams.title as string))
        }

        if (searchParams?.genre) {
            dispatch(searchSlice.actions.setGenre(searchParams.genre as GenresT))
        }

        if (searchParams?.release_year) {
            dispatch(searchSlice.actions.setYear(searchParams.release_year as YearsT))
        }

        if (searchParams?.page) {
            dispatch(searchSlice.actions.setCurrPage(+searchParams.page))
        }
    }, []);

    useEffect(() => {
        const queryParams = { title, genre, release_year: year, page: currPage.toString() };

        const queryString = new URLSearchParams(queryParams).toString();


        navigate(`/?${queryString}`);
    }, [title, navigate, genre, year, currPage]);


    return (
        <main className={styles.wrapper}>
            <SearchFilters/>
            <SearchInput/>
        </main>
    )
}

export default MoviesList