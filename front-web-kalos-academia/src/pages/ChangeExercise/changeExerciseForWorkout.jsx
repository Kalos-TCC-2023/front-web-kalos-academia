import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ButtonDefaultKalos from '../../components/Button/ButtonDefaultKalos';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Loader } from '../../components/Loader/Loader';
import { ShowAllExercises } from '../GaleryWokouts.jsx/api/apiShowAllExercises';
import './changeExerciseForWorkout.css';

export default class ChangeExercise extends Component {
  state = {
    selectedFile: null,
    onSearch: null,
    showAddExercise: false,
    showEditExercise: false,
    exercises: [],
    selectedCard: null,
    loading: true,
  };

  handleShowAddExercise = () => {
    this.setState({ showAddExercise: true });
  };

  handleHideAddExercise = () => {
    this.setState({ showAddExercise: false });
  };

  toggleCardVisibility = (index) => {
    this.setState({ selectedCard: index });
  };

  onSearch = (value) => {
    // Implement your search logic here
    console.log('Search value:', value);
  };

  componentDidMount() {
    ShowAllExercises()
      .then((data) => {
        const exercisesApi = data.exercicios;
        this.setState({ exercises: exercisesApi, loading: false });
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao carregar os dados:', error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { exercises, selectedCard, loading } = this.state;

    return (
      <div className='galery-workouts'>
        <div className='page-default'>
          <Helmet>
            <title>Kalos - Escolher Exercícios</title>
          </Helmet>
          <div className='header-galery'>
            <div className='title-galery'>Escolha até 10 exercícios</div>
            <div className='container-header'>
              <div className='arrow-back-create-workouts'>
                <Link to='/menu/criarTreinos'>
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
             
            </div>
            <div className='container-exercises-galery-workouts'>
              {loading ? (
                <Loader />
              ) : (
                exercises.length === 0 ? (
                  <div className='container-cards-galery-workouts-empty'>
                    <div className='container-exercise-empty'>
                      <p className='title-empty-galeryworkouts'>GALERIA VÁZIA...</p>
                      <div className='text-empty-galeryworkouts'>
                        Para anexar mídia a seus treinos faça upload de imagens e vídeos que ajudem os alunos a treinar!
                      </div>
                      {this.state.showAddExercise ? (
                        <p>teste</p>
                      ) : (
                        <div className='btn-upload-make' onClick={this.handleShowAddExercise}>
                          FAZER UPLOAD
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className='container-exercises-all'>
               
                    {exercises.map((exercise, index) => (
                      <div className='card-exercise-change' key={exercise.id}>
                        {exercise.anexo === "" ? (
                          <img className='image-card-exercise' src={exercise.anexo} alt={exercise.nome} />
                        ) : (
                          <img className='image-card-exercise' src={exercise.anexo} alt={exercise.nome} />
                        )}
                        <div
                          className={`change-card ${selectedCard === index ? 'selectCard' : ''}`}
                          onClick={() => this.toggleCardVisibility(index)}
                        >
                          {selectedCard === index && (
                            localStorage.setItem("idExercicio", exercise.id),
                            <p>teste</p>)}
                          <div className='text-exercise-card'>
                            <p className='name-exercise-card'>{exercise.nome}</p>
                            <p className='description-exercise-card'>{exercise.descricao}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
