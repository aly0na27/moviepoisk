import styles from "./index.module.css"
import {ShortMovieInfoT} from "@/types/types";
// import {MovieRating} from "./movie_rating";


export const MovieCard = (props: ShortMovieInfoT) => {

    return (
        <div className={styles.cardWrapper} onClick={() => {
            // navigate(`/movie/${props.id}`)
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
            {/*{isAuth && <MovieRating movieId={props.id} isEditMode={false}/>}*/}
        </div>
    )
}