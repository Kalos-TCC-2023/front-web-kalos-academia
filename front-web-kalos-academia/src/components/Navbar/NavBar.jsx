import React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faUsers, faBoxOpen, faDumbbell, faImages, faComments } from '@fortawesome/free-solid-svg-icons'

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
                        <Tooltip placement="right" title="Home">
                            <div className="icon_font_awesome">
                                <FontAwesomeIcon className='homeIcon' icon={faHome} size='lg' style={{ color: '#33ffa7' }} />
                            </div>
                        </Tooltip>
                    </Link>
                    <Link to='/menu/perfil'>
                        <Tooltip placement="right" title="Perfil">
                            <div className="icon_font_awesome">
                                <FontAwesomeIcon icon={faUser} size='lg' style={{ color: '#33ffa7' }} />
                            </div>
                        </Tooltip>
                    </Link>
                    <Link to='/menu/alunos'>
                        <Tooltip placement="right" title="Alunos da academia">
                            <div className="icon_font_awesome">
                                <FontAwesomeIcon icon={faUsers} size='lg' style={{ color: '#33ffa7' }} />
                            </div>
                        </Tooltip>
                    </Link>
                    <Link to='/menu/treinos'>
                        <Tooltip placement="right" title="Treinos da academia">
                            <div className="icon_font_awesome">
                                <FontAwesomeIcon icon={faDumbbell} size='lg' style={{ color: '#33ffa7' }} />
                            </div>
                        </Tooltip>
                    </Link>
                    <Link to='/menu/produtos'>
                        <Tooltip placement="right" title="Produtos">
                            <div className="icon_font_awesome">
                                <FontAwesomeIcon icon={faBoxOpen} size='lg' style={{ color: '#33ffa7' }} />
                            </div>
                        </Tooltip>
                    </Link>
                    
                </div>
                <p>Sair</p>
            </div>
        </div>
    )
}
