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
  nome: 'dss',
  email: 'd',
  senha: 'd',
  telefone: 'd',
  cnpj: 'd',
  foto: 'url.foto.com',
  descricao: 'd',
  cor_primaria: '#008CFF',
  cor_secundaria: '#008CFF',
  data_abertura: 'd',
  razao_social: 'd',
  facebook: 'd',
  whatsapp: 'd',
  instagram: 'd',
  logradouro: 'bluefit',
  numero: 'd',
  bairro: 'bluefit',
  complemento: 'd',
  cep: 'd',
  cidade: 'bluefit',
  estado: 'SP',
  id_categoria: '',
  status: 'Ativo',
  tags: [1]
}



export const RegisterPage = () => {

  const [data, setData] = useState(formCorporationTemplate)
  const [submit, setSubmit] = useState(false)
  const [stateSubmit, setStateSubimt] = useState(false)

  const updateFielHandler = (key, value) => {
  
    setData((prev) => {
      return { ...prev, [key]: value }
    })
  }

  const formComponent = [<DataCorporationForm data={data} updateFielHandler={updateFielHandler} />, <ProfileCorporationForm data={data} updateFielHandler={updateFielHandler} />, <OperationCorporationForm data={data} updateFielHandler={updateFielHandler} />, <ContactCorporationForm data={data} updateFielHandler={updateFielHandler} submit={submit} stateSubmit={setSubmit} />]
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
              <div className="submit">
                <ButtonPrimary disabled={stateSubmit} shape="circle" onClickFuction={() =>
                {
                  setSubmit(true)
                  console.log('click')
                } } nameButton={< SendOutlined />} size='large' />
              </div>
              )
              }

          </div>
        </div>
      </div>
    </div>
  )
}
