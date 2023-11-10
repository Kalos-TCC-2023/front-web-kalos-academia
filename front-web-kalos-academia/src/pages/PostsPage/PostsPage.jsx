import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import './PostsPage.css'
import { Breadcrumb, Button, Input } from 'antd'
import { Link } from 'react-router-dom'
const { TextArea } = Input;
import { CardPostPreview } from '../../components/CardPostPreview/CardPostPreview'
import { UploadImgGym } from '../../components/UploadImgGym/UploadImgGym'

export const PostsPage = () => {

  const [titlePost, setTitlePost] = useState('')
  const [bodyPost, setBodyPost] = useState('')
  const [imgPost, setImgPost] = useState('')

  return (
    <div className='post_page'>
      <Helmet>
        <title>Kalos - Criar novo post</title>
      </Helmet>
      <div className="new_post_gym_page">
        <div className="raiz_title">
          <h1 className='title_edit_page'> Novo Post </h1>
          <Breadcrumb
            items={[
              {
                title: <Link to='/menu/perfil'>Perfil</Link>,
              },
              {
                title: <Link to='/menu/posts'>Nova postagem</Link>,
              },
            ]}
          />
        </div>
        <div className="data_new_post_gym">
          <div className="post_data">
            <div className="description_post">
            <span className='description_new_post'>Os posts da academia server para fazer anúncios ao seus alunos! Podendo ser sobre promoções ou recados importantes!</span>

            </div>
          <div className="title_new_post">
            <span className='textNameForInput'>Titulo do post</span>
            <Input style={{
              width: 450,
            }} value={titlePost} onChange={(e) => {
              setTitlePost(e.target.value)
              console.log(e.target.value)
            }} />
          </div>
          <div className="title_new_post">
            <span className='textNameForInput'>Corpo do post</span>
            <TextArea
              style={{
                width: 450,
              }}
              value={bodyPost}
              onChange={(e) => setBodyPost(e.target.value)}
              placeholder=""
              autoSize={{
                minRows: 2,
                maxRows: 10,
              }}
            />
            
          </div>

          <div className="title_new_post">
            <span className='textNameForInput'>Capa do post</span>
            <UploadImgGym />
            
          </div>

            <Button type="primary" className='create_post'>Postar</Button>

          </div>
          <div className="post_preview">
              <CardPostPreview tituloPostPreview={titlePost} bodyPostPreview={bodyPost} />
          </div>
        </div>
      </div>
    </div>
  )
}
