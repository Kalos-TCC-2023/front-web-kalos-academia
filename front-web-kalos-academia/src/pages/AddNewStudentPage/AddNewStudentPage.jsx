import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Breadcrumb, FloatButton } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { StepOneAddStudentForGym } from '../../components/StepOneAddStudentForGym/StepOneAddStudentForGym'
import { registerForm } from '../../hooks/registerForm' 
import './AddNewStudentPage.css'
import { StepTwoAddStudentForGym } from '../../components/StepTwoAddStudentForGym/StepTwoAddStudentForGym'

const addNewStudentTemplate = {
  frequencia_cardiaca: '',
  frequencia_treino_semanl: '',
  id_nivel_experiencia: '',
  id_qualidade_sono: '',
  rotina_regular: '',
  tempo_em_pe: ''
}

export const AddNewStudentPage = ({ idStudent }) => {

  const [dataNewStundetAdd, setDataNewStundetAdd] = useState(addNewStudentTemplate)

  const updateFielHanlder = (key, value) => {
    setDataNewStundetAdd((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponent = [<StepOneAddStudentForGym updateFielHandler={updateFielHanlder} idStudent={idStudent}/>, < StepTwoAddStudentForGym updateFielHandler={updateFielHanlder}/> ]
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = registerForm(formComponent)


  return (
    <div className='add_new_student_page'>
      <FloatButton icon={<ArrowRightOutlined />} tooltip={<div>Avançar</div>} onClick={(e) => changeStep(currentStep + 1, e)}/>
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
        {/* {currentComponent} */}
        <StepOneAddStudentForGym idStudent={idStudent} />

      </div>

    </div>
  )
}
