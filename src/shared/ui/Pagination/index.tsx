import styles from './index.module.css'

type PaginationPropsT = {
    pageNumber: number
    totalPages: number
    onRightArrowClickHandler: (page: number) => void
    onLeftArrowClickHandler: (page: number) => void
}

export const Pagination = (props: PaginationPropsT) => {

    return (
        <div className={styles.wrapper}>
            {
                props.pageNumber > 1
                    ? <div className={styles.arrowLeft} onClick={() => props.onLeftArrowClickHandler(props.pageNumber)}></div>
                    : <div className={styles.arrowLeftDisabled}></div>
            }
            <div className={styles.pageNumber}>{props.pageNumber}</div>
            {
                props.pageNumber < props.totalPages
                    ? <div className={styles.arrowRight} onClick={() => props.onRightArrowClickHandler(props.pageNumber)}></div>
                    : <div className={styles.arrowRightDisabled}></div>
            }
        </div>
    )
}