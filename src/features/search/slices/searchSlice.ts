import {createSlice,  PayloadAction} from '@reduxjs/toolkit';
import {GenresT,  YearsT} from "@/types/types";


type SearchState = {
    title: string
    genre: GenresT
    year: YearsT
    currPage: number
}

const initialState: SearchState = {
    title: '',
    genre: '0',
    year: '0',
    currPage: 1,
};


export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setTitle(state: SearchState, action: PayloadAction<string>) {
            state.currPage = 1
            state.title = action.payload
        },
        setGenre(state: SearchState, action: PayloadAction<GenresT>) {
            state.currPage = 1
            state.genre = action.payload
        },
        setYear(state: SearchState, action: PayloadAction<YearsT>) {
            state.currPage = 1
            state.year = action.payload
        },
        setCurrPage(state: SearchState, action: PayloadAction<number>) {
            state.currPage = action.payload
        },

    },
});

export default searchSlice.reducer;