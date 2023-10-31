import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ButtonDefaultKalos from '../../components/Button/ButtonDefaultKalos';
import { Link } from 'react-router-dom';
import arrowBack from './image/arrow-back-create-workout.png';
import { Input } from 'antd';
import './GaleryWorkouts.css';
import emptyGaleryPhoto from './image/galerykalos.svg';
import AddExercise from '../../components/AddExercise/AddExercise';
import { ArrowLeftOutlined  } from '@ant-design/icons'


export default class GaleryWokouts extends Component {
  state = {
    selectedFile: null,
    onSearch: null,
    showAddExercise: false, // Adicione um estado para controlar a visibilidade do componente AddExercise
  };

  // Função para mostrar o componente AddExercise
  handleShowAddExercise = () => {
    this.setState({ showAddExercise: true });
  };

  // Função para ocultar o componente AddExercise
  handleHideAddExercise = () => {
    this.setState({ showAddExercise: false });
  };

  render() {
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
                placeholder="Buscar treinos..."
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

          <div className='container-cards-galery-workouts'>
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
        </div>
        </div>
      </div>
    );
  }
}
