import {useLocation} from "react-router";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/store.ts";
import {movieSlice} from "../../features/movie/slices/movieSlice.ts";
import {Movie} from "../../features/movie/components/Movie";
import {Loader} from "../../shared/ui/loader/loader.tsx";
import styles from './index.module.css'

function MovieDetails() {
    const location = useLocation()

    const dispatch = useAppDispatch()
    const setMovieId = movieSlice.actions.setId
    const movieId = useAppSelector(state => state.movie.id)

    useEffect(() => {

        const movieId = location.pathname.split('/')[2]
        dispatch(setMovieId(movieId))

        return () => {

            dispatch(setMovieId(null))
        }

    }, [])

    return (
        <main className={styles.wrapper}>
            {
                movieId !== null ? <Movie id={movieId}/> : <Loader/>
            }
        </main>
    )
}

export default MovieDetails