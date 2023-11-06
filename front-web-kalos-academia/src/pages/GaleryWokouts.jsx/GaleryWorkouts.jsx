import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ButtonDefaultKalos from '../../components/Button/ButtonDefaultKalos';
import { Link } from 'react-router-dom';
import arrowBack from './image/arrow-back-create-workout.png';
import { Input } from 'antd';
import './GaleryWorkouts.css';
import emptyGaleryPhoto from './image/galerykalos.svg';
import photoDefaultExercise from './image/workoutgymTraine.jpeg';

import AddExercise from '../../components/CrudExercise/AddExercise';

import { ArrowLeftOutlined } from '@ant-design/icons';
import { ShowAllExercises } from './api/apiShowAllExercises';
import CrudWokoutCardExercise from './componentGaleryWorkout/CrudWorkoutCardExercise';

export default class GaleryWokouts extends Component {
  state = {
    selectedFile: null,
    onSearch: null,
    showAddExercise: false,
    showEditExercise: false,
    exercises: [],
    selectedCard: null,
  };

  handleShowAddExercise = () => {
    this.setState({ showAddExercise: true });
  };

  handleHideAddExercise = () => {
    this.setState({ showAddExercise: false });
  };

  handleShowExercise = () =>{
    this.setState({showEditExercise: true});
  }

  toggleCardVisibility = (index) => {
    this.setState({ selectedCard: index });
  };

  componentDidMount() {
    ShowAllExercises()
      .then((data) => {
        const exercisesApi = data.exercicios;
        this.setState({ exercises: exercisesApi });
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao carregar os dados:', error);
      });
  }

  render() {
    const { exercises, selectedCard } = this.state;
    return (
      <div className='galery-workouts'>
        <div className='page-default'>
          <Helmet>
            <title>Kalos - Criar Treinos</title>
          </Helmet>
          <div className='header-galery'>
            <div className='title-galery'>Galeria de Exercícios</div>
            <div className='container-header'>
              <div className='arrow-back-create-workouts'>
                <Link to='/menu/treinos'>
                  <ArrowLeftOutlined />
                </Link>
              </div>
              <div className='search-group-workouts'>
                <Input.Search
                  className='search_header-workout search_header'
                  placeholder="Buscar exercicios..."
                  onSearch={this.onSearch}
                  size='large'
                />
              </div>
              <div className='buttonsExercise'>
                <Link to='/menu/treinos'>
                  <ButtonDefaultKalos
                    textButton="TREINOS"
                    width="150px"
                    height="40px"
                    primaryColor="rgb(245, 247, 249)"
                    secondaryColor="rgb(0, 254, 144, 1)"
                    className="buttonDefault"
                  />
                </Link>
                <Link to='/menu/criarTreinos'>
                  <ButtonDefaultKalos
                    textButton="CRIAR NOVO TREINO"
                    width="200px"
                    height="40px"
                    primaryColor="rgb(245, 247, 249)"
                    secondaryColor="rgb(0, 254, 144, 1)"
                    className="buttonDefault"
                  />
                </Link>
                <Link to='/menu/galeria_exercicios'>
                  <ButtonDefaultKalos
                    textButton="GALERIA DOS EXERCÍCIOS"
                    width="200px"
                    height="40px"
                    primaryColor="rgb(245, 247, 249)"
                    secondaryColor="rgb(0, 254, 144, 1)"
                    className="buttonDefault"
                  />
                </Link>
              </div>
            </div>
            <div>
              {exercises.length === 0 ? (
                <div className='container-cards-galery-workouts-empty'>
                  <div className='container-exercise-empty'>
                    <img src={emptyGaleryPhoto} alt="empty photo" />
                    <p className='title-empty-galeryworkouts'>GALERIA VÁZIA...</p>
                    <div className='text-empty-galeryworkouts'>
                      Para anexar mídia a seus treinos faça upload de imagens e vídeos que ajudem os alunos a treinar!
                    </div>
                    {this.state.showAddExercise ? (
                      <AddExercise onHideAddExercise={this.handleHideAddExercise} />
                    ) : (
                      <div className='btn-upload-make' onClick={this.handleShowAddExercise}>
                        FAZER UPLOAD
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className='container-exercises-all'>
                  <div className='add-exercise'>

                  {this.state.showAddExercise ? (
                      <AddExercise onHideAddExercise={this.handleHideAddExercise} />
                    ) : (
                      <div className='more-exercise' onClick={this.handleShowAddExercise}>
                        <p>+</p>
                      </div>
                    )}
                  </div>
                  {exercises.map((exercise, index) => (
                    <div className='card-exercise' key={exercise.id}>
                      {exercise.anexo === "anexo2.png" ? (
                        <img className='image-card-exercise' src={photoDefaultExercise} alt={exercise.nome} />
                      ) : (
                        <img className='image-card-exercise' src={exercise.anexo} alt={exercise.nome} />
                      )}
                      <div
                        className={`change-card ${selectedCard === index ? 'visible' : ''}`}
                        onClick={() => this.toggleCardVisibility(index)}
                      >
                        {selectedCard === index && (
                          <CrudWokoutCardExercise  className="container-crud-workouts" />
                        )}
                        <div className='text-exercise-card'>
                          <p className='name-exercise-card'>{exercise.nome}</p>
                          <p className='description-exercise-card'>{exercise.descricao}</p>
                        </div>

                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
