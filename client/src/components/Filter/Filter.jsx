import React from 'react'
import style from './Filter.module.css'

//necessary: state, filterby, onchange, onChangeGenres, handleSubmit
export default function Filter(props) {



    return (
        <div className={style.filtersContain}  >

            {
                props.filterBy.map((filter) =>{
                    return (
                        <div className={style.filter} key={filter.id} >

                            <button
                                className={style.bton}
                                name={filter.name}
                                type={'submit'}
                                id={filter.id} 
                                value={filter.name}
                                onClick={(e) => props.onChangefilterby(e)}
                            >
                                {filter.name}
                            </button>

                        </div>
                    )}) 
                }                 
        </div>
    )
}

