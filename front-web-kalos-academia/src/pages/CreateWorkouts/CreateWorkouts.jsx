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
import { storage } from '../../adapters/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { GetAllCategorys } from './Api/AllCategorys';
import { GetAllLevels } from './Api/AllLevels';

export class CreateWorkouts extends Component {
  state = {
    workoutName: '',
    workoutDescription: '',
    workoutDate: '',
    workoutIdNivel: '',
    workoutCategory: '',
    workoutCategoryName: "",
    imageFirebase: "",
    selectFile: "",
    categorys: "",
    levels: ""
  };

  handleSendData = () => {
    const {
      imageFirebase,
      workoutName,
      workoutDescription,
      workoutDate,
      workoutIdNivel,
      workoutCategory,
    } = this.state;

    localStorage.setItem('nome_treino', workoutName);
    localStorage.setItem('foto_treino', imageFirebase);
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



  componentDidMount  () {
    const {categorys, levels} =  this.state
    GetAllCategorys()
      .then((data) => {
        const categoriasApi = data.categorias; 
        const optionsFromApi = categoriasApi.map((categoria) => ({
          value: categoria.id,
          label: categoria.nome,
        }));
        this.setState({ categorys: optionsFromApi });
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao carregar os dados:', error);
      });


      GetAllLevels()
      .then((data) => {
        const levelsApi = data.niveis; 
        const optionsFromApi = levelsApi.map((levels) => ({
          value: levels.id,
          label: levels.nome,
        }));
        this.setState({ levels: optionsFromApi });
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao carregar os dados:', error);
      });
      

  }

  handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    this.setState({ selectFile: file })

    if (!file) return console.log('Erro: nenhum arquivo selecionado.');

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      null,
      (error) => {
        console.log('Erro ao enviar arquivo:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          this.setState({ imageFirebase: url });
        });
      }
    );
  };




  handleChangeCategoria = (value, { label }) => {
    this.setState({ workoutCategory: value })
    this.setState({ workoutCategoryName: label })
    console.log(`selected ${label}`);
  };

  handleChangeNivel = (value) => {
    this.setState({ workoutIdNivel: value })
    console.log(`selected ${value}`);
  };

  render() {
  

    const {
      workoutName,
      workoutDescription,
      workoutDate,
      workoutIdNivel,
      workoutCategory,
      workoutCategoryName,
      imageFirebase,
      selectFile,
      categorys,
      levels
    } = this.state;

    return (
      <div className="create-workouts">
        <div className="page-default">
          <Link to="/menu/escolher_exercicio">
            <FloatButton icon={<ArrowRightOutlined onClick={this.handleSendData} />} tooltip={<div>Avançar</div>} />
          </Link>

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
                    <p>{selectFile ? selectFile.name : 'Nenhum arquivo escolhido'}</p>
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
                <SelectDefaultKalos defaultValue="Categoria" options={categorys} width="300px" height="40px" handleChange={this.handleChangeCategoria} className="selectDefault" onChange={this.handleChangeCategoria} />
              </div>

              <div>
                <p className="color-gray">Tipo de Treino</p>
                <SelectDefaultKalos defaultValue="Nivel" options={levels} width="300px" height="40px" handleChange={this.handleChangeNivel} className="selectDefault" onChange={this.handleChangeNivel} />
              </div>
            </div>
            <div className="container-preview-workouts">
              <p className="p-preview-create-workout">Preview</p>

              <PreviewCardWokouts nomeTreino={workoutName} categoriaTreino={workoutCategoryName} dataTreino={workoutDate} foto={imageFirebase} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
