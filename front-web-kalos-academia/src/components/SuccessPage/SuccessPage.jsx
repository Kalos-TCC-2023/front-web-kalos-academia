import React, { useEffect } from 'react'
import Confetti from 'react-confetti'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorClosed } from '@fortawesome/free-solid-svg-icons'
import logo from './img/logo-kalos.png'
import './SuccessPage.css'


export const SuccessPage = ({ }) => {
    return (
        <div className='sucess_page'>
            <Helmet>
                <title>Sucesso!</title>
            </Helmet>
            <Confetti/>
            <div className="title_description">
                <img src={logo} alt="" />
                <h2 className='title_success'>SEJA BEM VINDO!</h2>
                <p className='description_success'>Agora você é nosso novo parceiro! Faça Login novamente!</p>
                <div className='go_to_login'>
                    <Link to='/'>
                        <FontAwesomeIcon className='icon' size='xl' icon={faDoorClosed} />
                    </Link>
                </div>

            </div>
        </div>
    )
}
