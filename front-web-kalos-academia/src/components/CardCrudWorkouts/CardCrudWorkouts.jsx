import { Avatar, Dropdown, message, Space, Tooltip, Button } from 'antd';
import React, { useState } from 'react'
import { DownOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CardCrudWorkouts.css'

export const CardCrudWorkouts = ({ idWokouts, nomeWokouts, dataWokouts, categoriaWokouts, nivelWokouts, alunosWokouts, imgWokouts, onClickFunction }) => {

    const [stateStundets, setStateStudent] = useState(alunosWokouts)

    const [messageApi, contextHolder] = message.useMessage()

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Treino deletado com sucesso!',
        })
    }

    const handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    };
    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e)
        console.log(idWokouts)
    }


    const handleDelete = () => {
        axios.delete(`https://kaloscorp.cyclic.app/kalos/treino/id/${idWokouts}`)
            .then(({ data }) => {
                success()
                console.log(data)
            }).catch(({ error }) => {
                console.log(error)
            })
    }

    const handleIdStorage = () => {
        localStorage.setItem("id_treino", idWokouts);
    }

    const items = [
        {
            label: <Link to='/menu/treinos/adicionar_novo_aluno_no_treino'>Adicionar novo aluno</Link>,
            key: '1',
            onClick: handleIdStorage

        },
      
        {
            label: 'Excluir Treino',
            key: '3',
            icon: <CloseOutlined />,
            danger: true,
            onClick: handleDelete,
        },
    ]

    const menuProps = {
        items,
    }

    return (
        <div className='wokouts_card'>
            {contextHolder}
            <div className="card_wokouts" style={{ backgroundImage: `url('${imgWokouts}' )`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                onClick={onClickFunction}>
                <div className="drop_options">
                    <Dropdown menu={menuProps}>
                        <Button>
                            <Space>
                                ...
                            </Space>
                        </Button>
                    </Dropdown>
                </div>

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
