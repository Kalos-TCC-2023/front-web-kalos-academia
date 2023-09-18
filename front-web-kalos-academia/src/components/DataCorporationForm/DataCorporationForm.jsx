import React, { useEffect, useState } from 'react'
import { DescriptionForm } from '../DescriptionForm/DescriptionForm'
import { Input } from 'antd';
import { TextPass } from '../TextPass/TextPass'
import 'animate.css'
import '../../components/TextField/TextField.css'
import './DataCorporationForm.css'
import axios from 'axios';

export const DataCorporationForm = ({ data, updateFielHandler }) => {

    console.log(data)

    const [cnpj, setCnpj] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [razaoSocial, setRazaoSocial] = useState('Exemplo Razão Social')
    const [abertura, setAbertura] = useState('2022-07-02')
    const [cep, setCep] = useState('-')
    const [cnae, setCnae] = useState('-')
    const [statusCorporation, setStatusCorporation] = useState('Ativo')

    useEffect(() => {
        if (cnpj === '' || cnpj.length < 14) {
            return
        } else {
            axios.get(`https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}`
            ).then(({ data }) => {

                console.log(data)
                
                // setAbertura(data['DATA ABERTURA'])
                setCnae(data['CNAE PRINCIPAL CODIGO'])
                setRazaoSocial(data['RAZAO SOCIAL'])
                setCep(data['CEP'])
                console.log(cnpj)
                updateFielHandler('data_abertura', abertura)
                updateFielHandler('cep', data['CEP'])

            }).catch((erro) => {
                console.log(erro)
            })
        }

    }, [cnpj])


    return (
        <div className='data_corporation_form '>
            <div className='description_form animate__animated animate__fadeInRight'>
                <DescriptionForm title='VAMOS COMEÇAR' description='Na Kalos você conseguirá elevar o nivel de treino de seus clientes em qualquer lugar e a qualquer hora!' />
                <div className='data_corporation_form_fields'>
                    <p className='description_form'>Inicialmente precisamos que você nos informe alguns dados sobre sua empresa:</p>
                    <div className='fiels_reset'>
                        <div className='cnpj'>
                            <p className='textNameForInput'>CNPJ</p>
                            <Input size='default size' placeholder='00.000.000/0000-00' value={cnpj || data.cnpj } onChange={(cnpj) => {
                                updateFielHandler('cnpj', cnpj.target.value)
                                setCnpj(cnpj.target.value)
                            }
                            }  />
                        </div>
                        <div className='status_corporation'>
                            <div className='status'></div>
                            <p>Empresa Ativa</p>
                        </div>
                    </div>
                    <div className='fiels_reset'>
                        <div className="rz">
                            <p className='textNameForInput'>Razão Social</p>
                            <Input size="default size" value={razaoSocial} disabled />
                        </div>
                        <div className="CNAE">
                            <p className='textNameForInput'>CNAE Principal</p>
                            <Input size="default size" value={cnae} disabled />
                        </div>
                    </div>
                    <div className='fiels_reset'>
                        <div className="rz">
                            <p className='textNameForInput'>Abertura</p>
                            <Input size="default size" value={abertura} disabled onChange={abertura => updateFielHandler('data_abertura', abertura.target.value)} />
                        </div>
                        <div className="CEP">
                            <p className='textNameForInput'>CEP</p>
                            <Input size="default size" value={cep} disabled onChange={cep => updateFielHandler('cep', cep.target.value)} />
                        </div>
                    </div>
                    <div className='fiels_reset email_passowrd'>
                        <div className="email">
                            <p className='textNameForInput'>E-mail</p>
                            <Input size="default size" value={email || data.email } onChange={email => updateFielHandler('email', email.target.value)} />

                        </div>
                        <div className="senha">
                            <TextPass password={senha || data.senha} size='default size' onChange={senha => updateFielHandler('senha', senha.target.value)} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
