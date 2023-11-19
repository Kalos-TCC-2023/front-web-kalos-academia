import React, { useState } from 'react'
import { Avatar, Checkbox, Modal, message } from 'antd'
import { UserOutlined } from '@ant-design/icons';

export const CardAddStundentWorkouts = ({ checked, arrayStundetWorkouts, nameStudent, idStudentFormt, imgSrcStudent, idStudent, setDeleteState }) => {


    const [checkedStudent, setCheckedStudent] = useState(checked)

    const onChange = (checkedValues) => {
        setCheckedStudent(checkedValues.target.checked)

        console.log('checked = ', checkedValues.target.checked);
        console.log('aluno', idStudent)

        if (checkedValues.target.checked == true) {
            arrayStundetWorkouts.push(idStudent)
        } else if (checkedValues.target.checked == false) {
            arrayStundetWorkouts.map((student, index) => {
                if(student == idStudent){
                    arrayStundetWorkouts.splice(index, 1)
                    console.log(arrayStundetWorkouts)
                }
            })
        }

    }

    console.log(arrayStundetWorkouts)

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
                <Checkbox checked={checkedStudent} onChange={onChange}></Checkbox>
            </div>
        </div>
    )
}
