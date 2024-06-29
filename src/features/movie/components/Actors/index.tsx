import {ActorT} from "../../../../types/types.ts";
import styles from "./index.module.css";
import {useRef, useState} from "react";

export const Actors = ({actors}: { actors: ActorT[] }) => {

    const refSlider = useRef<HTMLDivElement | null>(null)
    const refSliderWrapper = useRef<HTMLDivElement | null>(null)

    const [currShift, setCurrShift] = useState(0)

    const check = () => {
        if (re)
    }
    return (
        <div ref={refSliderWrapper} className={styles.actorsWrapper}>
            <div ref={refSlider} className={styles.slider}>
                {actors.map((el) => {
                    return (
                        <div className={styles.actorWrapper}>
                            <img className={styles.actorPhoto} src={el.photo} alt={el.name}/>
                            <p>{el.name}</p>
                        </div>)
                })}
            </div>
            <div className={styles.arrowLeft} onClick={() => {
                const slider = refSlider.current

                if (slider) {
                    let a: number = 0

                    for (let i = 0; i < slider.childNodes.length; i++) {
                        const div = slider.childNodes[i] as HTMLDivElement
                        const s = refSliderWrapper.current as HTMLDivElement
                        if (div.getBoundingClientRect().right > s.getBoundingClientRect().left) {
                            a = div.getBoundingClientRect().width - (div.getBoundingClientRect().right - s.getBoundingClientRect().left)
                            if (a === 0 && i !== 0) {
                                a = div.getBoundingClientRect().width + 24
                            }
                            break
                        }
                    }

                    slider.style.right = currShift - a + 'px'
                    setCurrShift(currShift - a)
                }
            }}></div>
            <div className={styles.arrowRight} onClick={() => {

                const slider = refSlider.current

                if (slider) {
                    let a: number = 0

                    for (let i = 0; i < slider.childNodes.length; i++) {
                        const div = slider.childNodes[i] as HTMLDivElement
                        const s = refSliderWrapper.current as HTMLDivElement
                        if (div.getBoundingClientRect().right > s.getBoundingClientRect().right) {
                            a = div.getBoundingClientRect().right - s.getBoundingClientRect().right
                            break
                        }
                    }

                    slider.style.right = currShift + a + 'px'
                    setCurrShift(currShift + a)
                }

            }}></div>
        </div>
    )
}