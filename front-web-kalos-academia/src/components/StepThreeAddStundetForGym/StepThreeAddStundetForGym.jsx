import React from 'react'
import './StepThreeAddStundetForGym.css'
import { CardStudentAdd } from '../CardStudentAdd/CardStudentAdd'

export const StepThreeAddStundetForGym = ({ updateFielHandler, idStudent }) => {
    return (
        <div className='add_wokouts_gym'>
            <CardStudentAdd idStudent={idStudent} />
            <div className="add_wokouts_stundet">
                <span className='title_record_student_wourkt'>ADICIONAR TREINOS</span>
            </div>
        </div>
    )
}
