import React, { useRef, useState } from 'react'
import { Helmet } from 'react-helmet';
import { InputNumber, Input } from 'antd';
import { ButtonPrimary } from '../../components/Button/ButtonPrimary';
import './ForgotPass.css'

export const ForgotPass = () => {

  const [tokenOne, setTokenOne] = useState(0)
  const [tokenTwo, setTokenTwo] = useState(0)
  const [tokenThree, setTokenThree] = useState(0)
  const [tokenFour, setTokenFour] = useState(0)
  const [tokenFive, setTokenFive] = useState(0)
  const [tokenCode, setToken] = useState('')
  const [disabled, setDisabled] = useState('disabled')

  const refVerification = useRef()
  const refFielsNewPassoword = useRef()

  const validateToken = () => {
    console.log(tokenCode)

    if (tokenOne == null || tokenTwo == null || tokenThree == null || tokenFour == null || tokenFive == null) {
      console.log('erro')
      refVerification.current.style.display = 'flex'

    } else if (tokenOne !== 0 && tokenTwo !== 0 && tokenThree !== 0 && tokenFour !== 0 && tokenFive !== 0) {

      refVerification.current.style.display = 'none'

      const token = [tokenOne.toString(), tokenTwo.toString(), tokenThree.toString(), tokenFour.toString(), tokenFive.toString()]

      const fullToken = token.reduce((letter, token) => letter + token)

      setToken(fullToken)

      refFielsNewPassoword.current.style.display = 'flex'

    } else {
      refVerification.current.style.display = 'flex'
    }
  }


  const userEmail = localStorage.getItem('userEmail')

  return (
    <div className='forgot_password'>
      <Helmet>
        <title>Kalos - Recuperação de Senha</title>
      </Helmet>
      <div className='forgot_password_instructions'>
        <h1>Insira o código de verificação</h1>
        <p>Por favor verifique o código de 5 dígitos que foi enviado para o e-mail <span className='userEmail'>{userEmail}</span> para efetuar a troca da senha.</p>
      </div>
      <div className="fiels_verification">
        <div className='forgot_passowrd_token_fiels'>
          <InputNumber type='number' size="large" min={1} max={9} maxLength={1} defaultValue={''} value={tokenOne} onChange={e => setTokenOne(e)} />
          <InputNumber type='number' size="large" min={1} max={9} maxLength={1} defaultValue={''} value={tokenTwo} onChange={e => setTokenTwo(e)} />
          <InputNumber type='number' size="large" min={1} max={9} maxLength={1} defaultValue={''} value={tokenThree} onChange={e => setTokenThree(e)} />
          <InputNumber type='number' size="large" min={1} max={9} maxLength={1} defaultValue={''} value={tokenFour} onChange={e => setTokenFour(e)} />
          <InputNumber type='number' size="large" min={1} max={9} maxLength={1} defaultValue={''} value={tokenFive} onChange={e => setTokenFive(e)} />
        </div>
        <div ref={refVerification} className="verification">
          Verifique se todos os campos foram preenchidos corretamente
        </div>
        <ButtonPrimary shape='round' size={'large'} nameButton='Validar' onClickFuction={validateToken} />

      </div>

      <div ref={refFielsNewPassoword} className="visible_fiels">
        <div  className='forgot_passowrd_new_fiels'>
          <div className='fiels'>
            <div className="new_passowrd">
              <p className='textNameForInput'>Nova Senha</p>
              <Input size="large" />
            </div>
            <div className="repeat_passowrd">
              <p className='textNameForInput'>Repetir Senha</p>
              <Input size="large" />
            </div>
          </div>
          < ButtonPrimary size={'large'} nameButton='Trocar' />
        </div>
      </div>

    </div>
  )
}