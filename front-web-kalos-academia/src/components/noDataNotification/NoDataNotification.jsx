import React from 'react'
import { Empty } from 'antd';

export const NoDataNotification = ( {description} ) => {
    return (
        <div>
            <Empty
                image={Empty.PRESENTED_IMAGE_DEFAULT} 
                imageStyle={{
                    height: 60,
                }}
                description={
                    <span>
                        {description}
                    </span>
                }
            >
            </Empty>
        </div>
    )
}
