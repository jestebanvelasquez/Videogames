import React from 'react'

export default function Game(props) {
    // console.log(props)
  return (
    <div >
        <h1>{props.name}</h1>
        <img src={props.image} alt="logo" width='200px' height='250px' />
    </div> 
  )
}
