import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar/SearchBar'
import nav from './Nav.module.css'

export default function NavBar() {
  return (
    <div className={nav.content}>
      <nav className={nav.nav}>
        <ul className={nav.ulItems}>
          <li className={nav.liItems}>

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
