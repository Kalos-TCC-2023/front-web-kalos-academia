import React, { useState } from 'react'
import { DescriptionForm } from '../DescriptionForm/DescriptionForm'
import { Input } from 'antd';
import '../../components/TextField/TextField.css'
import './DataCorporationForm.css'

export const DataCorporationForm = () => {

    const [statusCorporation, setStatusCorporation] = useState()

    return (
        <div className='data_corporation_form'>
            <div className='description_form'>
                <DescriptionForm title='VAMOS COMEÇAR' description='Na Kalos você conseguirá elevar o nivel de treino de seus clientes em qualquer lugar e a qualquer hora!' />
                <div className='data_corporation_form_fields'>
                    <p className='description_form'>Inicialmente precisamos que você nos informe alguns dados sobre sua empresa:</p>
                    <div className='fiels_reset'>
                        <div className='cnpj'>
                            <p className='textNameForInput'>CNPJ</p>
                            <Input size='default size' placeholder='00.000.000/0000-00' />
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
                    <div className="email">
                        <p className='textNameForInput'>E-mail</p>
                        <Input size="default size" />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
