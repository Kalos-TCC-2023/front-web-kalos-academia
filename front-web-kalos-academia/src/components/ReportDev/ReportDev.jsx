import React from 'react'
import './ReportDev.css'
import logo from './img/report_dev_logo.svg'

export const ReportDev = () => {
  return (
    <div className='modal_report_bug_dev'>
        <img src={logo} alt="logotipo" />
        <div className="description_modal">
            <span className='title_modal'>Notou algo estranho? Reporte os desenvolvedores! </span>
            <span className='description_dev_report'>Trabalhamos todos os dias para melhorar ainda mais a experiência dos usuários!</span>
        </div>
    </div>
  )
}
