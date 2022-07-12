import React, { useState } from 'react'

export default function Game(props) {

    // console.log(props)
  return (
    <div key={props.id} >
        <h1>{props.name}</h1>
        <img src={props.image} alt="logo" width='200px' height='250px' />
        <h6>{props.description}</h6>
        <h3>{props.platforms}</h3>
        <h3>{props.genres}</h3>
        {/* <button onClick={props.reset}>reset game</button> */}


    </div> 
  )
}
