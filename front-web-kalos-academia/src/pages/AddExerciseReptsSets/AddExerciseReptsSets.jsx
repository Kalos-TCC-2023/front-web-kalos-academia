import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './AddExerciseRepetsSets.css';
import { Link } from 'react-router-dom';
import SelectDefaultKalos from '../../components/Select/Select';
import { DeleteOutlined } from '@ant-design/icons';
import blackPhoto from './image/fundoPreto.jpg';
import { FloatButton } from 'antd';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { AddWorkouts } from './Api/addExerciseReptsSetsApi';
import { createWorkoutSucess } from '../../components/createWorkoutSucess/createWorkoutSucess';

class AddExerciseRepetsSets extends Component {
    state = {

        selectedExercises: [],
        serieSelecionada: "",
        repeticaoSelecionada: "",
        editingIndex: null,
        exercicioClicadoIndex: null,
        duracaoSelecionado: {},
        imageExercise: "",
        nameExercise: "",
        descriptionExercise: "",
        isRepeticaoSelected: false,
        isDuracaoSelected: false,

    };

    handleSelectSerieChange = (value) => {
        console.log(value);

        const { editingIndex, selectedExercises, serieSelecionada } = this.state;

        if (editingIndex !== null) {
            const updatedExercises = [...selectedExercises];
            updatedExercises[editingIndex].serie = value;

            this.setState({
                selectedExercises: updatedExercises,
                serieSelecionada: value,
            });

            console.log(serieSelecionada);

            this.saveToLocalStorage();
        }
    };

    handleSelectRepeticaoChange = (value) => {
        console.log(value);
        const { editingIndex, selectedExercises, repeticaoSelecionada } = this.state;

        if (editingIndex !== null) {
            const updatedExercises = [...selectedExercises];
            updatedExercises[editingIndex].repeticao = value;

            this.setState({
                selectedExercises: updatedExercises,
                repeticaoSelecionada: value, // Atualize o estado de repetição selecionada
                isRepeticaoSelected: true,
                isDuracaoSelected: false
            });
            console.log(repeticaoSelecionada);

            this.saveToLocalStorage();
        }
    };

    handleSelectDuracaoChange = (event) => {
        const horario = event.target.value; // Extrai o valor do evento
        console.log(horario);

        const { editingIndex, selectedExercises, duracaoSelecionado } = this.state;

        if (editingIndex !== null) {
            const updatedExercises = [...selectedExercises];
            updatedExercises[editingIndex].duracao = horario;

            this.setState({
                selectedExercises: updatedExercises,
                duracaoSelecionado: horario,
                isRepeticaoSelected: false, // Desativa a repetição
                isDuracaoSelected: true,
            });

            this.saveToLocalStorage();
        }
    };





    componentDidMount() {
        const selectedExercises = JSON.parse(localStorage.getItem('selectedExercises')) || [];
        this.setState({ selectedExercises });
        console.log(localStorage.getItem('nome_treino'));
    }



    handleEditExercise = (index) => {
        console.log(index);
        const { selectedExercises, imageExercise } = this.state;
        const exercise = selectedExercises[index];
        console.log(exercise);

        this.setState({
            serieSelecionada: exercise.serie || "0",
            repeticaoSelecionada: exercise.repeticao || "0",
            duracaoSelecionado: exercise.duracao || "00:00:00",
            editingIndex: index,
            exercicioClicadoIndex: index,
            imageExercise: exercise.foto,
            nameExercise: exercise.nome,
            isRepeticaoSelected: false,
            isDuracaoSelected: false,
        });
        console.log(imageExercise);
    };

    handleSaveEdit = () => {
        const { editingIndex, selectedExercises, serieSelecionada, repeticaoSelecionada, duracaoSelecionado } = this.state;

        if (editingIndex !== null) {
            const editedExercise = selectedExercises[editingIndex];
            console.log(`Salvando alterações para o exercício ${editedExercise.nome} - Série: ${serieSelecionada},Repetição: ${repeticaoSelecionada} duração ${duracaoSelecionado}`);

            const updatedExercises = [...selectedExercises];
            updatedExercises[editingIndex].serie = serieSelecionada;
            updatedExercises[editingIndex].repeticao = repeticaoSelecionada;
            updatedExercises[editingIndex].duracao = duracaoSelecionado;


            this.setState({
                selectedExercises: updatedExercises,
                editingIndex: null,
            });

            this.saveToLocalStorage();
            createWorkoutSucess();
        }
    };

    handleDeleteExercise = (index) => {
        const { selectedExercises } = this.state;

        // Crie uma cópia da array de exercícios e remova o exercício no índice especificado
        const updatedExercises = [...selectedExercises];
        updatedExercises.splice(index, 1);

        // Atualize o estado com a nova array de exercícios
        this.setState({
            selectedExercises: updatedExercises,
            exercicioClicadoIndex: null, // Limpe o índice do exercício clicado
        });

        this.saveToLocalStorage(); // Salve no localStorage após a remoção
    };




    saveToLocalStorage = () => {
        const { selectedExercises } = this.state;
        localStorage.setItem('selectedExercises', JSON.stringify(selectedExercises));
        console.log(localStorage.getItem('selectedExercises'));
    };

    render() {
        const { selectedExercises, serieSelecionada, repeticaoSelecionada, imageExercise, nameExercise, isDuracaoSelected, isRepeticaoSelected } = this.state;

        const optionsSerie = [
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
            { value: '9', label: '9' },
            { value: '10', label: '10' },
            { value: '11', label: '11' },
            { value: '12', label: '12' },

        ]
            ;
        const optionsRepeticao = [
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
            { value: '9', label: '9' },
            { value: '10', label: '10' },
            { value: '11', label: '11' },
            { value: '12', label: '12' },

        ]
        return (
            <div className='container-add-exercise-repts-sets'>
                <Link to={"/menu/exercicio_criado_com_sucesso"}>
                    <FloatButton onClick={this.handleSaveEdit} icon={<ArrowRightOutlined />} tooltip={<div>Avançar</div>} />
                </Link>
                <Helmet>
                    <title>Kalos - Criar Treinos</title>
                </Helmet>

                <div className='header-add-exercise-repts-sets'>
                    <div className='page-default-add-exercise-repts-sets'>
                        <div className='content-header'>
                            <h1>Treinos</h1>
                            <Link to='/menu/escolher_exercicio'>
                                <ArrowLeftOutlined />
                            </Link>
                        </div>
                    </div>

                    <div className='container-components-add-exercise-repts-sets'>
                        <div>
                            <div>
                                <h1 className='text-add-exercise'>Adicionar exercício ao treino</h1>
                                <p className='text-name-exercise'>Selecione seu exercicio</p>
                                <p className='text-description-exercise'>{nameExercise}</p>
                            </div>
                            <div className='container-selects-add-exercise-repts-sets'>
                                <div>
                                    <p className='text-gray'>Serie</p>
                                    <SelectDefaultKalos
                                        defaultValue={serieSelecionada}
                                        options={optionsSerie}
                                        width='150px'
                                        height='40px'
                                        handleChange={(value) => this.handleSelectSerieChange(value)}
                                    />
                                </div>
                                <div>
                                    <p className='text-gray'>Repetição</p>


                                    <SelectDefaultKalos
                                        defaultValue={repeticaoSelecionada}
                                        options={optionsRepeticao}
                                        width='150px'
                                        height='40px'
                                        handleChange={(value) => this.handleSelectRepeticaoChange(value)}
                                        disabled={isDuracaoSelected} // Desabilita se a duração estiver selecionada
                                    />
                                </div>
                            </div>
                            <div>
                                <p className='text-gray'>Duração</p>
                                <input type='time' className={`input-time ${isRepeticaoSelected === false ? 'input-time-select' : ''}`}onChange={this.handleSelectDuracaoChange} disabled={isRepeticaoSelected}
                                
                                />
                            </div>
                        </div>
                        <div className='player-exercise'>
                            {selectedExercises.map((exercise, index) => (
                                <div
                                    className={`exercise ${this.state.exercicioClicadoIndex === index ? 'exercise-clicked' : ''}`}
                                    key={index}
                                    onClick={() => this.handleEditExercise(index)}
                                >                                    <p className='number-exercise'>{index + 1}</p>
                                    <img className='photo-exercise' src={`https://img.youtube.com/vi/${exercise.foto.replace("https://www.youtube.com/watch?v=", "")}/0.jpg`} alt='' />

                                    <div className='exercise-texto'>
                                        <p className='text-player-name-exercise'>{exercise.nome}</p>
                                        <div className='sets-repts'>
                                            <p className='text-serie-repts'>Série: {exercise.serie} </p>
                                            <p className='text-serie-repts'> Repetição: {exercise.repeticao} </p>
                                        </div>
                                    </div>
                                    <DeleteOutlined className='delete-exercise' title="remover exercício?" onClick={() => this.handleDeleteExercise(index)} />
                                </div>
                            ))}
                            <div className='add-exercise-repets-sets'>
                                <Link to='/menu/escolher_exercicio'>

                                    <div className='btn-add-exercise-repets-sets'>
                                        +
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className='preview-exercise'>
                                <div className='container-preview-exercise'>
                                    <iframe
                                        width="560"
                                        height="615"
                                        src={`https://www.youtube.com/embed/${imageExercise.replace("https://www.youtube.com/watch?v=", "")}/0.jpg`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"


                                    >
                                    </iframe>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddExerciseRepetsSets;
