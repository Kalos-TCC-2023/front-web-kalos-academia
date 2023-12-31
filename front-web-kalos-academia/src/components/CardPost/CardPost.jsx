import React from 'react'
import './CardPost.css'
import { EditOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Card, Tooltip, message } from 'antd';
const { Meta } = Card;
import moment from 'moment';
import axios from 'axios';


export const CardPost = ({ title, description, photo, data, time, postId, setDeletePost }) => {

    const [messageApi, contextHolder] = message.useMessage();

    const endPointAzure = localStorage.getItem("end-point-azure")

    const newFormatDate = data.replace('T00:00:00.000Z', '')
    const dayPost = moment(newFormatDate).format('L')
    const timeFormat = moment(time).format('LT')

    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Post excluido com sucesso!',
        })
      }

      const error = () => {
        messageApi.open({
          type: 'error',
          content: 'Ops! Algo deu errado! Tente novamente mais tarde enquanto nos resolvemos o problema!',
        });
      };

    const deletePost = (idPost) => {
        axios.delete(`${endPointAzure}/kalos/postagem/id/${idPost}`)
            .then(({ data }) => {
                console.log(data)
                success()
                setDeletePost(idPost)
            }).catch(({ erro }) => {
                error()
                console.log(erro)
            })
    }

    return (
        <div>
            {contextHolder}
            <Card className='card_post_gym'
                hoverable
                style={{
                    width: 600
                }}
                cover={<img style={{ width: '100%' }} src={photo || 'https://firebasestorage.googleapis.com/v0/b/kalos-corp-academia.appspot.com/o/images%2FFundo%20transparente%201900x1900%201.png?alt=media&token=7068ccb1-8c80-47e0-b0da-bc35b2b22ea3'} />}
                actions={[
                    <Tooltip title='Excluir post'><CloseCircleOutlined key="close" onClick={(e) => deletePost(postId)} /></Tooltip>
                ]}

            >

                <Meta title={title} description={description} />
                <Meta style={{ marginTop: '10px' }} description={dayPost + ' - ' + timeFormat} />
            </Card>
        </div>

    )
}
