import {GenresT, ShortMovieInfoT, YearsT} from "@/types/types";
import {searchApi} from "@/api/searchApi";
import {MovieCard} from "@/shared/ui/MovieCard";
import styles from './index.module.css'
import {SearchInput} from "@/components/SearchInput";

type SearchResultPropsT = {
    title: string
    genre: GenresT
    year: YearsT
}

const ServerComponent = async (props: SearchResultPropsT) => {
    const response = await searchApi({title: props.title, genre: props.genre, release_year: props.year})
    console.log(response)
    return (
        <div className={styles.wrapper}>
            {response?.search_result.map((movie: ShortMovieInfoT) => {
                return <MovieCard key={movie.id} {...movie}/>
            })}
        </div>
    );
};


export default ServerComponent;
