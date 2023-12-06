import React, { createContext, useEffect, useState } from 'react'
import { Avatar, Modal, message } from 'antd'
import { CloseOutlined, IdcardOutlined, UserOutlined } from '@ant-design/icons';
import './UserAddStudents.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ReachableContext = createContext(null);
const UnreachableContext = createContext(null);

const config = {
    title: 'Você realmente quer excluir esse aluno?',
    content: 'esse aluno será excluido permanentemente da sua academia.'
}

export const UserAddStudents = ({ nameStudent, idStudentFormt, imgSrcStudent, idStudent, setDeleteState }) => {

    const [modal, contextHolder] = Modal.useModal()
    const navigate = useNavigate()
    const idAcademia = localStorage.getItem("id_academia")
    const endPointAzure = localStorage.getItem("end-point-azure")


    const aboutStudent = () => {
        localStorage.setItem('id_aluno', idStudent)
        const idAluno = localStorage.getItem('id_aluno')
        navigate("/menu/alunos/sobre_aluno")

        console.log(idAluno)
    }

    const deleteStudentForGym = (idStundet, idAcademia, confirm) => {
        if (confirm == true) {
            axios.delete(`${endPointAzure}/kalos/alunoAcademia/idAluno/${idStundet}/idAcademia/${idAcademia}`)
                .then(({ data }) => {
                    console.log(data)
                    setDeleteState(idStudent)
                }).catch(({ erro }) => {
                    console.log(erro)
                })
        } else {
            return
        }

    }


    // 300px

    return (
        <div className='user_add_card'>
            <div className="section_information_students">
                <Avatar src={imgSrcStudent} size={40}><UserOutlined /></Avatar>
                <div className="name_id">
                    <p className='name_student'>{nameStudent}</p>
                    <span className='id_student'>{idStudentFormt}</span>
                </div>
            </div>

            <div className="buttons_actions">
                <div onClick={() => (
                    aboutStudent()
                )} className="information_student"><IdcardOutlined /></div>
                <div onClick={async () => {
                    const confirmed = await modal.confirm(config);

                    console.log('Confirmed: ', confirmed, idStudent)
                    deleteStudentForGym(idStudent, idAcademia, confirmed)
                }} className="delete_student"><CloseOutlined /></div>
            </div>
            {contextHolder}
        </div>
    )
}
