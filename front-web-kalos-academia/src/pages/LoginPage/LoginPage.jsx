import React, { useEffect, useRef, useState } from 'react'
import { Divider, Space, Input } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import { TextField } from '../../components/TextField/TextField'
import { ButtonPrimary } from '../../components/Button/ButtonPrimary'
import { Helmet } from 'react-helmet'
import login_img from './img/kalos-login.png'
import logo_kalos from './img/logo-tipo-kalos.png'
import 'animate.css'
import './LoginPage.css'
import '../../components/TextField/TextField.css'
import axios from 'axios'

export const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [statusInput, setStatusInput] = useState('')
    const [forgotPassPage, setforgotPassPage] = useState(false)
    const [submitButton, setSubmitButton] = useState(false)
    const toforgotPass = forgotPassPage ? '/esqueciSenha' : ''
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { value } = e.target
        setEmail(value)
    }
    
        useEffect(() => {
            if(submitButton === true){
                if(email == '' || password == ''){
                    setStatusInput('error')
                    setSubmitButton(false)
                } else {
                    setStatusInput('')
                    axios.post(`http://10.107.144.11:8080/kalos/academia/autenticar`, {
                email: email,
                senha: password
            })
                .then(({ data }) => {
                    console.log(data.academia.id)
                    localStorage.setItem('id_academia', data.academia.id)
                    setSubmitButton(false)
                    navigate("/menu/home")
                    
                }).catch((erro) => {
                    console.log(erro)
                })
                }
                
            } 
            
        }, [submitButton, email, password])

    const refP = useRef()

    const handleForgotPassword = () => {

        if (email == '') {
            refP.current.style.display = 'flex'
        } else {
            localStorage.setItem('userEmail', email)
            setforgotPassPage(true).forceUpdate()
        }
    }


    return (
        <div className='login_page'>
            <Helmet>
                <title>Login - Kalos</title>
            </Helmet>
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
                                <div className="email_fields">
                                    <TextField textName='E-mail' status={statusInput} placeholder='exemplo@gmail.com' text={email} handleChange={handleChange} />
                                    <p className='inform_email animate__animated animate__fadeIn' ref={refP}>Por favor informe o e-mail para fazer a troca</p>
                                </div>
                                <div className="passowrd_fields">
                                    <p className='textNameForInput'>Senha</p>
                                    <Input.Password placeholder='Senha' status={statusInput} prefix={<LockOutlined />} size='large' value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                            </Space>
                            <Space size={55}>
                                <Link to={toforgotPass} onClick={handleForgotPassword}>esqueci a senha</Link>
                                <p>Sou cliente e quero fazer parte</p>
                            </Space>
                        </div>
                        <div className="login_button_register">
                            <ButtonPrimary nameButton="Entrar" size='large' onClickFuction={(e) => {
                                setSubmitButton(true)
                                }} />
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
