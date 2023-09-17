import React, { useState } from 'react'
import { DescriptionForm } from '../DescriptionForm/DescriptionForm'
import { Input } from 'antd';
import { TextPass } from '../TextPass/TextPass';
import 'animate.css'
import '../../components/TextField/TextField.css'
import './DataCorporationForm.css'

export const DataCorporationForm = () => {

    const [cnpj, setCnpj] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [razaoSocial, setRazaoSocial] = useState('')
    const [abertura, setAbertura] = useState('')
    const [cep, setCep] = useState('')
    const [cnae, setCnae] = useState('')
    const [statusCorporation, setStatusCorporation] = useState()

    const dataCorporation = {
        
    }

    return (
        <div className='data_corporation_form '>
            <div className='description_form animate__animated animate__fadeInRight'>
                <DescriptionForm title='VAMOS COMEÇAR' description='Na Kalos você conseguirá elevar o nivel de treino de seus clientes em qualquer lugar e a qualquer hora!' />
                <div className='data_corporation_form_fields'>
                    <p className='description_form'>Inicialmente precisamos que você nos informe alguns dados sobre sua empresa:</p>
                    <div className='fiels_reset'>
                        <div className='cnpj'>
                            <p className='textNameForInput'>CNPJ</p>
                            <Input size='default size' placeholder='00.000.000/0000-00' value={cnpj} onChange={cnpj => setCnpj(cnpj.target.value)} />
                        </div>
                        <div className='status_corporation'>
                            <div className='status'></div>
                            <p>Empresa Ativa</p>
                        </div>
                    </div>
                    <div className='fiels_reset'>
                        <div className="rz">
                            <p className='textNameForInput'>Razão Social</p>
                            <Input size="default size" disabled />
                        </div>
                        <div className="CNAE">
                            <p className='textNameForInput'>CNAE Principal</p>
                            <Input size="default size" disabled />
                        </div>
                    </div>
                    <div className='fiels_reset'>
                        <div className="rz">
                            <p className='textNameForInput'>Abertura</p>
                            <Input size="default size" disabled />
                        </div>
                        <div className="CEP">
                            <p className='textNameForInput'>CEP</p>
                            <Input size="default size" disabled />
                        </div>
                    </div>
                    <div className='fiels_reset email_passowrd'>
                        <div className="email">
                            <p className='textNameForInput'>E-mail</p>
                            <Input size="default size" value={email} onChange={email => setEmail(email.target.value)}/>

                        </div>
                        <div className="senha">
                            <TextPass password={senha} size='default size' onChange={senha => setSenha(senha.target.value)} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
