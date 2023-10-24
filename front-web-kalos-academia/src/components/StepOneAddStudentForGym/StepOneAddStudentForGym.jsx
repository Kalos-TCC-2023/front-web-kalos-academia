import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './StepOneAddStudentForGym.css'

export const StepOneAddStudentForGym = () => {
    return (
        <div className="step_one">
            <div className='step_one_add_student_gym'>
                <Avatar size={304} icon={<UserOutlined />} />
                <div className="name_token">
                    <span className="name_student_record">Dyana</span>
                    <span className='token'>#1000</span>
                </div>
                <p>Perfeito! Vamos cuidar disso, apenas precisamos que responda algumas perguntas sobre seu aluno</p>
            </div>
        </div>

    )
}
