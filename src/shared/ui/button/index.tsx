import styles from './index.module.css'

type ButtonPropsT = {
    text: string
    isTransparent: boolean
    onClick: (e: React.MouseEvent<HTMLButtonElement> | null) => void
}

export const Button = ({text, isTransparent, onClick}: ButtonPropsT) => {
    return (
        <button className={styles.btn + ' ' + (isTransparent ? styles.btnTransparent : '')} onClick={onClick}>
            {text}
        </button>
    )
}