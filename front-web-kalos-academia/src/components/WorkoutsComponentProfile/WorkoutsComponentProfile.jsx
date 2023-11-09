import React, { useEffect, useState } from 'react'
import { NoData } from '../NoData/NoData'
import { CardWokouts } from '../CardWokouts/CardWokouts'
import axios from 'axios'
import { Loader } from '../Loader/Loader'
import './WorkoutsComponentProfile.css'

export const WorkoutsComponentProfile = ({ color }) => {

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
        <div>
            <p className='wokouts_title_gym' style={{ color: `${color}` }}>Treinos da academia</p>
            <div className='workouts_profile_component_page'>
                {
                    wokoutsInformations.length == 0 ? <NoData description='Academia não possui treinos ainda!' /> : (
                        wokoutsInformations.map((wokouts) => (
                            <CardWokouts key={wokouts.id} alunosWokouts={wokouts.alunos} idWokouts={wokouts.id} nomeWokouts={wokouts.nome} categoriaWokouts={wokouts.nome_categoria_treino} dataWokouts={wokouts.data_criacao} imgWokouts={wokouts.foto} />
                        ))
                    )
                }
            </div>
        </div>

    )
}
