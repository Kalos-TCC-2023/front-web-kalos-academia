import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Breadcrumb, Input, Button, Select, Tooltip } from 'antd'
const { Search } = Input
import axios from 'axios'
import './Productspage.css'
import { Link } from 'react-router-dom'
import { CardProductGym } from '../../components/CardProductGym/CardProductGym'
import { FloatButton } from 'antd'
import { SkinOutlined } from '@ant-design/icons'
import { Loader } from '../../components/Loader/Loader'


export const Productspage = () => {

  const idAcademia = localStorage.getItem('id_academia')

  const [searchProducts, setSearchProducts] = useState('')
  const [products, setProducts] = useState([])
  const [statusCode, setStatusCode] = useState(0)
  const [deletedProductGym, setDeletedProduct] = useState(0)
  const endPointAzure = localStorage.getItem("end-point-azure")


  useEffect(() => {
    axios.get(`${endPointAzure}/kalos/produtoByIdAcademia/id/${idAcademia}`)
      .then(({ data }) => {
        console.log(data)

        setStatusCode(data.status)
        setProducts(data.produto)


      }).catch((erro) => {
        console.log(erro)

      })

  }, [deletedProductGym])



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
        <Link to='/menu/produtos/novo_produto'>
          <Tooltip placement='left' title="Adicionar novo produto">
            <FloatButton icon={<SkinOutlined />} />
          </Tooltip>
        </Link>

        <div className="raiz_title">
          <h1 className='title_edit_page'>Minha loja</h1>
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
              defaultValue="Selecionar categoria"
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
            <Link to='/menu/produtos'>
              <Button shape='circle'>MEUS PRODUTOS</Button>
            </Link>
            <Link to='/menu/produtos/reservas'>
              <Button shape='circle'>RESERVAS</Button>
            </Link>

          </div>

        </div>
        <div className="products_for_gym">
          {
            products.length == 0 ? <Loader /> : (
              products.map((product, index) => (
                <CardProductGym key={product.id} idProduct={product.id} setDeletedProductId={setDeletedProduct} productPhoto={product.fotos} productName={product.nome} productCategory={product.categoria} productDescription={product.descricao} productPrice={product.preco} />
              ))
            )


          }
        </div>
      </div>

    </div>
  )
}
