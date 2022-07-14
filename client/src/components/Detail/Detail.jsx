import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getDetailGame } from '../../redux/actions/root-actions'

export default function Detail() {
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.byId)
    const params = useParams()

    useEffect(() => {
        dispatch(getDetailGame(params.id))
    }, [])

    // useEffect(() =>{
    
    //     return () => {
        
    //     }
    // },[])
    return (
        <div>
            <h1>Detail : Header!!</h1>

            <img src={detail.image} alt="logo" width='200px' height='250px' />
            <h1>{detail.name}</h1>
            <h6>{detail.description}</h6>
            <h3>{detail.released}</h3>
            <h3>{detail.rating}</h3>
            <h3>{detail.platforms}</h3>
            <h3>{detail.genres}</h3>

        </div>
    )
}
