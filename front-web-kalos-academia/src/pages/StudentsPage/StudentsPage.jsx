import React from 'react'
import { Helmet } from 'react-helmet'
import { Breadcrumb, Input } from 'antd'
import { Link } from 'react-router-dom'
const { Search } = Input
import './StudentsPage.css'

export const StudentsPage = () => {

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

          </div>
        </div>
        <div className="my_students_gym">
            {/* usar user add students de componente */}
        </div>
      </div>
      
    </div>
  )
}
