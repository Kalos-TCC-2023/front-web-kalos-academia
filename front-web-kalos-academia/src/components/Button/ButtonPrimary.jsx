import React from 'react'
import { Button } from 'antd';

export const ButtonPrimary = ({nameButton, size, onClickFuction }) => {
  return (
    <div>
        <Button type="primary" size={size} block onClick={onClickFuction}>{nameButton}</Button>
    </div>
  )
}
