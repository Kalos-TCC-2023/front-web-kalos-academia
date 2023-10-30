import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ButtonDefaultKalos from '../../components/Button/ButtonDefaultKalos';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import './AddExercise.css';
import PropTypes from 'prop-types'; // Importe o PropTypes



export default class AddExercise extends Component {
    static propTypes = {
        onHideAddExercise: PropTypes.func, // Valide a prop onHideAddExercise como uma função
      };
    
    state = {
        selectedFile: null,
        onSearch: null,
    };

    // Função para ocultar o componente AddExercise
    handleHideAddExercise = () => {
        if (this.props.onHideAddExercise) {
            this.props.onHideAddExercise();
        }
    };

    render() {
        return (
            <div className='container-add-exercise'>
                <div className='card-add-exercise'>
                <div className='remove-card' onClick={this.handleHideAddExercise}>x</div>
                    <h1 className='title-add-exercise'>UPLOAD DE MÍDIA</h1>
                    <p>Nome do Exercicio</p>
                    <input type="text" />
                    <p>URL do video</p>
                    <input type="text" />
                    <p>Descrição</p>
                    <textarea className='description-add-exercise' />


                    <div className='container-buttons-exercise'>
                        <ButtonDefaultKalos
                            textButton="OK"
                            width="120px"
                            height="40px"
                            primaryColor="rgb(0, 254, 144, 1)"
                            secondaryColor="rgbrgb(0, 254, 144, 1)"
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

        );
    }
}
