import React from 'react'
import { CardDataStudent } from '../CardDataStudent/CardDataStudent'
import './RecordCardStudent.css'

export const RecordCardStudent = ({ data, dataNascimentoFormat }) => {
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
            <div className="table_data_three">
                <CardDataStudent title='Frequência Cardíaca' text='-' />
                <CardDataStudent title='Qualidade de Sono' text='-' />
                <CardDataStudent title='Experiencia com exercícios' text='-' />
            </div>
        </div>
    )
}
