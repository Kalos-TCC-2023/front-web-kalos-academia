import React, { useState } from 'react'
import { DescriptionForm } from '../DescriptionForm/DescriptionForm'
import './OperationCorporationForm.css'
import { DayWeek } from '../DayWeek/DayWeek';
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

export const OperationCorporationForm = () => {

    const [switchStatus, setSwitchStatus] = useState(false)
    const [timeSunday, setTimeSunday] = useState('')
    const [timeMonday, setTimeMonday] = useState('')
    const [timeTuesday, setTimeTuesday] = useState('')
    const [timeWednesday, setTimeWednesday] = useState('')
    const [timeThursday, setTimeThursday] = useState('')
    const [timeFriday, setTimeFriday] = useState('')
    const [timeSaturday, setTimeSaturday] = useState('')
    console.log(timeSunday)

    dayjs.extend(customParseFormat)
    const onChange = (time, timeString ) => {
        console.log(time, timeString )
    }



    return (
        <div className='operation_corporation_form animate__animated animate__fadeInRight'>
            <DescriptionForm title='HORARIO DE FUNCIONAMENTO' description='Preencha de acordo com os horários de funcionamento do seu negócio, isso ficará disponivel para consulta do usuário' />
            <div className="operation_corporation_week_fields">
                <DayWeek dayOfWeek='Domingo' atualState={timeSunday} setStateTime={setTimeSunday} onChangeFunction={(switchStatus) => {console.log(`este switch do domingo é ${switchStatus}`)}} stateOfOrganization='Aberto'/>
                <DayWeek dayOfWeek='Segunda'  atualState={timeMonday} setStateTime={setTimeMonday} onChangeFunction={(checked) => {console.log(`este switch da segunda é ${checked}`)}} stateOfOrganization='Aberto'/>
                <DayWeek dayOfWeek='Terça' atualState={timeTuesday} setStateTime={setTimeTuesday} onChangeFunction={onChange} stateOfOrganization='Aberto'/>
                <DayWeek dayOfWeek='Quarta' atualState={timeWednesday} setStateTime={setTimeWednesday} onChangeFunction={onChange} stateOfOrganization='Aberto'/>
                <DayWeek dayOfWeek='Quinta' atualState={timeThursday} setStateTime={setTimeThursday} onChangeFunction={onChange} stateOfOrganization='Aberto'/>
                <DayWeek dayOfWeek='Sexta' atualState={timeFriday} setStateTime={setTimeFriday} onChangeFunction={onChange} stateOfOrganization='Aberto'/>
                <DayWeek dayOfWeek='Sabado' atualState={timeSaturday} setStateTime={setTimeSaturday} onChangeFunction={onChange} stateOfOrganization='Aberto'/>
            </div>
        </div>
    )
}
