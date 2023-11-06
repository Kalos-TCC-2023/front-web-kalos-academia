import React from 'react'
import './CardPost.css'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;

export const CardPost = ({ title, description, photo}) => {
    return (
        <Card className='card_post_gym'
            hoverable
            style={{
                width: 600
            }}
            cover={<img style={{ width: '100%' }} alt="example" src={photo || "https://media.kasperskydaily.com/wp-content/uploads/sites/94/2021/12/24035824/online-scam-red-flags-featured.jpg"} />}
            actions={[
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />
            ]}

        >
            <Meta title={title} description={description} />
        </Card>
    )
}
