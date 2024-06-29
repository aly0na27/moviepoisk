import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type MovieState = {
    id: number | null

}

const initialState: MovieState = {
    id: null
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState: initialState,
    reducers: {
        setId(state: MovieState, action: PayloadAction<number>) {
            state.id = action.payload
        }
    }
})

export default movieSlice.reducer