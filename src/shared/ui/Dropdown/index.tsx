import styles from "./index.module.css";
import {GenresT, GenresType, YearsT, YearsType} from "@/types/types";
import {Dispatch, MouseEvent, SetStateAction, useEffect, useRef, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

interface DropdownPropsGenreT {
    items: GenresType,
    defaultValue: GenresT,
    setItem: (...args: any[]) => void
}

interface DropdownPropsYearT {
    items: YearsType,
    defaultValue: YearsT,
    setItem: (...args: any[]) => void
}


export const Dropdown = (props: DropdownPropsGenreT | DropdownPropsYearT) => {
    const [isActiveMenuItem, setIsActiveMenuItem] = useState(false)
    const router = useRouter()
    const searchParams = useSearchParams()

    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event: globalThis.MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsActiveMenuItem(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const onClickHandler = (e: MouseEvent<HTMLDivElement>) => {

        props.setItem(e.currentTarget.getAttribute('data-key'))
        setIsActiveMenuItem(false)
    }

    return (
        <div ref={wrapperRef} className={styles.dropdown}>
            <div className={styles.closeButton + ' ' + (isActiveMenuItem ? styles.closeButtonActive : '')}
                 onClick={() => {

                     setIsActiveMenuItem(!isActiveMenuItem)
                 }}></div>
            <input className={styles.input + ' ' + (isActiveMenuItem ? styles.inputActive : '')}
                   value={props.items[props.defaultValue]} placeholder={"Выберите жанр"} disabled={true}
                   onClick={() => {
                       if (!isActiveMenuItem) {
                           setIsActiveMenuItem(true)
                       }
                   }}
            />
            {
                isActiveMenuItem &&
                <div className={styles.dropdownMenu}>
                    {
                        Object.entries(props.items).map(([key, value]) => {
                            return <div onClick={onClickHandler} className={styles.dropdownMenuItem} key={key}
                                        data-key={key}>{value}</div>
                        })
                    }
                </div>
            }
        </div>
    )
}