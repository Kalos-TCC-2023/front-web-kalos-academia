import React, { useState } from 'react'
import { Avatar, Checkbox, Modal, message } from 'antd'
import { CloseOutlined, IdcardOutlined, UserOutlined } from '@ant-design/icons';

export const CardAddStundentWorkouts = ({ nameStudent, idStudentFormt, imgSrcStudent, idStudent, setDeleteState }) => {


    const [arrayStudent, setArrayStudent] = useState([])
    console.log('array', arrayStudent)

    const onChange = (checkedValues) => {
        arrayStudent.push(idStudent)
        

        console.log('checked = ', checkedValues.target.checked);
        console.log('aluno', idStudent)
        console.log('array', arrayStudent)


    };

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
                <Checkbox onClick={onChange}></Checkbox>
            </div>
        </div>
    )
}
