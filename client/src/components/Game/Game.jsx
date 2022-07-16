import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteGameApi, deleteGameDB } from '../../redux/actions/root-actions'
import style from './Game.module.css'

export default function Game(props) {
  const dispatch = useDispatch()


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
                        props.genres.map(el =>{
                            return (
                                <span className={style.genres}> {el}</span>
                            )
                        })
                    }
                    <div>
                        <button onClick={() => dispatch(deleteGameApi(props.id))}> X </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
