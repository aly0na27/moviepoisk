'use Client'
import {Header} from "@/widgets/header";
import {SearchResult} from "@/features/search/components/SearchResult";
import {useState} from "react";
import {GenresT, YearsT} from "@/types/types";
import {SearchFilters} from "@/app/components/SearchFilters";
import {SearchInput} from "@/app/components/SearchInput";


export default function Home() {
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState<GenresT>('0')
    const [year, setYear] = useState<YearsT>('0')

    return (
        <main>
            <SearchFilters genre={genre} year={year} setGenre={setGenre} setYear={setYear}/>
            <SearchInput title={title} setTitle={setTitle}/>
            <SearchResult/>
        </main>
    );
}
