import React, { useState } from 'react'
import { Switch, TimePicker } from 'antd'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import './DayWeek.css'

export const DayWeek = ({ dayOfWeek, setStateTime, atualState, updateOperationHandler, dayString }) => {

    const [openOrClosed, setOpenOrClosed] = useState('Aberto')
    const [timerFiel, setTimeFiel] = useState(false)

    dayjs.extend(customParseFormat)
    const onChange = (time, timeString) => {
        setStateTime(timeString)
        console.log(atualState)
        updateOperationHandler(dayOfWeek.toString(), {
            status: 1,
            horario_inicio: timeString[0],
            horario_fim: timeString[1]
        })
    }

    const onStatusSwitch = (checked) => {
        if(checked === true){
            setOpenOrClosed('Aberto')
            setTimeFiel(false)
        } else {
            setOpenOrClosed('Fechado')
            setStateTime([null, null])
            console.log(atualState)
            setTimeFiel(true)
            updateOperationHandler(dayOfWeek.toString(), 
            {
                status: 0,
                horario_inicio: null,
                horario_fim: null
            })
        }
    }

    return (
        <div id='key' className='day_week'>
            <div className="day_switch">
                <span className='day'>{dayString}</span>
                <Switch defaultChecked size='large' onClick={onStatusSwitch} onChange={onStatusSwitch} />
            </div>
            <span className='closedOrOpen'>{openOrClosed}</span>
            <TimePicker.RangePicker size='default size' disabled={timerFiel} onChange={onChange} placeholder={['Inicio', 'Fim']} />
        </div>
    )
}