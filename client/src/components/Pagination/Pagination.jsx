import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Game from '../Game/Game.jsx';




export default function Pagination({games, prevHandler, nextHandler, page, allpages  }) {


  return (
    <div>
      Pagination
        <div>
          <button onClick={prevHandler}> Previous Page </button>
          <span> Actual Page {page} </span>
          <span> Alls Pages {allpages} </span>
          <button onClick={nextHandler}> Next Page </button>
        </div>

        <div>
          {
            games ? games.map( game =>{
            return (
              <Game 
              id= {game.id}
              image= {game.image}
              name= {game.name}
              genres= {game.genres}
            />)
          }) : 'no hay datos'
          }
        </div>
    </div>
  )
}
