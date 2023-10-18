import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Breadcrumb, Input, Button } from 'antd'
import { Link, Outlet } from 'react-router-dom'
const { Search } = Input
import './StudentsPage.css'
import { UserAddStudents } from '../../components/UserAddStudents/UserAddStudents'
import { ButtonPrimary } from '../../components/Button/ButtonPrimary'
import axios from 'axios'

export const StudentsPage = () => {

  const onSearch = (value, _e, info) => {
    console.log(info?.source, value)
  }

  const id = localStorage.getItem("id_academia")

  useEffect(() => {
    axios.get(`https://kaloscorp.cyclic.cloud/kalos/alunoAcademia/idAcademia/${id}`)
    .then(({ data }) => {
      console.log(data)
      console.log(data.alunos)
      
    }).catch((erro) => {
      console.log(erro)
    })
  }, [])


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

            ]}
          />
        </div>
        <div className="header_gym_students">
          <Search
            className='search_header'
            placeholder="Buscar aluno..."
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
          <UserAddStudents nameStudent='Nicole Souza' idStudent={'#' + 100 + 2} imgSrcStudent='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7oKlNVsF6Pji87TscDEjEhyozPdzYUoTj0ndN5SbwkQ&s'/>
          <UserAddStudents nameStudent='Yasmin' idStudent={'#' + 100 + 2} imgSrcStudent='https://pbs.twimg.com/media/FgxlyqYWYAAoMNj.png'/>
          <UserAddStudents nameStudent='Claudio' idStudent={'#' + 100 + 2} imgSrcStudent='data:image/jpeg;base64,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'/>
          <UserAddStudents nameStudent='Nicole Souza' idStudent={'#' + 100 + 2} imgSrcStudent='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7oKlNVsF6Pji87TscDEjEhyozPdzYUoTj0ndN5SbwkQ&s'/>
        </div>
      </div>
    </div>
  )
}
