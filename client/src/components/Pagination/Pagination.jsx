import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Game from '../Game/Game.jsx';
import style from './Pagination.module.css'
import {ReactComponent as PageNext} from '../../assets/icons/pagenext.svg'
import {ReactComponent as PagePrev} from '../../assets/icons/pageprev.svg'





export default function Pagination({games, prevHandler, nextHandler, page, allpages  }) {
// console.log(games)
  

  return (
    <div className={style.pagination} >
      
        <div className={style.container}>
          <div className={style.title}>
            <span > Pagina Actual: {page} </span>
            <span > Total Paginas: {allpages} </span>

          </div>
          <div className={style.controller}>
            <button onClick={prevHandler} className={`${style.btn} ${style.left}` }> <PagePrev/> </button>
            <button onClick={nextHandler} className={`${style.btn} ${style.rigth}` }>  <PageNext/> </button>
          </div>
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
