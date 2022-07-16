import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Game from '../Game/Game.jsx';
import style from './Pagination.module.css'




export default function Pagination({games, prevHandler, nextHandler, page, allpages  }) {
// console.log(games)
  

  return (
    <div >
      Pagination
        <div>
          <button onClick={prevHandler}> Previous Page </button>
          <span> Actual Page {page} </span>
          <span> Alls Pages {allpages} </span>
          <button onClick={nextHandler}> Next Page </button>
        </div>

        <div className={style.gameContainer} key={games.id}>
          {
          games ? games.map(game => {

            
            return (
              <div className={style.game} key={game.id}>
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
