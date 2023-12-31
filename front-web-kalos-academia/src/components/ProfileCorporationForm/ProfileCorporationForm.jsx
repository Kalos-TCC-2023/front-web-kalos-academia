import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Input, ColorPicker } from 'antd';
import { DescriptionForm } from '../DescriptionForm/DescriptionForm'
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';
import { TagsAcademy } from '../Tags/Tags';
import { UploadImage } from '../UploadImage/UploadImage';
import './ProfileCorporationForm.css'
import '../../components/TextField/TextField.css'

const { TextArea } = Input;


export const ProfileCorporationForm = ({ data, updateFielHandler }) => {

  const [categorySelected, setCategorySelected] = useState('Categoria')
  const [tagSelected, setTagSelected] = useState('Tags')
  const checkButtonCategory = categorySelected == undefined ? setCategorySelected('Categoria') : true
  const checkButtonTag = tagSelected == undefined ? setTagSelected('Tags') : true
  const [tagsKey, setTagsKey] = useState([])
  const [categoryKey, setCategoryKey] = useState([])
  const [categoryApi, setCategoryApi] = useState([])
  const [nameTag, setNameTag] = useState([])
  const [imageDb, setImageDb] = useState('https://firebasestorage.googleapis.com/v0/b/kalos-corp-academia.appspot.com/o/images%2F360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg?alt=media&token=d76e9efb-e14a-42d7-8daa-4cdbd0b85dea&_gl=1*bx9q1z*_ga*MzU5MzIyMzYwLjE2OTY0NTc2MDM.*_ga_CW55HF8NVT*MTY5NjQ2MzkyNC4yLjEuMTY5NjQ3MDUyMy4xMi4wLjA.')
  const [tagsApi, setTagsApi] = useState([])
  const [fileList, setFileList] = useState([
    {
      uid: '-5',
      url: 'https://firebasestorage.googleapis.com/v0/b/kalos-corp-academia.appspot.com/o/images%2F360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg?alt=media&token=d76e9efb-e14a-42d7-8daa-4cdbd0b85dea&_gl=1*bx9q1z*_ga*MzU5MzIyMzYwLjE2OTY0NTc2MDM.*_ga_CW55HF8NVT*MTY5NjQ2MzkyNC4yLjEuMTY5NjQ3MDUyMy4xMi4wLjA.',
      status: 'done'
    },
  ])
  const endPointAzure = localStorage.getItem("end-point-azure")


  useEffect(() => {
    axios.get(`${endPointAzure}/kalos/tags`)
      .then(({ data }) => {
        if (tagsApi.length === 0) {
          console.log(data.tags)

          const items_api = data.tags.map((tag) => {
            const newTags = {}
            newTags.key = tag.id
            newTags.label = tag.nome
            tagsApi.push(newTags)
            updateFielHandler('foto', imageDb)
          })

        } else {
          return
        }

      }).catch((erro) => {
        console.log(erro)
      })
  }, [imageDb])

  useEffect(() => {
    axios.get(`${endPointAzure}/kalos/categoria`)
    .then(({ data }) => {
      
      if(categoryApi.length === 0){
        const items_api = data.categorias.map((categoria) => {
          const newCategories = {}
          newCategories.key = categoria.id
          newCategories.label = categoria.nome
          categoryApi.push(newCategories)
        })
        console.log(data.categorias)
      } else {
        return
      }
    }).catch((erro) => {
      console.log(erro)
    })
  }, [])

  const handleTagClick = (item) => {
    tagsApi.map((tag) => {
      if (item.key == tag.key) {

        const tagObjetc = {}
        const tagName = parseInt(item.key)

        setTagSelected(tag.label)
        console.log(tagSelected)

        tagObjetc.tag_name = tag.label
        tagObjetc.tag_id = tag.key

        console.log(nameTag)

        tagsKey.push(tagName)
        nameTag.push(tagObjetc)

      }
    })

    Object.values(tagsKey)
    console.log(tagsKey)
    updateFielHandler('tags', tagsKey)
  }

  const handleCategoryClick = (item) => {
    categoryApi.map((category) => {
      if (item.key == category.key) {

        setCategorySelected(category.label)
        const categoryName = parseInt(item.key)
        console.log(categoryName)
        updateFielHandler('id_categoria', categoryName)
      }
    })

  }


  return (
    <div className='profile_corporation_form animate__animated animate__fadeInRight'>
      <DescriptionForm title='PERFIL DA EMPRESA' description='Preencha os dados para seu perfil, ele ficará visível para clientes e usuários do aplicativo:' />
      <div className="profile_corporation_data_basic">
        <div className="display_picture">
          <UploadImage fileList={fileList} imageDb={imageDb} updateFielHandler={updateFielHandler} setImageDb={setImageDb} setFileList={setFileList} />
        </div>
        <div className="name_description">
          <div className='name_corporation'>
            <p className='textNameForInput'>Nome da Empresa</p>
            <Input size='default size' placeholder='Exemplo de Nome' maxLength={12} value={data.nome} onChange={(nameCorporation) => updateFielHandler('nome', nameCorporation.target.value)} />
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
          <DropDownMenu className='DropDownMenu' items={categoryApi} itemSelected={categorySelected} onClickFuction={handleCategoryClick} />
        </div>
      </div>
      <div className="tag_colors">
        <div className="tags_corporation">
          <p className='textNameForInput'>Tags</p>
          <DropDownMenu className='DropDownMenu' items={tagsApi} itemSelected={tagSelected} onClickFuction={handleTagClick} />
          <div className="tags_visible">
            <TagsAcademy tags={nameTag} tagsKey={tagsKey} updateFielHandler={updateFielHandler} setTagsKey={setTagsKey} setTagsName={setNameTag} color={data.cor_primaria} />
          </div>
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
