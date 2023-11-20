import React, { useState } from 'react'
import './NewProductPage.css'
import { Breadcrumb, Select, Input, Button, InputNumber, Tooltip, FloatButton } from 'antd'
import { Link } from 'react-router-dom'
const { Search } = Input
const { TextArea } = Input;
import { CheckOutlined } from '@ant-design/icons'


export const NewProductPage = () => {


    const [searchProducts, setSearchProducts] = useState('')


    const handleChangeSelect = (value) => {
        console.log(`selected ${value}`);
    }

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    const handleChangeSearch = (e) => {
        const { value } = e.target

        setSearchProducts(value)
        console.log(searchProducts)
    }

    const onChange = (e) => {
        console.log('Change:', e.target.value);
    }

    const onChangeNumber = (value) => {
        console.log('changed', value);
    };

    return (
        <div className='product_page'>
            <div className="products_gym">
                <div className="raiz_title">
                    <h1 className='title_edit_page'>Cadastrar novo produto</h1>
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

                <div className="new_product">
                    <Tooltip placement='left' title="Cadastrar produto">
                        <FloatButton icon={<CheckOutlined />}  />
                    </Tooltip>
                    <div className="informations_new_product">
                        <div className="new_product_name_description">
                            <div className="description_name_code_information">
                                <p className='title_information_new_product'>Nome e codigo do produto</p>
                                <p className='description_information_new_product'>De nomes descritivos aos seus produtos, você também pode colocar o código do produto caso ele tenha</p>
                            </div>
                            <div className="inputs_name_code_new_product">
                                <Input style={{ width: 330 }} placeholder="Suplemento Whey" />
                                <Input style={{ width: 330 }} placeholder="7856" />
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="550" height="2" viewBox="0 0 550 2" fill="none">
                            <path d="M0 1H549.5" stroke="url(#paint0_linear_137_514)" />
                            <defs>
                                <linearGradient id="paint0_linear_137_514" x1="-0.400536" y1="1.00115" x2="589.715" y2="14.1624" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25" stop-color="#00FE90" />
                                    <stop offset="1" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="new_product_name_description">
                            <div className="description_name_code_information">
                                <p className='title_information_new_product'>Descrição</p>
                                <p className='description_information_new_product'>A descrição ajuda seu cliente a entender melhor e ter informações extras sobre o produto</p>
                            </div>
                            <div className="inputs_name_code_new_product">
                                <TextArea
                                    showCount
                                    maxLength={120}
                                    onChange={onChange}
                                    placeholder="disable resize"
                                    style={{
                                        height: 130,
                                        resize: 'none',
                                        width: 330
                                    }}
                                />
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="550" height="2" viewBox="0 0 550 2" fill="none">
                            <path d="M0 1H549.5" stroke="url(#paint0_linear_137_514)" />
                            <defs>
                                <linearGradient id="paint0_linear_137_514" x1="-0.400536" y1="1.00115" x2="589.715" y2="14.1624" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25" stop-color="#00FE90" />
                                    <stop offset="1" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="new_product_name_description">
                            <div className="description_name_code_information">
                                <p className='title_information_new_product'>Categoria</p>
                                <p className='description_information_new_product'>A categoria correta ajuda seus clientes a encontrarem mais rápido os produtos que precisam!</p>
                            </div>
                            <div className="inputs_name_code_new_product">
                                <Select
                                    defaultValue="Selecionar categoria"
                                    style={{
                                        width: 330,
                                    }}
                                    onChange={handleChange}
                                    options={[
                                        {
                                            value: 'jack',
                                            label: 'Jack',
                                        },
                                        {
                                            value: 'lucy',
                                            label: 'Lucy',
                                        },
                                        {
                                            value: 'Yiminghe',
                                            label: 'yiminghe',
                                        },

                                    ]}
                                />
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="550" height="2" viewBox="0 0 550 2" fill="none">
                            <path d="M0 1H549.5" stroke="url(#paint0_linear_137_514)" />
                            <defs>
                                <linearGradient id="paint0_linear_137_514" x1="-0.400536" y1="1.00115" x2="589.715" y2="14.1624" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25" stop-color="#00FE90" />
                                    <stop offset="1" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="new_product_name_description">
                            <div className="description_name_code_information">
                                <p className='title_information_new_product'>Status</p>
                                <p className='description_information_new_product'>A descrição ajuda seu cliente a entender melhor e ter informações extras sobre o produto</p>
                            </div>
                            <div className="inputs_name_code_new_product">
                                <Select
                                    defaultValue="Selecionar status"
                                    style={{
                                        width: 330,
                                    }}
                                    onChange={handleChange}
                                    options={[
                                        {
                                            value: 'jack',
                                            label: 'Jack',
                                        },
                                        {
                                            value: 'lucy',
                                            label: 'Lucy',
                                        },
                                        {
                                            value: 'Yiminghe',
                                            label: 'yiminghe',
                                        },

                                    ]}
                                />
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="550" height="2" viewBox="0 0 550 2" fill="none">
                            <path d="M0 1H549.5" stroke="url(#paint0_linear_137_514)" />
                            <defs>
                                <linearGradient id="paint0_linear_137_514" x1="-0.400536" y1="1.00115" x2="589.715" y2="14.1624" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25" stop-color="#00FE90" />
                                    <stop offset="1" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="new_product_name_description">
                            <div className="description_name_code_information">
                                <p className='title_information_new_product'>Preço</p>
                                <p className='description_information_new_product'>Preços justos heim!</p>
                            </div>
                            <div className="inputs_name_code_new_product">
                                <InputNumber
                                    style={{ width: 330 }}
                                    defaultValue={0}
                                    formatter={(value) => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                                    onChange={onChangeNumber}
                                />
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="550" height="2" viewBox="0 0 550 2" fill="none">
                            <path d="M0 1H549.5" stroke="url(#paint0_linear_137_514)" />
                            <defs>
                                <linearGradient id="paint0_linear_137_514" x1="-0.400536" y1="1.00115" x2="589.715" y2="14.1624" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25" stop-color="#00FE90" />
                                    <stop offset="1" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="preview_new_product">
                        <div className="img_preview"></div>
                        <div className="img_select"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
