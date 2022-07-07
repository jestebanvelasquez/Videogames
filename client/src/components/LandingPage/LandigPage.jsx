import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getAllGames, getAllGenres } from '../../redux/actions/root-actions';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    const history = useHistory()
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllGames())
        dispatch(getAllGenres())
    },[])

    // function onChange (){
    //     history.push('/home')
    // }

    return (
        <div>
            <h1>LandigPage</h1>
            <Link to='/home'>

                <h4> entrar </h4>
            </Link>
        </div>
    )
}
