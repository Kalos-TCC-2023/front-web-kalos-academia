import React from 'react'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Divider, Tooltip } from 'antd'
import './PreviewCardWokouts.css'

export const PreviewCardWokouts = ({ nomeTreino, categoriaTreino, dataTreino, foto }) => {

    // style={{backgroundImage: `url('${imgWokouts}' )`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
    // https://xsgames.co/randomusers/avatar.php?g=pixel&key=1
    return (
        <div className='wokouts_card'>
            <div className="card_wokouts_preview" style={{ backgroundImage: `url('${foto}' )`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
                <div className="data_wokouts" >
                    <div className="nome_categoria_preview">
                        <span className='title_wokouts_gym_preview'>{nomeTreino}</span>
                        <span className='category_wokouts_gym_preview'>{categoriaTreino}</span>
                    </div>
                    <div className="footer_data_wokouts_preview">
                        <div className="data_gym_wokouts_div_preview">
                            <span className='data_wokouts_gym_preview'>{dataTreino}</span>
                        </div>
                        <Tooltip title="As pessoas na preview não são reais, todas as imagens foram geradas por uma Inteligência artificial!" placement="top">
                            <div className="students_by_wokouts">

                                <Avatar.Group size='small'>
                                    <Avatar src="https://uploads.metropoles.com/wp-content/uploads/2023/07/17115758/F1K-cdbXwAgovdo.jpg" />
                                    <Avatar src="https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=328x"
                                        style={{
                                            backgroundColor: '#f56a00',
                                        }}
                                    >
                                        K
                                    </Avatar>


                                    <Avatar src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/07/IMG_4014.jpg?w=732&h=412&crop=1"
                                        style={{
                                            backgroundColor: '#87d068',
                                        }}
                                        icon={<UserOutlined />}
                                    />

                                    <Avatar src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/07/IMG_4008.jpg?w=732&h=412&crop=1"
                                        style={{
                                            backgroundColor: '#1677ff',
                                        }}
                                        icon={<AntDesignOutlined />}
                                    />
                                    <Avatar src="https://tm.ibxk.com.br/2019/02/17/17124106623015.jpg"
                                        style={{
                                            backgroundColor: '#1677ff',
                                        }}
                                        icon={<AntDesignOutlined />}
                                    />
                                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ8Oa70Dy8fca_APl14Fvk-AV_xssl00dwNWH1UlFMKCPe2mGwGWQB2pwSTjFpZO_svA0&usqp=CAU"
                                        style={{
                                            backgroundColor: '#1677ff',
                                        }}
                                        icon={<AntDesignOutlined />}
                                    />
                                    <Avatar src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/07/IMG_4013.jpg?w=732&h=412&crop=1"
                                        style={{
                                            backgroundColor: '#1677ff',
                                        }}
                                        icon={<AntDesignOutlined />}
                                    />
                                    <Avatar src="https://www.otempo.com.br/image/contentid/policy:1.2984790:1688599864/image.jpg?f=3x2&q=0.6&w=600&$p$f$q$w=4a9d91e"
                                        style={{
                                            backgroundColor: '#1677ff',
                                        }}
                                        icon={<AntDesignOutlined />}
                                    />

                                </Avatar.Group>

                            </div>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    )
}
