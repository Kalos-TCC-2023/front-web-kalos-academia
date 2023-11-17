import React from 'react'

export const CardProductGym = ({productName, productCategory, productDescription, productPrice, productPhoto}) => {
  return (
    <div className='card_product_gym'>
        <div className="photo">
            <img src={productPhoto} alt="" />
        </div>
        <div className="informations_product"></div>
        <div className="products_options"></div>
    </div>
  )
}
