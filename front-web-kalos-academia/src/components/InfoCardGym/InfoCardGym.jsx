import React from 'react'
import { Card, Space } from 'antd';
import { Helmet } from 'react-helmet'

import './InfoCardGym.css'

export const InfoCardGym = ({ children, title, sizeDiv }) => {
    return (
        <Space direction="vertical" size={25}>
            <Card title={title} size="small"  style={{ width: {sizeDiv} }}>
                {children}
            </Card>
        </Space>

    )
}
