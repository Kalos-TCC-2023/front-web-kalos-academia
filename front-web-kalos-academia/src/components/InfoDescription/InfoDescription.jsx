import React from 'react'
import './InfoDescription.css'

export const InfoDescription = ({title, description}) => {
    return (
        <div className='infoDescription'>
            <div className="description_info">
                <span className='title_info'>{title}</span>
                <span className='description_information'>{description}</span>
            </div>
        </div>
    )
}
