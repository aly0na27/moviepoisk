import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {GenresT, ShortMovieInfoT, YearsT} from "../../../types/types.ts";


type SearchResult = {
    search_result: ShortMovieInfoT[],
    total_pages: number
}

type SearchParams = {
    title: string
    genre: GenresT
    release_year: YearsT
    page: number
}

export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/api/v1/' }),
    endpoints: (builder) => ({
        searchMovies: builder.query<SearchResult, SearchParams>({
            query: ({title, genre, release_year, page}) => {
                const query_title = `${title ? 'title=' + title + '&' : ''}`
                const query_genre = `${genre !== '0' ? 'genre=' + genre + '&' : ''}`
                const query_year = `${release_year !== '0' ? 'release_year=' + release_year + '&' : ''}`
                const query_page = `page=${page}`


                return `search?` + query_title + query_genre + query_year + query_page
            }
        }),
    }),
});

export const { useSearchMoviesQuery } = searchApi;
