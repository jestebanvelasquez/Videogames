import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteGameApi, deleteGameDB } from '../../redux/actions/root-actions'
import style from './Game.module.css'
import Swal from "sweetalert2";


export default function Game(props) {
  const dispatch = useDispatch()


const deleteGame = () =>{
    console.log(props.createDB)
    if(props.createDB){
        dispatch(deleteGameDB(props.id))
        Swal.fire({ //style alert! 
                title: ` Videogame ${props.name} Delete Date Base!`,
                icon:'success',
                confirmButtonText:'Perfect!',
                background:'#5C8D89',
                confirmButtonColor: '#f5da9c'
            })
            
    }else{
        dispatch(deleteGameApi(props.id))
        Swal.fire({ //style alert! 
                title: ` Videogame ${props.name} Delete local Store!`,
                icon:'success',
                confirmButtonText:'Perfect!',
                background:'#5C8D89',
                confirmButtonColor: '#f5da9c'
            })
    }
}

  // console.log(props)
    return (
        <div className={style.cardContainer} key={props.id} >
            <div className={style.card}>
                <img className={style.cardImage} src={props.image} alt="logo" />
                <div className={style.cardInfo}>
                    <Link to={`/home/detail/${props.id}`}>
                        <h1 className={style.title}>{props.name}</h1>
                    </Link>
                        <span className={style.genres}>Generos :</span>
                    {
                        props.genres.map((el, i) =>{
                            return (
                                <span className={style.genres} key={i}> {el}</span>
                            )
                        })
                    }
                    <div>
                        <button onClick={deleteGame}> X </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
