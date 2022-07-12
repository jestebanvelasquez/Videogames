import React from 'react'

export default function Button({state}) {


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
    }


  return (
    <div> 
        Button

        <div>
            <button onClick={(e) => handleSubmit (e)}> Crear !!</button>
        </div>
    </div>
  )
}
