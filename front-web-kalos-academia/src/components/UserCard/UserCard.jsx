import React from 'react'
import { Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './UserCard.css'

export const UserCard = ({ name, id }) => {
  return (
    <div className="container_user">
      <div className='user_card'>
        <Avatar size={50} icon={<UserOutlined />} />
        <div className="user_data">
          <span className='user_name'>{name}</span>
          <span className='user_id'>{id}</span>
        </div>
        <div className="button_user_profile">
          aa
        </div>
      </div>
      <Divider />
    </div>

  )
}
