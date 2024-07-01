import {RootState} from "./store.ts";
import {createSelector} from "@reduxjs/toolkit";

const selectUser = (state: RootState) => state.auth

export const selectIsAuth = createSelector(
    [selectUser],
    (auth) => auth.isAuth
)