import React, { useEffect, useState } from 'react'
import styles from './formhenry.module.css';

export default function Formulario({handleSubmit, input, errors, handleChange, }) {

    





    return (
        <div className={styles.form} >

            <form onSubmit={(e) => handleSubmit(e)} className={styles.formContainer}>


                {/* ---------------------- inputs ---------------------- */}

                {/* ---------------------------------- images entry ----------------------------------------------*/}

                <div>
                    <p>Agrega La Url De La Imagen</p>
                    <input
                        className={styles.contentInput}
                        placeholder='inserta la url de la imagen....'
                        type='text'
                        name='image'
                        value={input.image}
                        onChange={(e) => handleChange(e)}
                    />
                </div>


                <div>
                    <p htmlFor="name">Nonmbre del Juego </p>
                    <input
                        className={styles.contentInput}
                        placeholder=' escribe el nombre del juego...'
                        type="text"
                        name='name'
                        value={input.name}
                        onChange={handleChange}
                    />
                    {errors && errors.name ? <span className={styles.danger}> {errors.name} </span> : null}
                </div>

                <div>
                    <p htmlFor="description"> Descripción:</p>
                    <textarea
                        placeholder=' su descripción  ....'
                        className={styles.contentArea}
                        name='description'
                        value={input.description}
                        onChange={handleChange}
                    />
                    {errors && errors.description ? <span className={styles.danger}> {errors.description} </span> : null}
                </div>

                <div>
                    <p htmlFor="released"> Fecha de Creacion:</p>
                    <input
                        className={styles.contentInput}
                        type="date"
                        name='released'
                        value={input.released}
                        onChange={handleChange}
                    />
                    {errors && errors.released ? <span className={styles.danger}> {errors.released} </span> : null}

                </div>

                <div>
                    <p htmlFor="rating"> Puntuacion (de 0 a 5):</p>
                    <input
                        className={styles.contentInput}
                        type="string"
                        name='rating'
                        value={input.rating}
                        onChange={handleChange}
                    />
                    {errors && errors.rating ? <span className={styles.danger}> {errors.rating} </span> : null}
                </div>

                <div>
                    <input 
                        type='submit' 
                        disabled={Object.keys(errors).length === 0 ? false : true} />
                </div>
            </form>

        </div>
    )
}
