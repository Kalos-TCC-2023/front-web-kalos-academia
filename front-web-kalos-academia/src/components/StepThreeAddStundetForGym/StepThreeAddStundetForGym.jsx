import React, { useEffect, useState } from 'react'
import './StepThreeAddStundetForGym.css'
import { CardStudentAdd } from '../CardStudentAdd/CardStudentAdd'
import { CardWokouts } from '../CardWokouts/CardWokouts'
import axios from 'axios'
import { Loader } from '../Loader/Loader'

export const StepThreeAddStundetForGym = ({ updateFielHandler, idStudent }) => {

    const id = localStorage.getItem("id_academia")
    const [wokoutsInformations, setWokoutsInformation] = useState('')
    const [addWouktsForStudent, setAddWouktsForStudent] = useState([])


    useEffect(() => {
        axios.get(`https://kaloscorp.cyclic.app/kalos/treinoNivelCategoria/idAcademia/${id}`)
            .then(({ data }) => {
                setWokoutsInformation(data.informacoes)
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
                    {
                        wokoutsInformations.length == 0 ? <Loader /> : (
                            wokoutsInformations.map((wokouts) => (
                                <CardWokouts onClickFunction={(e) => {
                                    addWouktsForStudent.push(wokouts.id)
                                    console.log(wokouts.id)
                                    console.log(addWouktsForStudent)
                                }} key={wokouts.id} idWokouts={wokouts.id} nomeWokouts={wokouts.nome} categoriaWokouts={wokouts.nome_categoria_treino} dataWokouts={wokouts.data_criacao} imgWokouts={wokouts.foto} />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}
