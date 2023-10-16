import React from 'react'
import './Workoutspage.css'
import { Helmet } from 'react-helmet'
import ButtonDefaultKalos from '../../components/Button/ButtonDefaultKalos'
import SelectDefaultKalos from '../../components/Select/Select'

export const Workoutspage = () => {
  return (
    <div className='workouts_page'>
      <Helmet>
        <title>Kalos - Treinos</title>
      </Helmet>
      <div className='container-header-galeria-exercicios'>

        <p>{"Treinos"}</p>


<div className='selects-exercises'>
<SelectDefaultKalos></SelectDefaultKalos>
</div>

        <div className='buttonsExercise'>

          <ButtonDefaultKalos
            textButton="TREINOS"
            width="150px"
            height="40px"
            primaryColor="rgb(245, 247, 249)"
            secondaryColor="rgb(0,254, 144, 1)"
            
          />
          <ButtonDefaultKalos
            textButton="CRIAR NOVO TREINO"
            width="200px"
            height="40px"
            primaryColor="rgb(245, 247, 249)"
            secondaryColor="rgb(0,254, 144, 1)"
            
          />
          <ButtonDefaultKalos
            textButton="GALERIA DOS EXERCÍCIOS"
            width="200px"
            height="40px"
            primaryColor="rgb(245, 247, 249)"
            secondaryColor="rgb(0,254, 144, 1)"
            
          />
        </div>
      </div>





    </div>
  )
}
