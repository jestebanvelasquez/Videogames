import React, { useEffect, useState } from 'react'
import images from './slider'
import style from './Header.module.css'



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
        <div  className={style.slider}> 
        <div>
            <button onClick={prev}> prev </button>
            
            <button onClick={next}>next </button>
            {
                img.map((image) =>{
                    return (
                        <div className= {style.slide}>
                            <img src= {image} alt='logo'/>
                        </div>
                    )
                })
            }
        </div>
        
        
        </div>
    )
}
