import {ShortMovieInfoT} from "../../../../types/types.ts";
import {useAppDispatch, useAppSelector} from "../../../../app/store.ts";
import {MovieCard} from "../../../../shared/ui/movie-card";
import styles from './index.module.css'
import {useSearchMoviesQuery} from "../../api/searchApi.ts";
import {Loader} from "../../../../shared/ui/loader/loader.tsx";
import {useEffect} from "react";
import {searchSlice} from "../../slices/searchSlice.ts";
import {Pagination} from "../../../../shared/ui/Pagination";

export const SearchResult = ({searchTerm}: { searchTerm: string }) => {
    const dispatch = useAppDispatch()

    const title = useAppSelector((state) => state.search.title)
    const genre = useAppSelector((state) => state.search.genre)
    const release_year = useAppSelector((state) => state.search.year)
    const page = useAppSelector(state => state.search.currPage)

    useEffect(() => {
        dispatch(searchSlice.actions.setTitle(searchTerm))
    }, [searchTerm]);

    const {data, isFetching, error} = useSearchMoviesQuery({title, genre, release_year, page})

    if (isFetching) {
        return <Loader/>
    }

    if (error) {
        if ('data' in error) {
            return (
                <div className={styles.emptyData}>
                    <h3>{error.data}</h3>
                    <p>Попробуйте изменить запрос</p>
                </div>
            )
        } else {
            return (
                <div className={styles.emptyData}>
                    <h3> Произошла непредвиденная ошибка</h3>
                    <p>Попробуйте позже</p>
                </div>
            )
        }
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