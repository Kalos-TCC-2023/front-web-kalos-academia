import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Divider } from 'antd';
import './InitialDataStudent.css'
import { Loader } from '../Loader/Loader';
import { CardDataStudent } from '../CardDataStudent/CardDataStudent';

export const InitialDataStudent = ({ data, status }) => {

    console.log(status)

    return (
        <div className='data_student'>
            {status !== 200 ? <Loader className='loadera' />
                : (
                    <div className='ajuste'>
                        <div className="data_basic_buttons">
                            <Avatar size={250} src={data.foto} icon={<UserOutlined />} />

                            <div className="buttons_data_basic">
                                <div className="buttons">aaaaa</div>
                                <div className="data_information_student">
                                    <div className="name_token">
                                        <span className="name_student_record">{data.nome}</span>
                                        <span className='token'>#{1000 + data.id}</span>
                                    </div>
                                    <div className="weight_height_age">
                                        <div className="weight">
                                            <span className="green">PESO</span>
                                            <span className='number'>{data.peso}<span className='complement'>kg</span></span>
                                        </div>
                                        <Divider type="vertical" />
                                        <div className="height">
                                            <span className="green">ALTURA</span>
                                            <span className='number'>1,70<span className='complement'>cm</span></span>
                                        </div>
                                        <Divider type="vertical" />
                                        <div className="age">
                                            <span className="green">IDADE</span>
                                            <span className='number'>18</span>
                                        </div>

                                    </div>
                                    <Divider />
                                </div>
                                <div className="goal_student">
                                    <span className='goal'>Meta: <span className='goal_gym_student'>“{data.objetivo}”</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="student_record">
                            <p className='title_record_student'>FICHA DO ALUNO</p>
                            <div className="table_data_one">
                                <CardDataStudent title='Data de Nascimento' text={data.data_nascimento} />
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
                        HGRSJRSJRS
                    </div>
                )}
        </div>
    )
}
