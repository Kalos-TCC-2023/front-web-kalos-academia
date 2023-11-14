import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './CreateWorkouts.css';
import ButtonDefaultKalos from '../../components/Button/ButtonDefaultKalos';
import { Link } from 'react-router-dom';
import SelectDefaultKalos from '../../components/Select/Select';
import workoutPhoto from './image/workoutgymTraine.jpeg';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { AddWorkouts } from '../AddExerciseReptsSets/Api/addExerciseReptsSetsApi';
import { PreviewCardWokouts } from '../../components/PreviewCardWokouts/PreviewCardWokouts';


export class CreateWorkouts extends Component {
  state = {
    selectedFileWorkout: null,
    workoutName: '',
    workoutDescription: '',
    workoutDate: '',
    workoutIdNivel: '',
    workoutCategory: '',
    workoutCategoryName: ""
  };

  handleSendData = () => {
    const {
      selectedFileWorkout,
      workoutName,
      workoutDescription,
      workoutDate,
      workoutIdNivel,
      workoutCategory,
    } = this.state;

    localStorage.setItem('nome_treino', workoutName);
    localStorage.setItem('foto_treino', selectedFileWorkout);
    localStorage.setItem('descricao_treino', workoutDescription);
    localStorage.setItem('data_treino', workoutDate);
    localStorage.setItem('nivel_treino', workoutIdNivel);
    localStorage.setItem('categoria_treino', workoutCategory);



      console.log('Nome do Treino:', localStorage.getItem('nome_treino'));
      console.log('Foto do Treino:', localStorage.getItem('foto_treino'));
      console.log('Descrição do Treino:', localStorage.getItem('descricao_treino'));
      console.log('Data do Treino:', localStorage.getItem('data_treino'));
      console.log('Nível do Treino:', localStorage.getItem('nivel_treino'));
      console.log('Categoria do Treino:', localStorage.getItem('categoria_treino'));
    
   
  };

  handleNameChange = (event) => {
    this.setState({ workoutName: event.target.value });
  };


  shortenURL = async (url) => {
    const apiUrl = `https://api.tinyurl.com/dev/api-create.php?url=${encodeURIComponent(url)}`;
  
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const shortenedURL = await response.text();
        console.log('URL encurtada com sucesso:', shortenedURL);
        return shortenedURL;
      } else {
        console.error('Erro ao encurtar a URL:', response.statusText);
        return url; // Retorna a URL original em caso de erro
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      return url; // Retorna a URL original em caso de erro
    }
  };
  
  handleFileChange = async (e) => {
    const selectedFileWorkout = e.target.files[0];
  
    if (selectedFileWorkout) {
      const reader = new FileReader();
  
      reader.onload = async (event) => {
        const fileDataURL = event.target.result;
  
        try {
          const shortenedURL = await this.shortenURL(fileDataURL);
          this.setState({ selectedFileWorkout: shortenedURL, shortenedURL });
        } catch (error) {
          console.error('Erro ao encurtar a URL do arquivo:', error);
        }
      };
  
      reader.readAsDataURL(selectedFileWorkout);
    }
  };
  

  

  
   handleChangeCategoria = (value, {label}) => {
    this.setState({workoutCategory: value})
    this.setState({workoutCategoryName: label})
    console.log(`selected ${label}`);
  };

  handleChangeNivel = (value) => {
    this.setState({workoutIdNivel: value})
    console.log(`selected ${value}`);
  };

  render() {
    const optionsCategoria = [
      { value: '1', label: 'Boxe' },
      { value: '2', label: 'Natação' },
      { value: '3', label: 'Cardio' },
      { value: '4', label: 'Crossfit' },
    ];

    const optionsTypeWokouts = [
      { value: '1', label: 'Iniciante' },
      { value: '2', label: 'Médio' },
      { value: '3', label: 'Experiente' },
    ];

    // handleAddExercise = () => {
      //   const exerciseId = localStorage.getItem("idExercicio");
      
      //   const {
      //     exerciseName,
      //     selectedFile,
      //     exerciseDescription,
      //     exerciseDateCreation,
      //     exerciseIdNivel,
      //     exerciseCategoriaTreino
      //   } = this.state;
      
      //   AddWorkouts(
      //     exerciseName,
      //     selectedFile,
      //     exerciseDescription,
      //     exerciseDateCreation,
      //     exerciseIdNivel,
      //     exerciseCategoriaTreino,
      //     exerciseId
      //   ).then((data) => {
      //     const {
      //       newName,
      //       newDescription,
      //       newUrl,
      //       newDateCreation,
      //       idNivel,
      //       idCategoriaTreino,
      //       idAcademia
      //     } = data;
      
      //     this.setState({
      //       exerciseName: newName,
      //       selectedFile: newUrl,
      //       exerciseDescription: newDescription,
      //       exerciseDateCreation: newDateCreation,
      //       exerciseIdNivel: idNivel,
      //       exerciseCategoriaTreino: idCategoriaTreino,
      //       idAcademia: idAcademia
      //     });
      //   })
      //   .catch((error) => {
      //     console.error('Erro ao adicionar exercício:', error);
      //   });
      // };

    const {
      selectedFileWorkout,
      workoutName,
      workoutDescription,
      workoutDate,
      workoutIdNivel,
      workoutCategory,
      workoutCategoryName
    } = this.state;

    return (
      <div className="create-workouts">
        <div className="page-default">
          {/* <Link to="/menu/adicionar_exercicio"> */}
            <FloatButton icon={<ArrowRightOutlined onClick={this.handleSendData} />} tooltip={<div>Avançar</div>} />
          {/* </Link> */}

          <Helmet>
            <title>Kalos - Criar Treinos</title>
          </Helmet>
          <div className="header-create-workouts">
            <div className="title-header-workouts">
              <h1>Criar Treinos</h1>
            </div>
            <div className="container-header-components">
              <div className="arrow-back-create-workouts">
                <Link to="/menu/treinos">
                  {' '}
                  <ArrowLeftOutlined />{' '}
                </Link>
              </div>
              <div className="buttonsExercise">
                <Link to="/menu/treinos">
                  <ButtonDefaultKalos
                    textButton="TREINOS"
                    width="150px"
                    height="40px"
                    primaryColor="rgb(245, 247, 249)"
                    secondaryColor="rgb(0, 254, 144, 1)"
                    className="buttonDefault"
                  />
                </Link>
                <Link to="/menu/criarTreinos">
                  <ButtonDefaultKalos
                    textButton="CRIAR NOVO TREINO"
                    width="200px"
                    height="40px"
                    primaryColor="rgb(245, 247, 249)"
                    secondaryColor="rgb(0, 254, 144, 1)"
                    className="buttonDefault"
                  />
                </Link>
                <Link to="/menu/galeria_exercicios">
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
          <div className="title-create-workout color-gray">Novo Treino</div>

          <div className="container-new-workout">
            <div className="create-new-workout">
              <div>
                <p className="color-gray">Nome do treino</p>
                <input type="text" className="input-name-workout" value={workoutName} onChange={this.handleNameChange} />
              </div>
              <div>
                <p className="color-gray">Descrição</p>
                <textarea className="input-description-workout" value={workoutDescription} onChange={(e) => this.setState({ workoutDescription: e.target.value })} />
              </div>
              <div>
                <p className="color-gray p-load-workout">Carregar capa do treino</p>

                <div className="container-change-file">
                  <div className="change-file" onClick={() => this.fileInput.click()}>
                    <p>Escolher arquivos</p>
                  </div>
                  <div className="changed-file">
                    <p>{selectedFileWorkout ? selectedFileWorkout.name : 'Nenhum arquivo escolhido'}</p>
                  </div>
                  <input
                    type="file"
                    style={{ display: 'none' }}
                    ref={(input) => (this.fileInput = input)}
                    onChange={this.handleFileChange}
                  />
                </div>
              </div>
              <div>
                <p className="color-gray p-load-workout">Data de criação</p>
                <input type="date" className="input-date-workout" value={workoutDate} onChange={(e) => this.setState({ workoutDate: e.target.value })} />
              </div>
              <div className="btn-add-exercise">
                <Link to="/menu/adicionar_exercicio">
                  <p className="add-exercise-btn">ADICIONAR EXERCÍCIOS</p>
                </Link>
              </div>
            </div>

            <div className="selects-new-workouts">
              <div>
                <p className="color-gray">Categoria de Treino</p>
                <SelectDefaultKalos defaultValue="Categoria" options={optionsCategoria} width="300px" height="40px" handleChange={this.handleChangeCategoria }className="selectDefault"   onChange={this.handleChangeCategoria}/>
              </div>

              <div>
                <p className="color-gray">Tipo de Treino</p>
                <SelectDefaultKalos defaultValue="Nivel" options={optionsTypeWokouts} width="300px" height="40px" handleChange={this.handleChangeNivel} className="selectDefault" onChange={this.handleChangeNivel} />
              </div>
            </div>
            <div className="container-preview-workouts">
              <p className="p-preview-create-workout">Preview</p>

              <PreviewCardWokouts nomeTreino={workoutName} categoriaTreino={workoutCategoryName} dataTreino={workoutDate } foto={selectedFileWorkout}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
