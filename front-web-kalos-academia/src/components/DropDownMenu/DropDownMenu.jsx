import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button } from 'antd'

export const DropDownMenu = ({ onClickFuction, nameDropDown, items, className }) => {

    const [itemSelected, setItemSelected] = useState(nameDropDown)
    const checkButton = itemSelected == undefined ? setItemSelected(nameDropDown) : console.log('ok')

    const handleMenuClick = (item) => {
        setItemSelected(item.key)
        console.log(itemSelected)
        console.log('Item', item)
      };

    // const handleMenuClick = (e) => {
    //     console.log('click', e);
    // };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    }

    const handleButtonClick = (e) => {
        console.log('heylick', e);
    };

    return (
        <div>
            <Dropdown className={className} menu={menuProps} onClick={handleMenuClick}>
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
