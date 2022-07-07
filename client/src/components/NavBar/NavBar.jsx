import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar/SearchBar'

export default function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>

            <Link to='/'>
              come back
            </Link>
            <Link to='/home'>
              home
            </Link>
            <Link  to='/home/database'>
              go database!
            </Link>
          </li>
        </ul>
      </nav>
      <SearchBar />
    </div>
  )
}
