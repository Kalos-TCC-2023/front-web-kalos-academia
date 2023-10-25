import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ButtonDefaultKalos from '../../components/Button/ButtonDefaultKalos';
import { Link } from 'react-router-dom';
import arrowBack from './image/arrow-back-create-workout.png';


export default class GaleryWokouts extends Component {

  state = {
    selectedFile: null,
  };

  render() {
    return (
      <div className='galery-workouts'>
        <Helmet>
          <title>Kalos - Criar Treinos</title>
        </Helmet>
        <div className='header-galery'>
          <div className='title-galery'>Galeria de Exercícios</div>
          <div className='container-header'>
            <div className='arrow-back-create-workouts'>
              <Link to='/menu/treinos'>
                <img className="arrow-back-create-workouts" src={arrowBack} alt="" />
              </Link>
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
        </div>
      </div>
    );
  }
}
