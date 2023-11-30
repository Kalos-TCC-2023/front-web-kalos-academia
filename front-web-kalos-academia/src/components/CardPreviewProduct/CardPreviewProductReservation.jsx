import React from 'react'
import './CardPreviewProduct.css'
import { Avatar, Button } from 'antd'
import { PieChart } from 'recharts'
import { Link } from 'react-router-dom'
import { CloseCircleOutlined } from '@ant-design/icons'


export const CardPreviewProductReservation = ({ photo, name, productName, code, codeReservation, status, date }) => {
  return (
    <div className='card_preview_reservation'>
      <div className="card_preview_reservation">

        <div className="primary_information_reservation">
          <div className="status_reservation"></div>
          <div className="photo_name_code_reservation">
            <Avatar size={45} src={photo} />
            <div className="code_name_reservation">
              <p className='name_product_reservation'>{productName}<span className='code_product_reservation'>#{code}</span></p>
              <p className='name_client_reservation'>{name}</p>
            </div>
          </div>
        </div>
        <div className="options_reservation">
          <Link>
            <Button size='small' shape=''>RESERVA DO PRODUTO</Button>
          </Link>
          <Link>
            <CloseCircleOutlined />
          </Link>
        </div>
      </div>
    </div>
  )
}
