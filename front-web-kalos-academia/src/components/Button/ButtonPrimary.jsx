import React from 'react'
import { Button } from 'antd';

export const ButtonPrimary = ({nameButton, size}) => {
  return (
    <div>
        <Button type="primary" size={size} block>{nameButton}</Button>
    </div>
  )
}
