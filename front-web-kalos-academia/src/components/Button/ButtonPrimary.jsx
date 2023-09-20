import React from 'react'
import { Button } from 'antd'

export const ButtonPrimary = ({ nameButton, size, onClickFuction, disabled, shape }) => {
  return (
    <div>
        <Button type="primary" shape={shape} disabled={disabled} size={size} block onClick={onClickFuction}>{nameButton}</Button>
    </div>
  )
}
