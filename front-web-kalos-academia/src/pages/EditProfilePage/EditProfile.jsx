import React, { useState } from 'react'
import { Breadcrumb, FloatButton, Input, Select, ColorPicker } from 'antd';
import { SaveFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { InfoCardGym } from '../../components/InfoCardGym/InfoCardGym';
const { TextArea } = Input;
import { DayWeek } from '../../components/DayWeek/DayWeek';
import { Helmet } from 'react-helmet'
import '../../components/TextField/TextField.css'
import './EditProfile.css'

export const EditProfile = () => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    const [nameGym, setNameGym] = useState('')
    const [description, setDescription] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [instagram, setInstagram] = useState('')
    const [facebook, setFacebook] = useState('')
    const [whatsApp, setWhatsapp] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [complemento, setComplemento] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [razaoSocial, setRazaoSocial] = useState('')
    const [dataAbertura, setDataAbertura] = useState('')
    const [cnae, setCnae] = useState('')


    return (
        <div>
            <div className='edit_profile_gym'>
                <Helmet>
                    <title>Kalos - Editar Perfil</title>
                </Helmet>
                <FloatButton tooltip='Salvar alterações' icon={<SaveFilled />} onClick={() => console.log('click')} />
                <div className="itens_edit_profile">
                    <h1 className='title_edit_page'>Editar Perfil</h1>
                    <Breadcrumb
                        items={[
                            {
                                title: <Link to='/menu/perfil'>Perfil</Link>,
                            },
                            {
                                title: <Link to='/menu/perfil/editar'>Editar Perfil</Link>,
                            }
                        ]}
                    />
                    <div className="photo_basic_information">
                        <InfoCardGym title='Foto de Perfil' >

                        </InfoCardGym>
                        <InfoCardGym title='Informações Basicas' >
                            <div className="category_name_gym">
                                <div className="name_gym">
                                    <p className='textNameForInput'>Nome do seu comercio</p>
                                    <Input size='default size' placeholder='exemplo' value={nameGym} onChange={(nameGym) => {
                                        setNameGym(nameGym.target.value)
                                    }
                                    } />
                                </div>
                                <div className="category_gym">
                                    <p className='textNameForInput'>Categoria</p>
                                    <Select
                                        defaultValue="Academia"
                                        style={{
                                            width: 180,
                                        }}
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: '1',
                                                label: 'Academia',
                                            },
                                            {
                                                value: '2',
                                                label: 'Luta',
                                            },
                                            {
                                                value: '2',
                                                label: 'Crossfith',
                                            },
                                            {
                                                value: '3',
                                                label: 'Natação',

                                            },
                                        ]}
                                    />
                                </div>

                            </div>
                            <div className="description_gym">
                                <p className='textNameForInput'>Descrição</p>
                                <TextArea
                                    style={{ width: '550px' }}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Descrição da Academia"
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                />
                            </div>
                        </InfoCardGym>
                    </div>
                    <div className="tags_contact">
                        <InfoCardGym title='Tags' >
                            <Select
                                defaultValue="Acessibilidade"
                                style={{
                                    width: 250,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: '1',
                                        label: 'Acessibilidade',
                                    },
                                    {
                                        value: '2',
                                        label: 'Luta',
                                    },
                                    {
                                        value: '2',
                                        label: 'Crossfith',
                                    },
                                    {
                                        value: '3',
                                        label: 'Natação',

                                    },
                                ]}
                            />
                        </InfoCardGym>
                        <InfoCardGym title='Contato' >
                            <p className='textNameForInput'>E-mail</p>
                            <Input style={{ width: '550px' }} placeholder='exemplo' value={email} onChange={(email) => {
                                setEmail(email.target.value)
                            }
                            } />
                            <p className='textNameForInput'>Telefone</p>
                            <Input size='default size' placeholder='exemplo' value={telefone} onChange={(telefone) => {
                                setTelefone(telefone.target.value)
                            }
                            } />
                        </InfoCardGym>
                    </div>
                    <div className="social_midia_endereco">
                        <InfoCardGym title='Redes Sociais' >
                            <p className='textNameForInput'>Instagram</p>
                            <Input style={{ width: '550px' }} size='default size' placeholder='exemplo' value={email} onChange={(email) => {
                                setEmail(email.target.value)
                            }
                            } />
                            <p className='textNameForInput'>Facebook</p>
                            <Input size='default size' placeholder='exemplo' value={telefone} onChange={(telefone) => {
                                setTelefone(telefone.target.value)
                            }
                            } />
                            <p className='textNameForInput'>Whatsapp</p>
                            <Input size='default size' placeholder='exemplo' value={telefone} onChange={(telefone) => {
                                setTelefone(telefone.target.value)
                            }
                            } />
                        </InfoCardGym>
                        <InfoCardGym title='Redes Sociais' >
                            <div className="cep_rua">
                                <div className="cep">
                                    <p className='textNameForInput'>Cep</p>
                                    <Input style={{ width: '250px' }} size='default size' placeholder='exemplo' value={telefone} onChange={(telefone) => {
                                        setTelefone(telefone.target.value)
                                    }
                                    } />
                                </div>
                                <div className="rua">
                                    <p className='textNameForInput'>Rua</p>
                                    <Input style={{ width: '250px' }} size='default size' placeholder='exemplo' value={telefone} onChange={(telefone) => {
                                        setTelefone(telefone.target.value)
                                    }
                                    } />
                                </div>
                            </div>
                            <div className="complemento_numero_bairro">
                                <div className="complemento">
                                    <p className='textNameForInput'>Complemento</p>
                                    <Input style={{ width: '250px' }} size='default size' placeholder='exemplo' value={telefone} onChange={(telefone) => {
                                        setTelefone(telefone.target.value)
                                    }
                                    } />
                                </div>
                                <div className="numero">
                                    <p className='textNameForInput'>Numero</p>
                                    <Input style={{ width: '100px' }} size='default size' placeholder='exemplo' value={telefone} onChange={(telefone) => {
                                        setTelefone(telefone.target.value)
                                    }
                                    } />
                                </div>
                                <div className="bairro">
                                    <p className='textNameForInput'>Bairro</p>
                                    <Input style={{ width: '250px' }} size='default size' placeholder='exemplo' value={telefone} onChange={(telefone) => {
                                        setTelefone(telefone.target.value)
                                    }
                                    } />
                                </div>
                            </div>
                            <div className="cidade">
                                <p className='textNameForInput'>Cidade</p>
                                <Input style={{ width: '550px' }} size='default size' placeholder='exemplo' value={telefone} onChange={(telefone) => {
                                    setTelefone(telefone.target.value)
                                }
                                } />
                            </div>
                        </InfoCardGym>
                    </div>
                    <div className="operation_colors">
                        <InfoCardGym title='Horario de Funcionamento' >
                            <div className="days_week">
                                <DayWeek dayString='Domingo' dayOfWeek='domingo' />
                                <DayWeek dayString='Segunda' dayOfWeek='segunda' />
                                <DayWeek dayString='Terça' dayOfWeek='terca' />
                                <DayWeek dayString='Quarta' dayOfWeek='quarta' />
                                <DayWeek dayString='Quinta' dayOfWeek='quinta' />
                                <DayWeek dayString='Sexta' dayOfWeek='sexta' />
                                <DayWeek dayString='Sabado' dayOfWeek='sabado' />
                            </div>

                        </InfoCardGym>
                        <InfoCardGym title='Cores' >
                            <div className="colors_picker">
                                <div className="color_primary">
                                    <p className='textNameForInput'>Cor primaria</p>
                                    <ColorPicker showText />
                                </div>
                                <div className="color_secundary">
                                    <p className='textNameForInput'>Cor secundaria</p>
                                    <ColorPicker showText />
                                </div>
                            </div>
                        </InfoCardGym>
                    </div>
                    <div className="corporation_data"></div>
                </div>
            </div>
        </div>
    )
}
