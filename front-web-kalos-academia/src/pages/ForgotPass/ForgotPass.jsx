import React, { useState } from 'react'
import { InputNumber, Input } from 'antd';
import { ButtonPrimary } from '../../components/Button/ButtonPrimary';
import './ForgotPass.css'

export const ForgotPass = () => {

  const [tokenOne, setTokenOne] = useState(0)
  const [tokenTwo, setTokenTwo] = useState(0)
  const [tokenThree, setTokenThree] = useState(0)
  const [tokenFour, setTokenFour] = useState(0)
  const [tokenFive, setTokenFive] = useState(0)
  const [disabled, setDisabled] = useState('disabled')
  console.log(tokenOne, tokenTwo, tokenThree, tokenFour, tokenFive)

  

  const validateToken = () => {
    if(tokenOne == '' || tokenTwo == '' || tokenThree == '' || tokenFour == '' || tokenFive == ''){
      console.log('erro')
    } else {
      console.log('ok')
    }
  }

  validateToken()

  const userEmail = localStorage.getItem('userEmail')

  return (
    <div className='forgot_password'>
      <div className='forgot_password_instructions'>
        <h1>Insira o código de verificação</h1>
        <p>Por favor verifique o código de 5 dígitos que foi enviado para o e-mail <span className='userEmail'>{userEmail}</span> para efetuar a troca da senha.</p>
      </div>
      <div className='forgot_passowrd_token_fiels'>
        <InputNumber type='number' size="large" min={0} max={9} maxLength={1} defaultValue={''} value={tokenOne} onChange={e => setTokenOne(e)} />
        <InputNumber type='number' size="large" min={0} max={9} maxLength={1} defaultValue={''} value={tokenTwo} onChange={e => setTokenTwo(e)} />
        <InputNumber type='number' size="large" min={0} max={9} maxLength={1} defaultValue={''} value={tokenThree} onChange={e => setTokenThree(e)} />
        <InputNumber type='number' size="large" min={0} max={9} maxLength={1} defaultValue={''} value={tokenFour} onChange={e => setTokenFour(e)} />
        <InputNumber type='number' size="large" min={0} max={9} maxLength={1} defaultValue={''} value={tokenFive} onChange={e => setTokenFive(e)} />
      </div>
      <div className='forgot_passowrd_new_fiels'>
        <div className='fiels'>
          <div className="new_passowrd">
            <p className='textNameForInput'>Nova Senha</p>
            <Input size="large" disabled={disabled} />
          </div>
          <div className="repeat_passowrd">
            <p className='textNameForInput'>Repetir Senha</p>
            <Input size="large" disabled={disabled} />
          </div>
        </div>
        < ButtonPrimary size={'large'} nameButton='Trocar' />
      </div>
    </div>
  )
}
