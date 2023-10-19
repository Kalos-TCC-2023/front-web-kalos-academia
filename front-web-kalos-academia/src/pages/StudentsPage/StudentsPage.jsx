import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Breadcrumb, Input, Button } from 'antd'
import { Link, Outlet } from 'react-router-dom'
const { Search } = Input
import './StudentsPage.css'
import { UserAddStudents } from '../../components/UserAddStudents/UserAddStudents'
import { ButtonPrimary } from '../../components/Button/ButtonPrimary'
import axios from 'axios'
import { Loader } from '../../components/Loader/Loader'

export const StudentsPage = () => {

  const [studentsGym, setStudentsGym] = useState([])

  const onSearch = (value, _e, info) => {
    console.log(info?.source, value)
  }

  const id = localStorage.getItem("id_academia")

  useEffect(() => {
    axios.get(`https://kaloscorp.cyclic.cloud/kalos/alunoAcademia/idAcademia/${id}`)
    .then(({ data }) => {
      console.log(data)
      console.log(data.alunos)
      setStudentsGym(data.alunos)
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
            {
              studentsGym.length == 0 ? <Loader /> : (
                studentsGym.map((student) => (
                  <UserAddStudents key={student.id} nameStudent={student.nome} idStudentFormt={'#' + 10 + student.id} imgSrcStudent={student.foto}/>
                ))
              )
            }
         
        </div>
      </div>
    </div>
  )
}
