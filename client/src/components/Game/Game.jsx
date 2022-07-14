import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteGameApi, deleteGameDB } from '../../redux/actions/root-actions'

export default function Game(props) {
    const dispatch = useDispatch() 

  
    // console.log(props)
  return (
    <div key={props.id} >
        <button onClick={() => dispatch(deleteGameApi(props.id))}> X </button>
        <img src={props.image} alt="logo" width='200px' height='250px' />
        <Link to= {`/home/detail/${props.id}`}>
          <h1>{props.name}</h1>
        </Link>
        <h3>{props.genres}</h3>
      



    </div> 
  )
}
