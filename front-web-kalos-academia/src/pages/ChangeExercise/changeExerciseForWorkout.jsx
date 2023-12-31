import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Loader } from '../../components/Loader/Loader';
import { ShowAllExercises } from '../GaleryWokouts.jsx/api/apiShowAllExercises';
import { FloatButton } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import './changeExerciseForWorkout.css';
import emptyGaleryPhoto from './image/galerykalos.svg';
import { SearchExercise } from './Api/SearchExercise';
SearchExercise
export default class ChangeExercise extends Component {
  state = {
    exercises: [],
    loading: true,
    selectedExercises: [],
    exerciseSearch: [],
    searchInput: ''
  };

  componentDidMount() {
    this.fetchExercises();
  }

  fetchExercises = () => {
    ShowAllExercises()
      .then((data) => {
        const exercisesApi = data.exercicios;
        this.setState({ exercises: exercisesApi, loading: false });
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao carregar os dados:', error);
        this.setState({ loading: false });
      });
  };

  // handleSearch = (value) => {
  //   SearchExercise(value)
  //     .then((data) => {
  //       const exercicioApi = data.exercicio;
  //       this.setState({ exerciseSearch: exercicioApi, searchInput: value });
  //     })
  //     .catch((error) => {
  //       console.error('Ocorreu um erro ao carregar os dados da pesquisa:', error);
  //     });
  // };

  handleSearch = (value) => {
    const { exercises } = this.state;
    const filteredExercises = exercises.filter((exercise) =>
      exercise.nome.toLowerCase().includes(value.toLowerCase())
    );

    this.setState({ exerciseSearch: filteredExercises, searchInput: value });
  };

  toggleCardSelection = (exerciseId) => {
    const { selectedExercises } = this.state;
    const maxSelection = 10;

    const isAlreadySelected = selectedExercises.includes(exerciseId);

    if (isAlreadySelected) {
      const updatedSelection = selectedExercises.filter((id) => id !== exerciseId);
      this.setState({ selectedExercises: updatedSelection }, () => this.updateLocalStorage(updatedSelection));
    } else if (selectedExercises.length < maxSelection) {
      const updatedSelection = [...selectedExercises, exerciseId];
      this.setState({ selectedExercises: updatedSelection }, () => this.updateLocalStorage(updatedSelection));
    }
  };

  updateLocalStorage = (selectedExercises) => {
    const exercisesData = selectedExercises.map((exerciseId) => {
      const exercise = this.state.exercises.find((ex) => ex.id === exerciseId);
      return {
        id: exercise.id,
        nome: exercise.nome,
        foto: exercise.anexo,
        descricao: exercise.descricao,
        serie: null,
        repeticao:null,
        duracao: null
      };
    });
    localStorage.setItem('selectedExercises', JSON.stringify(exercisesData));
  };

  render() {
    const { exercises, loading, selectedExercises, exerciseSearch, searchInput } = this.state;

    // Define os exercícios a serem exibidos com base no termo de busca
    const displayedExercises = searchInput ? exerciseSearch : exercises;


    return (
      <div className='galery-workouts'>
        <div className='page-default'>
          <Link to="/menu/adicionar_exercicio">
            <FloatButton icon={<ArrowRightOutlined onClick={this.handleSendData} />} tooltip={<div>Avançar</div>} />
          </Link>

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
                  placeholder='Buscar exercícios...'
                  size='large'
                  onChange={(e) => this.handleSearch(e.target.value)}
                  value={searchInput}
                />
              </div>
            </div>
            <div className='container-exercises-galery-workouts'>
              {loading ? (
                <Loader />

              ) : exercises.length === 0 ? (
                <div className='container-cards-galery-workouts-empty'>
                  <div className='container-exercise-empty'>
                    <img src={emptyGaleryPhoto} alt='empty photo' />
                    <p className='title-empty-galeryworkouts'>GALERIA VÁZIA...</p>
                    <div className='text-empty-galeryworkouts'>
                      Para anexar mídia a seus treinos faça upload de imagens e vídeos que ajudem os alunos a treinar!
                    </div>
                    <div className='btn-upload-make' onClick={this.fetchExercises}>
                      FAZER UPLOAD
                    </div>
                  </div>
                </div>
              ) : (
                <div className='container-exercises-all'>
                  {displayedExercises.map((exercise) => (
                    <div className='card-exercise-change' key={exercise.id}> {exercise.anexo === '' ? (<img className='image-card-exercise-change' src={`https://img.youtube.com/vi/${exercise.anexo.replace("https://www.youtube.com/watch?v=", "")}/0.jpg`} alt={exercise.nome} />) : (<img className='image-card-exercise-change' src={`https://img.youtube.com/vi/${exercise.anexo.replace("https://www.youtube.com/watch?v=", "")}/0.jpg`} alt={exercise.nome} />)}
                      <div className={`change-card ${selectedExercises.includes(exercise.id) ? 'selectCard' : ''}`} onClick={() => this.toggleCardSelection(exercise.id, exercise.nome, exercise.anexo, exercise.descricao)} >
                        {selectedExercises.includes(exercise.id) && <div className='exercise-selected'>✔</div>}
                      </div>
                      <div className='text-exercise-card-change'> <p className='name-exercise-card'>{exercise.nome}</p> <p className='description-exercise-card'>{exercise.descricao}</p> </div>
                    </div>
                  ))}
                                  {searchInput && displayedExercises.length === 0 && <div className='workout-notfound'>Treino não encontrado</div>}

                </div>

              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}