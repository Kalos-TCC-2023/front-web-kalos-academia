import React, { useEffect } from 'react'
import ConfettiGenerator from 'confetti-js/dist/index'


export const SuccessPage = ({ title, description, buttonTo, img }) => {

    useEffect(() => {
        const confettiSettings = { target: 'my-canvas' }
        const confetti = new ConfettiGenerator(confettiSettings)
        confetti.render();

        return () => confetti.clear();
    }, [])

    return (
        <div className='my-canvas'>
            <div className="title_description">
                <h2 className='title_success'>SDOIFOSPDIFU</h2>
                <p className='description_success'>{description}</p>
            </div>
        </div>
    )
}
