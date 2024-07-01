import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FullMovieInfoT} from "../../../types/types.ts";
import {movieApi} from "../api/movieApi.ts";

type StateType = {
    id: string | null
    data: FullMovieInfoT
}

const initialState: StateType = {
    id: null,
    data: {
        id: '',
        title: '',
        description: '',
        release_year: 0,
        poster: '',
        genre: '',
        rating: '',
        total_rates_count: '',
        actors: []
    }
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState: initialState,
    reducers: {
        setId(state: StateType, action: PayloadAction<string | null>) {
            state.id = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(movieApi.endpoints.getMovieByIdQuery.matchFulfilled, (state, action) => {
            state.id = action.payload.id
            state.data = action.payload

        }).addMatcher(movieApi.endpoints.setRating.matchFulfilled, (state, action) => {
            state.data.rating = action.payload.newAverageRate
            state.data.total_rates_count = action.payload.newTotalRatesCount.toString()

        })
    }
})

export default movieSlice.reducer