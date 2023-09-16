import React, { useState } from 'react'
import { Steps } from 'antd';


export const Step = ({currentStep}) => {

    return (
        <div className='steps_register'>
            <Steps
                current={currentStep}
                direction="vertical"
                items={[
                    {
                        title: 'Vamos começar!',
                        description: 'Dados basicos do negocio',
                    },
                    {
                        title: 'Perfil da Empresa',
                        description: 'Montando seu perfil no App!',
                    },
                    {
                        title: 'Horario de Funcionamento',
                        description: 'Checando horarios do negocio!',
                    },
                    {
                        title: 'Contato e Endereço',
                        description: 'Sabendo onde você está!',
                    },
                ]}
            />
        </div>
    )
}
