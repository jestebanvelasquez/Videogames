import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../Pagination/Pagination'

export default function ByName() {

    const gamesxPage = 15;
    const byName = useSelector(state => state.byName)
    const [state, setState] = useState(byName)
    const [games, setGames] = useState([...state].splice(0, gamesxPage));

    useEffect(()=>{
        setState(byName)
        setGames([...state].splice(0, gamesxPage))
    },[state,byName])
    
    //Paginacion:

    const [page, setPage] = useState(0);
    const allpages = Math.ceil(state.length  / 15)
    const nextHandler = () =>{
        const vGames = Math.ceil(state.length / 15)
        const nextPage = page + 1;
        const index = nextPage * gamesxPage;
        // console.log(allpages)
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

  return (
    <div>   
        <h1>By Name</h1>

        <Pagination games={games} prevHandler={prevHandler} nextHandler={nextHandler} page={page+1} allpages={allpages} />
    </div>
  )
}
