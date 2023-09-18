import React, { useState } from 'react'
import { Switch, TimePicker } from 'antd'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import './DayWeek.css'

export const DayWeek = ({ dayOfWeek, setStateTime, atualState }) => {

    dayjs.extend(customParseFormat)
    const onChange = (time, timeString) => {
        setStateTime(timeString)
        // console.log('isto foi atualizado - ', dayOfWeek, '-', atualState)
    }

    const [openOrClosed, setOpenOrClosed] = useState('Aberto')
    const [timerFiel, setTimeFiel] = useState(false)

    const onStatusSwitch = (checked) => {
        if(checked === true){
            setOpenOrClosed('Aberto')
            setTimeFiel(false)
        } else {
            setOpenOrClosed('Fechado')
            setStateTime(['00:00:00','00:00:00'])
            // console.log(atualState)
            // console.log('isto foi atualizado - ', dayOfWeek, '-', atualState)
            setTimeFiel(true)
        }
    }

    return (
        <div id='key' className='day_week'>
            <div className="day_switch">
                <span className='day'>{dayOfWeek}</span>
                <Switch defaultChecked size='large' onClick={onStatusSwitch} onChange={onStatusSwitch} />
            </div>
            <span className='closedOrOpen'>{openOrClosed}</span>
            <TimePicker.RangePicker size='default size' disabled={timerFiel} onChange={onChange} placeholder={['Inicio', 'Fim']} />
        </div>
    )
}