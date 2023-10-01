import React from 'react'
import { Tabs } from 'antd';
import { PostsComponentProfile } from '../PostsComponentProfile/PostsComponentProfile';
import { ProductsComponentProfile } from '../ProductsComponentProfile/ProductsComponentProfile';
import { WorkoutsComponentProfile } from '../WorkoutsComponentProfile/WorkoutsComponentProfile';
import './SubPagesProfile.css'

export const SubPagesProfile = () => {
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: 'Posts',
            children: <PostsComponentProfile />,
        },
        {
            key: '2',
            label: 'Treinos',
            children: <WorkoutsComponentProfile />,
        },
        {
            key: '3',
            label: 'Produtos',
            children: <ProductsComponentProfile />,
        },
    ];
    return (
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    )
}
