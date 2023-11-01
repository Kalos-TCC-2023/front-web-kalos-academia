import React from 'react'
import { NoData } from '../NoData/NoData'
import { CardPost } from '../CardPost/CardPost'
import './PostsComponentProfile.css'

export const PostsComponentProfile = () => {
    return (
        <div className='posts_profile_component_page'>
            <CardPost title='Teste Teste' description='Testagem de posts da academia'/>
            <CardPost title='Novos treinos na academia!' description='Testagem de posts da academia' />
            <CardPost title='Sejam bem vindos a Nic Fit!' description='Testagem de posts da academia' />
            {/* <NoData description='Ainda não existem posts na academia!' /> */}
        </div>
    )
}
