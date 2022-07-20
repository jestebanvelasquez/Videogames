import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar/SearchBar'
import nav from './Navbar.module.css';


export default function NavBar() {
    return (
        <div className={nav.content}>
            <nav className={nav.nav}>
                <ul className={nav.ulItems}>
                    <li className={nav.liItems}>
                        <Link to='/'> Back </Link> 
                        <Link to='/home'> Home </Link> 
                        <Link to='/home/created'> ¡ Create ! </Link> 
                        
                    </li>
                </ul>¡ Create !
            <SearchBar />
            </nav>
        </div>
    )
}
