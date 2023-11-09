import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './AddExerciseRepetsSets.css';
import ButtonDefaultKalos from '../../components/Button/ButtonDefaultKalos';
import { Link } from 'react-router-dom';
import SelectDefaultKalos from '../../components/Select/Select';
import { DeleteOutlined } from '@ant-design/icons'; // Importe o ícone de lixeira
import workoutPhoto from './image/workoutgymTraine.jpeg';
import { FloatButton } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { AddWorkouts } from './Api/addExerciseReptsSetsApi';




export class AddExerciseRepetsSets extends Component {
    state = {
        workoutName: "", 
        workouTPhoto: "",
         workoutDescrpiton: "",
          workoutDate:""

    };

    handleAddWorkout = () => {
        const { workoutName, workouTPhoto, workoutDescrpiton, workoutDate } = this.state;
        AddWorkouts(workoutName, workouTPhoto, workoutDescrpiton, workoutDate)
        
          .then((data) => {
         
            const { nome, foto, descricao,  data_criacao} = data;
        
    
    
            this.setState({
                workoutName: nome,
                workouTPhoto: foto,
                workoutDescrpiton: descricao,
                workoutDate: data_criacao

            });
          
    
          })
          .catch((error) => {
            console.error('Erro ao adicionar exercício:', error);
          });
      };


    render() {

        const optionsSerie = [
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
            { value: '9', label: '9' },
            { value: '10', label: '10' },
            { value: '11', label: '11' },
            { value: '12', label: '12' },







        ];

        const optionsRepeticao = [
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
            { value: '9', label: '9' },
            { value: '10', label: '10' },
            { value: '11', label: '11' },
            { value: '12', label: '12' },







        ];
        return (
            <div className='container-add-exercise-repts-sets'>
      <FloatButton icon={<ArrowRightOutlined />} tooltip={<div>Avançar</div>} onClick={(e) => changeStep(currentStep + 1, e)}/>


                <Helmet>
                    <title>Kalos - Criar Treinos</title>
                </Helmet>


                <div className='header-add-exercise-repts-sets'>
                    <div className='page-default-add-exercise-repts-sets'>
                        <div className='content-header'>
                            <h1>Treinos</h1>
                            <Link to='/menu/criarTreinos'> <ArrowLeftOutlined /> </ Link>
                        </div>
                    </div>

                    <div className='container-components-add-exercise-repts-sets'>
                        <div>

                            <div>
                                <h1 className='text-add-exercise'>Adicionar exercício ao treino</h1>
                                <p className='text-name-exercise'>Musculação em casa</p>
                                <p className='text-description-exercise'>MUSCULAÇÃO</p>
                            </div>
                            <div className='container-selects-add-exercise-repts-sets'>
                                <div >
                                    <p className='text-gray'>Serie</p>
                                    <SelectDefaultKalos defaultValue="0" options={optionsSerie} width="150px" height="40px" />
                                </div>
                                <div>
                                    <p className='text-gray'>Repetição</p>
                                    <SelectDefaultKalos defaultValue="0" options={optionsRepeticao} width="150px" height="40px" />
                                </div>

                            </div>
                            <div>
                                <p className='text-gray'>Duração</p>

                                <input type="time" className='input-time' />
                            </div>

                        </div>
                        <div className='player-exercise'>
                            <p className='text-player-exercise'>Player de exercícios</p>
                            <div className='container-player-exercise'>
                                <div className='exercise'>
                                    <p className='number-exercise'>1</p>
                                    <img className='photo-exercise' src={workoutPhoto} alt="" />
                                    <div>
                                        <p className='text-player-name-exercise'>Aquecimento de Musculos</p>
                                        <div className='sets-repts'>
                                        <p className='text-serie-repts'>SERIE 4 </p>  
                                        <p className='text-serie-repts'>REPETIÇÃ0 12</p>
                                        </div>
                                        </div>
                                    <DeleteOutlined className='delete-exercise' />
                                </div>

                                <div className='exercise'>
                                    <p className='number-exercise'>1</p>
                                    <img className='photo-exercise' src={workoutPhoto} alt="" />
                                    <div>
                                        <p className='text-player-name-exercise'>Aquecimento de Musculos</p>
                                        <div className='sets-repts'>
                                        <p className='text-serie-repts'>SERIE 4 </p>  
                                        <p className='text-serie-repts'>REPETIÇÃ0 12</p>
                                        </div>
                                        </div>
                                    <DeleteOutlined className='delete-exercise' />
                                </div>

                                <div className='exercise'>
                                    <p className='number-exercise'>1</p>
                                    <img className='photo-exercise' src={workoutPhoto} alt="" />
                                    <div>
                                        <p className='text-player-name-exercise'>Aquecimento de Musculos</p>
                                        <div className='sets-repts'>
                                        <p className='text-serie-repts'>SERIE 4 </p>  
                                        <p className='text-serie-repts'>REPETIÇÃ0 12</p>
                                        </div>
                                        </div>
                                    <DeleteOutlined className='delete-exercise' />
                                </div>


                                <div className='exercise'>
                                    <p className='number-exercise'>1</p>
                                    <img className='photo-exercise' src={workoutPhoto} alt="" />
                                    <div>
                                        <p className='text-player-name-exercise'>Aquecimento de Musculos</p>
                                        <div className='sets-repts'>
                                        <p className='text-serie-repts'>SERIE 4 </p>  
                                        <p className='text-serie-repts'>REPETIÇÃ0 12</p>
                                        </div>
                                        </div>
                                    <DeleteOutlined className='delete-exercise' />
                                </div>
                                <div className='exercise'>
                                    <p className='number-exercise'>1</p>
                                    <img className='photo-exercise' src={workoutPhoto} alt="" />
                                    <div>
                                        <p className='text-player-name-exercise'>Aquecimento de Musculos</p>
                                        <div className='sets-repts'>
                                        <p className='text-serie-repts'>SERIE 4 </p>  
                                        <p className='text-serie-repts'>REPETIÇÃ0 12</p>
                                        </div>
                                        </div>
                                    <DeleteOutlined className='delete-exercise' />
                                </div>
                                <div className='exercise'>
                                    <p className='number-exercise'>1</p>
                                    <img className='photo-exercise' src={workoutPhoto} alt="" />
                                    <div>
                                        <p className='text-player-name-exercise'>Aquecimento de musculos</p>
                                        <div className='sets-repts'>
                                        <p className='text-serie-repts'>SERIE 4 </p>  
                                        <p className='text-serie-repts'>REPETIÇÃ0 12</p>
                                        </div>
                                        </div>
                                    <DeleteOutlined className='delete-exercise' />
                                </div>
                                <div className='add-exercise-repets-sets'>
                                <div className='btn-add-exercise-repets-sets'>+</div>

                                </div>

                          
                            </div>
                        </div>
                        <div>
                            <div className='preview-exercise'>
                                <div className='container-preview-exercise'>

                                <p>Aquecimento de musculos</p>
                            <img className='photo-exercise-preview' src={workoutPhoto} alt="" />
                                </div>
                                

                            </div>

                        </div>
                    </div>




                </div>

            </div>


        );
    }
}
