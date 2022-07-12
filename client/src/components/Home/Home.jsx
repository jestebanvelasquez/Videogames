import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VideoGames from '../VideoGames/VideoGames'
import { getAllGames, getAllGenres, byGenre, byFilter} from '../../redux/actions/root-actions';
import Filter from '../Filter/Filter';
import { Link } from 'react-router-dom';

export default function Home() {
      const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllGenres())
    },[])
    useEffect(()=>{
        dispatch(getAllGames())
    },[])

  //------------Filter----------------------
  // const dispatch = useDispatch()
  const  allGenres = useSelector(state => state.allGenres);
  const [stateGenres, setState] = useState(allGenres);
  const [title, setTitle] = useState('Un Order')


  useEffect(()=>{
      setState(allGenres)
  },[allGenres])

  const onChangeGenres = (e) =>{
    // const id =  e.target.id
    const name =  e.target.value
    dispatch(byGenre(name))
    setTitle(name)
  }

  const onChangefilterby = (e) => {
    const id =  e.target.id
    const name =  e.target.value
    setTitle(name)
    dispatch(byFilter(id))
  }
  
  const filterByOrder = [
    
    { id: 'all', name: 'unOrder' },
    { id: 'byAZ', name: 'Orden Ascendente' },
    { id: 'byZA', name: 'Orden Desendente' },
    { id: 'byRAsc', name: 'Rating Ascendente' },
    { id: 'byRDes', name: 'Rating Desendente' },
  ]
  


    
  return (
    <div>
        <h1> Home</h1>
        <br />
          <Link to='/home/created'>
            <button>Created</button>  
          </Link>
          <div>
            <span>{title}</span>
              <Filter filterBy={filterByOrder}  onChangefilterby={onChangefilterby}   />
          </div>
          <div>
            <span>Genres:</span>
              <Filter filterBy={stateGenres}  onChangefilterby={onChangeGenres}   />  
          </div>
          <VideoGames  />
    </div>
  )
}


