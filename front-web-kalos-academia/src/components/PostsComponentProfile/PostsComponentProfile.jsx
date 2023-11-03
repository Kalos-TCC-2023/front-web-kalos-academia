import React, { useEffect, useState } from 'react'
import { CardPost } from '../CardPost/CardPost'
import { Loader } from '../Loader/Loader'
import './PostsComponentProfile.css'
import axios from 'axios'

export const PostsComponentProfile = () => {

    const id = localStorage.getItem("id_academia")
    const [postsGym, setPostsGym] = useState('')


    useEffect(() => {
        axios.get(`https://kaloscorp.cyclic.app/kalos/postagem/idAcademia/${id}`)
            .then(({ data }) => {
                console.log(data);
                if(postsGym.length == 0) {
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
            {
                        postsGym.length == '' ? <Loader /> : (
                            postsGym.map((posts) => (
                                <CardPost key={posts.id} photo={posts.anexo} title={posts.titulo} description={posts.corpo} />

                                // <CardWokouts onClickFunction={(e) => {
                                //     addWouktsForStudent.push(wokouts.id)
                                //     console.log(wokouts.id)
                                //     console.log(addWouktsForStudent)
                                // }} key={wokouts.id} idWokouts={wokouts.id} nomeWokouts={wokouts.nome} categoriaWokouts={wokouts.nome_categoria_treino} dataWokouts={wokouts.data_criacao} imgWokouts={wokouts.foto} />
                            ))
                        )
                    }
            {/* <NoData description='Ainda não existem posts na academia!' /> */}
        </div>
    )
}
