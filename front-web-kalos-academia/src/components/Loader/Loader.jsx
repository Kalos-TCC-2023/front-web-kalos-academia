import React from 'react'
import { Spin, Space } from 'antd'
import './Loader.css'


export const Loader = () => {
    return (
        <div className="loader_data">
            <Space
                direction="vertical"
                style={{
                    width: '100%',
                }}
            >

                <Spin tip="Carregando dados" size="large">
                    <div className="content" />
                </Spin>
            </Space>
        </div>


    )
}
