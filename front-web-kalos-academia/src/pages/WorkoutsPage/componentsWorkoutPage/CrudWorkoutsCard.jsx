import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import './componentWorkout.css';
import RemoveExercise from '../../../components/CrudExercise/RemoveExercise';
import { Link } from 'react-router-dom';

const CrudWorkoutCard = () => {
  const [isRemoveExerciseVisible, setRemoveExerciseVisible] = useState(false);

  const handleRemoveClick = () => {

   setRemoveExerciseVisible(true);
    

  };

  const handleCloseRemoveExercise = () => {
    setRemoveExerciseVisible(false);
  };

  return (
    <div className='crud-card'>
      <Link className='.link-crud-exercise' to='/menu/treinos/adicionar_novo_aluno_no_treino'>
      <Button className='btn-card-workout-card' type="primary" onClick={handleRemoveClick}>
        Adicionar aluno
      </Button>
      </Link>
      
      <Button  className='btn-card-workout-card' type="primary" onClick={handleRemoveClick}>
        Editar
      </Button>
      <Button className='btn-card-workout-card'  type="primary" onClick={handleRemoveClick}>
        Excluir
      </Button>

      {isRemoveExerciseVisible && (
        <RemoveExercise onHideRemoveExercise={handleCloseRemoveExercise} />
      )}
    </div>
  );
};

export default CrudWorkoutCard;
