import React, { useEffect, useState } from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './UserCardNewStudent.css'
import { useNavigate } from 'react-router-dom'

export const UserCardNewStudent = ({nameStudent, idStudentFormt, imgSrcStudent, studentRealId}) => {

  const navigate = useNavigate()

  return (
    <div onClick={() => { 
        localStorage.setItem("id_novo_aluno_add", studentRealId)
        console.log(studentRealId)
    }} className='user_add_card'>
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
