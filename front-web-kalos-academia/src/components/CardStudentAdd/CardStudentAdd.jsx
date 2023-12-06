import React, { useEffect, useState } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Divider } from 'antd';
import axios from 'axios'
import moment from 'moment';

export const CardStudentAdd = ({ idStudent }) => {


    const [ageStudentFormat, setAge] = useState('')
    const [data_de_nascimento_formart, setDate] = useState('')
    const [data, setData] = useState('')
    console.log(data)
    const endPointAzure = localStorage.getItem("end-point-azure")


    useEffect(() => {

        axios.get(`${endPointAzure}/kalos/aluno/id/${idStudent}`)
            .then(({ data }) => {

                const dataNascimento = data.aluno.data_nascimento

                const newFormatDate = dataNascimento.replace('T00:00:00.000Z', '')
                const data_de_nascimento_formart = moment(newFormatDate).format('L')
                setDate(data_de_nascimento_formart)
                const formatOneDate = newFormatDate.replace('-', '').replace('-', '')

                const dataNascimentoNowFormat = moment(formatOneDate, "YYYYMMDD").fromNow()
                const ageStudentFormat = dataNascimentoNowFormat.replace('há', '').replace('anos', '')
                setAge(ageStudentFormat)
                setData(data.aluno)

            })

    }, [ageStudentFormat, data_de_nascimento_formart])

    return (
        <div>
            <div className='ajuste'>
                <div className="data_basic_buttons">
                    <Avatar size={250} src={data.foto} icon={<UserOutlined />} />
                    <div className="buttons_data_basic">
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
                                    <span className='number'>{data.altura}<span className='complement'>cm</span></span>
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
            </div>
        </div>
    )
}
