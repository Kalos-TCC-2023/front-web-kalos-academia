import React, { Component } from 'react';
import { Modal } from 'antd';
import ButtonDefaultKalos from '../Button/ButtonDefaultKalos';
import './editExercise.css';
import PropTypes from 'prop-types';

export default class EditExercise extends Component {
  static propTypes = {
    onHideAddExercise: PropTypes.func,
  };

  state = {
    selectedFile: null,
    onSearch: null,
  };

  handleHideAddExercise = () => {
    if (this.props.onHideAddExercise) {
      this.props.onHideAddExercise();
    }
  };

  render() {
    return (
      <Modal
        visible={true} // Define a visibilidade do modal
        onCancel={this.handleHideAddExercise} // Função chamada ao fechar o modal
        footer={null} // Remove o rodapé padrão
        wrapClassName="custom-modal" // Classe personalizada para o modal
 className='modal-edit-exercise'
      >
        <div className="container-edit-exercise">
          <div className="card-edit-exercise">
          <h1 className='title-edit-exercise'>EDITAR EXERCÍCIO</h1>

            <p>Nome do Exercício</p>
            <input type="text" />
            <p>URL do vídeo</p>
            <input type="text" />
            <p>Descrição</p>
            <textarea className="description-edit-exercise" />

            <div className="container-buttons-exercise">
              <ButtonDefaultKalos
                textButton="OK"
                width="120px"
                height="40px"
                primaryColor="rgb(0, 254, 144, 1)"
                secondaryColor="rgb(0, 254, 144, 1)"
                className="buttonDefaultAddExercise"
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
