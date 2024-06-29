import {GENRES, YEARS} from "../constants/constants.ts";


export type FullMovieInfoT = {
    id: string;
    title: string;
    description: string;
    release_year: number;
    poster: string; //base64 img
    genre: string;
    rating: string; //float
    total_rates_count: string; //int
    actors: ActorT[];
}

export type ShortMovieInfoT = Omit<FullMovieInfoT, "actors" | "total_rates_count">;

export type ActorT = {
    name: string;
    photo: string;
}

export type GenresT = keyof typeof GENRES;
export type YearsT = keyof typeof YEARS;

export type GenresType = typeof GENRES;
export type YearsType = typeof YEARS;

export type UserInfoT = {
    username: string
    password: string
}

