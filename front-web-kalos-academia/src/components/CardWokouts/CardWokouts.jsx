import React, { useState } from 'react'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Divider, Tooltip } from 'antd'
import './CardWokouts.css'

export const CardWokouts = ({ idWokouts, nomeWokouts, dataWokouts, categoriaWokouts, nivelWokouts, alunosWokouts, imgWokouts, onClickFunction }) => {

    const [stateStundets, setStateStudent] = useState(alunosWokouts)
    console.log(stateStundets);

    return (
        <div className='wokouts_card'>
            <div className="card_wokouts" style={{ backgroundImage: `url('${imgWokouts}' )`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                onClick={onClickFunction}>
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
                                            <Tooltip title={student.nome} placement="top">
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
