'use client'

// import {useState} from "react";
import {GenresT, YearsT} from "@/types/types";
import {SearchFilters} from "@/components/SearchFilters";
import {SearchInput} from "@/components/SearchInput";
import ServerComponent from "@/components/SearchResult";
import {useSearchParams} from "next/navigation";


export default function Home() {
    const searchParams = useSearchParams()
    const title = searchParams.get('title') ? searchParams.get('title') as string : ''
    const genre = searchParams.get('genre') ? searchParams.get('genre') as GenresT : '0'
    const year = searchParams.get('release_year') ? searchParams.get('release_year') as YearsT : '0'

    return (
        <main>
            {/*<SearchFilters/>*/}
            <SearchInput/>
            {/*<SearchResult/>*/}
            <ServerComponent title={title} genre={genre} year={year}/>
        </main>
    );
}
