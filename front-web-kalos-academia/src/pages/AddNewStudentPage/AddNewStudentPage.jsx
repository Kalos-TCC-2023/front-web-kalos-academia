import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Breadcrumb, FloatButton, message } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { StepOneAddStudentForGym } from '../../components/StepOneAddStudentForGym/StepOneAddStudentForGym'
import { registerForm } from '../../hooks/registerForm'
import './AddNewStudentPage.css'
import { StepTwoAddStudentForGym } from '../../components/StepTwoAddStudentForGym/StepTwoAddStudentForGym'
import { StepThreeAddStundetForGym } from '../../components/StepThreeAddStundetForGym/StepThreeAddStundetForGym'
import { StepFinalAddStundetForGym } from '../../components/StepFinalAddStundetForGym/StepFinalAddStundetForGym'
import axios from 'axios'


const idAcademia = localStorage.getItem("id_academia")
const idAluno = localStorage.getItem("id_novo_aluno_add")

const addNewStudentTemplate = {
  frequencia_cardiaca: '',
  frequencia_treino_semanal: '',
  id_nivel_experiencia: '',
  id_qualidade_sono: '',
  rotina_regular: '',
  tempo_em_pe: '',
  id_aluno: parseInt(idAluno),
  treinos_aluno: [],
  id_academia: parseInt(idAcademia)
}

export const AddNewStudentPage = ({ idStudent }) => {

  const id = localStorage.getItem("id_novo_aluno_add")
  const idAcademiaGym = localStorage.getItem("id_academia")

  const [idAddStundet, setIdAddStundet] = useState(id)

  const [validation, setValidation] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  const [dataNewStundetAdd, setDataNewStundetAdd] = useState(addNewStudentTemplate)
  const [statusCode, setStatusCode] = useState(0)


  const updateFielHanlder = (key, value) => {
    setDataNewStundetAdd((prev) => {
      return { ...prev, [key]: value }
    })
  }

  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'Parece que você deixou campos vazios! Recomece novamente e preencha todos os campo!',
    })
  }

  const sucess = () => {
    messageApi.open({
      type: 'success',
      content: 'Aluno adicionado com sucesso!',
    })
  }

  const erroApi = () => {
    messageApi.open({
      type: 'error',
      content: 'Infelizmente tivemos um erro inesperado, por favor tente novamente mais tarde!',
    });
  };

  const formComponent = [<StepOneAddStudentForGym dataStundetGym={addNewStudentTemplate} updateFielHandler={updateFielHanlder} idStudent={idAddStundet} />, < StepTwoAddStudentForGym setValidation={setValidation} dataStundetGym={dataNewStundetAdd} updateFielHandler={updateFielHanlder} idStudent={idAddStundet} />, <StepThreeAddStundetForGym dataStundetGym={addNewStudentTemplate} updateFielHandler={updateFielHanlder} idStudent={idAddStundet} />, <StepFinalAddStundetForGym />]
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = registerForm(formComponent)

  useEffect(() => {
    if (isLastStep == true) {
      console.log(idAluno)
      if (dataNewStundetAdd.frequencia_cardiaca == '' || dataNewStundetAdd.frequencia_treino_semanal == '' || dataNewStundetAdd.id_academia == ''
        || dataNewStundetAdd.id_aluno == '' || dataNewStundetAdd.id_nivel_experiencia == '' || dataNewStundetAdd.id_qualidade_sono == '' || dataNewStundetAdd.rotina_regular == ''
        || dataNewStundetAdd.tempo_em_pe == '' || dataNewStundetAdd.treinos_aluno == []) {
        warning()
      } else {
       addAluno(idAcademiaGym, id)
      }
    } else {
      return
    }

  }, [isLastStep])

  const addAluno = (idGym, idStudent) => {
    axios.post(`https://kaloscorp.cyclic.app/kalos/alunoAcademia`, {
      id_academia: idGym,
      id_aluno: idStudent
    })
      .then(({ data }) => {
        console.log(data.status)
        setStatusCode(data.status)
        updateAddStudent()
      }).catch(({ erro }) => {
        erroApi()
        localStorage.removeItem('id_novo_aluno_add')
        console.log(erro)
        console.log(idAcademia)
        console.log(idAluno)
      })
  }

  const updateAddStudent = () => {
    
      axios.put(`https://kaloscorp.cyclic.app/kalos/alunoAcademia/id/${id}`, {
        frequencia_cardiaca: dataNewStundetAdd.frequencia_cardiaca,
        tempo_em_pe: dataNewStundetAdd.tempo_em_pe,
        rotina_regular: dataNewStundetAdd.rotina_regular,
        frequencia_treino_semanal: dataNewStundetAdd.frequencia_treino_semanal,
        id_nivel_experiencia: dataNewStundetAdd.id_nivel_experiencia,
        id_qualidade_do_sono: dataNewStundetAdd.id_qualidade_sono,
        id_aluno: dataNewStundetAdd.id_aluno,
        id_academia: dataNewStundetAdd.id_academia
      }).then(({ data }) => {
        localStorage.removeItem('id_novo_aluno_add')
        console.log(data)
        sucess()
      }).catch(({ errorUpdate }) => {
        erroApi()
        console.log(errorUpdate)
        localStorage.removeItem('id_novo_aluno_add')
      })
   
  }

  const addStudentWokouts = () => {
    
  }

  console.log(isLastStep)
  return (
    <div className='add_new_student_page'>
      {contextHolder}

      <FloatButton icon={<ArrowRightOutlined />} tooltip={<div>Avançar</div>} onClick={(e) => {
        changeStep(currentStep + 1, e)
      }
      }
      />
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
        {currentComponent}

        {/* <StepOneAddStudentForGym idStudent={idStudent} /> */}

      </div>

    </div>
  )
}
