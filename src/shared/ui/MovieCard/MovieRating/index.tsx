// import styles from './index.module.css'
// import {useCallback, useEffect, useState} from "react";
// import {useSetRatingMutation} from "../../../../features/movie/api/movieApi.ts";
// import {debounce} from "../../../../features/movie/utils";
//
// type MovieRatingProps = {
//     movieId: string
//     isEditMode: boolean
// }
//
// export const MovieRating = ({movieId, isEditMode}: MovieRatingProps) => {
//     const [isHover, setIsHover] = useState(false)
//     const [hoverStar, setHoverStar] = useState(0)
//     const [currRating, setCurrRating] = useState(0)
//
//     const [updateRating] = useSetRatingMutation()
//
//     useEffect(() => {
//         const user_info = JSON.parse(localStorage.getItem('user') as string)
//
//         if (user_info) {
//             if (user_info.movies_rating && user_info.movies_rating[movieId]) {
//                 setCurrRating(user_info.movies_rating[movieId])
//             }
//         }
//     }, []);
//
//
//     function check(index: number, isStarFilled: boolean): string {
//         if (isHover && isEditMode) {
//             return index + 1 <= hoverStar ? styles.starFilledHover : styles.star
//         }
//         return isStarFilled ? styles.starFilled : styles.star
//     }
//
//     const debounceUpdateRating = useCallback(debounce((movieId: string, hoverStar: number) => {
//         if (isEditMode) {
//             updateRating({movieId, user_rate: hoverStar})
//             setCurrRating(hoverStar)
//             const user_info = JSON.parse(localStorage.getItem('user') as string)
//             user_info.movies_rating[movieId] = hoverStar
//             localStorage.setItem('user', JSON.stringify(user_info))
//         }
//     }, 1000), [])
//
//     function onClickHandler(movieId: string, hoverStar: number) {
//         debounceUpdateRating(movieId, hoverStar)
//     }
//
//     return (
//         <div className={styles.starWrapper} onMouseLeave={() => {
//             if (isEditMode) {
//                 setIsHover(false)
//                 setHoverStar(0)
//             }
//         }} onClick={() => onClickHandler(movieId, hoverStar)}>
//             {
//                 Array(5).fill(0).map((_, index) => {
//
//                     return (
//                         <div key={index} className={styles.starWrapperItem} onMouseEnter={() => {
//                             if (isEditMode) {
//                                 setIsHover(true)
//                                 setHoverStar(index + 1)
//                             }
//
//                         }}>
//                             <div className={check(index, Math.floor(currRating) >= index + 1)}></div>
//                             <div className={styles.number}>{index + 1}</div>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//
//     )
// }