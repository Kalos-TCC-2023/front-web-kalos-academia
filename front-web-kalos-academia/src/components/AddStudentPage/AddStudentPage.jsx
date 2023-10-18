import React from 'react'
import { Helmet } from 'react-helmet'
import { Breadcrumb, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
const { Search } = Input
import { UserAddStudents } from '../UserAddStudents/UserAddStudents'
import './AddStudenPage.css'

export const AddStudentPage = () => {

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value)
    }

    

    return (
        <div className='students_page'>
            <Helmet>
                <title>Kalos - Estudantes</title>
            </Helmet>
            <div className="students_gym">
                <div className="raiz_title">
                    <h1 className='title_edit_page'>Alunos</h1>
                    <Breadcrumb
                        items={[
                            {
                                title: <Link to='/menu/alunos'>Alunos</Link>,
                            },
                            {
                                title: <Link to='/menu/alunos/novo_aluno'>Adicionar novo aluno</Link>,
                            },

                        ]}
                    />
                </div>
                <div className="header_gym_students">
                    <Search
                        className='search_header'
                        placeholder="Adicionar novo aluno..."
                        onSearch={onSearch}
                        size='large'
                    />
                    <div className="buttons_add_students_my_students">

                        <Link to='/menu/alunos'>
                            <Button shape='circle'>MEUS ALUNOS</Button>
                        </Link>
                        <Link to='/menu/alunos/novo_aluno'>
                            <Button shape='circle'>ADICIONAR NOVO ALUNO</Button>
                        </Link>
                    </div>
                </div>
                <div className="my_students_gym">
                    {

                    }
                    <UserAddStudents />
                    <UserAddStudents />
                </div>
            </div>
        </div>
    )
}
