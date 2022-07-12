import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres, getAllPlatforms, byAllPlatf, getAllGames } from '../../redux/actions/root-actions';
import Preview from '../Preview/Preview';
import Filter from '../Filter/Filter';
import Game from '../Game/Game';
import Button from './Button/Button';
import Formulario from './Formulario/Formulario';


export default function Created() {
    const disppatch = useDispatch()
    useEffect(() => {
        disppatch(getAllPlatforms())
        disppatch(getAllGames())
        disppatch(getAllGenres())
        disppatch(byAllPlatf())
    },[])
//     [ ] Un formulario controlado con JavaScript con los siguientes campos:

    //------------Filter----------------------
    // const dispatch = useDispatch()
    const allGenres = useSelector(state => state.allGenres);
    const allPlatforms = useSelector(state => state.allPlatforms)
    const [filterBy, setFilterby] = useState(allPlatforms) 
    const [state, setState] = useState(allGenres);

    useEffect(() => {
        setState(allGenres)
        setFilterby(allPlatforms)
    }, [allGenres, allPlatforms])

    //------------State----------------------

    const [input, setInput] = useState({
        name: 'hun',
        description: '',
        released: '',
        rating: 0,
        image: '',
        platforms: [],
        platformsName:[' hola '],
        genres: [],
        genresName: ['hola  ']
    })


    //------------------ preview ----------------------

    // const [preview, setPreview] = useState({

    // })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: [e.target.value]
        })
    }
    // console.log(state)

    const onChangefilterby = (e) => {//validar si ya esta guardado
        if (e.target.value) {
            setInput({
                ...input,
                platforms : [...input.platforms, [e.target.id]],
                platformsName : [...input.platformsName, [e.target.value]]

            })
        }
        console.log(e.target.label)
    }
    const onChangeGenres = (e) => {//validar si ya esta guardado
        if (e.target.value) {
            setInput({
                ...input,
                genres: [...input.genres, e.target.id],
                genresName : [...input.genresName, e.target.value ]
            })
        }
        // console.log()
    }

    const reset = (e) => {
        setInput({
            name: '',
            description: '',
            released: '',
            rating: 0,
            image: '',
            platforms: [],
            genres: []
        })
    }

    //------------------------Enviar info!! ---------------------------------

    const handleSubmit = (e) => {
        e.preventDefault()
        const newGame = input.map(el =>{
            return { 
                name:el.name,
                description: el.description,
                released: el.released,
                rating: el.rating,
                image:el.image,
                platforms: el.platforms,
                genres: el.genres
            }
        })
    }


    //----------------------------------- presentation ------------------------------
  return (
    <div>
        Created
        <section>
            <h2>Crea tu juego!</h2>
        </section>
{/* ------------------------------ Previsual -------------------*/}

        <div key={input.id}>
            <Preview
                id= {input.id}
                image= {input.image}
                name= {input.name}
                released= {input.released}
                description={input.description}
                rating={input.rating}
                platforms= {input.platformsName}
                genres= {input.genresName}
                reset = {reset}

            />
        </div>
        
{/* ------------------------------ Formulario -------------------*/}

        <div>
            <Formulario input={input} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>

{/* ---------------------------- selects ---pensar en poner la imagen y al click enviar el nombre al state-------------------*/}
        <div>
            <label htmlFor="name"> <h3>platforms:</h3></label>
                <Filter   filterBy={filterBy}  onChangefilterby={onChangefilterby}  />
            </div>

            <div>
            <label htmlFor="name"> <h3>Generos:</h3></label>
                <Filter   filterBy={state}  onChangefilterby={onChangeGenres}  />
            </div>

                    <br />
                    
{/* ------------------------------ images default-------------------*/}

            <div>
                <label htmlFor="released"> images default:</label>
                {/* <input 
                    type="number" 
                    name='platforms'
                    value={state.platforms}//use
                    onChange={handleChange}//use
                    /> */}
            </div>

{/* ------------------------------ Create Button -------------------*/}
            <div>
                <Button state={input} />
            </div>
    </div>
  )
}
