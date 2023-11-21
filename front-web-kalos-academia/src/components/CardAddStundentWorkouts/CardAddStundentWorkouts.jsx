import React, { useEffect, useState } from 'react';
import { Avatar, Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "./CardAddStundentWorkouts.css"
import axios from 'axios';

export const CardAddStundentWorkouts = ({ checked, arrayStundetWorkouts, nameStudent, idStudentFormt, imgSrcStudent, idStudent, students }) => {
  const [checkedStudent, setCheckedStudent] = useState(checked)
  const [teste, setTeste] = useState([])

  const treino = localStorage.getItem("id_treino")
  const id_academia = localStorage.getItem("id_academia")
  console.log(students)


  useEffect(() => {
    axios.get(`https://kaloscorp.cyclic.app/kalos/treinoNivelCategoria/idAcademia/${id_academia}/idTreinoNivelCategoria/${treino}`)
      .then(({ data }) => {
        console.log(data)
        console.log(data.informacoes)

        const test = data.informacoes
       
        setTeste(data.informacoes)


      }).catch((erro) => {
        console.log(erro)
      })
  }, [])

  const onChange = (checkedValues) => {
    setCheckedStudent(checkedValues.target.checked)

    console.log('checked = ', checkedValues.target.checked);
    console.log('aluno', idStudent)

    if (checkedValues.target.checked == true) {
      arrayStundetWorkouts.push(idStudent)
    } else if (checkedValues.target.checked == false) {
      arrayStundetWorkouts.map((student, index) => {
        if (student == idStudent) {
          arrayStundetWorkouts.splice(index, 1)
          console.log(arrayStundetWorkouts)
        }
      })
    }


  }

  const checkStudent = () => {
    students.map((student) => {
      teste.map((studentWourkts) => {
        if (student.id == studentWourkts.id) {
          setCheckedStudent(true)
        } else {
          return
        }
      })
    })
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
  );
};
