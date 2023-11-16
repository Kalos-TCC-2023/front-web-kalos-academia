import React, { Component } from 'react';
import './Workoutspage.css';
import { Helmet } from 'react-helmet';
import ButtonDefaultKalos from '../../components/Button/ButtonDefaultKalos';
import SelectDefaultKalos from '../../components/Select/Select';
import { Breadcrumb, Button, Input } from 'antd';
import calendar from './images/Calendar.png';
import workoutPhoto from './images/workoutgymTraine.jpeg';
import { Link } from 'react-router-dom';
import CrudWorkoutCard from './componentsWorkoutPage/CrudWorkoutsCard';
import { loadAllWorkouts } from './Api/ApiWorkoutatagym';
import { loadRegistererStudents } from './Api/ApiShowRegistered';
import { SearchWorkout } from './Api/ApiSearchWorkout';
import { Loader } from '../../components/Loader/Loader';
import { CardCrudWorkouts } from '../../components/CardCrudWorkouts/CardCrudWorkouts';

class Workoutspage extends Component {
  state = {
    informacoes: [],
    alunosMatriculados: [],
    selectedCard: null,
    searchInput: '', // Valor de pesquisa
    searchResults: [], // Resultados da pesquisa
    showRemoveExercise: false,
  };

  toggleCardVisibility = (index) => {
    this.setState((prevState) => ({
      selectedCard: prevState.selectedCard === index ? null : index,
    }));
  };

  componentDidMount() {
    loadAllWorkouts()
      .then((data) => {
        const informacoesApi = data.informacoes;
        this.setState({ informacoes: informacoesApi });
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao carregar os dados:', error);
      });

    loadRegistererStudents()
      .then((data) => {
        const alunosMatriculadosApi = data.informacoes;
        this.setState({ alunosMatriculados: alunosMatriculadosApi });
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao carregar os dados:', error);
      });
  }

  handleShowRemoveWorkout = () => {
    this.setState({ showRemoveWorkout: true });
  };

  handleHiddenRemoveWorkout = () => {
    this.setState({ showRemoveWorkout: false });
  };

  handleSearch = (value) => {
    SearchWorkout(value)
      .then((data) => {
        const informacoesApi = data.informacoes;
        this.setState({ searchResults: informacoesApi, searchInput: value });
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao carregar os dados da pesquisa:', error);
      });
  };

  render() {
    const optionsCategoria = [
      { value: 'Boxe', label: 'Boxe' },
      { value: 'Natação', label: 'Natação' },
      { value: 'Cardio', label: 'Cardio' },
      { value: 'Crossfit', label: 'Crossfit' },
    ];

    const { informacoes, alunosMatriculados, selectedCard, searchInput, searchResults } = this.state;

    return (
      <div className='workouts_page'>
        <div className='page-default'>
          <Helmet>
            <title>Kalos - Treinos</title>
          </Helmet>
          <div className='container-header-galeria-exercicios'>
            <div className="raiz_title">
              <h1 className='title_edit_page'> Treinos </h1>
              <Breadcrumb
                items={[
                  {
                    title: <Link to='/menu/treinos'>Treino</Link>,
                  },

                ]}
              />
            </div>
            <div className='selects-exercises'>
              <div className='selects'>
                {/* <SelectDefaultKalos
                  defaultValue="Filtrar Categoria"
                  options={optionsCategoria}
                  className="selectDefault"
                  width={"200px"}
                  height={"40px"}
                /> */}
              </div>
              <div className='search'>
                <Input.Search
                  className='search_header-workout search_header'
                  placeholder="Buscar treinos..."
                  onChange={(e) => this.setState({ searchInput: e.target.value })}
                  onSearch={this.handleSearch}
                  value={searchInput}
                  size='large'
                />
              </div>
              <div className='buttonsExercise'>
                {/* <Link to='/menu/treinos'>
                  <ButtonDefaultKalos
                    textButton="TREINOS"
                    width="150px"
                    height="40px"
                    primaryColor="rgb(245, 247, 249)"
                    secondaryColor="rgb(0, 254, 144, 1)"
                    className="buttonDefault"
                  />
                </Link> */}
                <div className="buttons_add_students_my_students">
                <Link className='my_students_button' to='/menu/criarTreinos'>
                    <Button shape='circle'>TREINOS</Button>
                  </Link>
                  <Link className='my_students_button' to='/menu/criarTreinos'>
                    <Button shape='circle'>CRIAR NOVO TREINO</Button>
                  </Link>
                  <Link to='/menu/galeria_exercicios'>
                    <Button shape='circle'>GALERIA DE EXERCICIOS</Button>
                  </Link>
                </div>
                {/* <Link to='/menu/criarTreinos'>
                  <ButtonDefaultKalos
                    textButton="CRIAR NOVO TREINO"
                    width="200px"
                    height="40px"
                    primaryColor="rgb(245, 247, 249)"
                    secondaryColor="rgb(0, 254, 144, 1)"
                    className="buttonDefault"
                  />
                </Link>
                <Link to='/menu/galeria_exercicios'>
                  <ButtonDefaultKalos
                    textButton="GALERIA DOS EXERCÍCIOS"
                    width="200px"
                    height="40px"
                    primaryColor="rgb(245, 247, 249)"
                    secondaryColor="rgb(0, 254, 144, 1)"
                    className="buttonDefault"
                  />
                </Link> */}
              </div>
            </div>
          </div>

          <div className='container-galery-workouts'>
            {searchResults.length > 0 ? (
              searchResults.map((workout, index) => {
                return (
                  <div className="card-workouts" key={index}>
                    <div
                      className={`change-card ${selectedCard === index ? 'visible' : ''}`}
                      onClick={() => this.toggleCardVisibility(index)}
                    >
                      {selectedCard === index && (
                        <CrudWorkoutCard className="container-crud-workouts" />
                      )}
                    </div>
                    {workout.foto !== "a" ? (
                      <img className='img-card-workouts' src={workout.foto} alt={workout.nome} />
                    ) : (
                      <img className='img-card-workouts' src={workoutPhoto} alt="Imagem Padrão" />
                    )}
                    <div className='workout-name'>{workout.nome}</div>
                    <div className='workout-category-name'>{workout.nome_categoria_treino}</div>
                    <div className='container-data-user'>
                      <div className='workout-data'>
                        <img className="img-calendar-workout" src={calendar} alt="" />
                        <p className='p-workout-data'>{workout.data_criacao}</p>
                      </div>
                      <div className='user-workouts'>
                        {alunosMatriculados.slice(0, 5).map((matriculados, matriculadoIndex) => (
                          <img key={matriculadoIndex} src={matriculados.foto} className='userCard' alt="" />
                        ))}
                        <p className='userCard'>{alunosMatriculados.length}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              informacoes.length === 0 ? (
                <Loader />
              ) : (
                informacoes.map((workout, index) => {
                  return (
                    <CardCrudWorkouts key={index} idWokouts={index} dataWokouts={workout.data_criacao} alunosWokouts={workout.alunos} nomeWokouts={workout.nome} categoriaWokouts='Iniciante' imgWokouts={workout.foto} />

                    // <div className="card-workouts" key={index}>
                    //   <div
                    //     className={`change-card ${selectedCard === index ? 'visible' : ''}`}
                    //     onClick={() => this.toggleCardVisibility(index)}
                    //   >
                    //     {selectedCard === index && (
                    //       <CrudWorkoutCard className="container-crud-workouts" />
                    //     )}
                    //   </div>
                    //   {workout.foto !== "a" ? (
                    //     <img className='img-card-workouts' src={workout.foto} alt={workout.nome} />
                    //   ) : (
                    //     <img className='img-card-workouts' src={workoutPhoto} alt="Imagem Padrão" />
                    //   )}
                    //   <div className='workout-name'>{workout.nome}</div>
                    //   <div className='workout-category-name'>{workout.nome_categoria_treino}</div>
                    //   <div className='container-data-user'>
                    //     <div className='workout-data'>
                    //       <img className="img-calendar-workout" src={calendar} alt="" />
                    //       <p className='p-workout-data'>{workout.data_criacao}</p>
                    //     </div>
                    //     <div className='user-workouts'>
                    //       {alunosMatriculados.slice(0, 5).map((matriculados, matriculadoIndex) => (
                    //         <img key={matriculadoIndex} src={matriculados.foto} className='userCard' alt="" />
                    //       ))}
                    //       <p className='userCard'>{alunosMatriculados.length}</p>
                    //     </div>
                    //   </div>
                    // </div>
                  );
                })
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Workoutspage;
