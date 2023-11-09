import React, { useEffect, useState } from 'react'
import { CardPost } from '../CardPost/CardPost'
import './PostsComponentProfile.css'
import axios from 'axios'
import { Button, message } from 'antd'
import { NoData } from '../NoData/NoData'
import { Link } from 'react-router-dom'

export const PostsComponentProfile = ({ color }) => {

    const id = localStorage.getItem("id_academia")
    const [postsGym, setPostsGym] = useState('')
    const [deletePost, setDeletePost] = useState(0)
    const [messageApi, contextHolder] = message.useMessage();


    const error = () => {
        messageApi.open({
          type: 'error',
          content: 'Ops! Algo deu errado! Tente novamente mais tarde enquanto nos resolvemos o problema!',
        });
      };

    useEffect(() => {
        axios.get(`https://kaloscorp.cyclic.app/kalos/postagem/idAcademia/${id}`)
            .then(({ data }) => {
                setPostsGym(data.postagens)
            }).catch((err) => {
                error()
                console.log(err)
            })
    }, [deletePost])

    return (
        <div className='posts_profile_component_page'>
            {contextHolder}
            <div className="new_post_gym">
                <p className='posts_title_gym' style={{ color: `${color}` }}>Posts</p>
                <Link to='/menu/posts'>
                    <Button type="primary" className='create_workout'>Novo Post</Button>
                </Link>
            </div>
            {
                postsGym.length == 0 ? <NoData description='Ainda não existem posts na academia!' /> : (
                    postsGym.map((posts) => (
                        <CardPost key={posts.id} postId={posts.id} photo={posts.anexo} title={posts.titulo} data={posts.data} time={posts.hora} description={posts.corpo} setDeletePost={setDeletePost} />
                    ))
                )
            }
        </div>
    )
}
