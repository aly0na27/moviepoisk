import { configureStore } from '@reduxjs/toolkit';
import { searchApi} from "../features/search/api/searchApi.ts";
import searchReducer from '../features/search/slices/searchSlice.ts'
import movieReducer from '../features/movie/slices/movieSlice.ts'
import authReducer from '../features/user/slices/authSlice.ts'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {movieApi} from "../features/movie/api/movieApi.ts";


export const store = configureStore({
    reducer: {
        [searchApi.reducerPath]: searchApi.reducer,
        [movieApi.reducerPath]: movieApi.reducer,
        search: searchReducer,
        movie: movieReducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(searchApi.middleware, movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector