import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserInfoT} from "../../../types/types.ts";

const loginQuery = async function(username: string, password: string) {
    const response = await fetch('http://localhost:3030/api/v1/login', {body: JSON.stringify({username, password}), method: 'POST', headers: {'Content-Type': 'application/json'}})
    const data = await response.json()
    return data
}

export const login = createAsyncThunk('authApi/login', async ({username, password}: UserInfoT, thunkApi) => {
    try {
        const data = await loginQuery(username, password)

        if ('token' in data) {
            return localStorage.setItem('user', JSON.stringify({token: data.token, movies_rating: {}}))
        }

        while ('error' in data) {
            const data = await loginQuery(username, password)
            if ('token' in data) {
                return localStorage.setItem('user', JSON.stringify({token: data.token, movies_rating: {}}))
            }
        }
    } catch (err) {
        return thunkApi.rejectWithValue({error: err.message})
    }
})

export const logout = createAsyncThunk('authApi/logout', async () => {
    return localStorage.removeItem('user')
})

