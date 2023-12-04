import React, { Component } from 'react';
import { Modal } from 'antd';
import ButtonDefaultKalos from '../Button/ButtonDefaultKalos';
import './AddExercise.css';
import PropTypes from 'prop-types';
import { AddExerciseApi } from '../../pages/GaleryWokouts.jsx/api/apiAddExercise';

export default class AddExercise extends Component {
  static propTypes = {
    onHideAddExercise: PropTypes.func,
  };

  state = {
    selectedFile: null,
    onSearch: null,
    exerciseName: '', // Inicialize com um valor vazio
    exerciseUrl: '', // Inicialize com um valor vazio
    exerciseDescription: '', // Inicialize com um valor vazio
    errors: {
      exerciseName: false,
      exerciseUrl: false,
      exerciseDescription: false,
    },
  };

  handleHideAddExercise = () => {
    if (this.props.onHideAddExercise) {
      this.props.onHideAddExercise();
    }
  };

  handleNameChange = (e) => {
    this.setState({ exerciseName: e.target.value });
  };

  handleUrlChange = (e) => {
    this.setState({ exerciseUrl: e.target.value.replace("https://www.youtube.com/watch?v=", "") });
  };

  handleDescriptionChange = (e) => {
    this.setState({ exerciseDescription: e.target.value });
  };

  handleAddExercise = () => {
    const { exerciseName, exerciseUrl, exerciseDescription } = this.state;
    const exerciseId = localStorage.getItem("idExercicio");
    const errors = {
      exerciseName: !exerciseName,
      exerciseUrl: !exerciseUrl.replace("https://www.youtube.com/watch?v=", ""),
      exerciseDescription: !exerciseDescription,
    };

    if (Object.values(errors).some(err => err)) {
      this.setState({ errors });
      return;
    }

    AddExerciseApi(exerciseId, exerciseName, exerciseUrl, exerciseDescription)
      .then((data) => {
        if (this.props.onHideAddExercise) {
          this.props.onHideAddExercise();
          window.location.reload();
        }
        const { nome, anexo, descricao } = data;

        this.setState({
          exerciseName: nome,
          exerciseUrl: anexo,
          exerciseDescription: descricao,
        });
      })
      .catch((error) => {
        console.error('Erro ao adicionar exercício:', error);
      });
  };

  render() {
    const { exerciseName, exerciseUrl, exerciseDescription, errors } = this.state;
    return (
      <Modal
        visible={true} // Define a visibilidade do modal
        onCancel={this.handleHideAddExercise} // Função chamada ao fechar o modal
        closable={false} // Impede que o ícone "X" seja exibido
        footer={null} // Remove o rodapé padrão
        wrapClassName="custom-modal" // Classe personalizada para o modal
        className='modal-edit-exercise'
      >
        <div className="container-edit-exercise">
          <div className="card-add-exercise">
            <h1 className='title-add-exercise'>ADICIONAR EXERCÍCIO</h1>
            {errors.exerciseName && <p style={{ color: 'red' }}>Campo obrigatório</p>}
            <p>Nome do Exercício</p>
            <input
              type="text"
              value={exerciseName}
              onChange={this.handleNameChange}
            />
            {errors.exerciseUrl && <p style={{ color: 'red' }}>Campo obrigatório</p>}

            <p>URL do vídeo</p>
            <input
              type="text"
              value={exerciseUrl}
              onChange={this.handleUrlChange}
            />
            {errors.exerciseDescription && <p style={{ color: 'red' }}>Campo obrigatório</p>}

            <p>Descrição</p>
            <textarea
              className="description-edit-exercise"
              value={exerciseDescription}
              onChange={this.handleDescriptionChange}
            />
            <div className="container-buttons-exercise">
              <ButtonDefaultKalos
                textButton="OK"
                width="120px"
                height="40px"
                primaryColor="rgb(0, 254, 144, 1)"
                secondaryColor="rgb(0, 254, 144, 1)"
                className="buttonDefaultAddExercise"
                onClick={this.handleAddExercise} // Chama a função de edição ao clicar no botão "OK"
              />
              <ButtonDefaultKalos
                textButton="CANCELAR"
                width="120px"
                height="40px"
                primaryColor="rgb(245, 247, 249)"
                secondaryColor="rgb(245, 247, 249)"
                onClick={this.handleHideAddExercise}
                className="buttonDefaultAddExercise"
              />
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}
