import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Breadcrumb, Input, Button, Pagination } from 'antd'
import { Link } from 'react-router-dom'
const { Search } = Input
import './AddStudentPage.css'
import { UserCardNewStudent } from '../UserCardNewStudent/UserCardNewStudent'
import axios from 'axios'
import { Loader } from '../Loader/Loader'

export const AddStudentPage = () => {

    const [students, setStudents] = useState([])
    const [allStudents, setAllStudents] = useState([])
    const [searchStudens, setSearchStudens] = useState('')
    const [studensPerPage, setStudentsPerPage] = useState(15)
    const [current, setCurrentPage] = useState(0)
    const [studentGym, setStudentsGym] = useState([])

    const pages = Math.ceil(students.length / studensPerPage)
    const startIndex = current * studensPerPage
    const endIndex = startIndex + studensPerPage
    const currentStudents = students.slice(startIndex, endIndex)

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value)
        const search = students.filter((student) => student.nome.toLowerCase().includes(value.toLowerCase()))
        console.log(search)
    }

    const filteredStudens = !!searchStudens ? allStudents.filter((student) => {
        return student.nome.toLowerCase().includes(
            searchStudens.toLocaleLowerCase()
        )
    }) : students

    const handleChange = (e) => {
        const { value } = e.target

        setSearchStudens(value)
        console.log(searchStudens)
    }


    const id = localStorage.getItem("id_academia")


    useEffect(() => {
        axios.get(`https://kaloscorp.cyclic.app/kalos/alunoAcademia/idAcademia/${id}`)
            .then(({ data }) => {

                setStudentsGym(data.alunos)
            }).catch((erro) => {
                console.log(erro)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://kaloscorp.cyclic.app/kalos/aluno`)
            .then(({ data }) => {
                setStudents(data.alunos)
                setAllStudents(data.alunos)
            }).catch((erro) => {
                console.log(erro)
            })
    }, [])

    const studentForGym = allStudents.map((student, indexa) => {
        studentGym.map((studentFgym, index) => {
            if (student.id == studentFgym.id) {
                allStudents.splice(indexa, 1)
            }
        })
    })


    return (
        <div className='students_page'>
            <Helmet>
                <title>Kalos - Estudantes</title>
            </Helmet>
            <div className="students_gym">
                <div className="raiz_title">
                    <h1 className='title_edit_page'>Alunos</h1>
                    <Breadcrumb
                        items={[
                            {
                                title: <Link to='/menu/alunos'>Alunos</Link>,
                            },
                            {
                                title: <Link to='/menu/alunos/novo_aluno'>Adicionar novo aluno</Link>,
                            },

                        ]}
                    />
                </div>
                <div className="header_gym_students">
                    <Search
                        className='search_header'
                        placeholder="Adicionar novo aluno..."
                        onSearch={onSearch}
                        value={searchStudens}
                        onChange={handleChange}
                        size='large'
                    />
                    <div className="buttons_add_students_my_students">

                        <Link className='' to='/menu/alunos'>
                            <Button shape='circle'>MEUS ALUNOS</Button>
                        </Link>
                        <Link className='all_students' to='/menu/alunos/novo_aluno'>
                            <Button shape='circle'>ADICIONAR NOVO ALUNO</Button>
                        </Link>
                    </div>
                </div>
                <div className="my_students_gym">
                    {
                        searchStudens.length == 0 ? (
                            currentStudents.map((student) => (
                                <UserCardNewStudent key={student.id} studentRealId={student.id} nameStudent={student.nome} idStudentFormt={'#' + 10 + student.id} imgSrcStudent={student.foto} />
                            ))
                        ) : (

                            filteredStudens.map((student, index) => (
                                <UserCardNewStudent key={student.id} studentRealId={student.id} nameStudent={student.nome} idStudentFormt={'#' + 10 + student.id} imgSrcStudent={student.foto} />
                            ))


                        )
                    }

                </div>

            </div>
            <div className="pagination_students">


                {Array.from(Array(pages), (item, index) => {
                    return <Button key={index} type='text' value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</Button>
                })}

                {/* <Pagination current={current} onChange={onChange} defaultCurrent={0} total={mutiplePages - 10} /> */}
            </div>
        </div>
    )
}
