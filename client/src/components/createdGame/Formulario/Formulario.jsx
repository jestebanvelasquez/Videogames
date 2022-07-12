import React from 'react'

export default function Formulario(props) {
  return (
    <div>Formulario

<form onSubmit={(e) => props.handleSubmit (e)}>


{/* ---------------------- inputs ---------------------- */}
    <div>
        <label htmlFor="name"> name:</label>
        <input 
            type="text" 
            name='name'
            value={props.input.name}
            onChange={props.handleChange}
            />
    </div>

    <div>
        <label htmlFor="name"> description:</label>
        <textarea
            name='description'
            value={props.input.description}
            onChange={props.handleChange}
            />
    </div>

    <div>
        <label htmlFor="released"> released:</label>
        <input 
            type="date" 
            name='released'
            value={props.input.released}
            onChange={props.handleChange}
            />
    </div>

    <div>
        <label htmlFor="released"> rating:</label>
        <input 
            type="number" 
            name='rating'
            value={props.input.rating}
            onChange={props.handleChange}
            />
    </div>
</form>
    
    </div>
  )
}
