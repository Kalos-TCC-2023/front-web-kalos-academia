import React from 'react'
import { Helmet } from 'react-helmet'
import errorImg from './img/error_img.svg'
import './ErrorPage.css'

export const ErrorPage = () => {
  return (
    <div className='error_page'>
      <Helmet>
        <title>Kalos - Ops! Não encontrado!</title>
      </Helmet>
      <div className="error_page_content">
        <div className="img_error_page">
          <img width={500} height={250} src={errorImg} alt="Imagem de erro 404" />
        </div>
        <div className="error_message">
          <span className='title_error'>Ops! Parece que você se perdeu!</span>
          <span className='erro_message'>O lugar que você está procurando não existe ou não está disponivel no momento.</span>
        </div>

      </div>
    </div>
  )
}
