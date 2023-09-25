import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from './img/logo.png'

export const NavBar = () => {
  return (
    <div className='nav_bar_router'>
        <div className="nav_bar_components">
            <img src={logo} alt="logotipo kalos" />
            <div className="nav_bar_links">
                <Link to='/menu/home'>Home</Link>
                <Link to='/menu/perfil'>Perfil</Link>
            </div>
        </div>
    </div>
  )
}
