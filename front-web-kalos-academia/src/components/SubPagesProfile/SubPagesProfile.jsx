import React from 'react'
import { Tabs } from 'antd';
import { PostsComponentProfile } from '../PostsComponentProfile/PostsComponentProfile';
import { ProductsComponentProfile } from '../ProductsComponentProfile/ProductsComponentProfile';
import { WorkoutsComponentProfile } from '../WorkoutsComponentProfile/WorkoutsComponentProfile';
import './SubPagesProfile.css'

export const SubPagesProfile = ({ color }) => {
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: 'Posts',
            children: <PostsComponentProfile color={color} />,
        },
        {
            key: '2',
            label: 'Treinos',
            children: <WorkoutsComponentProfile color={color} />,
        },
        {
            key: '3',
            label: 'Produtos',
            children: <ProductsComponentProfile />,
        },
    ];
    return (
        <Tabs className='sub_routes' defaultActiveKey="1" items={items} onChange={onChange} />
    )
}
