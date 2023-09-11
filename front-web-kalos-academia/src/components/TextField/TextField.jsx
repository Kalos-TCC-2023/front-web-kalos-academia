import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './TextField.css'


export const TextField = ({textName, placeholder, prefixIcon, text, handleChange, status}) => {
  return (
    <div className='textField_component'>
        <p className='textNameForInput'>{textName}</p>
        <Input size="large" placeholder={placeholder} prefix={<UserOutlined />} status={status} value={text} onChange={handleChange}/>
    </div>
  )
}

