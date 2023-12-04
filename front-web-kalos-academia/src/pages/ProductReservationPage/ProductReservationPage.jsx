import React, { useEffect, useState } from 'react'
import './ProductReservationPage.css'
import { Breadcrumb, Select, Input, Button, Tooltip } from 'antd'
import { Link } from 'react-router-dom'
const { Search } = Input
import { FloatButton } from 'antd'
import { SkinOutlined } from '@ant-design/icons'
import { CardPreviewProductReservation } from '../../components/CardPreviewProduct/CardPreviewProductReservation'
import axios from 'axios'
import { Loader } from '../../components/Loader/Loader'

export const ProductReservationPage = () => {

    const [searchProducts, setSearchProducts] = useState('')
    const [allReservations, setAllReservations] = useState([])
    const idAcademia = localStorage.getItem('id_academia')



    useEffect(() => {
        axios.get(`https://kaloscorp.cyclic.app/kalos/reserva/idAcademia/${idAcademia}`)
            .then(({ data }) => {
                if (allReservations.length == 0) {
                    setAllReservations(data.reservas)
                }
                console.log(data)


            })
    }, [])


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
                                title: <Link to='/menu/produtos/reservas'>Loja - Reservas</Link>,
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
                        placeholder="Buscar reserva..."
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

                        <Link to='/menu/produtos/novo_produto'>
                            <Tooltip placement='left' title="Adicionar novo produto">
                                <FloatButton icon={<SkinOutlined />} />
                            </Tooltip>
                        </Link>

                    </div>
                </div>

                <div className="reservations_card">

                    {
                        allReservations.length == 0 ? <Loader /> : (
                            allReservations.map((reservation) => (
                                <CardPreviewProductReservation idReservation={reservation.id} key={reservation.id} data={reservation.data} counter={reservation.quantidade} status={reservation.status_reserva} photoClient={reservation.foto_aluno} photo={reservation.foto} productName={reservation.nome_produto} name={reservation.nome_aluno} code={reservation.codigo} />

                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}
