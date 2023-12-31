import React, { useEffect, useState } from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './StepOneAddStudentForGym.css'
import axios from 'axios'
import { Loader } from '../Loader/Loader'

export const StepOneAddStudentForGym = ({ idStudent, updateFielHandler }) => {

    const [dataOfStudent, setDataOfStudent] = useState('')
    const endPointAzure = localStorage.getItem("end-point-azure")

    useEffect(() => {

        axios.get(`${endPointAzure}/kalos/aluno/id/${idStudent}`)
            .then(({ data }) => {
                console.log(data.aluno)
                setDataOfStudent(data.aluno)
            })

    }, [])

    return (
        <div className="step_one">
            { dataOfStudent == '' ? <Loader /> : (
            <div className='step_one_add_student_gym'>
                <Avatar src={dataOfStudent.foto} size={304} icon={<UserOutlined />} />
                <div className="name_token">
                    <span className="name_student_record">{dataOfStudent.nome}</span>
                    <span className='token'> {'#'+ 10 + dataOfStudent.id}</span>
                </div>
                <p>Perfeito! Vamos cuidar disso, apenas precisamos que responda algumas perguntas sobre seu aluno.</p>
            </div>
             ) }
        </div>

    )
}
