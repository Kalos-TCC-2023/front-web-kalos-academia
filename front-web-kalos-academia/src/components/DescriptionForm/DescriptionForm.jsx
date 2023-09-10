import React from 'react'
import './DescriptionForm.css'

export const DescriptionForm = ({ title, description }) => {
    return (
        <div className='description_form'>
            <h1 className="title">
                {title}
            </h1>
            <p className="description">
                {description}
            </p>
        </div>
    )
}
