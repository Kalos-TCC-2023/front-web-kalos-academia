import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faHome, faUser, faUsers, faBoxOpen, faDumbbell, faImages, faComments } from '@fortawesome/free-solid-svg-icons'

import './NavBar.css'
import logo from './img/logo.png'

export const NavBar = () => {
    return (
        <div className='nav_bar_router'>
            <div className="nav_bar_components">
                <img className='logo_kalos' src={logo} alt="logotipo kalos" />
                <div className="nav_bar_links">
                    <FontAwesomeIcon icon="check-square" />
                    <Link to='/menu/home'>
                        <div className="icon_font_awesome">
                            <FontAwesomeIcon className='homeIcon' icon={faHome} size='lg' style={{ color: '#33ffa7' }} />
                        </div>
                    </Link>
                    <Link to='/menu/perfil'>
                        <div className="icon_font_awesome">
                            <FontAwesomeIcon icon={faUser} size='lg' style={{ color: '#33ffa7' }} />
                        </div>
                    </Link>
                    <Link to='/menu/alunos'>
                        <div className="icon_font_awesome">
                            <FontAwesomeIcon icon={faUsers} size='lg' style={{ color: '#33ffa7' }} />
                        </div>
                    </Link>
                    <Link to='/menu/produtos'>
                        <div className="icon_font_awesome">
                            <FontAwesomeIcon icon={faBoxOpen} size='lg' style={{ color: '#33ffa7' }} />
                        </div>
                    </Link>
                    <Link to='/menu/treinos'>
                        <div className="icon_font_awesome">
                            <FontAwesomeIcon icon={faDumbbell} size='lg' style={{ color: '#33ffa7' }} />
                        </div>
                    </Link>
                    <Link to='/menu/posts'>
                        <div className="icon_font_awesome">
                            <FontAwesomeIcon icon={faImages} size='lg' style={{ color: '#33ffa7' }} />
                        </div>
                    </Link>
                    <Link to='/menu/chat'>
                        <div className="icon_font_awesome">
                            <FontAwesomeIcon icon={faComments} size='lg' style={{ color: '#33ffa7' }} />
                        </div>
                    </Link>
                </div>
                <p>Sair</p>
            </div>
        </div>
    )
}
