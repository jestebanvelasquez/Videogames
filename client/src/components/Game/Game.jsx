import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Game(props) {

    // console.log(props)
  return (
    <div key={props.id} >
        <img src={props.image} alt="logo" width='200px' height='250px' />
        <Link to= {`/home/detail/${props.id}`}>
          <h1>{props.name}</h1>
        </Link>
        <h3>{props.genres}</h3>
        {/* <h3>{props.platforms}</h3> */}

        <button onClick={props.reset}>reset game</button>


    </div> 
  )
}
