import React from 'react'
import { Divider, Space } from 'antd'
import { TextField } from '../../components/TextField/TextField'
import { TextPass } from '../../components/TextPass/TextPass'
import { ButtonPrimary } from '../../components/Button/ButtonPrimary'
import login_img from './img/kalos-login.png'
import logo_kalos from './img/logo-tipo-kalos.png'

import './LoginPage.css'

export const LoginPage = () => {
    return (
        <div className='login_page'>
            <div className="login_container">
                <Space className='logotipo_kalos' size={10}>
                    <img className='logo-kalos' src={logo_kalos} />
                    <p>KALOS</p>
                </Space>
                <div className="login_fill">
                    <div className="login_salutation">
                        <p>SEJA BEM VINDO A KALOS!</p>
                        <p>Faça login e comece a administrar seu negocio fitness!</p>
                    </div>
                    <Divider />
                    <div className="login_fields">
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <TextField textName='E-mail' placeholder='exemplo@gmail.com' />
                            <TextPass />
                        </Space>
                        <Space size={55}>
                            {/* ROTAS */}
                            <p>esqueci a senha</p>
                            <p>Sou cliente e quero fazer parte</p>
                        </Space>
                    </div>
                    <ButtonPrimary />
                </div>
                <p className='copyright_kalos'>Copyright ©2023 Produced by Kalos Tecnologia Fitness Ltda.</p>
            </div>
            <div className="login_img_kalos_container">
                <img className='img_kalos_login' src={login_img} />
            </div>
        </div>
    )
}
