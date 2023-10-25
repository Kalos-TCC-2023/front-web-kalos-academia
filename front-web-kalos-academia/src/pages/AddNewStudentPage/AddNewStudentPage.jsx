import React from 'react'
import { Helmet } from 'react-helmet'
import { Breadcrumb, FloatButton } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { StepOneAddStudentForGym } from '../../components/StepOneAddStudentForGym/StepOneAddStudentForGym'
import './AddNewStudentPage.css'

export const AddNewStudentPage = ({ idStudent }) => {

  return (
    <div className='add_new_student_page'>
      <FloatButton icon={<ArrowRightOutlined />} tooltip={<div>Avançar</div>} />
      <Helmet>
        <title>Kalos - Estudantes</title>
      </Helmet>
      <div className="new_student_gym">
        <div className="raiz_title">
          <h1 className='title_edit_page'>Adicionar novo aluno</h1>
          <Breadcrumb
            items={[
              {
                title: <Link to='/menu/alunos'>Alunos</Link>,
              },
              {
                title: <Link to='/menu/alunos/novo_aluno'>Adicionar novo aluno</Link>,
              },
              {
                title: <Link to='/menu/alunos/novo_aluno/add_novo_aluno'>Novo aluno</Link>,
              }
            ]}
          />
        </div>
        <StepOneAddStudentForGym />

      </div>

    </div>
  )
}
