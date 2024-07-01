import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
    FetchBaseQueryMeta
} from '@reduxjs/toolkit/query/react';
import {GenresT, ShortMovieInfoT, YearsT} from "../../../types/types.ts";

const baseUrl = 'http://localhost:3030/api/v1/'

const baseQuery = fetchBaseQuery({baseUrl})

const baseQueryWithErrorHandling: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions)

    if (result.error) {
        console.error(result.error)
    }

    return result
}


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
    baseQuery: baseQueryWithErrorHandling,
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
