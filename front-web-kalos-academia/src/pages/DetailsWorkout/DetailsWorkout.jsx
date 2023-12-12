import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { ApiDetailsWorkout } from './Api/ApiDetailsWorkout';
import './DetailsWorkout.css';
import { CardCrudWorkouts } from '../../components/CardCrudWorkouts/CardCrudWorkouts';
import { ApiWokoutPeoples } from './Api/ApiWorkoutPeoples';
import { UserAddStudents } from '../../components/UserAddStudents/UserAddStudents';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';

export default class DetailsWorkout extends Component {
  state = {
    workoutDetails: {}, // Inicializa os detalhes do treino como um objeto vazio
    peoplesWorkout: []
  };

  componentDidMount() {
    this.handleDetailsExercise();
    this.handlePeoplesWorkout();
  }

  handleDetailsExercise = () => {
    ApiDetailsWorkout()
      .then((data) => {
        const { informacoes } = data;
        this.setState({ workoutDetails: informacoes });
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao carregar os detalhes do treino:', error);
      });
  };

  handlePeoplesWorkout = () => {
    ApiWokoutPeoples()
      .then((data) => {
        const { informacoes } = data;
        this.setState({ peoplesWorkout: informacoes });
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao carregar as pessoas do treino:', error);
      });
  };

  render() {
    const { workoutDetails, peoplesWorkout } = this.state;

    return (
      <div className='page-details-workout'>
        <Helmet>
          <title>Detalhes do Treino</title>
        </Helmet>
        <Link to='/menu/treinos'>
          <ArrowLeftOutlined />
        </Link>
        {Object.keys(workoutDetails).length > 0 && (
          <div className='detailsWorkout'>
            <div className='detailsWorkout-container'>
              <img className='image-detailsworkout' src={workoutDetails.foto} alt={workoutDetails.nome} />
              <div className='content-details-workout'>
                <div>
                  <p className='details-workout-name'>{workoutDetails.nome}</p>
                </div>
                <p className='details-workout-date'>{workoutDetails.data_criacao}</p>
              </div>
            </div>
            <div className='exercises-container-details-workout'>
              <p className='p-player-exercise'>Player de exercícios</p>
              {workoutDetails.exercicios.length > 0 ? (
                workoutDetails.exercicios.map((exercicio, index) => (
                  <div className='content-details-workout-exercise' key={index}>
                    <img
                      className='photo-exercise'
                      src={`https://img.youtube.com/vi/${exercicio.anexo.replace("https://www.youtube.com/watch?v=", "")}/0.jpg`}
                      alt=''
                    />
                    <div className='exercise-texto'>
                      <p className='text-player-name-exercise'>{exercicio.nome}</p>
                      <div className='sets-repts'>
                        <p className='text-serie-repts'>Série: <span className='span-serie-repets'>{exercicio.series}</span></p>
                        <p className='text-serie-repts'>Repetição/Duração: <span className='span-serie-repets'>{exercicio.repeticoes || exercicio.duracao}</span></p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Nenhum Exercício adicionado ao treino</p>
              )}
            </div>
            <div className='container-peoples-workout'>
              <p>Alunos matriculados no treino</p>
              {peoplesWorkout.length > 0 ? (
                peoplesWorkout.map((people) => (
                  <div key={people.id} className='container-peoples'>
                    <UserAddStudents nameStudent={people.nome} imgSrcStudent={people.foto} idStudentFormt={"#" + 1000 + people.id} idStudent={people.id} />
                  </div>
                ))
              ) : (
                <p>Não há pessoas envolvidas neste treino.</p>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
