import React,  { useState } from 'react'
import { Divider, Space } from 'antd'
import { Link } from 'react-router-dom'
import { TextField } from '../../components/TextField/TextField'
import { TextPass } from '../../components/TextPass/TextPass'
import { ButtonPrimary } from '../../components/Button/ButtonPrimary'
import login_img from './img/kalos-login.png'
import logo_kalos from './img/logo-tipo-kalos.png'
import './LoginPage.css'

export const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        const { value } = e.target
        
        setEmail(value)
        console.log(email)
    }
    
    return (
        <div className='login_page'>
            <div className="align_itens_container">
                <div className="login_container">
                    <Space className='logotipo_kalos' size={10}>
                        <img className='logo-kalos' src={logo_kalos} />
                        <p>KALOS</p>
                    </Space>
                    <div className="login_fill">
                        <div className="login_salutation">
                            <p className='login_welcome'>SEJA BEM VINDO A KALOS!</p>
                            <p className='login_cta'>Faça login e comece a administrar seu negocio fitness!</p>
                        </div>
                        <Divider />
                        <div className="login_fields">
                            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                                <TextField textName='E-mail' placeholder='exemplo@gmail.com' text={email} handleChange={handleChange}/>
                                <TextPass />
                            </Space>
                            <Space size={55}>
                                <Link to='/esqueciSenha'>esqueci a senha</Link>
                                <p>Sou cliente e quero fazer parte</p>
                            </Space>
                        </div>
                        <div className="login_button_register">
                            <ButtonPrimary nameButton="Entrar" size='large' />
                            <p>É uma academia e não possui uma conta?</p>
                            <Link className='route_register' to='/cadastro'> Faça seu cadastro!</Link>
                        </div>
                        
                    </div>
                    <p className='copyright_kalos'>Copyright ©2023 Produced by Kalos Tecnologia Fitness Ltda.</p>
                </div>
                <div className="login_img_kalos_container">
                    <img className='img_kalos_login' src={login_img} />
                </div>
            </div>

        </div>
    )
}
