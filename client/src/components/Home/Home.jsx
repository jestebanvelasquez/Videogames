import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import VideoGames from '../VideoGames/VideoGames'
import { getAllGames, getAllGenres} from '../../redux/actions/root-actions';
import Filter from '../Filter/Filter';
// import Genres from '../ByName/ByName';
import { Link } from 'react-router-dom';

export default function Home() {
      const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllGenres())
    })
    useEffect(()=>{
        dispatch(getAllGames())
    },[])
    
    
  return (
    <div>
        <h1> Home</h1>
        <br />
          <Link to='/home/created'>
            <button>Created</button>  
          </Link>
          <Filter  />
          <VideoGames  />
    </div>
  )
}
