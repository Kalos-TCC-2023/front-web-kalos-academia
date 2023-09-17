import React from 'react'
import { Switch, TimePicker } from 'antd'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import './DayWeek.css'

export const DayWeek = ({ dayOfWeek, onChangeFunction, stateOfOrganization, setStateTime, atualState }) => {

    dayjs.extend(customParseFormat)
    const onChange = (time, timeString) => {
        console.log(time, timeString)
        setStateTime(timeString)
        console.log('isto foi atualizado', atualState)
    }

    return (
        <div id='key' className='day_week'>
            <div className="day_switch">
                <span className='day'>{dayOfWeek}</span>
                <Switch defaultChecked size='large' onChange={onChangeFunction} />
            </div>
            <span className='closedOrOpen'>{stateOfOrganization}</span>
            <TimePicker.RangePicker size='default size' onChange={onChange} placeholder={['Inicio', 'Fim']} />
        </div>
    )
}