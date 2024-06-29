import {GENRES, YEARS} from "../../../../constants/constants.ts";
import styles from './index.module.css'
import {useSelector} from "react-redux";
import {searchSlice} from "../../slices/searchSlice.ts";
import {RootState, useAppDispatch} from "../../../../app/store.ts";
import { Select} from "antd";
import {GenresT, YearsT} from "../../../../types/types.ts";

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
                    <Select className={styles.select} value={genre} removeIcon={true}
                            onChange={(e: GenresT) => {
                                dispatch(setGenre(e))
                            }}>
                        {
                            Object.entries(GENRES).map(([key, value]) => {
                                return <Select.Option key={key} value={key}>{value}</Select.Option>
                            })
                        }
                    </Select>
                </div>
                <div className={styles.selectWrapper}>
                    <label htmlFor="release_year">Год выпуска</label>
                    <Select className={styles.select} value={year}
                            onChange={(e: YearsT) => {
                                dispatch(setYear(e))
                            }}>
                        {
                            Object.entries(YEARS).map(([key, value]) => {
                                return <Select.Option key={key} value={key}>{value}</Select.Option>
                            })}
                    </Select>
                </div>
            </div>
    );
}

