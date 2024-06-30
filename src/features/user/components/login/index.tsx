import {createPortal} from "react-dom";
import styles from './index.module.css'
import {Button} from "@/shared/ui/button";
import React, {useState} from "react";
import {useAppDispatch} from '@/store';
import {login} from "../../api/authApi";

type LoginPropsT = {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Login = ({setModalIsOpen}: LoginPropsT) => {
    const [form, setForm] = useState({username: '', password: ''})
    const [formError, setFormError] = useState({username: '', password: ''})

    const dispatch = useAppDispatch()

    const clearForm = () => {
        setForm({username: '', password: ''})
        setFormError({username: '', password: ''})
    }

    return (
        <>
            {
                createPortal(<div className={styles.blur_background} onClick={() => {
                   setModalIsOpen(false)

                }}>
                    <div className={styles.wrapper} onClick={e => {
                        e.stopPropagation()
                    }}>
                        <div className={styles.header}>
                            <h2>Авторизация</h2>
                            <div className={styles.close} onClick={() => {
                                setModalIsOpen(false)
                            }
                            }></div>

                        </div>

                        <div className={styles.inputWrapper}>
                            <label>Логин <span className={styles.formSpan}>*</span></label>
                            <input className={styles.input + ' ' + (formError.username ? styles.inputError : '')} type="text" placeholder={'Введите логин'}
                                   value={form.username}
                                   onChange={(e) => {
                                       setForm({...form, username: e.target.value})

                                   }}/>
                            {formError.username ? <div className={styles.error}>{formError.username}</div> : <></>}
                        </div>
                        <div className={styles.inputWrapper}>
                            <label>Пароль <span className={styles.formSpan}>*</span></label>
                            <input className={styles.input  + ' ' + (formError.password ? styles.inputError : '')} type="password" placeholder={'Введите пароль'}
                                   value={form.password}
                                   onChange={(e) => {
                                       setForm({...form, password: e.target.value})
                                   }}/>
                            {formError.password ? <div className={styles.error}>{formError.password}</div> : <></>}
                        </div>
                        <div className={styles.buttonWrapper}>
                            <Button text={'Войти'} isTransparent={false} onClick={e => {
                                e?.stopPropagation()
                                if (!form.username || !form.password) {
                                    setFormError({username: !form.username ? 'Заполните поле' : '', password: !form.password ? 'Заполните поле' : ''})
                                } else {
                                    dispatch(login({username: form.username, password: form.password}))
                                    clearForm()
                                }
                            }}/>
                            <Button text={'Отменить'} isTransparent={true} onClick={() => {
                                clearForm()
                                setModalIsOpen(false)
                            }}/>
                        </div>
                    </div>
                </div>, document.body)
            }
        </>
    )
}