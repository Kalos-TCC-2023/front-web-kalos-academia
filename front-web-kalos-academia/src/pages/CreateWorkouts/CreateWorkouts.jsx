import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './CreateWorkouts.css';
import arrowBack from './image/arrow-back-create-workout.png';
import { Input } from 'antd';
import ButtonDefaultKalos from '../../components/Button/ButtonDefaultKalos';
import { Link } from 'react-router-dom';



export class CreateWorkouts extends Component {
  state = {
  
  };
  render() {
        return (
      <div className='create-workouts'>
        <Helmet>
          <title>Kalos - Criar Treinos</title>
        </Helmet>
        <div className='header-create-workouts'>
          <div className='title-header-workouts'>
            <h1>Criar Treinos</h1>
          </div>
          <div className='container-header-components'>
            <div className='arrow-back-create-workouts'>
              <Link to='/menu/treinos'>
              <img className="arrow-back-create-workouts" src={arrowBack} alt="" />
                <Link/>
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
