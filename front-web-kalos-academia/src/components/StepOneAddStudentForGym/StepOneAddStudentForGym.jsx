import React, { useEffect, useState } from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './StepOneAddStudentForGym.css'
import axios from 'axios'

export const StepOneAddStudentForGym = ({ idStudent, updateFielHandler }) => {

    const [dataOfStudent, setDataOfStudent] = useState('')

    useEffect(() => {

        axios.get(`http://10.107.144.2:8080/kalos/aluno/id/${idStudent}`)
            .then(({ data }) => {
                console.log(data)
                setDataOfStudent(data.aluno)
            })

    }, [])

    return (
        <div className="step_one">
            <div className='step_one_add_student_gym'>
                <Avatar src={dataOfStudent.foto} size={304} icon={<UserOutlined />} />
                <div className="name_token">
                    <span className="name_student_record">{dataOfStudent.nome}</span>
                    <span className='token'> {'#'+ 10 + dataOfStudent.id}</span>
                </div>
                <p>Perfeito! Vamos cuidar disso, apenas precisamos que responda algumas perguntas sobre seu aluno</p>
            </div>
        </div>

    )
}
