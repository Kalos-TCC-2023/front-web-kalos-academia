import React, { useEffect, useState } from 'react';
import { Avatar, Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './CardAddStundentWorkouts.css';
import axios from 'axios';

export const CardAddStundentWorkouts = ({ arrayStundetWorkouts, nameStudent, idStudentFormt, imgSrcStudent, idStudent }) => {
  const [checkedStudent, setCheckedStudent] = useState(false);

  useEffect(() => {
    setCheckedStudent(arrayStundetWorkouts.includes(idStudent));
  }, [arrayStundetWorkouts, idStudent]);

  const onChange = (e) => {
    const isChecked = e.target.checked;
    setCheckedStudent(isChecked);

    if (isChecked) {
      arrayStundetWorkouts.push(idStudent);
    } else {
      const index = arrayStundetWorkouts.indexOf(idStudent);
      if (index !== -1) {
        arrayStundetWorkouts.splice(index, 1);
      }
    }
  };

  return (
    <div className='user_add_card'>
      <div className='section_information_students'>
        <Avatar src={imgSrcStudent} size={40}>
          <UserOutlined />
        </Avatar>
        <div className='name_id'>
          <p className='name_student'>{nameStudent}</p>
          <span className='id_student'>{idStudentFormt}</span>
        </div>
      </div>

      <div className='buttons_actions'>
        <Checkbox checked={checkedStudent} onChange={onChange}></Checkbox>
      </div>
    </div>
  );
};
