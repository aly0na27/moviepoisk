import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {FullMovieInfoT} from "../../../types/types.ts";

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3030/api/v1/'}),
    tagTypes: ['Movie'],
    endpoints: (builder) => ({
        getMovieByIdQuery: builder.query<FullMovieInfoT, number>({
            query: (id) => {
                return `movie/${id}`
            }, providesTags: [{type: 'Movie', id: 'ALL'}]
        }),
        setRating: builder.mutation<{ movieId: string, newAverageRate: string, newTotalRatesCount: number }, {
            movieId: string,
            user_rate: number
        }>({
            query({movieId, user_rate}) {

                return {
                    url: `rateMovie`,
                    method: 'POST',
                    body: JSON.stringify({movieId, user_rate}),
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user') as string).token}`
                    }
                }
            }, invalidatesTags: [{type: 'Movie', id: 'ALL'}]
        })
    }),
})

export const {useGetMovieByIdQueryQuery, useSetRatingMutation} = movieApi