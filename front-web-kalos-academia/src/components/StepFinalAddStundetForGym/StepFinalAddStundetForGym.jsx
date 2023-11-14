import React from 'react'
import add_student from './img/stundet_add.svg'
import './StepFinalAddStundetForGym.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const StepFinalAddStundetForGym = () => {
  return (
    <div className='final_step_add_stundet_for_gym'>
      <img src={add_student} />
      <p className='student_add_p'>ALUNO ADICIONADO!</p>
      <p className='student_add_explication'>O aluno foi adicionado com sucesso a sua lista de alunos, volte a pagina principal e confira!</p>
      <Link to='/menu/alunos'>
        <div className="icon_back_add_student">

          <FontAwesomeIcon icon={faUsers} size='lg' style={{ color: '#fffff' }} />
        </div>
      </Link>
    </div>
  )
}
