import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Input } from 'antd';
import './AddStudentWorkouts.css';
import Search from 'antd/es/input/Search';
import axios from 'axios';
import { CardAddStundentWorkouts } from '../../components/CardAddStundentWorkouts/CardAddStundentWorkouts';
import { FloatButton } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

export const AddStudentWorkouts = () => {
    const [studentsGym, setStudentsGym] = useState([]);
    const [checkedUser, setCheckedUser] = useState([]);
    const [arrayStundetWorkouts, setArrayStudentWorkouts] = useState([]);

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
    };

    const id = localStorage.getItem('id_academia');

    useEffect(() => {
        axios
            .get(`https://kaloscorp.cyclic.app/kalos/alunoAcademia/idAcademia/${id}`)
            .then(({ data }) => {
                console.log(data);
                console.log(data.alunos);
                setStudentsGym(data.alunos);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, []);

    const treino = localStorage.getItem('id_treino');
    console.log(treino);


    useEffect(() => {
        axios
            .get(`https://kaloscorp.cyclic.app/kalos/treinoNivelCategoria/idAcademia/${id}/idTreinoNivelCategoria/${treino}`)
            .then(({ data }) => {
                console.log(data);
                console.log(data.informacoes);
                
                // Garantindo que os IDs são do mesmo tipo (se um deles for número e outro string)
                const checkedUserIds = data.informacoes.map(item => String(item.id));

                setCheckedUser(checkedUserIds);
                console.log(checkedUserIds);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, []);
    

    const addStudentsToWorkout = () => {
        const idTreinoNivelCategoria = localStorage.getItem('id_treino'); // Substitua pelo seu ID de treino
        const alunos = arrayStundetWorkouts; // Aqui você pode adicionar vários alunos se tiver um array de IDs

        console.log(alunos);
        console.log(idTreinoNivelCategoria);

        axios
            .post('https://kaloscorp.cyclic.app/kalos/treinoAluno', {
                alunos: alunos,
                id_treino_nivel_categoria: idTreinoNivelCategoria,
            })
            .then(({ response }) => {
                console.log('Alunos adicionados com sucesso:', response.data);
            })
            .catch(({ error }) => {
                console.error('Erro ao adicionar alunos:', error);
                console.log(error);
            });
    };

    return (
        <div className="add_student_workouts">
            <Link to="/menu/aluno_adicionado_sucesso">
                <FloatButton onClick={addStudentsToWorkout} icon={<ArrowRightOutlined />} tooltip={<div>Avançar</div>} />
            </Link>
            <div className="add_student_workouts_page">
                <div className="raiz_title">
                    <h1 className="title_edit_page"> Adicionar novos alunos </h1>
                    <Breadcrumb
                        items={[
                            {
                                title: <Link to="/menu/treinos">Treinos</Link>,
                            },
                            {
                                title: <Link to="/menu/treinos/adicionar_novo_aluno_no_treino">Adicionar novos alunos</Link>,
                            },
                        ]}
                    />
                </div>
                <div className="data_add_student_workouts_page">
                    <Search className="search_header" placeholder="Buscar aluno..." onSearch={onSearch} size="large" />
                    <div className="add_student_workouts_cards">
                        {studentsGym.map((student, index) => (
                            <CardAddStundentWorkouts
                                checked={checkedUser.some((checkedStudent) => checkedStudent.id === student.id)}
                                students={studentsGym}
                                arrayStundetWorkouts={arrayStundetWorkouts}
                                idStudent={student.id}
                                key={index}
                                nameStudent={student.nome}
                                idStudentFormt={'#' + 10 + student.id}
                                imgSrcStudent={student.foto}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
