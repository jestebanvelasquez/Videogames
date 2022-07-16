import React, { useState } from 'react'
import images from './slider'
import style from './Header.module.css'
import {ReactComponent as ArrowRigth} from '../../../assets/icons/right.svg'
import {ReactComponent as ArrowLeft} from '../../../assets/icons/left.svg'



export default function Header(props) {

    const [state, setState] = useState(images)
    const [img, setImg] = useState([...state].splice(0, 1))
    const [position, setPosition] = useState(0)
    
    const next = () =>{
        const totalimg = images.length-1 
        const nextpos = position+1 
        const index = nextpos 
        if(position === totalimg) return
        setImg([...state].splice(index, 1))
        setPosition(nextpos)
        // setCurrent(currentSlide === slideLength-1 ? 0 : currentSlide + 1)
    }

    const prev = () =>{
        const prevpos = position -1;
        const index = prevpos;
        if(position < 0) return
        setImg([...state].splice(index, 1))
        setPosition(prevpos)
        // setCurrent(currentSlide === 0 ? slideLength-1 :currentSlide - 1)
    }

    return (
        <div className={style.container} >
            <div className={style.slideShow}>
            {
                img.map((image) =>{
                    return (
                        <div className= {style.slide}>
                            <img src= {image} alt='logo'/>
                        </div>
                    )
                })
            }
                <div className={style.textSlide}>
                    <h1> Video Games Henry </h1>
                </div> 
                <div className={style.controller}>
                    <button className={`${style.btn} ${style.left}` } onClick={prev}> <ArrowLeft /> </button>
                    <button className={`${style.btn} ${style.rigth}`} onClick={next}> <ArrowRigth /> </button>
                </div>
            </div>

        </div>
    )
}

