import React, { useState } from 'react'
import { Avatar, Checkbox, Divider, Tooltip } from 'antd'


export const SelectCardWokouts = ({ checked, idWokouts, updateFielHandler, className, nomeWokouts, dataWokouts, categoriaWokouts, nivelWokouts, alunosWokouts, imgWokouts, onClickFunction, refComponent, borderStyle, arraySelectWokuts }) => {

    const [stateStundets, setStateStudent] = useState(alunosWokouts)
    const [checkedStudent, setCheckedStudent] = useState(checked)
    const [arrayStundetWorkouts, setArrayStundetWorkouts] = useState([])

    const onChange = (checkedValues) => {
        setCheckedStudent(checkedValues.target.checked)

        console.log('checked = ', checkedValues.target.checked);
        console.log('aluno', idWokouts)

        if (checkedValues.target.checked == true) {
            arraySelectWokuts.push(idWokouts)
            updateFielHandler('treinos_aluno', arraySelectWokuts)
        } else if (checkedValues.target.checked == false) {
            arraySelectWokuts.map((student, index) => {
                if (student == idWokouts) {
                    arraySelectWokuts.splice(index, 1)
                    updateFielHandler('treinos_aluno', arraySelectWokuts)
                    console.log(arraySelectWokuts)
                }
            })
        }


    }

    console.log(arraySelectWokuts)


    return (
        <div className='wokouts_card'>
            <div className={`card_wokouts ${className}`} style={{ backgroundImage: `url('${imgWokouts}' )`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', border: `${borderStyle}` }}
                onClick={onClickFunction}>
                <Checkbox checked={checkedStudent} onChange={onChange}></Checkbox>
                <div className="data_wokouts" >
                    <div className="nome_categoria">
                        <span className='title_wokouts_gym'>{nomeWokouts}</span>
                        <span className='category_wokouts_gym'>{categoriaWokouts}</span>
                    </div>
                    <div className="footer_data_wokouts">
                        <div className="data_gym_wokouts_div">
                            <span className='data_wokouts_gym'>{dataWokouts}</span>
                        </div>
                        <div className="students_by_wokouts">
                            <Avatar.Group maxCount={6}>
                                {
                                    stateStundets.lenght == 0 ? [] : (
                                        stateStundets.map((student) => (
                                            <Tooltip key={student.id} title={student.nome} placement="top">
                                                <Avatar key={student.id}
                                                    src={student.foto}
                                                />
                                            </Tooltip>
                                        ))
                                    )

                                }

                            </Avatar.Group>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
