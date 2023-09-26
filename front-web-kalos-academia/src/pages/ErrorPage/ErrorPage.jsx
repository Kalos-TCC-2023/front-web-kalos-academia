import React from 'react'
import { Helmet } from 'react-helmet'

export const ErrorPage = () => {
  return (
    <div className='error_page'>
      <Helmet>
        <title>Kalos - Ops! Não encontrado!</title>
      </Helmet>
    </div>
  )
}
