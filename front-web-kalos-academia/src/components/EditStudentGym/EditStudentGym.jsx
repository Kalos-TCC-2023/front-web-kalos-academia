import React, { useEffect, useState } from 'react'
import { InitialDataStudent } from '../InitialDataStudent/InitialDataStudent'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import { InitialDataStudentGymEdit } from '../InitialDataStudentGymEdit/InitialDataStudentGymEdit'

export const EditStudentGym = () => {

    const idAluno = localStorage.getItem('id_aluno')
    const [aboutStudents, setAboutStudens] = useState('')
    const [stateStudent, setStateStudent] = useState(0)
    const [dataStudent, setDataStudent] = useState('')
 
    useEffect(() => {
        axios.get(`https://kaloscorp.cyclic.app/kalos/aluno/id/${idAluno}`)
            .then(({ data }) => {
                console.log(data)
                setAboutStudens(data.aluno)
                setStateStudent(data.status)
            })
    }, [])
    console.log(aboutStudents)

    return (
        <div className='about_student'>
            <div className="student_gym">
                <div className="raiz_title">
                    <h1 className='title_edit_page'>Sobre o Aluno </h1>
                    <Breadcrumb
                        items={[
                            {
                                title: <Link to='/menu/alunos'>Alunos</Link>,
                            },
                            {
                                title: <Link to='/menu/alunos/sobre_aluno'>Sobre o aluno - {aboutStudents.nome}</Link>,
                            },
                            {
                                title: <Link to='/menu/alunos/sobre_aluno'>Editar Aluno</Link>,
                            },
                        ]}
                    />
                </div>
                <div className="initial_information_student">
                        <InitialDataStudentGymEdit idStudent={idAluno} data={aboutStudents} status={stateStudent} />
                </div>
            </div>

        </div>
    )
}
