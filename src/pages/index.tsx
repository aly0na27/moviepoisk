import {Routes, Route} from "react-router-dom";
import MovieDetails from './movie-details'
import MoviesList from "./movies-list";
import {useAppDispatch} from "../app/store.ts";
import {useEffect} from "react";
import {authSlice} from "../features/user/slices/authSlice.ts";

export const Routing = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const data = localStorage.getItem('user')
        if (data && JSON.parse(data).token) {
            dispatch(authSlice.actions.setIsAuth(true))
        }
    }, [dispatch]);
    return (

        <Routes>
            <Route path={'/'} element={<MoviesList/>}/>
            <Route path={"/movie/:id"} element={<MovieDetails/>}/>
        </Routes>
    )
}
