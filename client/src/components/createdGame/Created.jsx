import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres, getAllPlatforms } from '../../redux/actions/root-actions';

export default function Created() {
    const disppatch = useDispatch()
    useEffect(() => {
        disppatch(getAllPlatforms())
        disppatch(getAllGenres())
    },[])
//     [ ] Un formulario controlado con JavaScript con los siguientes campos:
// Nombre
// Descripción
// Fecha de lanzamiento
// Rating
// [ ] Posibilidad de seleccionar/agregar varios géneros
// [ ] Posibilidad de seleccionar/agregar varias plataformas
// [ ] Botón/Opción para crear un nuevo videojuego

const allGenres = useSelector(state => state.allGenres);
const allPlatforms = useSelector(state => state.allPlatforms);


    const [state, setState] = useState({
        name: '',
        description:'',
        released:'',
        rating: 0,
        image: '',
        platforms: [],
        genres: []
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : [e.target.value]
        })
    }
    console.log(state)

    const handleSubmit = (e) => {

    }
  return (
    <div>
        Created
        <section>
            <h2>Crea tu juego!</h2>
        </section>
        <form onSubmit={() => handleSubmit ()}>
            <div>
                <label htmlFor="name"> name:</label>
                <input 
                    type="text" 
                    name='name'
                    value={state.name}
                    onChange={handleChange}
                    />
            </div>

            <div>
                <label htmlFor="name"> description:</label>
                <textarea
                    name='description'
                    value={state.description}
                    onChange={handleChange}
                    />
            </div>

            <div>
                <label htmlFor="released"> released:</label>
                <input 
                    type="date" 
                    name='released'
                    value={state.released}
                    onChange={handleChange}
                    />
            </div>

            <div>
                <label htmlFor="released"> rating:</label>
                <input 
                    type="number" 
                    name='rating'
                    value={state.rating}
                    onChange={handleChange}
                    />
            </div>

            <div>
                <label htmlFor="released"> platforms:</label>
                {/* <input 
                    type="number" 
                    name='platforms'
                    value={state.platforms}
                    onChange={handleChange}//use
                    /> */}
            </div>
                    <br />
            <div>
                <label htmlFor="released"> genres:</label>
                {/* <input 
                    type="number" 
                    name='platforms'
                    value={state.platforms}
                    onChange={handleChange}//use
                    /> */}
            </div>
                    <br />
            <div>
                <label htmlFor="released"> images default:</label>
                {/* <input 
                    type="number" 
                    name='platforms'
                    value={state.platforms}//use
                    onChange={handleChange}//use
                    /> */}
            </div>
        </form>
    </div>
  )
}
