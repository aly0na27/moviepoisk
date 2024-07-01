import {useAppSelector} from "../../../../app/store.ts";
import {useGetMovieByIdQueryQuery} from "../../api/movieApi.ts";
import {Loader} from "../../../../shared/ui/loader/loader.tsx";
import styles from './index.module.css'
import {MovieRating} from "../../../../shared/ui/movie-card/movie_rating";
import {Actors} from "../Actors";
import {selectIsAuth} from "../../../../app/selectors.ts";

export const Movie = ({id}: { id: string }) => {
    const {isLoading, error} = useGetMovieByIdQueryQuery(+id)
    const isAuth = useAppSelector(selectIsAuth)
    const data = useAppSelector((state) => state.movie.data)

    if (isLoading) {
        return <Loader/>
    }

    if (error) {
        if ('data' in error) {
            return (
                <div className={styles.errorWrapper}>
                    <h3>{error.data}</h3>
                    <p>Попробуйте изменить запрос</p>
                </div>
            )
        } else {
            return (
                <div className={styles.errorWrapper}>
                    <h3> Произошла непредвиденная ошибка</h3>
                    <p>Попробуйте позже</p>
                </div>
            )
        }
    }

    if (!data) {
        return (
            <div className={styles.errorWrapper}>
                <h3>Фильм не найден</h3>
                <p>Попробуйте изменить запрос</p>
            </div>
        )
    }

    return (
        <>
            <div className={styles.movieInfoWrapper}>
                <img src={data.poster} alt="poster" className={styles.poster}/>
                <div className={styles.movieInfo}>
                    <div className={styles.title}>
                        <h2>{data.title}</h2>
                        {isAuth && <MovieRating movieId={data.id}/>}
                    </div>

                    <div className={styles.description}>
                        <p><span>Жанр:</span> {data.genre}</p>
                        <p><span>Год выпуска:</span> {data.release_year}</p>
                        <p><span>Рейтинг</span>: {data.rating}</p>
                        <p><span>Описание</span></p>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
            <h3 className={styles.actorHeader}>Актеры</h3>
            <Actors actors={data.actors}/>
        </>
    )
}