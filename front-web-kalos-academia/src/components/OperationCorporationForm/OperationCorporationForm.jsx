import React, { useState } from 'react'
import { DescriptionForm } from '../DescriptionForm/DescriptionForm'
import { DayWeek } from '../DayWeek/DayWeek';
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import './OperationCorporationForm.css'

export const OperationCorporationForm = ({ data, operationCorporation, updateOperationHandler }) => {

    const [timeSunday, setTimeSunday] = useState([''])
    const [timeMonday, setTimeMonday] = useState('')
    const [timeTuesday, setTimeTuesday] = useState('')
    const [timeWednesday, setTimeWednesday] = useState('')
    const [timeThursday, setTimeThursday] = useState('')
    const [timeFriday, setTimeFriday] = useState('')
    const [timeSaturday, setTimeSaturday] = useState('')



    console.log(operationCorporation)


    console.log(operationCorporation)


    dayjs.extend(customParseFormat)
    const onChange = (time, timeString) => {
        console.log(time, timeString)
    }



    return (
        <div className='operation_corporation_form animate__animated animate__fadeInRight'>
            <DescriptionForm title='HORARIO DE FUNCIONAMENTO' description='Preencha de acordo com os horários de funcionamento do seu negócio, isso ficará disponivel para consulta do usuário' />
            <div className="operation_corporation_week_fields">
                <DayWeek dayString='Domingo' dayOfWeek='domingo' updateOperationHandler={updateOperationHandler} atualState={timeSunday} setStateTime={setTimeSunday} />
                <DayWeek dayString='Segunda' dayOfWeek='segunda' updateOperationHandler={updateOperationHandler} atualState={timeMonday} setStateTime={setTimeMonday} />
                <DayWeek dayString='Terça' dayOfWeek='terca' updateOperationHandler={updateOperationHandler} atualState={timeTuesday} setStateTime={setTimeTuesday} />
                <DayWeek dayString='Quarta' dayOfWeek='quarta' updateOperationHandler={updateOperationHandler} atualState={timeWednesday} setStateTime={setTimeWednesday} />
                <DayWeek dayString='Quinta' dayOfWeek='quinta' updateOperationHandler={updateOperationHandler} atualState={timeThursday} setStateTime={setTimeThursday} />
                <DayWeek dayString='Sexta' dayOfWeek='sexta' updateOperationHandler={updateOperationHandler} atualState={timeFriday} setStateTime={setTimeFriday} />
                <DayWeek dayString='Sabado' dayOfWeek='sabado' updateOperationHandler={updateOperationHandler} atualState={timeSaturday} setStateTime={setTimeSaturday} />
            </div>
        </div>
    )
}
