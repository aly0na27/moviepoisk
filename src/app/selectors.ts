import {RootState} from "./store.ts";
import {createSelector} from "@reduxjs/toolkit";

const selectUser = (state: RootState) => state.auth

const selectSearch = (state: RootState) => state.search


export const selectIsAuth = createSelector(
    [selectUser],
    (auth) => auth.isAuth
)

export const selectGenre = createSelector(
    [selectSearch],
    (search) => search.genre
)
export const selectTitle = createSelector(
    [selectSearch],
    (search) => search.title
)
export const selectYear = createSelector(
    [selectSearch],
    (search) => search.year
)

export const selectPage = createSelector(
    [selectSearch],
    (search) => search.currPage
)
