import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import './CrudWorkoutCardExercise.css';
import EditExercise from '../../../components/CrudExercise/editExercise';

const CrudWokoutCardExercise = () => {
  const [isEditExerciseVisible, setIsEditExerciseVisible] = useState(false);

  const handleEditClick = () => {
    setIsEditExerciseVisible(true);
  };

  const handleCloseEditExercise = () => {
    setIsEditExerciseVisible(false);
  };

  return (
    <div className='crud-card'>
      <Button type="primary" onClick={handleEditClick}>
        Editar
      </Button>
      <Button type="primary" onClick={handleEditClick}>
        Excluir
      </Button>

      {isEditExerciseVisible && (
        <EditExercise onHideAddExercise={handleCloseEditExercise} />
      )}
    </div>
  );
};

export default CrudWokoutCardExercise;
