import React from 'react'
import { Button, Carousel } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import './CardProductGym.css'

export const CardProductGym = ({ productName, productCategory, productDescription, productPrice, productPhoto }) => {

  const contentStyle = {
    height: '350px',
    color: '#000',
    lineHeight: '350px',
    textAlign: 'center',
    background: '#364d79',
  };


  return (
    <div className='card_product_gym'>
      <div className="photo">
        <Carousel autoplay effect="fade" dotPosition='bottom'>
          <div>
            <img style={contentStyle} src={productPhoto} />
          </div>
          <div>
            <img style={contentStyle} src={productPhoto} />
          </div>
        </Carousel>
        {/* <img src={productPhoto} /> */}
      </div>
      <div className="informations_product">
        <p className='name_product'>{productName}</p>
        <p className='category_product'>{productCategory}</p>
        <p className='description_product'>{productDescription}</p>
        <span className='price_product'>R${productPrice}</span>

        <div className="products_options">
          <EditOutlined />
          <DeleteOutlined />
        </div>
      </div>
      <div className="products_more_options">
        <Button style={{borderRadius: '300px', padding: '5px'}} shape='circle'>RESERVAS DO PRODUTO</Button>
        <Button style={{borderRadius: '300px', padding: '5px'}} shape='circle'>ATUALIZAR PRODUTO</Button>
      </div>
    </div>
  )
}
