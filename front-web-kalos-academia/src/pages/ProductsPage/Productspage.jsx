import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Breadcrumb, Input, Button, Select } from 'antd'
const { Search } = Input
import axios from 'axios'
import './Productspage.css'
import { Link } from 'react-router-dom'

export const Productspage = () => {

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
      <Helmet>
        <title>Kalos - Produtos</title>
      </Helmet>
      <div className="products_gym">
        <div className="raiz_title">
          <h1 className='title_edit_page'>Produtos</h1>
          <Breadcrumb
            items={[
              {
                title: <Link to='/menu/produtos'>Loja - Produtos</Link>,
              },

            ]}
          />
        </div>

        <div className="header_modal">
          <div className="filtros">
            <Select
              defaultValue="Selecionar Categoria"
              style={{
                width: 180,
              }}
              onChange={handleChangeSelect}
              options={[
                {
                  value: 'fitness',
                  label: 'Fitness',
                },
                {
                  value: 'yoga',
                  label: 'Yoga',
                },
                {
                  value: 'suplemento',
                  label: 'Suplemento',
                },
              ]}
            />
          </div>
          <Search
            value={searchProducts}
            className='search_header'
            placeholder="Buscar produto..."
            onChange={handleChange}
            size='large'
          />
          <div className="buttons_add_product_my_product">
            <Button shape='circle'>MEUS PRODUTOS</Button>
            <Button shape='circle'>RESERVAS</Button>
            <Button shape='circle'>ADICONAR NOVO PRODUTO</Button>
          </div>

        </div>
      </div>

    </div>
  )
}
