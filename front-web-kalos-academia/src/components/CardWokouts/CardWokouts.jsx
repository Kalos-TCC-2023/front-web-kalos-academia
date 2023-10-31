import React from 'react'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Divider, Tooltip } from 'antd'
import './CardWokouts.css'

export const CardWokouts = ({ idWokouts, nomeWokouts, dataWokouts, categoriaWokouts, nivelWokouts }) => {

    const nome = 'Treino de perna'
    const descricao = 'Treino para perna'
    const foto = ''
    const data = '04/04/2023'
    const nivel = 'Iniciante'
    const categoria = 'Natação'

    return (
        <div className='wokouts_card'>
            <div className="card_wokouts" onClick={() => {
                console.log(nome)
            }}>
                <div className="data_wokouts">
                    <div className="nome_categoria">
                        <span className='title_wokouts_gym'>{nome}</span>
                        <span className='category_wokouts_gym'>{categoria}</span>
                    </div>
                    <div className="footer_data_wokouts">
                        <div className="data_gym_wokouts_div">
                            <span className='data_wokouts_gym'>{data}</span>
                        </div>
                        <div className="students_by_wokouts">
                            <Avatar.Group>
                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                <a href="https://ant.design">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#f56a00',
                                        }}
                                    >
                                        K
                                    </Avatar>
                                </a>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#87d068',
                                        }}
                                        icon={<UserOutlined />}
                                    />
                                </Tooltip>
                                <Avatar
                                    style={{
                                        backgroundColor: '#1677ff',
                                    }}
                                    icon={<AntDesignOutlined />}
                                />
                            </Avatar.Group>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
