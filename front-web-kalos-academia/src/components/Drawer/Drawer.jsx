import React from 'react'
import { Drawer } from 'antd'

export const DrawerNotification = (open, onClose) => {
  
  return (
    <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
  )
}
