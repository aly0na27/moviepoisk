import styles from './index.module.css'
import {Button} from "../../shared/ui/button";
import {useEffect, useRef, useState} from "react";
import {Login} from "../../features/user/components/login";
import {useAppDispatch, useAppSelector} from "../../app/store.ts";
import {logout} from "../../features/user/api/authApi.ts";

export const Header = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const ref = useRef<HTMLDivElement>(null)
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (modalIsOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    }, [modalIsOpen]);


    useEffect(() => {
        const isSticky = () => {
            const header = ref.current
            const scrollTop = window.scrollY;
            if (header) {
                if (scrollTop >= 100) {
                    setIsSticky(true)
                } else {
                    setIsSticky(false)
                }
            }
        }
        window.addEventListener('scroll', isSticky)

        return () => {
            removeEventListener('scroll', isSticky)
        }
    }, []);

    useEffect(() => {
        if (isAuth) {
            setModalIsOpen(false)
        }
    }, [isAuth])


    return (
        <header ref={ref} className={styles.header + ' ' + (isSticky ? styles.isSticky : '')}>
            <div className={styles.logo}>Фильмопоиск</div>

            {!isAuth
                ? <><Button text={'Войти'} isTransparent={false} onClick={() => {
                    setModalIsOpen(true)
                }}/>
                    {
                        modalIsOpen && (
                            <Login setModalIsOpen={setModalIsOpen}/>
                        )
                    }
                </>
                : <div className={styles.wrapperLogout}>
                    <div className={styles.profileIcon}></div>
                    <Button text={'Выйти'} isTransparent={true} onClick={() => {
                        dispatch(logout())
                    }}/>
                </div>}
        </header>
    )
}