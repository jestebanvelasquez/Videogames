import React, { useState } from 'react'
 import { validate } from './Validation'
//  import './formhenry.css';

export default function Formhenry() {

  const [state, setState] = useState({
    username: '',
    password: '',
    saludo:'hola tebi',
    name:'hola',
    id: '0'

  })

  const [errores, setErrores] = useState({
    // apellido: 'apellido requerido',
    // documento: 'documento requerido',
    // mensaje: 'mensaje requerido',
    username: 'nombre requerido',
    password: 'password requerido'

  })


  const handleChange = (e) => {
    //capturar el estado actual del componente: manejo asincronismo !!
    // setState((state) =>{
    //   // console.log(e.target.value)
    //   // console.log(e.target.name)
      
    //   return{
    //     ...state,
    //     [e.target.name]: e.target.value
    //   }
    // },(state) =>{
    //   console.log(state)
    // })


      setState({
          ...state,
          [e.target.name]: e.target.value
      })
      let errorsResult = validate({
        ...state,
        [e.target.name]: e.target.value
      })
      setErrores(errorsResult)
  }
  console.log(errores)

  const handleSubmit = (e) => {
    
    e.preventDefault()
    setState({
      username: '',
      password: ''
    })
  }
  // console.log(state);//clg

  return (
    <div>  
        Formhenry
    
    <form onSubmit={(e) => handleSubmit (e)}>

      <div>
        <label htmlFor="">
          <input 
          className={errores.username && 'danger' }
          type="email" 
          name='username' 
          value={state.username}
          onChange={(e) => handleChange (e)}
          />
      {errores && errores.username ?  <p className='danger'> {errores.username} </p> : null}

        </label>
      </div>

      <div>
        <label htmlFor="">
          <input 
          className={errores.password && 'danger' }
          value={state.password}
          type="password" 
          name='password'
          onChange={(e) => handleChange (e)}
          />
      {errores && errores.password ?  <p className='danger'> {errores.password} </p> : null}

        </label>
      </div>

      <input type="submit" />
    </form>
    
    </div>
  )
}
