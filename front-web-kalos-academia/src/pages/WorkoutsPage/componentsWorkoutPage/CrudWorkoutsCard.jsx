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
      <Link to='/menu/adicionar_exercicio'>
      <Button type="primary" onClick={handleRemoveClick}>
        Adicionar aluno
      </Button>
      </Link>
      
      <Button type="primary" onClick={handleRemoveClick}>
        Editar
      </Button>
      <Button type="primary" onClick={handleRemoveClick}>
        Excluir
      </Button>

      {isRemoveExerciseVisible && (
        <RemoveExercise onHideRemoveExercise={handleCloseRemoveExercise} />
      )}
    </div>
  );
};

export default CrudWorkoutCard;
