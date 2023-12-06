import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { InputNumber, Input, message } from 'antd';
import { ButtonPrimary } from '../../components/Button/ButtonPrimary';
import 'animate.css'
import './ForgotPass.css'
import axios from 'axios';

export const ForgotPass = () => {

  const [tokenOne, setTokenOne] = useState(0)
  const [tokenTwo, setTokenTwo] = useState(0)
  const [tokenThree, setTokenThree] = useState(0)
  const [tokenFour, setTokenFour] = useState(0)
  const [tokenFive, setTokenFive] = useState(0)
  const [tokenCode, setToken] = useState('')
  const [newPassoword, setNewPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [submitPassword, setSubmitPassword] = useState('')
  const [messageApi, contextHolder] = message.useMessage()
  const navigate = useNavigate()
  const endPointAzure = localStorage.getItem("end-point-azure")


  // INSERIR AVISO DE 12 CARACTERES

  const error = () => {
    messageApi.open({
      type: 'error',
      content: ' Verifique se todos os campos foram preenchidos corretamente',
    })
  }

  const errorInvalidToken = () => {
    messageApi.open({
      type: 'error',
      content: 'Codigo invalido, tente novamente!',
    })
  }

  const errorExpiredToken = () => {
    messageApi.open({
      type: 'error',
      content: 'Codigo expirou, tente novamente!',
    })
  }

  const invalidPassowrd = () => {
    messageApi.open({
      type: 'error',
      content: 'Senha Invalida, verifique os campos preenchidos',
    })
  }

  const internError = () => {
    messageApi.open({
      type: 'error',
      content: 'Erro interno, tente novamente mais tarde!',
    })
  }

  const sucessPassword = () => {
    messageApi.open({
      type: 'success',
      content: 'Senha Alterada com sucesso! Você será redirecionado em 5 segundos.',
    })
  }


  const refFielsNewPassoword = useRef()
  const refFielFullCode = useRef()

  const validateToken = () => {
    console.log(tokenCode)

    if (tokenOne == null || tokenTwo == null || tokenThree == null || tokenFour == null || tokenFive == null) {
      console.log('erro')
      error()

    } else if (tokenOne !== -1 && tokenTwo !== -1 && tokenThree !== -1 && tokenFour !== -1 && tokenFive !== -1) {

      refFielsNewPassoword.current.style.display = 'none'

      const token = [tokenOne.toString(), tokenTwo.toString(), tokenThree.toString(), tokenFour.toString(), tokenFive.toString()]

      const fullToken = token.reduce((letter, token) => letter + token)

      if (fullToken == '00000') {
        errorInvalidToken()
      } else {
        setToken(fullToken)
      }
      console.log(fullToken)
    } else {
      error()
    }
  }

  const checkNewPassoword = () => {
    if(newPassoword < 12 || checkPassword < 12 || newPassoword == '' || checkPassword == '' || newPassoword == null || checkPassword == null){
      invalidPassowrd()
    } else {
      const verificationPassowrd = newPassoword.localeCompare(checkPassword)
      if( verificationPassowrd == 0){
        setSubmitPassword(newPassoword)
      } else {
        invalidPassowrd()
      }
    }
  }

  const userEmail = localStorage.getItem('userEmail')

  useEffect(() => {
    if (userEmail == '' || userEmail.length > 256 || userEmail == null) {
      console.log(userEmail)
      return
    } else {
      axios.post(`${endPointAzure}/kalos/academia/esqueci_senha`, {
        email: userEmail.toString()
      })
        .then(({ data }) => {
          console.log(data)

        }).catch((erro) => {
          console.log(erro)
        })
    }
  }, [userEmail])


  useEffect(() => {
    if (tokenCode == '' || tokenCode.length < 5) {
      return
    } else {
      axios.post(`${endPointAzure}/kalos/academia/validar_token`, {
        email: userEmail.toString(),
        token: tokenCode.toString()
      })
        .then(({ data }) => {
          console.log(data)
          if (data.status == 401) {
            errorExpiredToken()
          } else {
            refFielsNewPassoword.current.style.display = 'flex'
            refFielFullCode.current.style.display = 'none'
          }

        }).catch((erro) => {
          errorInvalidToken()
        })
    }
  }, [tokenCode])

  useEffect(() => {
    if(submitPassword == '' || submitPassword == null){
      return
    } else {
      axios.put(`${endPointAzure}/kalos/academia/redefinir_senha`, {
        email: userEmail.toString(),
        senha: submitPassword.toString()
      }).then(({ data }) => {
        if(data.status == 200){
          sucessPassword()
          setTimeout(() => {
            navigate("/")
          }, 5000)
        }       
        console.log(data)
      }).catch((erro) => {
        console.log(erro)
        internError()
      })
    }
  }, [submitPassword])


  return (
    <div className='forgot_password'>
      {contextHolder}
      <Helmet>
        <title>Kalos - Recuperação de Senha</title>
      </Helmet>
      <div ref={refFielFullCode} className="insert_token">
        <div className='forgot_password_instructions'>
          <h1>Insira o código de verificação</h1>
          <p>Por favor verifique o código de 5 dígitos que foi enviado para o e-mail <span className='userEmail'>{userEmail}</span> para efetuar a troca da senha.</p>
        </div>
        <div className="fiels_verification">
          <div className='forgot_passowrd_token_fiels'>
            <InputNumber type='number' size="large" min={0} max={9} maxLength={1} defaultValue={''} value={tokenOne} onChange={e => setTokenOne(e)} />
            <InputNumber type='number' size="large" min={0} max={9} maxLength={1} defaultValue={''} value={tokenTwo} onChange={e => setTokenTwo(e)} />
            <InputNumber type='number' size="large" min={0} max={9} maxLength={1} defaultValue={''} value={tokenThree} onChange={e => setTokenThree(e)} />
            <InputNumber type='number' size="large" min={0} max={9} maxLength={1} defaultValue={''} value={tokenFour} onChange={e => setTokenFour(e)} />
            <InputNumber type='number' size="large" min={0} max={9} maxLength={1} defaultValue={''} value={tokenFive} onChange={e => setTokenFive(e)} />
          </div>
          <ButtonPrimary className='validation_button' shape='round' size={'large'} nameButton='Validar' onClickFuction={validateToken} />
        </div>
      </div>

      <div ref={refFielsNewPassoword} className="animate__animated animate__fadeInDown visible_fiels">
        <div className='forgot_passowrd_new_fiels'>
          <div className='fiels'>
            <div className="new_passowrd">
              <p className='textNameForInput'>Nova Senha</p>
              <Input.Password value={newPassoword} onChange={e => setNewPassword(e.target.value)} size="large" />
            </div>
            <div className="repeat_passowrd">
              <p className='textNameForInput'>Repetir Senha</p>
              <Input.Password value={checkPassword} onChange={e => setCheckPassword(e.target.value)} size="large" />
            </div>
          </div>
          < ButtonPrimary onClickFuction={checkNewPassoword} size={'large'} nameButton='Trocar' />
        </div>
      </div>

    </div>
  )
}
