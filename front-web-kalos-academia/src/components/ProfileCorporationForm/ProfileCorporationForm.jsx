import React, { useState } from 'react'
import { Dropdown, Input } from 'antd';
const { TextArea } = Input;
import { DescriptionForm } from '../DescriptionForm/DescriptionForm'
import './ProfileCorporationForm.css'
import '../../components/TextField/TextField.css'
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';

export const ProfileCorporationForm = () => {

  const [nameCorporation, setNameCorporation] = useState('')
  const [descripitionCorporation, setDescripitionCorporation] = useState('')
  

  const items = [
    {
      label: 'Academia',
      key: 'Academia'
    },
    {
      label: 'Crossfit',
      key: 'Crossfit'
    },
    {
      label: 'Musculação',
      key: 'Musculação'
    },
    {
      label: 'Natação',
      key: 'Natação'
    }
  ]

  



  return (
    <div className='profile_corporation_form'>
      <DescriptionForm title='PERFIL DA EMPRESA' description='Preencha os dados para seu perfil, ele ficará visível para clientes e usuários do aplicativo:' />
      <div className="profile_corporation_data_basic">
        <div className="display_picture">

        </div>
        <div className="name_description">
          <div className='name_corporation'>
            <p className='textNameForInput'>Nome da Empresa</p>
            <Input size='default size' placeholder='Exemplo de Nome' onChange={(value) => setNameCorporation(value.target.value)} />
          </div>
          <div className='description_corporation'>
            <p className='textNameForInput'>Descrição</p>
            <TextArea onChange={(value) => setDescripitionCorporation(value.target.value)} placeholder="Controlled autosize" autoSize={{ minRows: 4, maxRows: 5, }}
            />
          </div>
        </div>
        <div className="category_corporation">
          <DropDownMenu className='DropDownMenu' nameDropDown='Categoria' items={items} />
        </div>
      </div>
      <div className="tag_colors">

      </div>
    </div>
  )
}
