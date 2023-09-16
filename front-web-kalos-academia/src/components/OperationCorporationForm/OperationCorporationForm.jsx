import React from 'react'
import { Switch, TimePicker } from 'antd';
import { DescriptionForm } from '../DescriptionForm/DescriptionForm'
import './OperationCorporationForm.css'
import { DayWeek } from '../DayWeek/DayWeek';

export const OperationCorporationForm = () => {


    const onChange = (checked, day) => {
        // console.log(`switch to ${checked}`)
        return
    }


    return (
        <div className='operation_corporation_form animate__animated animate__fadeInRight'>
            <DescriptionForm title='HORARIO DE FUNCIONAMENTO' description='Preencha de acordo com os horários de funcionamento do seu negócio, isso ficará disponivel para consulta do usuário' />
            <div className="operation_corporation_week_fields">
                <DayWeek dayOfWeek='Domingo' onChangeFunction={(checked) => {console.log(`este switch to ${checked}`)}} stateOfOrganization='Aberto'/>
                <DayWeek dayOfWeek='Segunda' onChangeFunction={onChange} stateOfOrganization='Aberto'/>
                <DayWeek dayOfWeek='Terça' onChangeFunction={onChange} stateOfOrganization='Aberto'/>
                <DayWeek dayOfWeek='Quarta' onChangeFunction={onChange} stateOfOrganization='Aberto'/>
                <DayWeek dayOfWeek='Quinta' onChangeFunction={onChange} stateOfOrganization='Aberto'/>
                <DayWeek dayOfWeek='Sexta' onChangeFunction={onChange} stateOfOrganization='Aberto'/>
                <DayWeek dayOfWeek='Sabado' onChangeFunction={onChange} stateOfOrganization='Aberto'/>
            </div>
        </div>
    )
}
