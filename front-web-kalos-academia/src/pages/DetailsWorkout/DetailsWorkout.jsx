import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { ApiDetailsWorkout } from './Api/ExercisesApi';
import './DetailsWorkout.css';

export default class DetailsWorkout extends Component {
    state = {
        workoutDetails: {}, // Inicializa os detalhes do treino como um objeto vazio
    };

    componentDidMount() {
        this.handleDetailsExercise();
    }

    handleDetailsExercise = () => {
        ApiDetailsWorkout()
            .then((data) => {
                const { informacoes } = data;
                this.setState({ workoutDetails: informacoes });
            })
            .catch((error) => {
                console.error('Ocorreu um erro ao carregar os dados da pesquisa:', error);
            });
    };

    render() {
        const { workoutDetails } = this.state;

        return (
            <div className='page-details-workout'>
                <Helmet>
                    <title>Detalhes do Treino</title>
                </Helmet>
                {Object.keys(workoutDetails).length > 0 && (
                    <div className='detailsWorkout'>
                        <div className='detailsWorkout-container'>

                            <img className='image-detailsworkout' src={workoutDetails.foto} alt={workoutDetails.nome} />
                            <div className='content-details-workout'>
                                <p className='details-workout-name'>{workoutDetails.nome}</p>
                                <p className='details-workout-date'>{workoutDetails.data_criacao}</p>
                            </div>
                        </div>

                        <div className='exercises-container-details-workout'>
                            {workoutDetails.exercicios.map((exercicio, index) => (
                                <div
                                    className={`content-details-workout-exercise`}
                                    key={index}

                                >          
                                    <img className='photo-exercise' src={`https://img.youtube.com/vi/${exercicio.anexo.replace("https://www.youtube.com/watch?v=", "")}/0.jpg`} alt='' />

                                    <div className='exercise-texto'>
                                        <p className='text-player-name-exercise'>{exercicio.nome}</p>
                                        <div className='sets-repts'>
                                            <p className='text-serie-repts'>Série: {exercicio.serie} </p>
                                            <p className='text-serie-repts'> Repetição: {exercicio.repeticao} </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>



                )}
            </div>
        );
    }
}
