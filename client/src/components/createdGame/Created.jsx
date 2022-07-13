import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres, getAllPlatforms, byAllPlatf, getAllGames } from '../../redux/actions/root-actions';
import Preview from '../Preview/Preview';
import Filter from '../Filter/Filter';
import Button from './Button/Button';
import Formulario from './Formulario/Formulario';
import { Validate } from './Formulario/Validate';


export default function Created() {
    const disppatch = useDispatch()
    useEffect(() => {
        disppatch(getAllPlatforms())
        disppatch(getAllGames())
        disppatch(getAllGenres())
        disppatch(byAllPlatf())
    },[])


    //------------Filter----------------------
    // const dispatch = useDispatch()
    const allGenres = useSelector(state => state.allGenres);
    const allPlatforms = useSelector(state => state.allPlatforms)
    const [filterBy, setFilterby] = useState(allPlatforms) 
    const [state, setState] = useState(allGenres);

    
    //------------State----------------------
    
    const [input, setInput] = useState({
        name: '',
        description: '',
        released: '',
        rating: null,
        image: '',
        platforms: [],
        platformsName:[],
        genres: [],
        genresName: []
    })
    
    useEffect(() => {
        setState(allGenres)
        setFilterby(allPlatforms)
        setInput(input)
    }, [allGenres, allPlatforms, input])
    //------------ State Errors ----------------------

    const [errors, setErrors] = useState({
        name: 'name is required2'
    })

    //------------------------ Changes ---------------------------------

    const handleChange = (e) => {
        
        setInput({
            ...input,
            [e.target.name]: [e.target.value]
        })
        let errorsResult = Validate({
            ...state,
            [e.target.name]: [e.target.value]
        })
        setErrors(errorsResult)
    }
    // console.log(state)

    const onChangefilterby = (e) => {
        
        setInput(() => {
            let platformsId = [...input.platforms, e.target.id] 
                platformsId = [...new Set(platformsId)]

            let platformsfilterName = [...input.platformsName, e.target.value ]
                platformsfilterName = [...new Set(platformsfilterName)]
            console.log(platformsfilterName)
            return {
                    ...input,
                    platforms : [...platformsId],
                    platformsName : [...platformsfilterName]
            }
        })
    }

    const onChangeGenres = (e) => {

        setInput(() => {
            let genresId = [...input.genres, e.target.id] 
                genresId = [...new Set(genresId)]

            let genresFilterName = [...input.genresName, e.target.value]
                genresFilterName = [...new Set(genresFilterName)]
                return {
                    ...input,
                    genres: [...genresId],
                    genresName : [...genresFilterName ]
                }
        })

    }

    const reset = (e) => {
        setInput({
            name: '',
            description: '',
            released: '',
            rating: null,
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
            <Formulario input={input} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>

{/* ---------------------------- selects ---pensar en poner la imagen y al click enviar el nombre al state-------------------*/}
        <div>
            <p >platforms: </p>
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
