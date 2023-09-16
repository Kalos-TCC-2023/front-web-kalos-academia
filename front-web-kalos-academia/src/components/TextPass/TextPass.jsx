import React from 'react'
import { LockOutlined } from '@ant-design/icons'
import { Input } from 'antd';
import '../TextField/TextField.css'

export const TextPass = ({password, size, icon}) => {
  console.debug('Senha', password)
  return (
    <div>
        <p className='textNameForInput'>Senha</p>
        <Input.Password placeholder="senha" prefix={icon} size={size} value={password} />
    </div>
  )
}
