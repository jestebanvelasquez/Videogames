import React, { useState } from 'react'

//necessary: state, filterby, onchange, onChangeGenres, handleSubmit
export default function Filter(props) {

    return (
        <div>
            {
                props.filterBy ? props.filterBy.map((filter) =>{
                    return (
                        <div key={filter.id}>

                            <input
                                name={filter.name}
                                type={'submit'}
                                id={filter.id} 
                                value={filter.name}
                                onClick={(e) => props.onChangefilterby(e)}
                            />
                        </div>
                    )}) : '' 
                }
        </div>
    )
}

