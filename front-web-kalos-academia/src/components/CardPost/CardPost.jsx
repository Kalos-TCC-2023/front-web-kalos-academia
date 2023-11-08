import React from 'react'
import './CardPost.css'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;

export const CardPost = ({ title, description, photo, data, time}) => {
    return (
        <Card className='card_post_gym'
            hoverable
            style={{
                width: 600
            }}
            cover={<img style={{ width: '100%' }} src={photo || 'https://firebasestorage.googleapis.com/v0/b/kalos-corp-academia.appspot.com/o/images%2Fimage%2072.png?alt=media&token=eb462d95-56bd-4f44-a9c2-d9175eb58e21' } />}
            actions={[
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />
            ]}

        >
            <Meta title={title} description={description} />
        </Card>
    )
}
