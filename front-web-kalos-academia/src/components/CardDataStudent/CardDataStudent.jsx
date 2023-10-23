import React from 'react'
import './CardDataStudent.css'

export const CardDataStudent = ({ title, text }) => {
    return (
        <div className='card_data_student'>
            <span className='title_data_student'>{title}</span>
            <span className='text_data_student'>{text}</span>
        </div>
    )
}
