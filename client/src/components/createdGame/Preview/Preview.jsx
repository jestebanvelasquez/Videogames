import React, { useprops, useEffect } from 'react'
// import { useDispatch, useSelector, useStore } from 'react-redux'
// import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
// import { getDetailGame } from '../../redux/actions/root-actions'

export default function Preview(props) {
    
    
  return (
    <div> 
      
        
        <img src={props.input.image} alt="logo" width='200px' height='250px' />
        <h1>{props.input.name}</h1>
        <h6>{props.input.description}</h6>
        <h3>{props.input.released}</h3>
        <h3>{props.input.rating}</h3>
        <h3>{props.input.platformsName}</h3>

        <h3>{props.input.genresName}</h3>
        <button onClick={props.reset}>reset game</button>

    </div>
  )
}
