import React, { useEffect, useState } from 'react'
import './StepTwoAddStudentForGym.css'
import axios from 'axios'
import moment from 'moment';
import { CardStudentAdd } from '../CardStudentAdd/CardStudentAdd';
import { CardDataStudent } from '../CardDataStudent/CardDataStudent';
import { Select, Input } from 'antd';
const { TextArea } = Input;
import { Loader } from '../Loader/Loader'

export const StepTwoAddStudentForGym = ({ dataStundetGym, updateFielHandler, idStudent, setValidation }) => {

  const [ageStudentFormat, setAge] = useState('')
  const [data_de_nascimento_formart, setDate] = useState('')
  const [data, setData] = useState('')
  const [frequenciaCardiaca, setFrequenciaCardiaca] = useState('')
  const [qualidadeSono, setQualidadeSono] = useState('')
  const [experienciaExercicios, setExperienciaExercicios] = useState('')
  const [rotinaRegular, setRotinaRegular] = useState('')
  const [quantidadeTempoPe, setQuantidadeTempoPe] = useState('')
  const [frequenciaTreinoSemanal, setFrequenciaTreinoSemanal] = useState('')
  const [observacoesAdicionais, setObservacoesAdicionais] = useState('')

  const handleChangeSleepQuality = (value) => {
    setQualidadeSono(value)
    updateFielHandler('id_qualidade_sono', value)
  }

  const handleChangeExperienciaExercicios = (value) => {
    setExperienciaExercicios(value)
    updateFielHandler('id_nivel_experiencia', value)
  }

  const handleChangeFrenquenciaTreinos = (value) => {
    setFrequenciaTreinoSemanal(value)
    updateFielHandler('frequencia_treino_semanal', value)
  }

  useEffect(() => {

    if (data == '') {
      axios.get(`https://kaloscorp.cyclic.app/kalos/aluno/id/${idStudent}`)
        .then(({ data }) => {

          const dataNascimento = data.aluno.data_nascimento
          console.log(data)
          const newFormatDate = dataNascimento.replace('T00:00:00.000Z', '')
          const data_de_nascimento_formart = moment(newFormatDate).format('L')
          setDate(data_de_nascimento_formart)
          const formatOneDate = newFormatDate.replace('-', '').replace('-', '')

          const dataNascimentoNowFormat = moment(formatOneDate, "YYYYMMDD").fromNow()
          const ageStudentFormat = dataNascimentoNowFormat.replace('há', '').replace('anos', '')
          setAge(ageStudentFormat)
          setData(data.aluno)
          updateFielHandler('id_aluno', idStudent)
          setFrequenciaCardiaca(data.frequencia_cardiaca)

        }).catch((err) => {
          console.log(err)
        })
    } else {
      return
    }

  }, [])

  return (

    <div className='step_two_add_student_gym'>
      {data == '' ? <Loader /> : (
        <div>
          <CardStudentAdd idStudent={idStudent} />
          <div className="student_record">
          <span className='title_record_student'>FICHA DO ALUNO</span>
          <div className="table_data_one">
            <CardDataStudent title='Data de Nascimento' text={data_de_nascimento_formart} />
            <CardDataStudent title='Gênero' text={data.genero} />
            <CardDataStudent title='Lesôes Recentes' text={data.questao_lesoes} />
          </div>
          <div className="table_data_one">
            <CardDataStudent title='Condições Médicas' text={data.questao_condicao_medica} />
            <CardDataStudent title='Medicamentos atuais' text={data.questao_medicamento} />
          </div>
          <span className='title_record_student_wourkt'>FICHA DE TREINAMENTO</span>
          <div className="options_gym_one">
            <div className="frequencia_cardiaca_record">
              <span className='textNameForInput'>Frequência Cardíaca</span>
              <Input addonAfter='bpm' value={frequenciaCardiaca} onChange={(e) => {
                setFrequenciaCardiaca(e.target.value)
                updateFielHandler('frequencia_cardiaca', e.target.value)
              }

              } />
            </div>
            <div className="qualidade_sono">
              <span className='textNameForInput'>Qualidade de sono</span>
              <Select
                defaultValue="Selecionar"
                style={{
                  width: 204,
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
                defaultValue="Selecionar"
                style={{
                  width: 204,
                }}
                onChange={handleChangeExperienciaExercicios}
                options={[
                  {
                    value: 1,
                    label: 'Junior',
                  },
                  {
                    value: 2,
                    label: 'Pleno',
                  },
                  {
                    value: 3,
                    label: 'Senior',
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
                updateFielHandler('rotina_regular', e.target.value)
              }
              } />
            </div>
            <div className="frequencia_cardiaca_record">
              <span className='textNameForInput'>Quantidade de tempo em pé</span>
              <Input style={{
                width: 204,
              }} value={quantidadeTempoPe} onChange={(e) => {
                setQuantidadeTempoPe(e.target.value)
                updateFielHandler('tempo_em_pe', e.target.value)
                console.log(dataStundetGym)
              }} />
            </div>
            <div className="qualidade_sono">
              <span className='textNameForInput'>Frequencia de Treino Semanal</span>
              <Select
                defaultValue="Selecionar"
                style={{
                  width: 204,
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
        </div>
        
      )}

    </div>
  )
}
