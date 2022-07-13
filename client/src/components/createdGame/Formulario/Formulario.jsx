import React, { useEffect, useState } from 'react'
import './formhenry.css';

export default function Formulario(props) {

    const [state, setState] = useState(props)


useEffect(() =>{
    setState(props)
},[props])


  return (
    <div>Formulario

<form onSubmit={(e) => state.handleSubmit (e)}>


{/* ---------------------- inputs ---------------------- */}
    <div>
        <p htmlFor="name">name </p>
            <input
                splaceholder='name..'
                // className={props.errors.name && 'danger' }
                type="text" 
                name='name'
                value={state.input.name}
                onChange={state.handleChange}
            />
            {state.errors && state.errors.name ?  <p className='danger'> {state.errors.name} </p> : null}
    </div>

    <div>
        <p htmlFor="description"> description:</p>
        <textarea
            name='description'
            value={state.input.description}
            onChange={state.handleChange}
            />
        {state.errors && state.errors.description ?  <p className='danger'> {state.errors.description} </p> : null}
        

    </div>

    <div>
        <p htmlFor="released"> released:</p>
        <input 
            type="date" 
            name='released'
            value={state.input.released}
            onChange={state.handleChange}
            />
        {state.errors && state.errors.released ?  <p className='danger'> {state.errors.released} </p> : null}

    </div>

    <div>
        <p htmlFor="rating"> rating:</p>
        <input 
            type="string" 
            name='rating'
            value={state.input.rating}
            onChange={state.handleChange}
            />
        {state.errors && state.errors.rating ?  <p className='danger'> {state.errors.rating} </p> : null}

    </div>
</form>
    
    </div>
  )
}
