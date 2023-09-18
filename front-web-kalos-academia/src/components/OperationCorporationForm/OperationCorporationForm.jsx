import React, { useState } from 'react'
import { DescriptionForm } from '../DescriptionForm/DescriptionForm'
import { DayWeek } from '../DayWeek/DayWeek';
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import './OperationCorporationForm.css'

export const OperationCorporationForm = ({ data }) => {

    const [switchStatus, setSwitchStatus] = useState(false)
    const [timeSunday, setTimeSunday] = useState([''])
    const [timeMonday, setTimeMonday] = useState('')
    const [timeTuesday, setTimeTuesday] = useState('')
    const [timeWednesday, setTimeWednesday] = useState('')
    const [timeThursday, setTimeThursday] = useState('')
    const [timeFriday, setTimeFriday] = useState('')
    const [timeSaturday, setTimeSaturday] = useState('')

    const operationCorporation = {
        'Domingo': timeSunday,
        'Segunda': timeMonday,
        'Terça': timeTuesday,
        'Quarta': timeWednesday,
        'Quinta': timeThursday,
        'Sexta': timeFriday,
        'Sabado': timeSaturday,
    }

    console.log(operationCorporation);

    dayjs.extend(customParseFormat)
    const onChange = (time, timeString ) => {
        console.log(time, timeString )
    }

    return (
        <div className='operation_corporation_form animate__animated animate__fadeInRight'>
            <DescriptionForm title='HORARIO DE FUNCIONAMENTO' description='Preencha de acordo com os horários de funcionamento do seu negócio, isso ficará disponivel para consulta do usuário' />
            <div className="operation_corporation_week_fields">
                <DayWeek dayOfWeek='Domingo' atualState={timeSunday} atualSwitch={switchStatus} setStatusSwitch={setSwitchStatus} setStateTime={setTimeSunday} />
                <DayWeek dayOfWeek='Segunda'  atualState={timeMonday} setStateTime={setTimeMonday} onChangeFunction={(checked) => {console.log(`este switch da segunda é ${checked}`)}} stateOfOrganization='Aberto'/>
                <DayWeek dayOfWeek='Terça' atualState={timeTuesday} setStateTime={setTimeTuesday} onChangeFunction={onChange}/>
                <DayWeek dayOfWeek='Quarta' atualState={timeWednesday} setStateTime={setTimeWednesday} onChangeFunction={onChange} />
                <DayWeek dayOfWeek='Quinta' atualState={timeThursday} setStateTime={setTimeThursday} onChangeFunction={onChange} />
                <DayWeek dayOfWeek='Sexta' atualState={timeFriday} setStateTime={setTimeFriday} onChangeFunction={onChange} />
                <DayWeek dayOfWeek='Sabado' atualState={timeSaturday} setStateTime={setTimeSaturday} onChangeFunction={onChange} stateOfOrganization='Aberto'/>
            </div>
        </div>
    )
}
