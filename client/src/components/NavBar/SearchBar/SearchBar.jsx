import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getByName } from '../../../redux/actions/root-actions';

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


  return (
    <div>
      SearchBar
      <form onSubmit={(e)=> handleSubmit (e)}>
        <input 
          type='text'
          placeholder='search game...'
          value={state}
          onChange={(e) => handleChange (e)}
        />
        <button >Search To Game </button>
      </form>
    </div>
  )
}
