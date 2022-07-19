import React, { useprops, useEffect } from 'react'
import styles from './Preview.module.css';

export default function Preview(props) {


    return (
        <div className={styles.containerPrev}>

            <div className={styles.contentImg}>
                <img src={props.input.image} alt="logo" />
            </div>

            <div className={styles.containerDatos}>
                <div>

                    <h2>{props.input.name}  </h2>
                </div>
                <blockquote>{props.input.description}</blockquote><br />
                <span>{props.input.released}</span><br />
                <span>{props.input.rating}</span><br />

                <p> Plataformas Elegidas</p>

                <div className={styles.platforms}>
                    {
                        props.input.platformsName ? props.input.platformsName.map(el => {
                            return (
                                <span> {el} </span>
                            )
                        }) : null
                    }
                </div>
                <p> Generos Elegidos</p>
                <div>
                    {
                        props.input.genresName ? props.input.genresName.map(el => {
                            return (
                                <span> {el} </span>
                            )
                        }) : null
                    }
                </div>

            </div>

            <button className={styles.btn} onClick={props.reset}>reset game</button>

        </div>
    )
}