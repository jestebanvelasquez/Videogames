import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { byFilter, byGenre} from '../../redux/actions/root-actions';


export default function Filter() {
    const dispatch = useDispatch()
    const allGenres = useSelector(state => state.allGenres);
    const [state, setState] = useState(allGenres);

    useEffect(()=>{
        setState(allGenres)
    },[allGenres])

    const onChangeGenres = (e) =>{
        if(e.target.value){
            dispatch(byGenre(e.target.value))
            console.log(e.target.value)
        }
    }

    const onChange = (e) => {
        dispatch(byFilter(e.target.value))

    }
    
    const filterBy = [
        { id: 'all', name: 'unOrder' },
        { id: 'byAZ', name: ' Orden Ascendente' },
        { id: 'byZA', name: ' Orden Desendente' },
        { id: 'byRAsc', name: 'Rating Ascendente' },
        { id: 'byRDes', name: 'Rating Desendente' },
    ]

    return (
        <div>
            <div>

            <select
                onChange={(e) => onChange (e) }
                defaultValue={'escoge'}
            >
                {filterBy ? filterBy.map((filter) => {
                    return (
                        <option
                            key={filter.id}
                            value={filter.id}
                        >
                            {filter.name}
                        </option>
                    );
                }): 'no hay info'
                }
            </select>
            </div>
            escoge como filtrar: <br />
            <div>
            <select
                onChange={(e) => onChangeGenres (e) }
                defaultValue={'escoge'}
            >
                { state ? state.map((filter) => {
                    return (
                        
                        <option
                            key={filter.name}
                            value={filter.name}
                            onChange={(e) =>onChangeGenres (e)}
                        >
                            {filter.name}
                        </option>
                        
                    );
                }): 'no hay genres'
                }
            </select>
            </div>
        </div>
    )
}
