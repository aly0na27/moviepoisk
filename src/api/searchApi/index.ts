import {FullMovieInfoT, GenresT, ShortMovieInfoT, YearsT} from "@/types/types";

const baseURL = 'http://localhost:3030/api/v1/'

type SearchApiT = {
    // genre: GenresT
    // year: YearsT
    title: string
    release_year: YearsT
    genre: GenresT
}
export const searchApi =  async ({title, release_year, genre}: SearchApiT) => {
    try {
        const query_genre = genre !== '0' ? genre : ''
        const query_year = release_year !== '0' ? release_year : ''
        // const query_page = `page=${page}`

        console.log(title)
        const response = await fetch(`${baseURL}search?` + new URLSearchParams({title, release_year: query_year, genre: query_genre }));
        const data: {search_result: ShortMovieInfoT[], total_pages: number} = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
}