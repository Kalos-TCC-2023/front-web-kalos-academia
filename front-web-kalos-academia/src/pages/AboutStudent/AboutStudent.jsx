import { Breadcrumb } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Loader } from '../../components/Loader/Loader'
import './AboutStudent.css'
import { InitialDataStudent } from '../../components/InitialDataStudent/InitialDataStudent'

export const AboutStudent = () => {

    const idAluno = localStorage.getItem('id_aluno')
    const [aboutStudents, setAboutStudens] = useState('')
    const [stateStudent, setStateStudent] = useState(0)
    const [dataStudent, setDataStudent] = useState('')
    const endPointAzure = localStorage.getItem("end-point-azure")


    useEffect(() => {
        axios.get(`${endPointAzure}/kalos/aluno/id/${idAluno}`)
            .then(({ data }) => {
                console.log(data)
                setAboutStudens(data.aluno)
                setStateStudent(data.status)
            })
    }, [])
    console.log(aboutStudents)
    return (
        <div className='about_student'>
            <Helmet>
                <title>Kalos - Estudantes</title>
            </Helmet>

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
                        ]}
                    />
                </div>
                <div className="initial_information_student">
                    <InitialDataStudent idStudent={idAluno} data={aboutStudents} status={stateStudent} />
                </div>
            </div>

        </div>
    )
}
