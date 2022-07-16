import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VideoGames from '../VideoGames/VideoGames'
import { getAllGames, getAllGenres, byGenre, byFilter} from '../../redux/actions/root-actions';
import Filter from '../Filter/Filter';
import { Link } from 'react-router-dom';
import Header from './Header/Header';
import H1 from '../../assets/all/H1.svg'
import style from './Home.module.css'
import Modal from './Modal';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    }, []);
    useEffect(() => {
        dispatch(getAllGames());
    }, []);

    //------------Filter----------------------
    // const dispatch = useDispatch()
    const allGenres = useSelector((state) => state.allGenres);
    const [stateGenres, setState] = useState(allGenres);
    const [title, setTitle] = useState("Un Order");
    const [isopen, setOpen] = useState(false)

    useEffect(() => {
        setState(allGenres);
    }, [allGenres]);

    const onChangeGenres = (e) => {
        // console.log(e)
        const id =  e.target.id
        const name = e.target.value;
        dispatch(byGenre(name));
        setTitle(name);
    };

    const onChangefilterby = (e) => {
        // console.log(e)
        const id = e.target.id;
        const name = e.target.value;
        setTitle(name);
        dispatch(byFilter(id));
    };

    const openmodal = () => {
        setOpen(true)
    }

    const closemodal = () => {
        setOpen(false)
    }



    const filterByOrder = [
        { id: "all", name: "unOrder" },
        { id: "byAZ", name: "Orden Ascendente" },
        { id: "byZA", name: "Orden Desendente" },
        { id: "byRAsc", name: "Rating Ascendente" },
        { id: "byRDes", name: "Rating Desendente" },
    ];

    return (
        <div className={style.homeContainer}>
            {/* <div className={style.homeHeader}> */}
            <Header image={H1} title={"Bienvenido  A Mi App De Video Games"} />
            {/* </div> */}
            <br />
            <Link to="/home/created">
                <button>Created</button>
            </Link>
            <div>
                <button onClick={openmodal}>
                     Open Filters
                </button>
            </div>
            


            <div className={style.filter1}>
                <h1>{title}</h1>
                <Filter
                    state={isopen}
                    close={closemodal}
                    filterBy={filterByOrder}
                    onChangefilterby={onChangefilterby}
                />
            </div>
            <div className={style.filter2}>
                <Filter
                    state={isopen}
                    close={closemodal}
                    filterBy={stateGenres} 
                    onChangefilterby={onChangeGenres} />
            </div>

            <div className={style.games}>
                <VideoGames />
            </div>
        </div>
    );
}


