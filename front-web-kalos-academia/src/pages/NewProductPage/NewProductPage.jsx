import React, { useState } from 'react'
import './NewProductPage.css'
import { Breadcrumb, Select, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
const { Search } = Input

export const NewProductPage = () => {


    const [searchProducts, setSearchProducts] = useState('')


    const handleChangeSelect = (value) => {
        console.log(`selected ${value}`);
    }

    const handleChange = (e) => {
        const { value } = e.target

        setSearchProducts(value)
        console.log(searchProducts)
    }

    return (
        <div className='product_page'>
            <div className="products_gym">

                <div className="raiz_title">
                    <h1 className='title_edit_page'>Minha loja</h1>
                    <Breadcrumb
                        items={[
                            {
                                title: <Link to='/menu/produtos'>Loja - Produtos</Link>,
                            },
                            {
                                title: <Link to='/menu/produtos/novo_produto'>Novo produto</Link>,
                            },


                        ]}
                    />
                </div>

               
            </div>
        </div>
    )
}
