import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getAllGenres, getAllPlatforms, byAllPlatf, getAllGames } from '../../redux/actions/root-actions';
import Preview from './Preview/Preview.jsx';
import Filter from '../Filter/Filter';
import Formulario from './Formulario/Formulario';
import { Validate } from './Formulario/Validate';
import ImagesDefault from './ImagesDefault/ImagesDefault';
import img from '../../assets/image1.png'
import { useHistory } from 'react-router-dom';
import styles from './Create.module.css'
import keanu from '../../assets/headers/keanu.jpg'
import Swal from "sweetalert2";

export default function Created() {

    const history = useHistory();

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
        name:'',
        description:'',
        released:'',
        rating: 0,
        image: `${img}`,
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

//-------------------------------------------- State Errors -----------------------------//

    const [errors, setErrors] = useState({
        name: 'name is required2'
    })

//-------------------------------------------- Changes ---------------------------------//

    const handleChange = (e) => {
        console.log(e.target.value)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        let errorsResult = Validate({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(errorsResult)
    }
    const handleRange = (e) => {
        setInput({
            ...input,
            rating : e.target.value
        })
        let errorsResult = Validate({
            ...input,
            rating: e.target.value
        })
        setErrors(errorsResult)
    }


    const onChangefilterby = (e) => {
        
        setInput(() => {
            let platformsId = [...input.platforms, e.target.id] 
                platformsId = [...new Set(platformsId)]
            let platformsfilterName = [...input.platformsName, e.target.value ]
                platformsfilterName = [...new Set(platformsfilterName)]
            return {
                    ...input,
                    platforms : [...platformsId],
                    platformsName : [...platformsfilterName]
            }
        })
        let errorsResult = Validate({
            ...input,
            platforms: e.target.value
        })
        setErrors(errorsResult)



    }


    const onChangeGenres = (e) => {
        setInput(() => {
            let genresId = [...input.genres, e.target.id] 
                genresId = [...new Set(genresId)]
                console.log([...input.genresName])
            let genresFilterName = [...input.genresName, e.target.value]
                genresFilterName = [...new Set(genresFilterName)]
                return {
                    ...input,
                    genres: [...genresId],
                    genresName : [...genresFilterName ]
                }
        })
        let errorsResult = Validate({
            ...input,
            genres: e.target.value
        })
        setErrors(errorsResult)


    }
    ////////////////////////////////// resets: --/////////////////////////////////////////////////////////////

    const resetGenres = () => {
        setInput({
            ...input,
            genres: [],
            genresName:[]
        })
    }

    const resetPlatforms = () => {
        setInput({
            ...input,
            platforms: [],
            platformsName:[],
        })
    }


    const reset = () => {
        setInput({
            name: '',
            description: '',
            released: '',
            rating: 0,
            image: `${img}`,
            platforms: [],
            platformsName:[],
            genres: [],
            genresName:[]
        })
    }

//------------------------------  Enviar info!!  -----------------------------------------------------------

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {...input}
        try {
            await axios({
                url: 'http://localhost:3002/videogames',
                method: 'POST',
                data
            })
            Swal.fire('creado correctamente')
            reset()
            history.push('/home/database')
        } catch (error) {
            Swal.fire(' no se pudo crear')

        }
        
    }
    

    
    return (
// {/*/////////////////////////////////----------- presentation -----------///////////////////////////////////////////////*/}

        <div>
            <div className={styles.title}>
                <h1> crea tu videogame </h1>
            </div>
                <section className={styles.firstImage} >
                    <img src={keanu} alt=" logo" />
                </section>

{/*/////////////////////////////////----------- Previsual -----------///////////////////////////////////////////////*/}

            <div className={styles.containerCreate}>
                <div className={styles.preview}>
                    <div className={styles.filters}>
                        <div key={input.id}>
                            <Preview
                                id={input.id}
                                input={input}
                                resetGenres={resetGenres}
                                resetPlatforms={resetPlatforms}
                                reset={reset}
                            />
                        </div>
                    </div>
                </div>

{/*/////////////////////////////////----------- images default -----------///////////////////////////////////////////////*/}
                <div className={styles.contentForm}>

                    <div className={styles.contentImages}>
                        <p className={styles.imagestitle} htmlFor="released"> images default:</p>
                        <ImagesDefault handleChange={handleChange} />
                    </div>

{/*/////////////////////////////////----------- Formulario -----------///////////////////////////////////////////////*/}

                    <div>
                        <Formulario input={input} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit} handleRange={handleRange} />
                    </div>
                </div>
            </div>
{/*/////////////////////////////////----------- selects -----------///////////////////////////////////////////////*/}

            <div className={styles.filters}>
                <div className={styles.filterstitle}>
                    <Filter
                        filterBy={filterBy}
                        onChangefilterby={onChangefilterby}
                    />
                    {errors && errors.platforms ? <span className={styles.danger}> {errors.platforms} </span> : null}
                    <label htmlFor="name"> <h3> Agrega Las Plataformas:</h3></label>

                </div>
                <div className={styles.filterstitle}>
                    <Filter
                        filterBy={state}
                        onChangefilterby={onChangeGenres}
                    />

                    {errors && errors.genres ? <span className={styles.danger}> {errors.genres} </span> : null}
                    <label htmlFor="name"> <h3> Agrega Los Generos:</h3></label>
                </div>

            </div>

        </div>
    )
}