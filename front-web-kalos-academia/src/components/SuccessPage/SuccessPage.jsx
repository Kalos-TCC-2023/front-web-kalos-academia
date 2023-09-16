import React from 'react'

export const SuccessPage = ({title, description, buttonTo, img}) => {
    return (
        <div className='sucess_page'>
            <div className="title_description">
                <h2 className='title_success'>{title}</h2>
                <p className='description_success'>{description}</p>
            </div>
        </div>
    )
}
