import React, { useEffect, useState } from 'react'
import { Breadcrumb, FloatButton, Input, Select, ColorPicker } from 'antd';
import { SaveFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { InfoCardGym } from '../../components/InfoCardGym/InfoCardGym';
const { TextArea } = Input;
import { DayWeek } from '../../components/DayWeek/DayWeek';
import { Helmet } from 'react-helmet'
import '../../components/TextField/TextField.css'
import './EditProfile.css'
import { UploadImage } from '../../components/UploadImage/UploadImage';
import axios from 'axios';
import { DropDownMenu } from '../../components/DropDownMenu/DropDownMenu';

export const EditProfile = () => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    const [categorySelected, setCategorySelected] = useState('Categoria')
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
    const [categoryApi, setCategoryApi] = useState([])
    const [tagsApi, setTagsApi] = useState([])
    const [imageDb, setImageDb] = useState('https://firebasestorage.googleapis.com/v0/b/kalos-corp-academia.appspot.com/o/images%2F360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg?alt=media&token=d76e9efb-e14a-42d7-8daa-4cdbd0b85dea&_gl=1*bx9q1z*_ga*MzU5MzIyMzYwLjE2OTY0NTc2MDM.*_ga_CW55HF8NVT*MTY5NjQ2MzkyNC4yLjEuMTY5NjQ3MDUyMy4xMi4wLjA.')
    const [fileList, setFileList] = useState([
        {
            uid: '-5',
            url: 'https://firebasestorage.googleapis.com/v0/b/kalos-corp-academia.appspot.com/o/images%2F360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg?alt=media&token=d76e9efb-e14a-42d7-8daa-4cdbd0b85dea&_gl=1*bx9q1z*_ga*MzU5MzIyMzYwLjE2OTY0NTc2MDM.*_ga_CW55HF8NVT*MTY5NjQ2MzkyNC4yLjEuMTY5NjQ3MDUyMy4xMi4wLjA.',
            status: 'done'
        },
    ])
    const endPointAzure = localStorage.getItem("end-point-azure")


    const operationCorporation = {
        id_academia: '',
        segunda: {
            status: '',
            horario_inicio: '',
            horario_fim: ''
        },
        terca: {
            status: '',
            horario_inicio: '',
            horario_fim: ''
        },
        quarta: {
            status: '',
            horario_inicio: '',
            horario_fim: ''
        },
        quinta: {
            status: '',
            horario_inicio: '',
            horario_fim: ''
        },
        sexta: {
            status: '',
            horario_inicio: '',
            horario_fim: ''
        },
        sabado: {
            status: '',
            horario_inicio: '',
            horario_fim: ''
        },
        domingo: {
            status: '',
            horario_inicio: '',
            horario_fim: ''
        }
    }

    const [operation, setOperation] = useState(operationCorporation)

    const updateOperationHandler = (key, value) => {

        setOperation((prev) => {
            return { ...prev, [key]: value }
        })
    }

    const [timeSunday, setTimeSunday] = useState('')
    const [timeMonday, setTimeMonday] = useState('')
    const [timeTuesday, setTimeTuesday] = useState('')
    const [timeWednesday, setTimeWednesday] = useState('')
    const [timeThursday, setTimeThursday] = useState('')
    const [timeFriday, setTimeFriday] = useState('')
    const [timeSaturday, setTimeSaturday] = useState('')

    console.log(categoryApi)

    useEffect(() => {
        axios.get('https://kaloscorp.cyclic.app/kalos/tags')
            .then(({ data }) => {
                if (tagsApi.length === 0) {
                    console.log(data.tags)

                    const items_api = data.tags.map((tag) => {
                        const newTags = {}
                        newTags.key = tag.id
                        newTags.label = tag.nome
                        tagsApi.push(newTags)

                    })

                } else {
                    return
                }

            }).catch((erro) => {
                console.log(erro)
            })
    }, [])

    useEffect(() => {
        axios.get(`${endPointAzure}/kalos/tags`)
            .then(({ data }) => {
                if (tagsApi.length === 0) {

                    const items_api = data.tags.map((tag) => {
                        const newTags = {}
                        newTags.value = tag.id
                        newTags.label = tag.nome
                        tagsApi.push(newTags)

                    })

                } else {
                    return
                }

            }).catch((erro) => {
                console.log(erro)
            })
    }, [])

    useEffect(() => {
        axios.get(`${endPointAzure}/kalos/categoria`)
            .then(({ data }) => {

                if (categoryApi.length === 0) {
                    const items_api = data.categorias.map((categoria) => {
                        const newCategories = {}
                        newCategories.key = categoria.id
                        newCategories.label = categoria.nome
                        categoryApi.push(newCategories)
                    })
                    console.log(categoryApi)
                } else {
                    return
                }
            }).catch((erro) => {
                console.log(erro)
            })
    }, [])

    const handleCategoryClick = (item) => {
        console.log(item)
        categoryApi.map((category) => {
            if (item.key == category.key) {

                setCategorySelected(category.label)
                const categoryName = parseInt(item.key)
                console.log(categoryName)

            }
        })

    }


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
                    <div className="elements_edit_profile">
                        <div className="photo_basic_information">
                            <InfoCardGym sizeDiv={500} title='Foto de Perfil' >
                                <UploadImage fileList={fileList} imageDb={imageDb} setImageDb={setImageDb} setFileList={setFileList} />
                            </InfoCardGym>
                            <InfoCardGym sizeDiv={580} title='Informações Basicas' >
                                <div className="category_name_gym">
                                    <div className="name_gym_edit">
                                        <p className='textNameForInput'>Nome do seu comercio</p>
                                        <Input size='default size' value={nameGym} onChange={(nameGym) => {
                                            setNameGym(nameGym.target.value)
                                        }
                                        } />
                                    </div>
                                    <div className="category_gym">
                                        <p className='textNameForInput'>Categoria</p>
                                        <DropDownMenu className='edit_category_gym' items={categoryApi} itemSelected={categorySelected} onClickFuction={handleCategoryClick} />
                                        {/* <Select
                                            defaultValue="Academia"
                                            style={{
                                                width: 180,
                                            }}
                                            onChange={handleChange}
                                            options={
                                                categoryApi
                                            }
                                        /> */}
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
                            <InfoCardGym sizeDiv={500} title='Tags' >
                                <Select
                                    defaultValue="Acessibilidade"
                                    style={{
                                        width: 550,
                                    }}
                                    onChange={handleChange}
                                    options={tagsApi}
                                />
                            </InfoCardGym>
                            <InfoCardGym sizeDiv={580} title='Contato' >
                                <p className='textNameForInput'>E-mail</p>
                                <Input value={email} style={{ width: '550px' }} onChange={(email) => {
                                    setEmail(email.target.value)
                                }
                                } />
                                <p className='textNameForInput'>Telefone</p>
                                <Input size='default size' value={telefone} onChange={(telefone) => {
                                    setTelefone(telefone.target.value)
                                }
                                } />
                            </InfoCardGym>
                        </div>
                        <div className="social_midia_endereco">
                            <InfoCardGym sizeDiv={500} title='Redes Sociais' >
                                <p className='textNameForInput'>Instagram</p>
                                <Input size='default size' style={{ width: '550px' }} value={instagram} onChange={(instagram) => {
                                    setInstagram(instagram.target.value)
                                }
                                } />
                                <p className='textNameForInput'>Facebook</p>
                                <Input size='default size' value={facebook} onChange={(facebook) => {
                                    setFacebook(facebook.target.value)
                                }
                                } />
                                <p className='textNameForInput'>Whatsapp</p>
                                <Input size='default size' value={whatsApp} onChange={(whatsApp) => {
                                    setWhatsapp(whatsApp.target.value)
                                }
                                } />
                            </InfoCardGym>
                            <InfoCardGym sizeDiv={580} title='Endereço' >
                                <div className="cep_rua">
                                    <div className="cep">
                                        <p className='textNameForInput'>Cep</p>
                                        <Input size='default size' value={cep} onChange={(cep) => {
                                            setCep(cep.target.value)
                                        }
                                        } />
                                    </div>
                                    <div className="rua">
                                        <p className='textNameForInput'>Rua</p>
                                        <Input style={{ width: '345px' }} size='default size' value={rua} onChange={(rua) => {
                                            setRua(rua.target.value)
                                        }
                                        } />
                                    </div>
                                </div>
                                <div className="complemento_numero_bairro">
                                    <div className="complemento">
                                        <p className='textNameForInput'>Complemento</p>
                                        <Input size='default size' placeholder='00 0000-0000' value={complemento} onChange={(complemento) => {
                                            setComplemento(complemento.target.value)
                                        }
                                        } />
                                    </div>
                                    <div className="numero">
                                        <p className='textNameForInput'>Número</p>
                                        <Input style={{ width: '100px' }} size='default size' placeholder='000' value={numero} onChange={(numero) => {
                                            setNumero(numero.target.value)
                                        }
                                        } />
                                    </div>
                                    <div className="bairro">
                                        <p className='textNameForInput'>Bairro</p>
                                        <Input style={{ width: '225px' }} size='default size' value={bairro} onChange={(bairro) => {
                                            setBairro(bairro.target.value)
                                        }
                                        } />
                                    </div>
                                </div>
                                <div className="cidade">
                                    <p className='textNameForInput'>Cidade</p>
                                    <Input style={{ width: '550px' }} size='default size' value={cidade} onChange={(cidade) => {
                                        setCidade(cidade.target.value)
                                    }
                                    } />
                                </div>
                            </InfoCardGym>
                        </div>
                        <div className="operation_colors">
                            <InfoCardGym sizeDiv={840} title='Horario de Funcionamento' >
                                <div className="days_week">
                                    <DayWeek dayString='Domingo' dayOfWeek='domingo' updateOperationHandler={updateOperationHandler} atualState={timeSunday} setStateTime={setTimeSunday} />
                                    <DayWeek dayString='Segunda' dayOfWeek='segunda' updateOperationHandler={updateOperationHandler} atualState={timeMonday} setStateTime={setTimeMonday} />
                                    <DayWeek dayString='Terça' dayOfWeek='terca' updateOperationHandler={updateOperationHandler} atualState={timeTuesday} setStateTime={setTimeTuesday} />
                                    <DayWeek dayString='Quarta' dayOfWeek='quarta' updateOperationHandler={updateOperationHandler} atualState={timeWednesday} setStateTime={setTimeWednesday} />
                                    <DayWeek dayString='Quinta' dayOfWeek='quinta' updateOperationHandler={updateOperationHandler} atualState={timeThursday} setStateTime={setTimeThursday} />
                                    <DayWeek dayString='Sexta' dayOfWeek='sexta' updateOperationHandler={updateOperationHandler} atualState={timeFriday} setStateTime={setTimeFriday} />
                                    <DayWeek dayString='Sabado' dayOfWeek='sabado' updateOperationHandler={updateOperationHandler} atualState={timeSaturday} setStateTime={setTimeSaturday} />
                                </div>

                            </InfoCardGym>
                            <InfoCardGym sizeDiv={400} title='Cores' >
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
        </div>
    )
}
