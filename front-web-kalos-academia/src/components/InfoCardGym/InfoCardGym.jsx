import React from 'react'
import { Card, Space } from 'antd';
import './InfoCardGym.css'

export const InfoCardGym = ({ children, title }) => {
    return (
        <Space direction="vertical" size={25}>
            <Card title={title} size="small"  style={{ width: 270 }}>
                {children}
            </Card>
        </Space>

    )
}
