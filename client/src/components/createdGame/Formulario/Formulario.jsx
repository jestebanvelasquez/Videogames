import React, { useEffect, useState } from 'react'
import './formhenry.css';

export default function Formulario({handleSubmit, input, errors, handleChange, }) {

    





    return (
        <div>Formulario

            <form onSubmit={(e) => handleSubmit(e)}>


                {/* ---------------------- inputs ---------------------- */}

                {/* ---------------------------------- images entry ----------------------------------------------*/}

                <div>
                    <p>agrega la url de la imagen </p>
                    <input
                        type='text'
                        name='image'
                        value={input.image}
                        onChange={(e) => handleChange(e)}
                    />
                </div>


                <div>
                    <p htmlFor="name">name </p>
                    <input
                        splaceholder='name..'
                        // className={props.errors.name && 'danger' }
                        type="text"
                        name='name'
                        value={input.name}
                        onChange={handleChange}
                    />
                    {errors && errors.name ? <p className='danger'> {errors.name} </p> : null}
                </div>

                <div>
                    <p htmlFor="description"> description:</p>
                    <textarea
                        name='description'
                        value={input.description}
                        onChange={handleChange}
                    />
                    {errors && errors.description ? <p className='danger'> {errors.description} </p> : null}
                </div>

                <div>
                    <p htmlFor="released"> released:</p>
                    <input
                        type="date"
                        name='released'
                        value={input.released}
                        onChange={handleChange}
                    />
                    {errors && errors.released ? <p className='danger'> {errors.released} </p> : null}

                </div>

                <div>
                    <p htmlFor="rating"> rating:</p>
                    <input
                        type="string"
                        name='rating'
                        value={input.rating}
                        onChange={handleChange}
                    />
                    {errors && errors.rating ? <p className='danger'> {errors.rating} </p> : null}
                </div>

                <div>
                    <input type='submit' disabled={Object.keys(errors).length === 0 ? false : true} />
                </div>
            </form>

        </div>
    )
}
