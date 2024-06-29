import {GENRES, YEARS} from "../../../../constants/constants.ts";
import styles from './index.module.css'
import {useSelector} from "react-redux";
import {searchSlice} from "../../slices/searchSlice.ts";
import {RootState, useAppDispatch} from "../../../../app/store.ts";
import {Dropdown} from "../../../../shared/ui/dropdown";

export const SearchFilters = () => {

    const dispatch = useAppDispatch()

    const genre = useSelector((state: RootState) => state.search.genre)
    const year = useSelector((state: RootState) => state.search.year)

    const setGenre = searchSlice.actions.setGenre
    const setYear = searchSlice.actions.setYear

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Фильтр</div>
            <div className={styles.selectWrapper}>
                <label htmlFor="genre">Жанр</label>
                <Dropdown items={GENRES} defaultValue={genre} dispatch={dispatch} setItem={setGenre}/>
            </div>
            <div className={styles.selectWrapper}>
                <label htmlFor="release_year">Год выпуска</label>
                <Dropdown items={YEARS} defaultValue={year} dispatch={dispatch} setItem={setYear}/>
            </div>
        </div>
    );
}

