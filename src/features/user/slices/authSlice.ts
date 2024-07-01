import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserInfoT} from "../../../types/types.ts";
import {login, logout} from "../api/authApi.ts";

type UserState = {
    username: string
    password: string
    isAuth: boolean
    isLoad: boolean
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: UserState = {
    username: '',
    password: '',
    isAuth: false,
    isLoad: false,
    status: 'idle',
    error: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserInfo(state: UserState, action: PayloadAction<UserInfoT>) {
            state.username = action.payload.username
            state.password = action.payload.password
        },
        setIsAuth(state: UserState, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.status = 'loading'
        }).addCase(login.fulfilled, (state) => {
            state.status = 'succeeded'
            state.isAuth = true
        }).addCase(login.rejected, (state) => {
            state.status = 'failed'
            state.error = 'Login failed'
        }).addCase(logout.fulfilled, (state) => {
            state.isAuth = false
        })
    }
});


export default authSlice.reducer;