import React, { useState } from 'react'
import './CardPreviewProduct.css'
import { Avatar, Button, Tooltip } from 'antd'
import { PieChart } from 'recharts'
import { Link } from 'react-router-dom'
import { CloseCircleOutlined } from '@ant-design/icons'
import moment from 'moment'


export const CardPreviewProductReservation = ({ photo, photoClient, name, productName, code, codeReservation, status, data, counter, idReservation }) => {

  const [dataReservation, setDataReservation] = useState(status)
  const dataFormatMoment = moment(data.substring(0,10)).format('L')
  const timeFormatMoment = data.substring(11,16)
  const [dataFormat, setDataFormat] = useState(dataFormatMoment)


  // s

  return (
    <div className='card_preview_reservation'>
      <div className="card_preview_reservation">

        <div className="primary_information_reservation">
          <Tooltip title={status} placement="top">
            <div className={`status_reservation ${status}`}></div>
          </Tooltip>
          <div className="photo_name_code_reservation">
            <Avatar.Group>
              <Avatar size={45} src={photo} />
              <Tooltip title={name} placement="top">
                <Avatar size={45} src={photoClient} />
              </Tooltip>
            </Avatar.Group>

            <div className="code_name_reservation">
              <p className='name_product_reservation'>{productName.substring(0, 13)} <span className='counter_reservation'>x{counter}</span><span className='code_product_reservation'>#{code}</span></p>
              <p className='name_client_reservation'>Reservado em: {dataFormat} - {timeFormatMoment}</p>
            </div>
          </div>
        </div>
        <div className="options_reservation">
          <Link to='/menu/produtos/reservas/reserva' state={{id_reserva: idReservation}}>
            <Button size='small' shape=''>RESERVA DO PRODUTO</Button>
          </Link>

        </div>
      </div>
    </div>
  )
}
