import React from 'react'
import { Tag } from 'antd'

export const TagAcademy = ({color, name}) => {
  return <Tag color={color} closable>{name}</Tag>
}
