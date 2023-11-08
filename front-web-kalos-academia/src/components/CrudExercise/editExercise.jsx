import React, { Component } from 'react';
import { Modal } from 'antd';
import ButtonDefaultKalos from '../Button/ButtonDefaultKalos';
import './editExercise.css';
import PropTypes from 'prop-types';
import { EditExerciseName } from '../../pages/GaleryWokouts.jsx/api/apiEditExercise';

export default class EditExercise extends Component {
  static propTypes = {
    onHideAddExercise: PropTypes.func,
  };

  state = {
    selectedFile: null,
    onSearch: null,
    exerciseName: '', // Inicialize com um valor vazio
    exerciseUrl: '', // Inicialize com um valor vazio
    exerciseDescription: '', // Inicialize com um valor vazio
  };

  handleHideEditExercise = () => {
    if (this.props.onHideAddExercise) {
      this.props.onHideAddExercise();
    }
  };

  handleEditExercise = () => {
    const { exerciseName, exerciseUrl, exerciseDescription } = this.state;
    const exerciseId = localStorage.getItem("idExercicio")
    EditExerciseName(exerciseId, exerciseName, exerciseUrl, exerciseDescription)
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
        console.log('Exercício atualizado com sucesso:', data);

      })
      .catch((error) => {
        console.error('Erro ao editar exercício:', error);
      });


    
  };

  handleNameChange = (event) => {
    this.setState({ exerciseName: event.target.value });
  };

  handleUrlChange = (event) => {
    this.setState({ exerciseUrl: event.target.value });
  };

  handleDescriptionChange = (event) => {
    this.setState({ exerciseDescription: event.target.value });
  };

  render() {
    const { exerciseName, exerciseUrl, exerciseDescription } = this.state;
    return (
      <Modal
        visible={true}
        closable={false}
        onCancel={this.handleHideEditExercise}
        footer={null}
        wrapClassName="custom-modal"
        className='modal-edit-exercise'
      >
        <div className="container-edit-exercise">
          <div className="card-edit-exercise">
            <h1 className='title-edit-exercise'>EDITAR EXERCÍCIO</h1>

            <p>Nome do Exercício</p>
            <input type="text" value={exerciseName} onChange={this.handleNameChange} />
            <p>URL do vídeo</p>
            <input type="text" value={exerciseUrl} onChange={this.handleUrlChange} />
            <p>Descrição</p>
            <textarea className="description-edit-exercise" value={exerciseDescription} onChange={this.handleDescriptionChange} />

            <div className="container-buttons-exercise">
              <ButtonDefaultKalos
                textButton="OK"
                width="120px"
                height="40px"
                primaryColor="rgb(0, 254, 144, 1)"
                secondaryColor="rgb(0, 254, 144, 1)"
                onClick={this.handleEditExercise} // Chama a função de edição ao clicar no botão "OK"
                className="buttonDefaultAddExercise"
              />

              <ButtonDefaultKalos
                textButton="CANCELAR"
                width="120px"
                height="40px"
                primaryColor="rgb(245, 247, 249)"
                secondaryColor="rgb(245, 247, 249)"
                onClick={this.handleHideEditExercise}
                className="buttonDefaultAddExercise"
              />
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}
