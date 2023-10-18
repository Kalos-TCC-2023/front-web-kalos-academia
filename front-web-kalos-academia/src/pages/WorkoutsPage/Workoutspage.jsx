import React, { Component } from 'react';
import './Workoutspage.css';
import { Helmet } from 'react-helmet';
import ButtonDefaultKalos from '../../components/Button/ButtonDefaultKalos';
import SelectDefaultKalos from '../../components/Select/Select';
import { Input } from 'antd';
import { loadAllWorkouts } from './Api/ApiWorkoutatagym';
import calendar from './images/Calendar.png'
import workoutPhoto from './images/workoutgymTraine.jpeg'


class Workoutspage extends Component {
  state = {
    informacoes: [],
  };

  onSearch = (value, _e, info) => {
    console.log(info?.source, value);
  }

  componentDidMount() {
    loadAllWorkouts()
      .then((data) => {
        const informacoesApi = data.informacoes;
        this.setState({ informacoes: informacoesApi });
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao carregar os dados:', error);
      });
  }

  render() {
    const optionsCategoria = [
      { value: 'Boxe', label: 'Boxe' },
      { value: 'Natação', label: 'Natação' },
      { value: 'Cardio', label: 'Cardio' },
      { value: 'Crossfit', label: 'Crossfit' },
    ];

    const optionsData = [
      { value: '12/05/2005', label: '12/05/2005' },
      { value: '12/05/2005', label: '12/05/2005' },
      { value: '12/05/2005', label: '12/05/2005' },
      { value: '12/05/2005', label: '12/05/2005' },
    ];

    const { informacoes } = this.state;

    return (
      <div className='workouts_page'>
        <Helmet>
          <title>Kalos - Treinos</title>
        </Helmet>
        <div className='container-header-galeria-exercicios'>
          <p>{"Treinos"}</p>
          <div className='selects-exercises'>
            <div className='selects'>
              <SelectDefaultKalos defaultValue="Filtrar Categoria" options={optionsCategoria} className="selectDefault" />
              <SelectDefaultKalos defaultValue="Filtrar data" options={optionsData} className="selectDefault" />
            </div>
            <div className='search'>
              <Input.Search
                className='search_header'
                placeholder="Buscar treinos..."
                onSearch={this.onSearch}
                size='large'
              />
            </div>
            <div className='buttonsExercise'>
              <ButtonDefaultKalos
                textButton="TREINOS"
                width="150px"
                height="40px"
                primaryColor="rgb(245, 247, 249)"
                secondaryColor="rgb(0, 254, 144, 1)"
                className="buttonDefault"
              />
              <ButtonDefaultKalos
                textButton="CRIAR NOVO TREINO"
                width="200px"
                height="40px"
                primaryColor="rgb(245, 247, 249)"
                secondaryColor="rgb(0, 254, 144, 1)"
                className="buttonDefault"
              />
              <ButtonDefaultKalos
                textButton="GALERIA DOS EXERCÍCIOS"
                width="200px"
                height="40px"
                primaryColor="rgb(245, 247, 249)"
                secondaryColor="rgb(0, 254, 144, 1)"
                className="buttonDefault"
              />
            </div>
          </div>
        </div>

        <div className='container-galery-workouts'>
          {informacoes.map((workout, index) => (
            <div className="card-workouts" key={index}>
              <div className='change-card'>...</div>

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
                  <p className='p-workout-data'>
                    {workout.data_criacao}
                  </p>
                </div>

                <div className='user-workouts'>
                  <div className='userCard'></div>
                  <div className='userCard'></div>
                  <div className='userCard'></div>

                </div>
              </div>
            </div>

          ))}
        </div>

      </div>
    );
  }
}

export default Workoutspage;
