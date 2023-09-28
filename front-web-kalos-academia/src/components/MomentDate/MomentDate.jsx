import React from 'react'
import moment from 'moment'
import 'moment/dist/locale/pt-br'
moment.locale('pt-br')

export const MomentDate = ({formato}) => {
    const atual_day = moment().format(formato)
    
  return (
    <div className='date_moment'>{atual_day}</div>
  )
}
