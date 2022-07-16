import React,{ useEffect, useState} from 'react';
import {  useSelector} from 'react-redux';
import Pagination from '../Pagination/Pagination';

export default function VideoGames() {
    const gamesxPage = 15;
    const allGames = useSelector(state => state.allGames);
    const [state, setState] = useState(allGames);
    const [games, setGames] = useState([...state].splice(0, gamesxPage));
    const [page, setPage] = useState(0);
    
    useEffect(()=>{
        setState(allGames)
        setGames([...state].splice(0, gamesxPage))
        setPage(0)
    },[allGames, state,])

    //Paginacion:

    const allpages = Math.round(state.length  / 15)
    const nextHandler = () =>{
        const vGames = Math.round(state.length / 15)
        const nextPage = page + 1;
        const index = nextPage * gamesxPage;
        if(page === vGames -1  ) return;
        setGames([...state].splice(index, gamesxPage))
        setPage(nextPage);
    }

    const prevHandler = () =>{
        const prevPage = page -1;
        if( prevPage < 0) return;
        const index = prevPage * gamesxPage;
        setGames([...state].splice(index, gamesxPage))
        setPage(prevPage)
    }



    return <Pagination games={games} prevHandler={prevHandler} nextHandler={nextHandler} page={page+1} allpages={allpages}  />
}
