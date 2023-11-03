import React, { useEffect, useState } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Button } from 'antd';
import './InitialDataStudent.css'
import { Loader } from '../Loader/Loader';
import { CardDataStudent } from '../CardDataStudent/CardDataStudent';
import { RecordCardStudent } from '../RecordCardStudent/RecordCardStudent';
import moment from 'moment';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const InitialDataStudent = ({ data, status, idStudent }) => {

    const [ageStudentFormat, setAge] = useState('')
    const [data_de_nascimento_formart, setDate] = useState('')
    const [wokoutsInformations, setWokoutsInformation] = useState('')



    useEffect(() => {

        axios.get(`https://kaloscorp.cyclic.app/kalos/aluno/id/${idStudent}`)
            .then(({ data }) => {

                console.log(data)

                const dataNascimento = data.aluno.data_nascimento

                console.log(dataNascimento)

                const newFormatDate = dataNascimento.replace('T00:00:00.000Z', '')
                const data_de_nascimento_formart = moment(newFormatDate).format('L')
                setDate(data_de_nascimento_formart)
                const formatOneDate = newFormatDate.replace('-', '').replace('-', '')

                const dataNascimentoNowFormat = moment(formatOneDate, "YYYYMMDD").fromNow()
                const ageStudentFormat = dataNascimentoNowFormat.replace('há', '').replace('anos', '')
                setAge(ageStudentFormat)

            })

    }, [ageStudentFormat, data_de_nascimento_formart])

    useEffect(() => {
        
    })

    return (
        <div className='data_student'>

            {status !== 200 ? <Loader className='loadera' />
                : (
                    <div className='ajuste'>
                        <div className="data_basic_buttons">
                            <Avatar size={250} src={data.foto} icon={<UserOutlined />} />
                            <div className="buttons_data_basic">
                                <div className="buttons_initial_data_student_options">
                                    <Link className='about_student_initial_data_gym' to=''>
                                        <Button shape='circle'>SOBRE O ALUNO</Button>
                                    </Link>
                                    <Link className='idit_student_gym' to=''>
                                        <Button shape='circle'>EDITAR ALUNO</Button>
                                    </Link>
                                </div>
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
                                            <span className='number'>{ageStudentFormat}</span>
                                        </div>

                                    </div>
                                    <Divider />
                                </div>
                                <div className="goal_student">
                                    <span className='goal'>Meta: <span className='goal_gym_student'>“{data.objetivo}”</span></span>
                                </div>
                            </div>

                        </div>

                        <RecordCardStudent data={data} dataNascimentoFormat={data_de_nascimento_formart} />
                        <div className='wokouts_student_gym'>

                        </div>
                    </div>

                )}

        </div>
    )
}
