import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataBase } from '../../redux/actions/root-actions';
import Game from '../Game/Game';

export default function DataBase() {
  const dispatch = useDispatch();
  const dataBase = useSelector((state) => state.byDataBase);

  useEffect(() => {
      dispatch(getDataBase())
  },[])
  

    console.log(dataBase)

  return (
    <div>
    <h1>soy yo? </h1>
    {
      dataBase.map( game => {
        return (
          <div key={game.id}>
            <Game
              id={game.id}
              image={game.image}
              name={game.name}
              genres={game.genres }
              platforms= {game.platforms}
            />

          </div>
        )
      })
    }
    </div>
  )
}
