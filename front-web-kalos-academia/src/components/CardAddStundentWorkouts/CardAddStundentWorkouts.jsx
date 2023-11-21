import React, { useState } from 'react';
import { Avatar, Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "./CardAddStundentWorkouts.css"

export const CardAddStundentWorkouts = ({ checked, arrayStundetWorkouts, nameStudent, idStudentFormt, imgSrcStudent, idStudent, setDeleteState }) => {
  const [checkedStudent, setCheckedStudent] = useState(checked);

  const toggleSelection = () => {
    setCheckedStudent(!checkedStudent);

    if (!checkedStudent) {
      arrayStundetWorkouts.push(idStudent);
    } else {
      arrayStundetWorkouts = arrayStundetWorkouts.filter((student) => student !== idStudent);
    }

    console.log('Alunos selecionados:', arrayStundetWorkouts);
  };

  return (
    <div className={`user_add_card ${checkedStudent ? 'selected' : ''}`} onClick={toggleSelection}>
      <div className="section_information_students">
        <Avatar src={imgSrcStudent} size={40}>
          <UserOutlined />
        </Avatar>
        <div className="name_id">
          <p className="name_student">{nameStudent}</p>
          <span className="id_student">{idStudentFormt}</span>
        </div>
      </div>

      <div className="buttons_actions">
        <Checkbox checked={checkedStudent}></Checkbox>
      </div>
    </div>
  );
};
