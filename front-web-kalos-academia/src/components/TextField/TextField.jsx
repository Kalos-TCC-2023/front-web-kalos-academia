import React from 'react'
import { Input } from 'antd';

export const TextField = (nameText, size, placeholder) => {
  return (
    <div className='textField_component'>
        <Input placeholder="default size" prefix={<UserOutlined />} />
    </div>
  )
}
