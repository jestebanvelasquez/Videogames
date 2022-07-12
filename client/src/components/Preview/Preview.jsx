import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getDetailGame } from '../../redux/actions/root-actions'

export default function Detail(props) {
    
    
    
  return (
    <div> 
        Detail
        

        <h1>{props.name}</h1>
        <img src={props.image} alt="logo" width='200px' height='250px' />
        <h6>{props.description}</h6>
        <h3>{props.released}</h3>
        <h3>{props.rating}</h3>
        {props.platforms.map(el =>  {
            return( 
                <ul>
                    <li>
                        {el}
                    </li>
                </ul>
                )
        })}
        <h3>{props.genres}</h3>
        <button onClick={props.reset}>reset game</button>

    </div>
  )
}
