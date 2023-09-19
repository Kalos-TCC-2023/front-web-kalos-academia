import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { SendOutlined } from '@ant-design/icons'
import { ProfileCorporationForm } from '../../components/ProfileCorporationForm/ProfileCorporationForm'
import { ContactCorporationForm } from '../../components/ContactCorporationForm/ContactCorporationForm'
import { DataCorporationForm } from '../../components/DataCorporationForm/DataCorporationForm'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { OperationCorporationForm } from '../../components/OperationCorporationForm/OperationCorporationForm'
import { registerForm } from '../../hooks/registerForm'
import { ButtonPrimary } from '../../components/Button/ButtonPrimary'
import { Step } from '../../components/Steps/Step'
import './RegisterPage.css'

const formCorporationTemplate = {
  nome: '',
  email: '',
  senha: '',
  telefone: '',
  cnpj: '',
  foto: 'url.foto.com',
  descricao: '',
  cor_primaria: '#008CFF',
  cor_secundaria: '#008CFF',
  data_abertura: '',
  razao_social: '',
  facebook: '',
  whatsapp: '',
  instagram: '',
  logradouro: 'bluefit',
  numero: '',
  bairro: 'bluefit',
  complemento: '',
  cep: '',
  cidade: 'bluefit',
  estado: 'SP',
  id_categoria: '',
  status: 'Ativo',
  tags: []
}



export const RegisterPage = () => {

  const [data, setData] = useState(formCorporationTemplate)
  // console.log(data)
  const updateFielHandler = (key, value) => {
    // console.log(typeof(formCorporationTemplate.tags))
    // console.log(Object.values(formCorporationTemplate.tags))

    setData((prev) => {
      return { ...prev, [key]: value }
    })
  }

  const formComponent = [<DataCorporationForm data={data} updateFielHandler={updateFielHandler} />, <ProfileCorporationForm data={data} updateFielHandler={updateFielHandler} />, <OperationCorporationForm data={data} updateFielHandler={updateFielHandler} />, <ContactCorporationForm data={data} updateFielHandler={updateFielHandler} />]
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = registerForm(formComponent)
  
  return (
    <div className="register_page">
      <Helmet>
        <title>Kalos - Cadastro</title>
      </Helmet>
      <div className="register_page_steps">
        <div className="img_steps">
          <div className="img">
            < Step currentStep={currentStep} />
          </div>
        </div>
        <div className="steps_itens">
          <div className="steps_fields">
            {currentComponent}
          </div>
          <div className="next_to_go_back">
            {isFirstStep ? (
              <div className="back_form">

              </div>
            ) : (
              <div className="back_form">
                <ArrowLeftOutlined style={{ fontSize: '25px' }} onClick={() => changeStep(currentStep - 1)} />
              </div>)}
            {!isLastStep ? (
              <div className="next_form">
                <ArrowRightOutlined style={{ fontSize: '25px' }} onClick={(e) => changeStep(currentStep + 1, e)} />
              </div>
            ) : (
              <div className="next_form">
                <ButtonPrimary  shape="circle" nameButton={< SendOutlined />} size='large' />
              </div>)}

          </div>
        </div>
      </div>
    </div>
  )
}
