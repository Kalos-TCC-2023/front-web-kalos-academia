import React, { useState } from 'react'
import { Switch, TimePicker } from 'antd'
import './DayWeek.css'

export const DayWeek = ({dayOfWeek, onChangeFunction, stateOfOrganization}) => {

    console.log(dayOfWeek)

    


    return (
        <div id='key' className='day_week'>
            <div className="day_switch">
                <span className='day'>{dayOfWeek}</span>
                <Switch defaultChecked size='large' onChange={onChangeFunction} />
            </div>
            <span className='closedOrOpen'>{stateOfOrganization}</span>
            <TimePicker.RangePicker size='default size' placeholder={['Inicio', 'Fim']}/>
        </div>
    )
}

{/* <div className="day_week_sunday">
                    <span className='day'>Domingo</span>
                    <Switch defaultChecked size='large' onChange={onChange} />
                    <span className='closedOrOpen'>Aberto</span>
                    <TimePicker.RangePicker size='large' placeholder={['Inicio', 'Fim']}/>
                </div> */}