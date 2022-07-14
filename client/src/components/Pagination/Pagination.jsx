import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Game from '../Game/Game.jsx';




export default function Pagination({games, prevHandler, nextHandler, page, allpages  }) {
// console.log(games)
  

  return (
    <div>
      Pagination
        <div>
          <button onClick={prevHandler}> Previous Page </button>
          <span> Actual Page {page} </span>
          <span> Alls Pages {allpages} </span>
          <button onClick={nextHandler}> Next Page </button>
        </div>

        <div key={games.id}>
          {
          games ? games.map(game => {

            
            return (
              <div key={game.id}>
                <Game
                  id={game.id}
                  image={game.image}
                  name={game.name}
                  genres={game.genres ? game.genres.map(el => el) : null}
                  platforms= {game.platforms ? game.platforms.map(el => el ) : null}
                />

              </div>
          )}) : 'no hay datos'
          }
        </div>
    </div>
  )
}
