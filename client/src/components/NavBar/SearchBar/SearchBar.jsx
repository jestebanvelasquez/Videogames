import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getByName } from '../../../redux/actions/root-actions';
import ByName from '../../ByName/ByName';
import search from './Search.module.css'

export default function SearchBar() {
  const history = useHistory()
  const dispatch = useDispatch()
    const [state, setState] = useState('');
    
    const handleChange = (e) =>{
      setState(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(state);
    dispatch(getByName(state))
    setState('')
    history.push('/home/name')
  }
  /// recordar validarlo!!!!
  
  
  return (
    <div className={search.container}>
      
      <form
        className={search.contentForm}
        onSubmit={(e) => handleSubmit(e)}>
        <div className={search.contentInput}>
        <input
          type='text'
          placeholder='search game...'
          value={state}
          onChange={(e) => handleChange(e)}
        />

        </div>
        <button >Search To Game </button>
      </form>
    </div>
  )
}
