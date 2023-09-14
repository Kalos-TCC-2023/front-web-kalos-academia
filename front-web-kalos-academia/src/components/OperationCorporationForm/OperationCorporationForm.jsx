import React from 'react'
import { Switch, TimePicker } from 'antd';
import { DescriptionForm } from '../DescriptionForm/DescriptionForm'
import './OperationCorporationForm.css'
import { DayWeek } from '../DayWeek/DayWeek';

export const OperationCorporationForm = () => {


    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    }

    const days_of_week = [
        {
            'day':'Domingo',
            'key': 1
        }, 
        {
            'day':'Segunda',
            'key': 2
        }, 
        {
            'day':'Terça',
            'key': 3
        }, 
        {
            'day':'Quarta',
            'key': 4
        }, 
        {
            'day':'Quinta',
            'key': 5
        }, 
        {
            'day':'Sexta',
            'key': 6
        },
        {
            'day':'Sabado',
            'key': 7
        }
    ]

    return (
        <div className='operation_corporation_form'>
            <DescriptionForm title='HORARIO DE FUNCIONAMENTO' description='Preencha de acordo com os horários de funcionamento do seu negócio, isso ficará disponivel para consulta do usuário' />
            <div className="operation_corporation_week_fields">
                <DayWeek dayOfWeek='Domingo' onChangeFunction={onChange} stateOfOrganization='Aberto'/>
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
