import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './CreateWorkouts.css';
import arrowBack from './image/arrow-back-create-workout.png';
import ButtonDefaultKalos from '../../components/Button/ButtonDefaultKalos';
import { Link } from 'react-router-dom';
import SelectDefaultKalos from '../../components/Select/Select';
import workoutPhoto from './image/workoutgymTraine.jpeg'


export class CreateWorkouts extends Component {
  state = {
    selectedFile: null,


  };

  handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    this.setState({ selectedFile });
  }


  render() {

    const optionsCategoria = [
      { value: 'Boxe', label: 'Boxe' },
      { value: 'Natação', label: 'Natação' },
      { value: 'Cardio', label: 'Cardio' },
      { value: 'Crossfit', label: 'Crossfit' },
    ];

    const optionsTypeWokouts = [
      { value: 'Iniciante', label: 'Iniciante' },
      { value: 'Médio', label: 'Médio' },
      { value: 'Experiente', label: 'Experiente' },
    ];
    return (
      <div className='create-workouts'>
                <div className='page-default'>

        <Helmet>
          <title>Kalos - Criar Treinos</title>
        </Helmet>
        <div className='header-create-workouts'>
          <div className='title-header-workouts'>
            <h1>Criar Treinos</h1>
          </div>
          <div className='container-header-components'>
            <div className='arrow-back-create-workouts'>
              <Link to='/menu/treinos'></ Link>
              <img className="arrow-back-create-workouts" src={arrowBack} alt="" />
              <Link />
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
        <div className='title-create-workout color-gray'>Novo Treino</div>

        <div className='container-new-workout'>

          <div className='create-new-workout'>
            <div className=''>
              <p className='color-gray' >Nome do treino</p>
              <input type="text " className='input-name-workout' />
            </div>
            <div><p className='color-gray'>Descrição</p>
            <textarea className='input-description-workout'/>
            </div>
            <div>
              <p className='color-gray p-load-workout'>Carregar capa do treino</p>

              <div className='container-change-file'>
                <div className='change-file' onClick={() => this.fileInput.click()}>
                  <p>Escolher arquivos</p>
                </div>
                <div className='changed-file'>
                  <p>{this.state.selectedFile ? this.state.selectedFile.name : 'Nenhum arquivo escolhido'}</p>
                </div>
                <input
                  type="file"
                  style={{ display: 'none' }}
                  ref={(input) => this.fileInput = input}
                  onChange={this.handleFileChange}
                />
              </div>
             

            </div>
            <div>
              <p className='color-gray p-load-workout'>Data de criação</p>
              <input type="date" className='input-date-workout' />
            </div>
            <div>
            <div className='btn-add-exercise'>
                <p>ADICIONAR EXERCÍCIOS</p>
              </div>
            </div>



            <div>

            </div>
          </div>

          <div className='selects-new-workouts'>
            <div>
              <p className='color-gray'>Categoria de Treino</p>

              <SelectDefaultKalos defaultValue="Categoria" options={optionsCategoria} width={"300px"} height={"40px"}className="selectDefault"/>
            </div>

            <div>
              <p className='color-gray'>Tipo de Treino</p>

              <SelectDefaultKalos  defaultValue="Nivel" options={optionsTypeWokouts} width={"300px"} height={"40px"} className="selectDefault" />
            </div>



          </div>
          <div className='container-preview-workouts'>
            <p className='p-preview-create-workout'>Preview</p>
            <img  className="image-preview"src={workoutPhoto} alt="" />
          </div>


        </div>

</div>
      </div>
    );
  }
}
