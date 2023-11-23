import React, { useState } from 'react'
import './NewProductPage.css'
import { Breadcrumb, Select, Input, Button, InputNumber, Tooltip, FloatButton, Carousel, message } from 'antd'
import { Link } from 'react-router-dom'
const { Search } = Input
const { TextArea } = Input;
import { CheckOutlined } from '@ant-design/icons'
import { storage } from '../../adapters/firebase';
import { uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage';
import { Loader } from '../../components/Loader/Loader'
import axios from 'axios'



export const NewProductPage = () => {


    const [searchProducts, setSearchProducts] = useState('')
    const [messageApi, contextHolder] = message.useMessage()

    const [images, setImagens] = useState([])
    const [arraysUrls, setArrayUrls] = useState([])

    const [progress, setProgress] = useState(0)

    const [productName, setProductName] = useState('')
    const [productCode, setProductCode] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [idProductCategory, setIdProductCategory] = useState('')
    const [statusProduct, setStatusProduct] = useState('')
    const [priceProduct, setPriceProduct] = useState(0)
    const [productPhotos, setProductPhotos] = useState([])
    const [idProduct, setIdProduct] = useState('')

    console.log(productName, productCode, priceProduct)
    console.log(productDescription, idProductCategory, statusProduct)
    console.log(arraysUrls)

    const invalidOptins = () => {
        messageApi.open({
            type: 'warning',
            content: 'Ops! Parece que você deixou campos vazios',
        })
    }

    const invalidPrice = () => {
        messageApi.open({
            type: 'error',
            content: 'O preço do produto é invalido!',
        })
    }

    const invalidRequest = () => {
        messageApi.open({
            type: 'error',
            content: 'Ops! Parece que tivemos um problema interno, tente novamente mais tarde!',
        })
    }

    const successRequest = () => {
        messageApi.open({
          type: 'success',
          content: 'Produto criado com sucesso!',
        });
      };

    const imgsUploadProduct = (idProd) => {


        for (let i = 0; i < images.length; i++) {
            console.log(images)
            const image = images[i]
            const storageRef = ref(storage, `images/${File.name}`)
            const uploadTask = uploadBytesResumable(storageRef, image)

            uploadTask.on(
                "state_changed",
                snapshot => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    setProgress(progress)
                    console.log(progress)
                },
                error => {
                    console.log(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(url => {
                        arraysUrls.push(url)
                        console.log(arraysUrls)
                        if(images.length !== arraysUrls.length){
                            console.log('nao')
                        } else {
                            setProductPhotos(arraysUrls)
                            console.log('igual')
                            submitPhotos(idProd, arraysUrls)
                            setArrayUrls([])
                        }
                    })
                }


            )

        }

    }


    const handleChangeStatus = (value) => {
        setStatusProduct(value)
        console.log(`selected ${value}`);
    }

    const handleChangeCategory = (value) => {
        setIdProductCategory(value)
        console.log(`selected ${value}`);
    }

    const onChangeNumber = (value) => {
        setPriceProduct(value)
        console.log('changed', value);
    }

    const id = localStorage.getItem("id_academia")

    const submitProduct = () => {
        if (productName == '' || productCode == '' || productDescription == '' || idProductCategory == '' || statusProduct == '' || priceProduct.length == 0 ) {
            invalidOptins()
        } else if(priceProduct == 0){
            invalidPrice()
        } else {
            axios.post(`https://kaloscorp.cyclic.app/kalos/produto`, {
                nome: productName,
                descricao: productDescription,
                preco: priceProduct,
                codigo: productCode,
                status: statusProduct,
                id_academia: id,
                id_categoria_produto: idProductCategory
            }).then(({data}) => {
                console.log(data.produto[0].id)
                setIdProduct(data.produto[0].id)
                const idProd = data.produto[0].id
                imgsUploadProduct(idProd)
                successRequest()
            }).catch(({error}) =>{
                invalidRequest()
                console.log(error)
            })
        }
       
    }

    const submitPhotos = (produto, photos) => {
        console.log(produto)
        console.log(photos)

        axios.post(`https://kaloscorp.cyclic.app/kalos/fotos`, {
            anexo: photos,
            id_produto: produto
        }).then(({data}) => {
            console.log(data)
            setArrayUrls([])
            productName('')
            set
        }).catch(({error}) => {
            console.log(produto)
            console.log(photos)
            console.log(error)
        })

    }    

    const contentStyle = {
        margin: 0,
        height: '490px',
        color: '#fff',
        lineHeight: '490px',
        textAlign: 'center',
        background: '#364d79',
    }

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <div className='product_page'>
            {contextHolder}
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
                        <FloatButton onClick={submitProduct} icon={<CheckOutlined />} />
                    </Tooltip>
                    <div className="informations_new_product">
                        <div className="new_product_name_description">
                            <div className="description_name_code_information">
                                <p className='title_information_new_product'>Nome e codigo do produto</p>
                                <p className='description_information_new_product'>De nomes descritivos aos seus produtos, você também pode colocar o código do produto caso ele tenha</p>
                            </div>
                            <div className="inputs_name_code_new_product">
                                <Input style={{ width: 330 }} value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Suplemento Whey" />
                                <Input style={{ width: 330 }} value={productCode} onChange={(e) => setProductCode(e.target.value)} placeholder="#7856" />
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
                                    onChange={(e) => setProductDescription(e.target.value)}
                                    value={productDescription}
                                    placeholder=""
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
                                    onChange={handleChangeCategory}
                                    options={[
                                        {
                                            value: 1,
                                            label: 'Suplemento',
                                        },
                                        {
                                            value: 2,
                                            label: 'Vestuario',
                                        },
                                        {
                                            value: 3,
                                            label: 'Equipamentos para treino',
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
                                    onChange={handleChangeStatus}
                                    options={[
                                        {
                                            value: 'Disponível',
                                            label: 'Disponível',
                                        },
                                        {
                                            value: 'Indisponível',
                                            label: 'Indisponível',
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
                                    value={priceProduct}
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
                        <div className="img_preview">
                            <Carousel afterChange={onChange}>
                                {
                                    productPhotos.length == 0 ? console.log('aa') : (
                                        productPhotos.map((photo, index) => (
                                            <div>
                                                <img key={index} style={contentStyle} src={photo} />
                                            </div>
                                        ))
                                    )
                                }
                            </Carousel>
                        </div>
                        <div className="img_select">
                            <input type="file" style={{ display: 'flex' }} multiple onChange={(e) => setImagens(e.target.files)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
