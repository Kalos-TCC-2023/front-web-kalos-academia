import React, { useEffect, useState } from 'react'
import './StepThreeAddStundetForGym.css'
import { CardStudentAdd } from '../CardStudentAdd/CardStudentAdd'
import { CardWokouts } from '../CardWokouts/CardWokouts'
import axios from 'axios'
import { Loader } from '../Loader/Loader'
import { SelectCardWokouts } from '../SelectCardWokouts/SelectCardWokouts'

export const StepThreeAddStundetForGym = ({ updateFielHandler, idStudent }) => {

    const id = localStorage.getItem("id_academia")
    const [wokoutsInformations, setWokoutsInformation] = useState('')
    const [addWouktsForStudent, setAddWouktsForStudent] = useState([])
    const [checked, setChecked] = useState(false)
    const endPointAzure = localStorage.getItem("end-point-azure")

    const [teste, setTeste] = useState(null)

    useEffect(() => {
        axios.get(`${endPointAzure}/kalos/treinoNivelCategoria/idAcademia/${id}`)
            .then(({ data }) => {
                setWokoutsInformation(data.informacoes)
                console.log(data.informacoes)

            }).catch((erro) => {
                console.log(erro)
            })

    }, [])



    // const addWouktsStudent = (idWokouts) => {
    //     //setCheckedStudent(checkedValues.target.checked)

    //     // console.log('checked = ', checkedValues.target.checked);
    //     // console.log('aluno', idStudent)

    //     console.log( addWouktsForStudent)
    //     if (addWouktsForStudent.length == 0) {
    //         addWouktsForStudent.push(idWokouts)
    //     } else {
    //         addWouktsForStudent.map((workout, index) => {
    //             if (workout == idWokouts) {
    //                 console.log('retirado', addWouktsForStudent)
    //                 addWouktsForStudent.splice(index, 1)
    //             } else if (workout !== idWokouts) {
    //                 console.log('colocado', addWouktsForStudent)
    //                 addWouktsForStudent.push(idWokouts)
    //             }
    //         })
    //     }


    //     // if (checkedValues.target.checked == true) {
    //     //     arrayStundetWorkouts.push(idStudent)
    //     // } else if (checkedValues.target.checked == false) {
    //     //     arrayStundetWorkouts.map((student, index) => {
    //     //         if (student == idStudent) {
    //     //             arrayStundetWorkouts.splice(index, 1)
    //     //             console.log(arrayStundetWorkouts)
    //     //         }
    //     //     })
    //     // }


    // }


    return (
        <div className='add_wokouts_gym'>

            {wokoutsInformations == '' ? <Loader /> : (
                <div>
                    <CardStudentAdd idStudent={idStudent} />
                    <div className="add_wokouts_stundet">
                        <span className='title_record_student_wourkt'>ADICIONAR TREINOS</span>
                        <div className="wokouts_gym">
                            {
                                wokoutsInformations.length == 0 ? <Loader /> : (
                                    wokoutsInformations.map((wokouts, index) => (
                                        <SelectCardWokouts updateFielHandler={updateFielHandler} arraySelectWokuts={addWouktsForStudent}  key={wokouts.id} checked={checked} alunosWokouts={wokouts.alunos} idWokouts={wokouts.id} nomeWokouts={wokouts.nome} categoriaWokouts={wokouts.nome_categoria_treino} dataWokouts={wokouts.data_criacao} imgWokouts={wokouts.foto} />
                                    ))
                                )
                            }
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}
