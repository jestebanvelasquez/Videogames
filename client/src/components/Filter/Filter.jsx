import React from 'react'
import style from './Filter.module.css'

//necessary: state, filterby, onchange, onChangeGenres, handleSubmit
export default function Filter(props) {

    const handleChange = (e) => {
        e.stopPropagation();
    }
    // console.log(props)

    return (
        <div className={`${style.modal} ${ props.state && style.modalOpen}`}  onClick={props.close}>

            {
                props.filterBy.map((filter) =>{
                    return (
                        <div className={style.modalDialog} key={filter.id} onClick={handleChange}>

                            <input
                                className={style.input}
                                name={filter.name}
                                type={'submit'}
                                id={filter.id} 
                                value={filter.name}
                                onClick={(e) => props.onChangefilterby(e)}
                            />

                        </div>
                    )}) 
                } 
                            {/* <div>
                                <button onClick={props.close}>close filters</button>
                            </div> */}
                
        </div>
    )
}


{/* <div className={`${style.modal} ${ props.state && style.modalOpen}`}>
{isOpen, closemodal,filterByOrder, onChangefilterby, stateGenres, onChangeGenres}
{
    props.filterBy.map((filter) =>{
        return (
            <div className={style.modalDialog} key={filter.id}>

                <input
                    className={style.input}
                    name={filter.name}
                    type={'submit'}
                    id={filter.id} 
                    value={filter.name}
                    onClick={(e) => props.onChangefilterby(e)}
                />

            </div>
        )}) 
    } 
                <div>
                    <button onClick={props.close}>close filters</button>
                </div>
    
</div> */}
