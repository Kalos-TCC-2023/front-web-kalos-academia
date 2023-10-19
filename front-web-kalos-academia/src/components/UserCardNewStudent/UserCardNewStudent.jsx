import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './UserCardNewStudent.css'

export const UserCardNewStudent = ({nameStudent, idStudentFormt, imgSrcStudent}) => {
  return (
    <div onClick={() => (
        console.log(idStudentFormt)
    )} className='user_add_card'>
        <div className="section_information_students">
                <Avatar src={imgSrcStudent} size={40}><UserOutlined /></Avatar>
                <div className="name_id">
                    <p className='name_student'>{nameStudent}</p>
                    <span className='id_student'>{idStudentFormt}</span>
                </div>
            </div>
    </div>
  )
}
