import React from 'react'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Divider, Tooltip } from 'antd'
import './CardWokouts.css'

export const CardWokouts = ({ idWokouts, nomeWokouts, dataWokouts, categoriaWokouts, nivelWokouts, alunosWokouts, imgWokouts, onClickFunction }) => {

    return (
        <div className='wokouts_card'>
            <div className="card_wokouts" style={{backgroundImage: `url('${imgWokouts}' )`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} 
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
