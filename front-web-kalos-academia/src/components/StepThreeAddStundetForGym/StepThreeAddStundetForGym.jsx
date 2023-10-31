import React, { useEffect } from 'react'
import './StepThreeAddStundetForGym.css'
import { CardStudentAdd } from '../CardStudentAdd/CardStudentAdd'
import { CardWokouts } from '../CardWokouts/CardWokouts'
import { Button } from 'antd';

import axios from 'axios'

export const StepThreeAddStundetForGym = ({ updateFielHandler, idStudent }) => {


    useEffect(() => {
        axios.get(`https://kaloscorp.cyclic.app/kalos/treinoNivelCategoria/idAcademia/51`)
            .then(({ data }) => {
                console.log(data.informacoes)

            }).catch((erro) => {
                console.log(erro)
            })

    }, [])

    return (
        <div className='add_wokouts_gym'>
            <CardStudentAdd idStudent={idStudent} />
            <div className="add_wokouts_stundet">
                <span className='title_record_student_wourkt'>ADICIONAR TREINOS</span>
                <div className="wokouts_gym">
                    <CardWokouts />
                    <CardWokouts />
                    <CardWokouts />
                    <CardWokouts />
                </div>
            </div>
        </div>
    )
}
