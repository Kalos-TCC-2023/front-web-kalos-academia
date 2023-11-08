import React, { useEffect, useState } from 'react'
import { CardPost } from '../CardPost/CardPost'
import './PostsComponentProfile.css'
import axios from 'axios'
import { Button } from 'antd'
import { NoData } from '../NoData/NoData'
import { Link } from 'react-router-dom'

export const PostsComponentProfile = ({ color }) => {

    const id = localStorage.getItem("id_academia")
    const [postsGym, setPostsGym] = useState('')


    useEffect(() => {
        axios.get(`https://kaloscorp.cyclic.app/kalos/postagem/idAcademia/${id}`)
            .then(({ data }) => {
                console.log(data);
                if (postsGym.length == 0) {
                    setPostsGym(data.postagens)
                } else {
                    return
                }
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className='posts_profile_component_page'>
            <div className="new_post_gym">
                <p className='posts_title_gym' style={{ color: `${color}` }}>Posts</p>
                <Link to='/menu/posts'>
                    <Button type="primary" className='create_workout'>Novo Post</Button>
                </Link>
            </div>
            {
                postsGym.length == '' ? <NoData description='Ainda não existem posts na academia!' /> : (
                    postsGym.map((posts) => (
                        <CardPost key={posts.id} photo={posts.anexo} title={posts.titulo} data={posts.data} time={posts.hora} description={posts.corpo} />
                    ))
                )
            }
        </div>
    )
}
