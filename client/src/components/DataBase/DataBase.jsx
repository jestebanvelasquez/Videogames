import React, { useState } from 'react'
import Formhenry from './Formhenry'
import { useHooks } from './useHooks'

export default function DataBase(props) {
  const [counter, increment, reset] = useHooks()

    // if( props === 'hum'){<form action="">
    //   <input key='last-name' type="text" placeholder='vezetnek' name='lastname' />
    // </form>}//validar idiomas!!! 

    const [state, setState] = useState({})

    const [errores, setErrores] = useState({
      nombre: 'nombre requerido',
      apellido: 'apellido requerido',
      documento: 'documento requerido',
      mensaje: 'mensaje requerido',
      email: 'email requerido'

    })



function validacion(valor){
  let errores = {}

  if(!valor.nombre) errores.nombre = 'no hay nada en el campo nombre';
  if(!valor.apellido) errores.apellido = 'no hay nada en el campo apellido';
  if(!valor.documento) errores.documento = 'no hay nada en el campo documento';
  if(!valor.mensaje) errores.mensaje = 'no hay nada en el campo mensaje';

  if(typeof valor.nombre !== 'string') errores.nombre = 'debe ser de tipo string'
  if(!valor.email) errores.email = 'no hay datos en el campo email'
  else if(! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valor.email)){
        errores.mail = 'hay error en el mail'

  }
  return errores;
}


const handleChange = (e) =>{
  setState({
    ...state,
    [e.target.name] : e.target.value
  })
  
  setErrores(validacion({
      ...state,
    [e.target.name] : e.target.value
    }))

    
  }
  console.log(errores)
// console.log(state)

const handleSubmit = (e) => {
  e.preventDefault()
}



  return (
    <div>

    <form action="">
    <p>nombre</p>
      <input onChange={(e) => handleChange (e)} key='nombre' type="text" placeholder='nombre ' name='nombre' />
      {errores && errores.nombre ?  <span style={{color: 'red'}}> {errores.nombre} </span> : null}

    <p>apellido</p>
      <input onChange={(e) => handleChange (e)} key='apellido' type="text" placeholder='apellido ' name='apellido' />
      {errores && errores.apellido ?  <span style={{color: 'red'}}> {errores.apellido} </span> : null}

      
    <p>documento</p>
      <input onChange={(e) => handleChange (e)} key='documento' type="text" placeholder='documento' name='documento' />
      {errores && errores.documento ?  <span style={{color: 'red'}}> {errores.documento} </span> : null}
      
      <p>email</p>
      <input onChange={(e) => handleChange (e)} key='email' type="text" placeholder='email ' name='email' />
      {errores && errores.email ?  <span style={{color: 'red'}}> {errores.email} </span> : null}
      
      <p>mensaje</p>
      <input onChange={(e) => handleChange (e)} key='mensaje' type="text" placeholder='mensaje ' name='mensaje' />
      {errores && errores.mensaje ?  <span style={{color: 'red'}}> {errores.mensaje} </span> : null}

    </form>

    <div>
      <input type="submit"  name='submit' disabled= { Object.keys(errores).length === 0 ? false : true }/>
    </div>


      <Formhenry />



    </div>
  )
}
