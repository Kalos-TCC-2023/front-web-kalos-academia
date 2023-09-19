import React, { useState } from 'react'
import { Input, ColorPicker } from 'antd';
const { TextArea } = Input;
import { DescriptionForm } from '../DescriptionForm/DescriptionForm'
import './ProfileCorporationForm.css'
import '../../components/TextField/TextField.css'
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';

export const ProfileCorporationForm = ({ data, updateFielHandler }) => {

  const [categorySelected, setCategorySelected] = useState('Categoria')
  const [tagSelected, setTagSelected] = useState('Tags')
  const checkButtonCategory = categorySelected == undefined ? setCategorySelected('Categoria') : true
  const checkButtonTag = tagSelected == undefined ? setTagSelected('Tags') : true
  const [tags, setTags] = useState([])

  const items_category = [
    {
      label: 'Academia',
      key: 1
    },
    {

      label: 'Crossfit',
      key: 'Crossfit'
    },
    {
      label: 'Musculação',
      key: 3
    },
    {
      label: 'Natação',
      key: 4
    }
  ]

  const items_tags = [
    {
      label: 'Academia',
      key: 1
    },
    {

      label: 'Crossfit',
      key: 2
    },
    {
      label: 'Musculação',
      key: 3
    },
    {
      label: 'Natação',
      key: 4
    }
  ]

  const handleTagClick = (item) => {
    items_tags.map((tag) => {
      if (item.key == tag.key) {

        setTagSelected(tag.label)

        const tagName = parseInt(item.key)
        tags.push(tagName)
      }
    })

    Object.values(tags)
    updateFielHandler('tags', tags)
  }


  const handleCategoryClick = (item) => {
    items_category.map((category) => {
      if(item.key == category.key){
        setCategorySelected(category.label)
        const categoryName = parseInt(item.key)
        updateFielHandler('id_categoria', categoryName)
      }
    })
   
    console.log(item.key)
    console.log('Item', item)
  }

  console.log(data)

  return (
    <div className='profile_corporation_form animate__animated animate__fadeInRight'>
      <DescriptionForm title='PERFIL DA EMPRESA' description='Preencha os dados para seu perfil, ele ficará visível para clientes e usuários do aplicativo:' />
      <div className="profile_corporation_data_basic">
        <div className="display_picture">

        </div>
        <div className="name_description">
          <div className='name_corporation'>
            <p className='textNameForInput'>Nome da Empresa</p>
            <Input size='default size' placeholder='Exemplo de Nome' value={data.nome} onChange={(nameCorporation) => updateFielHandler('nome', nameCorporation.target.value)} />
          </div>
          <div className='description_corporation'>
            <p className='textNameForInput'>Descrição</p>
            <TextArea className='textarea' value={data.descricao} onChange={
              (descricao) => updateFielHandler('descricao', descricao.target.value)
            } placeholder="Academia totalmente focada no aluno" autoSize={{ minRows: 4, maxRows: 5, }}
            />
          </div>
        </div>
        <div className="category_corporation">
          <p className='textNameForInput'>Categoria do Negócio</p>
          <DropDownMenu className='DropDownMenu' items={items_category} itemSelected={categorySelected} onClickFuction={handleCategoryClick} />
        </div>
      </div>
      <div className="tag_colors">
        <div className="tags_corporation">
          <p className='textNameForInput'>Tags</p>
          <DropDownMenu className='DropDownMenu' items={items_tags} itemSelected={tagSelected} onClickFuction={handleTagClick} />
        </div>
        <div className="colors_corporation">
          <div className='color_primary'>
            <p className='textNameForInput'>Cor primaria</p>
            <div className="description_color_picker">
              <ColorPicker showText
                size='large'
                value={data.cor_primaria}
                onChangeComplete={(color) => {
                  updateFielHandler('cor_primaria', color.toHexString())
                }}
              />
              <p className='description_color_picker'>
                Usamos a cor primaria para personalizar a cor de seus ícones e botões
              </p>
            </div>
          </div>
          <div className='color_secondary'>
            <p className='textNameForInput'>Cor Secundaria</p>
            <div className="description_color_picker">
              <ColorPicker showText
                size='large'
                value={data.cor_secundaria}
                onChangeComplete={(color) => {
                  updateFielHandler('cor_secundaria', color.toHexString())
                }}
              />
              <p className='description_color_picker'>
                Usamos a cor secundária para personalizar sua capa de perfil
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
