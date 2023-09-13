import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button } from 'antd'

export const DropDownMenu = ({ onClickFuction, nameDropDown, items, className, itemSelected }) => {

    // ENVIAR ESTADOS PARA PROFILE CORPORATION


    const menuProps = {
        items,
        onClick: onClickFuction,
    }

    const handleButtonClick = (e) => {
        console.log('heylick', e);
    };

    return (
        <div>
            <Dropdown className={className} menu={menuProps} onClick={onClickFuction}>
                <Button>
                    <Space size={100}>
                        {itemSelected}
                        <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </div>
    )
}
