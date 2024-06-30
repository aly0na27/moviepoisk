import {GenresT, ShortMovieInfoT, YearsT} from "@/types/types";
import {MovieCard} from "@/shared/ui/movie-card";
import styles from './index.module.css'
import {Loader} from "@/shared/ui/loader/loader";
import {useEffect} from "react";
import {Pagination} from "@/shared/ui/Pagination";
import sear

type SearchResultPropsT = {
    title: string
    genre: GenresT
    year: YearsT
}

import { GetServerSideProps } from 'next';

const ServerComponent = ({ serverData }) => {
    return (
        <div>
            <h1>Server-side Component</h1>
            <p>Server Data: {serverData}</p>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    // Имитация получения данных на сервере
    const serverData = await

    return {
        props: {
            serverData,
        },
    };
};

export default ServerComponent;

// export const SearchResult = (props: SearchResultPropsT) => {
//
//     useEffect(() => {
//         dispatch(searchSlice.actions.setTitle(searchTerm))
//     }, [searchTerm]);
//
//     // const {data, isFetching} = useSearchMoviesQuery({title, genre, release_year, page})
//
//     if (isFetching) {
//         return <Loader/>
//     }
//
//     if (!data?.search_result.length) {
//         return (
//             <div className={styles.emptyData}>
//                 <h3>Ничего не найдено</h3>
//                 <p>Измените запрос и попробуйте снова</p>
//             </div>
//         )
//     }
//
//     return (
//         <>
//             <div className={styles.wrapper}>
//                 {data?.search_result.map((movie: ShortMovieInfoT) => {
//                     return <MovieCard key={movie.id} {...movie}/>
//                 })}
//             </div>
//             <Pagination pageNumber={page} totalPages={data.total_pages} onRightArrowClickHandler={(page) => {
//                 dispatch(searchSlice.actions.setCurrPage(page + 1))}} onLeftArrowClickHandler={(page) => {
//                 dispatch(searchSlice.actions.setCurrPage(page - 1))}}/>
//
//         </>
//
//     )
// }