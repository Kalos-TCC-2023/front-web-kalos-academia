import React from 'react'
import { NoData } from '../NoData/NoData'
import { ProductCardPreview } from '../ProductCardPreview/ProductCardPreview'


export const ProductsComponentProfile = () => {
    return (
        <div className='product_profile_component_page'>
            <ProductCardPreview />
            <NoData description='Academia não possui produtos ainda!' />
        </div>
    )
}
