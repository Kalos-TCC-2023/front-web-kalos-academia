import React, { useState } from 'react'
import { CardDataStudent } from '../CardDataStudent/CardDataStudent'
import { Input, Select } from 'antd'
import './RecordEditCardStudent.css'

export const RecordEditCardStudent = ({ data, dataNascimentoFormat }) => {

  const [frequenciaCardiaca, setFrequenciaCardiaca] = useState(data.frequencia_cardiaca)
  const [qualidadeSono, setQualidadeSono] = useState(data.qualidade_do_sono)
  const [experienciaExercicios, setExperienciaExercicios] = useState(data.nome_nivel)
  const [rotinaRegular, setRotinaRegular] = useState(data.rotina_regular)
  const [quantidadeTempoPe, setQuantidadeTempoPe] = useState(data.tempo_em_pe)
  const [frequenciaTreinoSemanal, setFrequenciaTreinoSemanal] = useState(data.frequencia_treino_semanal)

  const handleChangeSleepQuality = (value) => {
    setQualidadeSono(value)
    console.log(qualidadeSono)
  }

  const handleChangeExperienciaExercicios = (value) => {
    setExperienciaExercicios(value)
    console.log(experienciaExercicios)

  }

  const handleChangeFrenquenciaTreinos = (value) => {
    setFrequenciaTreinoSemanal(value)
    console.log(frequenciaTreinoSemanal)
  }
    

    return (
        <div className="student_record">
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
                updateFielHandler('frequencia_cardiaca', e.target.value)
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
                updateFielHandler('rotina_regular', e.target.value)
              }
              } />
            </div>
            <div className="frequencia_cardiaca_record">
              <span className='textNameForInput'>Quantidade de tempo em pé</span>
              <Input style={{
                width: 294,
              }} value={quantidadeTempoPe} onChange={(e) => {
                setQuantidadeTempoPe(e.target.value)
                updateFielHandler('tempo_em_pe', e.target.value)
                console.log(dataStundetGym)
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
