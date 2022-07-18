import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VideoGames from '../VideoGames/VideoGames'
import { getAllGames, getAllGenres, byGenre, byFilter} from '../../redux/actions/root-actions';
import Filter from '../Filter/Filter';
import { Link } from 'react-router-dom';
import Header from './Header/Header';
import style from './Home.module.css'

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    }, []);
    useEffect(() => {
        dispatch(getAllGames());
    }, []);

    //------------Filter----------------------
    const allGenres = useSelector((state) => state.allGenres);
    const [stateGenres, setState] = useState(allGenres);
    const [title, setTitle] = useState("Un Order");

    useEffect(() => {
        setState(allGenres);
    }, [allGenres]);

    const onChangeGenres = (e) => {
        const name = e.target.value;
        dispatch(byGenre(name));
        setTitle(name);
    };

    const onChangefilterby = (e) => {
        const id = e.target.id;
        const name = e.target.value;
        setTitle(name);
        dispatch(byFilter(id));
    };

    const filterByOrder = [
        { id: "all", name: "unOrder" },
        { id: "byAZ", name: "Orden Ascendente" },
        { id: "byZA", name: "Orden Desendente" },
        { id: "byRAsc", name: "Rating Ascendente" },
        { id: "byRDes", name: "Rating Desendente" },
        { id: "byDb", name: "Origen Base de datos"},
        { id: "byapi", name: "Origen Api Games"},
    ];



    return (
        <div className={style.homeContainer}>

            <Header title={"Bienvenido  A Mi App De Video Games"} />
            
            <Link to="/home/created">
                <button className={style.btn}>Created</button>
            </Link>
            <div className={style.filter1}>
                <div className={style.title}>
                    <h1> Filtro Aplicado: {title}</h1>  
                </div>
                <Filter
                    filterBy={filterByOrder}
                    onChangefilterby={onChangefilterby}
                />
            </div>

            <div className={style.filter2}>
                <Filter
                    filterBy={stateGenres} 
                    onChangefilterby={onChangeGenres} />
            </div>

            <div className={style.games}>
                <VideoGames />
            </div>
        </div>
    );
}


