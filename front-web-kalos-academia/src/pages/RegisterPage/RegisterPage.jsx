import React, { useState } from 'react'
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

export const RegisterPage = () => {

  const formComponent = [<DataCorporationForm />, <ProfileCorporationForm />, <OperationCorporationForm />, <ContactCorporationForm />]

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = registerForm(formComponent)

  const toSucessRegister = () => {
    
  }

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
                {/* <ArrowRightOutlined style={{ fontSize: '25px' }} onClick={(e) => changeStep(currentStep + 1, e)} /> */}
                <ButtonPrimary shape="circle" nameButton={< SendOutlined />} size='large' />
              </div>)}

          </div>
        </div>
      </div>
    </div>
  )
}
