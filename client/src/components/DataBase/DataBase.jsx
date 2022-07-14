import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataBase } from '../../redux/actions/root-actions';

export default function DataBase() {
  useEffect(() => {
      dispatch(getDataBase())
  },[])
  
  const dispatch = useDispatch();
  const dataBase = useSelector((state) => state.byDataBase);

    console.log(dataBase)

  return (
    <div>
    <h1>soy yo? </h1>
    {
      dataBase.map( game => {
        return (
          <h1>
            {game.name}
          </h1>
        )
      })
    }
    </div>
  )
}
