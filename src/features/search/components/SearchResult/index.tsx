import {ShortMovieInfoT} from "@/types/types";
import {useAppDispatch, useAppSelector} from "@/store";
import {MovieCard} from "@/shared/ui/movie-card";
import styles from './index.module.css'
import {useSearchMoviesQuery} from "../../api/searchApi";
import {Loader} from "@/shared/ui/loader/loader";
import {useEffect} from "react";
import {searchSlice} from "../../slices/searchSlice";
import {Pagination} from "@/shared/ui/Pagination";

export const SearchResult = ({searchTerm}: { searchTerm: string }) => {
    const dispatch = useAppDispatch()

    const title = useAppSelector((state) => state.search.title)
    const genre = useAppSelector((state) => state.search.genre)
    const release_year = useAppSelector((state) => state.search.year)
    const page = useAppSelector(state => state.search.currPage)

    useEffect(() => {
        dispatch(searchSlice.actions.setTitle(searchTerm))
    }, [searchTerm]);

    const {data, isFetching} = useSearchMoviesQuery({title, genre, release_year, page})

    if (isFetching) {
        return <Loader/>
    }

    if (!data?.search_result.length) {
        return (
            <div className={styles.emptyData}>
                <h3>Ничего не найдено</h3>
                <p>Измените запрос и попробуйте снова</p>
            </div>
        )
    }

    return (
        <>
            <div className={styles.wrapper}>
                {data?.search_result.map((movie: ShortMovieInfoT) => {
                    return <MovieCard key={movie.id} {...movie}/>
                })}
            </div>
            <Pagination pageNumber={page} totalPages={data.total_pages} onRightArrowClickHandler={(page) => {
                dispatch(searchSlice.actions.setCurrPage(page + 1))}} onLeftArrowClickHandler={(page) => {
                    dispatch(searchSlice.actions.setCurrPage(page - 1))}}/>

        </>

    )
}