import React from 'react'
import { ProfileCorporationForm } from '../../components/ProfileCorporationForm/ProfileCorporationForm'
import { ContactCorporationForm } from '../../components/ContactCorporationForm/ContactCorporationForm'
import { DataCorporationForm } from '../../components/DataCorporationForm/DataCorporationForm'
import { ArrowRightOutlined } from '@ant-design/icons' 

import './RegisterPage.css'

export const RegisterPage = () => {

  const formComponent = [<DataCorporationForm />, <ContactCorporationForm />, <ProfileCorporationForm />]

  return (
    <div className="register_page">
      <div className="register_page_steps">
        <div className="img_steps">
          <div className="img">background</div>
        </div>
        <div className="steps_itens">
          <div className="steps_fields">
            <DataCorporationForm />
          </div>
          <div className="next_form">
            <ArrowRightOutlined style={{ fontSize: '25px' }} onClick={() => console.log('click')}/>
          </div>
        </div>

      </div>
    </div>
  )
}
