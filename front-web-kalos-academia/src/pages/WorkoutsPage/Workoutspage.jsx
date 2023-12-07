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
    loading: true
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
        this.setState({ informacoes: informacoesApi, loading: false });
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao carregar os dados:', error);
        this.setState({ loading: false });

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

  handleCardClick = (id) => {
    console.log(`Card clicado com ID: ${id}`);
    localStorage.setItem("id_treino", id)
  };
  // ...
  handleShowRemoveWorkout = () => {
    this.setState({ showRemoveWorkout: true });
  };

  handleHiddenRemoveWorkout = () => {
    this.setState({ showRemoveWorkout: false });
  };

  handleSearch = (value) => {
    const { informacoes } = this.state;
    const filteredWorkouts = informacoes.filter((workout) =>
      workout.nome.toLowerCase().includes(value.toLowerCase())
    );

    this.setState({ searchResults: filteredWorkouts, searchInput: value });
  };



  render() {
    const optionsCategoria = [
      { value: 'Boxe', label: 'Boxe' },
      { value: 'Natação', label: 'Natação' },
      { value: 'Cardio', label: 'Cardio' },
      { value: 'Crossfit', label: 'Crossfit' },
    ];

    const { informacoes, alunosMatriculados, selectedCard, searchInput, searchResults, loading } = this.state;

    const displayedWorkout = searchInput ? searchResults : informacoes;


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
                  onChange={(e) => this.handleSearch(e.target.value)}
                  onSearch={this.handleSearch}
                  value={searchInput}
                  size='large'
                />

                {/* <Input.Search
                  className='search_header-workout search_header'
                  placeholder='Buscar exercícios...'
                  size='large'
                  onChange={(e) => this.handleSearch(e.target.value)}
                  value={searchInput}
                /> */}
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
                <div className="buttonsExercise">
                  <Link className='my_students_button_exercise' to='/menu/treinos'>
                    <Button shape='circle'>TREINOS</Button>
                  </Link>
                  <Link className='my_students_button_exercise' to='/menu/criarTreinos'>
                    <Button shape='circle'>CRIAR NOVO TREINO</Button>
                  </Link>
                  <Link className='my_students_button_exercise' to='/menu/galeria_exercicios'>
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
            {searchInput.length > 0 ? (
              searchResults.map((workout, index) => {
                return (
                  <CardCrudWorkouts
                    key={index}
                    idWokouts={workout.id}
                    dataWokouts={workout.data_criacao}
                    alunosWokouts={workout.alunos}
                    nomeWokouts={workout.nome}
                    categoriaWokouts='Iniciante'
                    imgWokouts={workout.foto}
                    onClick={(id) => this.handleCardClick(id)}
                  />

                );
              })
            ) : (
              loading ? (
                <Loader />
              ) : (
                informacoes.map((workout, index) => {
                  return (
                    <CardCrudWorkouts
                      key={index}
                      idWokouts={workout.id}
                      dataWokouts={workout.data_criacao}
                      alunosWokouts={workout.alunos}
                      nomeWokouts={workout.nome}
                      categoriaWokouts={workout.nome_categoria_treino}
                      imgWokouts={workout.foto}
                      onClick={(id) => this.handleCardClick(id)}
                    />
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
            {searchInput && displayedWorkout.length === 0 && <div className='workout-notfound'>Treino não encontrado</div>}

          </div>
        </div>
      </div>
    );
  }
}

export default Workoutspage;