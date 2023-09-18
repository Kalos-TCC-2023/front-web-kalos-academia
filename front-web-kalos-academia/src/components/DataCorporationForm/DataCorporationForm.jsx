import React, { useEffect, useState } from 'react'
import { DescriptionForm } from '../DescriptionForm/DescriptionForm'
import { Input } from 'antd';
import { TextPass } from '../TextPass/TextPass'
import 'animate.css'
import moment from 'moment'
import '../../components/TextField/TextField.css'
import './DataCorporationForm.css'
import axios from 'axios';

export const DataCorporationForm = ({ data, updateFielHandler }) => {

    const [cnpj, setCnpj] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [razaoSocial, setRazaoSocial] = useState('')
    const [abertura, setAbertura] = useState('')
    const [cep, setCep] = useState('')
    const [cnae, setCnae] = useState('')
    const [statusCorporation, setStatusCorporation] = useState('Ativo')


    useEffect(() => {
        if (cnpj === '' || cnpj.length < 14) {
            return
        } else {

            const cnpjValidate = cnpj.replace(/[^0-9]/g, '')
            updateFielHandler('cnpj', cnpjValidate)

            // deve ir dentro da chamada da api
            var data = moment("02/03/2018", "DD/MM/YYYY");
            console.log(data.format("YYYY-MM-DD"));
            const dataAberturaFormatada = data.format("YYYY-MM-DD")
            updateFielHandler('data_abertura', dataAberturaFormatada)
            //

            axios.get(`https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpjValidate}`
            ).then(({ data }) => {

                console.log(data['DATA ABERTURA'])
                setAbertura(dataAberturaFormatada)
                setCnae(data['CNAE PRINCIPAL CODIGO'])
                setRazaoSocial(data['RAZAO SOCIAL'])
                setCep(data['CEP'])
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
                            <Input size='default size' placeholder='00.000.000/0000-00' value={cnpj || data.cnpj} onChange={(cnpj) => {
                                updateFielHandler('cnpj', cnpj.target.value)
                                setCnpj(cnpj.target.value)
                            }
                            } />
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
                            <Input size="default size" value={email || data.email} onChange={email => updateFielHandler('email', email.target.value)} />

                        </div>
                        <div className="senha">
                            <TextPass password={senha || data.senha} size='default size' onChange={senha => {
                                setSenha(senha.target.value)
                                updateFielHandler('senha', senha.target.value)
                            }} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
