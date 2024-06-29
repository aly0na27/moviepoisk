import styles from "./index.module.css"
import {ShortMovieInfoT} from "../../../types/types.ts";
import {MovieRating} from "./movie_rating";
import {useNavigate} from "react-router";
import {useAppSelector} from "../../../app/store.ts";


export const MovieCard = (props: ShortMovieInfoT) => {
    const navigate = useNavigate()

    const isAuth = useAppSelector(state => state.auth.isAuth)

    return (
        <div className={styles.cardWrapper} onClick={() => {
            navigate(`/movie/${props.id}`)
        }}>
            <img className={styles.poster} src={props.poster} alt=""/>

            <div className={styles.infoWrapper}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.detailInfoWrapper}>
                    <span className={styles.rowName}>Жанр</span>
                    <span className={styles.rowInfo}>{props.genre}</span>
                    <span className={styles.rowName}>Год выпуска</span>
                    <span className={styles.rowInfo}>{props.release_year}</span>
                    <span className={styles.rowName}>Описание</span>
                    <span className={styles.rowInfo}>{props.description}</span>
                </div>
            </div>
            {isAuth && <MovieRating movieId={props.id} isEditMode={false}/>}
        </div>
    )
}
