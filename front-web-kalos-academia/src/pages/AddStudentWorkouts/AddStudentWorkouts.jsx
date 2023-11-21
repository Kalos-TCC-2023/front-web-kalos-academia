import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Breadcrumb, Button, Input } from 'antd';

import './AddStudentWorkouts.css'
import Search from 'antd/es/input/Search';
import axios from 'axios';
import { CardAddStundentWorkouts } from '../../components/CardAddStundentWorkouts/CardAddStundentWorkouts';

export const AddStudentWorkouts = () => {

    const [studentsGym, setStudentsGym] = useState([])
    const [allStudens, setAllStudents] = useState([])
    const [searchStudens, setSearchStudens] = useState('')
    const [arrayStundetWorkouts, setArrayStudentWorkouts] = useState([])
    const [idStudentWorkouts, setIdStundetWorkouts] = useState('')
    const [checked, setChecked] = useState(false)

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value)
    }

    const id = localStorage.getItem("id_academia")

    useEffect(() => {
        axios.get(`https://kaloscorp.cyclic.app/kalos/alunoAcademia/idAcademia/${id}`)
            .then(({ data }) => {
                console.log(data)
                console.log(data.alunos)
                setStudentsGym(data.alunos)
                setAllStudents(data.alunos)
            }).catch((erro) => {
                console.log(erro)
            })
    }, [])

    const treino = localStorage.getItem("id_treino")
    console.log(treino)

    const [teste, setTeste] = useState([])


    useEffect(() => {
        axios.get(`https://kaloscorp.cyclic.app/kalos/treinoNivelCategoria/idAcademia/${id}/idTreinoNivelCategoria/${treino}`)
          .then(({ data }) => {
            console.log(data)
            console.log(data.informacoes)
            setTeste(data.informacoes)

            studentsGym.map((student) => {
                data.informacoes.map((studentWourkts) => {
                  if (student.id == studentWourkts.id) {
                    setChecked(true)
                  } else {
                    setChecked(false)
                  }
                })
              })
      
    
    
          }).catch((erro) => {
            console.log(erro)
          })
      }, [])

  
    return (
        <div className='add_student_workouts'>
            <div className="add_student_workouts_page">
                <div className="raiz_title">
                    <h1 className='title_edit_page'> Adicionar novos alunos </h1>
                    <Breadcrumb
                        items={[
                            {
                                title: <Link to='/menu/treinos'>Treinos</Link>,
                            },
                            {
                                title: <Link to='/menu/treinos/adicionar_novo_aluno_no_treino'>Adicionar novos alunos</Link>,
                            },


                        ]}
                    />
                </div>
                <div className="data_add_student_workouts_page">
                    <Search
                        className='search_header'
                        placeholder="Buscar aluno..."
                        onSearch={onSearch}
                        size='large'
                    />
                    <div className="add_student_workouts_cards">

                        {
                            studentsGym.map((student, index) => (
                                <CardAddStundentWorkouts checked={checked} students={studentsGym} arrayStundetWorkouts={arrayStundetWorkouts} idStudent={student.id} key={index} nameStudent={student.nome} idStudentFormt={'#' + 10 + student.id} imgSrcStudent={student.foto} />
                            ))

                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
