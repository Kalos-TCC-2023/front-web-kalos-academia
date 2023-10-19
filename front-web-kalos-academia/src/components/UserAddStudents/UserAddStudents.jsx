import React, { createContext } from 'react'
import { Avatar, Modal } from 'antd'
import { CloseOutlined, IdcardOutlined, UserOutlined } from '@ant-design/icons';
import './UserAddStudents.css'
const ReachableContext = createContext(null);
const UnreachableContext = createContext(null);

const config = {
    title: 'Você realmente quer excluir esse aluno?',
    content: 'esse aluno será excluido permanentemente da sua academia'
}

export const UserAddStudents = ({nameStudent, idStudentFormt, imgSrcStudent, idStudent}) => {

    const [modal, contextHolder] = Modal.useModal()

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
                <div className="information_student"><IdcardOutlined /></div>
                <div onClick={async () => {
                    const confirmed = await modal.confirm(config);
                    console.log('Confirmed: ', confirmed, idStudent);
                }} className="delete_student"><CloseOutlined /></div>
            </div>
            {contextHolder}
        </div>
    )
}
