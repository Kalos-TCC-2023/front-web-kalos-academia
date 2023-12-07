import React, { useState } from 'react'
import { CardDataStudent } from '../CardDataStudent/CardDataStudent'
import { Input, Select, FloatButton, Tooltip, message } from 'antd'
import './RecordEditCardStudent.css'
import { CheckOutlined } from '@ant-design/icons'
import axios from 'axios'


export const RecordEditCardStudent = ({ data, dataNascimentoFormat, idStudent }) => {

  const [frequenciaCardiaca, setFrequenciaCardiaca] = useState(data.frequencia_cardiaca)
  const [qualidadeSono, setQualidadeSono] = useState(data.qualidade_do_sono)
  const [experienciaExercicios, setExperienciaExercicios] = useState(data.nome_nivel)
  const [rotinaRegular, setRotinaRegular] = useState(data.rotina_regular)
  const [quantidadeTempoPe, setQuantidadeTempoPe] = useState(data.tempo_em_pe)
  const [frequenciaTreinoSemanal, setFrequenciaTreinoSemanal] = useState(data.frequencia_treino_semanal)
  const [messageApi, contextHolder] = message.useMessage()
  const endPointAzure = localStorage.getItem("end-point-azure")

  console.log(dataNascimentoFormat)

  console.log(frequenciaCardiaca, qualidadeSono, experienciaExercicios, rotinaRegular, quantidadeTempoPe, frequenciaTreinoSemanal)

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Aluno atualizado com sucesso!',
    })
  }

  const errorMessage = () => {
    messageApi.open({
      type: 'error',
      content: 'Ops! Parece que tivemos um problema ao atualizar os dados, tente novamente mais tarde',
    })
  }

  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'Para enviar preencha todos os campos!',
    })
  }


  const handleChangeSleepQuality = (value) => {
    setQualidadeSono(value)
    console.log(value)
  }

  const handleChangeExperienciaExercicios = (value) => {
    setExperienciaExercicios(value)
    console.log(experienciaExercicios)

  }

  const handleChangeFrenquenciaTreinos = (value) => {
    setFrequenciaTreinoSemanal(value)
    console.log(frequenciaTreinoSemanal)
  }

  const id = localStorage.getItem("id_academia")
  const Nascimento = data.data_nascimento
  console.log(data.data_nascimento.substring(0, 10))

  console.log(data);

  const atualizarAluno = () => {
    axios.put(`${endPointAzure}/kalos/aluno/id/${idStudent}`, {

      nome: data.nome,
      data_nascimento: data.data_nascimento.substring(0, 10),
      telefone: data.telefone,
      email: data.email,
      foto: data.foto,
      cpf: data.cpf,
      senha: data.senha,
      questao_condicao_medica: data.questao_condicao_medica,
      questao_lesoes: data.questao_lesoes,
      questao_medicamento: data.questao_medicamento,
      peso: data.peso,
      altura: data.altura,
      objetivo:data.objetivo,
      id_genero: data.id_genero,
      frequencia_cardiaca: frequenciaCardiaca,
      rotina_regular: rotinaRegular,
      frequencia_treino_semanal: frequenciaTreinoSemanal,
      id_nivel_experiencia: experienciaExercicios,
      id_qualidade_do_sono: qualidadeSono

    }).then(({ data }) => {
      success()
      console.log(data)
    }).catch(({ error }) => {
      errorMessage()
      console.log(error)
    })
    console.log(data)
    console.log('click')
  }

  return (
    <div className="student_record">
      {contextHolder}
      <Tooltip placement='left' title="Atualizar aluno">
        <FloatButton icon={<CheckOutlined />} onClick={atualizarAluno} />
      </Tooltip>
      <p className='title_record_student'>FICHA DO ALUNO</p>
      <div className="table_data_one">
        <CardDataStudent title='Data de Nascimento' text={dataNascimentoFormat} />
        <CardDataStudent title='Gênero' text={data.genero} />
        <CardDataStudent title='Lesôes Recentes' text={data.questao_lesoes} />
      </div>
      <div className="table_data_two">
        <CardDataStudent title='Condições Médicas' text={data.questao_condicao_medica} />
        <CardDataStudent title='Medicamentos atuais' text={data.questao_medicamento} />
      </div>
      <div className="options_gym_one_edit">
        <div className="frequencia_cardiaca_record">
          <span className='textNameForInput'>Frequência Cardíaca</span>
          <Input addonAfter='bpm' width={800} value={frequenciaCardiaca} onChange={(e) => {
            setFrequenciaCardiaca(e.target.value)
          }

          } />
        </div>
        <div className="qualidade_sono">
          <span className='textNameForInput'>Qualidade de sono</span>
          <Select
            defaultValue={qualidadeSono}
            style={{
              width: 294,
            }}
            onChange={handleChangeSleepQuality}
            options={[
              {
                value: 1,
                label: 'Boa',
              },
              {
                value: 2,
                label: 'Ruim',
              },
              {
                value: 3,
                label: 'Regular',
              },
            ]}
          />
        </div>
        <div className="experiencia_exercicios">
          <span className='textNameForInput'>Experiencia com exercícios</span>
          <Select
            defaultValue={experienciaExercicios}
            style={{
              width: 294,
            }}
            onChange={handleChangeExperienciaExercicios}
            options={[
              {
                value: 1,
                label: 'Iniciante',
              },
              {
                value: 2,
                label: 'Intermediário',
              },
              {
                value: 3,
                label: 'Avançado',
              },

            ]}
          />
        </div>
      </div>
      <div className="options_gym_two">
        <div className="frequencia_cardiaca_record">
          <span className='textNameForInput'>Rotina Regular</span>
          <Input style={{
            width: 360,
          }} value={rotinaRegular} onChange={(e) => {
            setRotinaRegular(e.target.value)
          }
          } />
        </div>
        <div className="frequencia_cardiaca_record">
          <span className='textNameForInput'>Quantidade de tempo em pé</span>
          <Input style={{
            width: 294,
          }} value={quantidadeTempoPe} onChange={(e) => {
            setQuantidadeTempoPe(e.target.value)
            console.log(quantidadeTempoPe)
          }} />
        </div>
        <div className="qualidade_sono">
          <span className='textNameForInput'>Frequencia de Treino Semanal</span>
          <Select
            defaultValue={frequenciaTreinoSemanal || 'Selecionar'}
            style={{
              width: 294,
            }}
            onChange={handleChangeFrenquenciaTreinos}
            options={[
              {
                value: 1,
                label: '1',
              },
              {
                value: 2,
                label: '2',
              },
              {
                value: 3,
                label: '3',
              },
              {
                value: 4,
                label: '4',
              },
              {
                value: 5,
                label: '5',
              },
              {
                value: 6,
                label: '6',
              },
              {
                value: 7,
                label: '7',
              },
            ]}
          />
        </div>
      </div>

    </div>
  )
}
