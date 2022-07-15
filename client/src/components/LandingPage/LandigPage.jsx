import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getAllGames, getAllGenres } from '../../redux/actions/root-actions';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css'
import buttonStyle from '../Mixis/Buttons.module.css'
export default function LandingPage() {
    const history = useHistory()
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllGames())
        dispatch(getAllGenres())
    },[])

    return (
        <div className={styles.landing} >
            <div  >
                <h1> VideoGames Henry</h1>
            </div>

            <div >
                <Link to='/home'>
                    <h4 className={buttonStyle.btn}> entrar </h4>
                </Link>
            </div>
            
        </div>
    )
}
