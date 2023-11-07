import React, { Component } from 'react';
import { Modal } from 'antd';
import ButtonDefaultKalos from '../Button/ButtonDefaultKalos';
import './RemoveExercise.css';
import PropTypes from 'prop-types';
import { removeExercise } from '../../pages/GaleryWokouts.jsx/api/apiRemoveExercise';

export default class
    RemoveExercise extends Component {
    static propTypes = {
        onHideRemoveExercise: PropTypes.func,
    };

    state = {
        selectedFile: null,
        onSearch: null,
    };

    handleHideAddExercise = () => {
        if (this.props.onHideRemoveExercise) {
            this.props.onHideRemoveExercise();
        }
    };

    handleRemoveExercise = () => {
        const exerciseId = localStorage.getItem("idExercicio");
      
        removeExercise(exerciseId)
          .then((data) => {
            console.log('Exercício Removido com sucesso:', data);
            if (this.props.onHideRemoveExercise) {
              this.props.onHideRemoveExercise();
              window.location.reload();
            }
          })
          .catch((error) => {
            console.error('Erro ao remover exercício:', error);
          });
      }
      
    render() {
        return (
            <Modal
                visible={true} // Define a visibilidade do modal
                onCancel={this.handleHideAddExercise} // Função chamada ao fechar o modal
                closable={false} // Impede que o ícone "X" seja exibido
                footer={null} // Remove o rodapé padrão
                wrapClassName="custom-modal-remove" // Classe personalizada para o modal
                className='modal-remove-exercise'

            >
                <div className='card-remove-exercise'>
                    <p className='title-workout-remove-exercise'>O Treino será apagado!</p>
                    <p>Deseja seguir com a ação?</p>


                    <div className="container-buttons-exercise">
                        <ButtonDefaultKalos
                            textButton="OK"
                            width="120px"
                            height="40px"
                            primaryColor="rgb(0, 254, 144, 1)"
                            secondaryColor="rgb(0, 254, 144, 1)"
                            className="buttonDefaultAddExercise"
                            onClick={this.handleRemoveExercise} // Chama a função de edição ao clicar no botão "OK"

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
            </Modal>
        );
    }
}
