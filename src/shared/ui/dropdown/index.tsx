import styles from "./index.module.css";
import {GenresT, GenresType, YearsT, YearsType} from "../../../types/types.ts";
import {MouseEvent, useEffect, useRef, useState} from "react";

interface DropdownPropsBaseT {
    dispatch: any;
    setItem: any;
}

interface DropdownPropsGenreT extends DropdownPropsBaseT {
    items: GenresType,
    defaultValue: GenresT,
}

interface DropdownPropsYearT extends DropdownPropsBaseT {
    items: YearsType,
    defaultValue: YearsT,
}


export const Dropdown = (props: DropdownPropsGenreT | DropdownPropsYearT) => {
    const [isActiveMenuItem, setIsActiveMenuItem] = useState(false)

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

        props.dispatch(props.setItem(e.currentTarget.getAttribute('data-key')))
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
