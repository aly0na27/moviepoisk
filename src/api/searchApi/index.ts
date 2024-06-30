import {GenresT, YearsT} from "@/types/types";

const baseURL = 'http://localhost:3030/api/v1/'

export const searchApi =  async ({genre, year}: {genre: GenresT, year: YearsT}) => {
    try {
        // const query_title = `${title ? 'title=' + title + '&' : ''}`
        const query_genre = `${genre !== '0' ? 'genre=' + genre + '&' : ''}`
        const query_year = `${year !== '0' ? 'release_year=' + year + '&' : ''}`
        // const query_page = `page=${page}`


        // return `search?`  query_genre + query_year + query_page
        const response = await fetch(`${baseURL}/search` + new URLSearchParams({genre: genre, year: year}));
        // return response.data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
}