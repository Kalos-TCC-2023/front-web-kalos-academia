import React from 'react'
import { Button, Carousel, Modal } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import './CardProductGym.css'
import axios from 'axios'

const config = {
  title: 'Você realmente quer excluir esse produto?',
  content: 'Esse produto será excluido permanentemente da sua academia.'
}

export const CardProductGym = ({ productName, productCategory, productDescription, productPrice, productPhoto, idProduct, setDeletedProductId }) => {

  const [modal, contextHolder] = Modal.useModal()


  const deletedProduct = (confirm, idProduct) => {
    if (confirm == true) {
      axios.delete(`https://kaloscorp.cyclic.app/kalos/produto/id/${idProduct}`)
        .then(({ data }) => {
          console.log(data)
          setDeletedProductId(idProduct)
        }).catch(({ error }) => {
          console.log(error)
        })
    } else {
      return
    }

  }

  const contentStyle = {
    height: '350px',
    color: '#000',
    lineHeight: '350px',
    textAlign: 'center',
    background: '#364d79',
  };

  console.log(productPhoto)

  return (
    <div className='card_product_gym'>
      {contextHolder}
      <div className="photo">
        <Carousel autoplay effect="fade" dotPosition='bottom'>
          {
            productPhoto.map((photo, index) => (
              <div>
                <img key={index} style={contentStyle} src={photo.url} />
              </div>
            ))
          }

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
          <DeleteOutlined onClick={async () => {
            const confirmed = await modal.confirm(config);

            console.log('Confirmed: ', confirmed, idProduct)
            deletedProduct(confirmed, idProduct)
          }} />
        </div>
      </div>
      <div className="products_more_options">
        <Button style={{ borderRadius: '300px', padding: '5px' }} shape='circle'>RESERVAS DO PRODUTO</Button>
      </div>
    </div>
  )
}
