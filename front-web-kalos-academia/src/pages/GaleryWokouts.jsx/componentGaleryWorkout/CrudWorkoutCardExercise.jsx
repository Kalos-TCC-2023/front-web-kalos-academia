import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import './CrudWorkoutCardExercise.css';
import EditExercise from '../../../components/CrudExercise/editExercise';
import RemoveExercise from '../../../components/CrudExercise/RemoveExercise';


const CrudWokoutCardExercise = () => {
  const [isEditExerciseVisible, setIsEditExerciseVisible] = useState(false);
  const [isRemoveExerciseVisible, setRemoveExerciseVisible] = useState(false);

  const handleEditClick = () => {
    setIsEditExerciseVisible(true);
  };

  const handleCloseEditExercise = () => {
    setIsEditExerciseVisible(false);
  };

  const handleRemoveClick = () => {

   setRemoveExerciseVisible(true);
    

  };

  const handleCloseRemoveExercise = () => {
    setRemoveExerciseVisible(false);
  };


  return (
    <div className='crud-card'>
      <Button type="primary" onClick={handleEditClick}>
        Editar
      </Button>
      <Button type="primary" onClick={handleRemoveClick}>
        Excluir
      </Button>

      {isEditExerciseVisible && (
        <EditExercise onHideAddExercise={handleCloseEditExercise} />
      )}

      
{isRemoveExerciseVisible && (
        <RemoveExercise onHideRemoveExercise={handleCloseRemoveExercise} />
      )}
    </div>
  );
};

export default CrudWokoutCardExercise;
