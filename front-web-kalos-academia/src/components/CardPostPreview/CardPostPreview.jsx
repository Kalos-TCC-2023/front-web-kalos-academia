import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
import { EditOutlined, EllipsisOutlined, CloseCircleOutlined } from '@ant-design/icons';

import moment from 'moment';


export const CardPostPreview = ({tituloPostPreview, bodyPostPreview, anexoPostPreview}) => {

    const dayPost = moment().format('L')
    console.log(dayPost)

    const timePost =  moment().format('LT');  
    console.log(timePost)

    return (
        <Card className='card_post_gym'
            hoverable
            style={{
                width: 600
            }}
            cover={<img style={{ width: '100%' }} src={anexoPostPreview || 'https://firebasestorage.googleapis.com/v0/b/kalos-corp-academia.appspot.com/o/images%2FFundo%20transparente%201900x1900%201.png?alt=media&token=7068ccb1-8c80-47e0-b0da-bc35b2b22ea3' } />}
            actions={[
                <EditOutlined key="edit" />,
                <CloseCircleOutlined key='closed'/>
            ]}

        >
            <Meta title={tituloPostPreview || "Novo Post!"} description={bodyPostPreview || "Esse é um novo post da academia"} />
            <Meta style={{marginTop: '10px'}} description={dayPost + ' - ' + timePost} />            
        </Card>
    )
}
