import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import axios from 'axios';
import { Helmet } from 'react-helmet'
import { Statistic, FloatButton, Avatar, Tag } from 'antd';
import { EditOutlined, UserOutlined, MailFilled, PhoneFilled, PushpinFilled, InstagramFilled, FacebookFilled, LinkedinFilled } from '@ant-design/icons'
import { SubPagesProfile } from '../../components/SubPagesProfile/SubPagesProfile';
import { InfoCardGym } from '../../components/InfoCardGym/InfoCardGym';
import { InfoDescription } from '../../components/InfoDescription/InfoDescription';
import { Link } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import './Profile.css'


export const PerfilGym = () => {

  const id = localStorage.getItem("id_academia")
  const [objectGym, setObjectGym] = useState({})
  const [stateGymApi, setStateGymApis] = useState(0)
  const [counterWorkouts, setCounterWorkouts] = useState(0)
  const [counterStudents, setCounterStudents] = useState(0)


  const formatter = (value) => <CountUp end={value} separator="," />;

  useEffect(() => {
    axios.get(`https://kaloscorp.cyclic.app/kalos/academia/id/${id}`)
      .then(({ data }) => {
        
        setObjectGym(data.academia)
        setStateGymApis(data.status)

      }).catch((erro) => {
        console.log(erro)
      })

  }, [])

  useEffect(() => {
    axios.get(`https://kaloscorp.cyclic.app/kalos/treinoNivelCategoria/idAcademia/${id}`)
    .then(({ data }) => {
      
      setCounterWorkouts(data.informacoes.length)
    }).catch((erro) => {
      console.log(erro)
    })
  }, [])

  useEffect(() => {
    axios.get(`https://kaloscorp.cyclic.app/kalos/alunoAcademia/idAcademia/${id}`)
    .then(({ data }) => {
      console.log(data.alunos.length)
      setCounterStudents(data.alunos.length)
    }).catch((erro) => {
      console.log(erro)
    })
  }, [])

  console.log(objectGym)


  const operationGym = 'Aberto - Fecha ás 22:00'
  const enderecoGym = `${objectGym.logradouro}, ${objectGym.numero_endereco} - ${objectGym.complemento}, ${objectGym.cidade} - ${objectGym.estado}, ${objectGym.cep}`

  return (
    <div className='profile_gym'>
      <Helmet>
        <title>Kalos - Perfil</title>
      </Helmet>
      <div className="profile_gym">
        <Link to='/menu/perfil/editar'>
          <FloatButton tooltip='Editar Perfil' icon={<EditOutlined />} />
        </Link>

        {stateGymApi !== 200 ? <Loader className='loader' />
          : (
            <div className="profile_items">
              <div className="top_profile_data">
                <div className="img_name_type_operation">
                  <div className="img_name_gym">
                    <div className="img_gym">
                      <Avatar src={objectGym.foto} size={209} icon={<UserOutlined />} />
                    </div>
                    <div className="name_type_operation">
                      <span className='name_gym' style={{ color: `${objectGym.cor_primaria}` }}>{objectGym.nome}</span>
                      <span className='type_gym' style={{ color: `${objectGym.cor_secundaria}` }} >{objectGym.categoria}</span>
                      <span className='operation_gym'>{operationGym}</span>
                    </div>
                  </div>
                  <div className="statistic">
                    <div className="students_number">
                      <Statistic title="Alunos cadastrados" value={counterStudents} formatter={formatter} />
                    </div>
                    <div className="workouts_number">
                      <Statistic title="Treinos" value={counterWorkouts} formatter={formatter} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="data_profile_gym">
                {/* PRIMEIRA FILEIRA */}
                <div className="basic_data_gym">
                  <div className="tags_gym">
                    <span className="title_tags" style={{ color: `${objectGym.cor_secundaria}` }}>Tags</span>
                    <div className="tags_gym">
                    {
                      objectGym.tags.map(tag => (
                        <Tag key={tag.id_tags} color={objectGym.cor_primaria} >{tag.nome_tags}</Tag>
                      ))
                    }
                  
                    </div>
                  </div>
                  <div className="info_gym">
                    <InfoCardGym title='Info'>
                      <div className="email_profile">
                        <MailFilled style={{ color: `${objectGym.cor_primaria}`, fontSize: '20px' }} />
                        <InfoDescription title='E-mail' description={objectGym.email} />
                      </div>
                      <div className="telefone">
                        <PhoneFilled style={{ color: `${objectGym.cor_primaria}`, fontSize: '20px' }} />
                        <InfoDescription title='Telefone' description={objectGym.telefone} />

                      </div>
                      <div className="endereco">
                        <PushpinFilled style={{ color: `${objectGym.cor_primaria}`, fontSize: '20px' }} />
                        <InfoDescription title='Endereço' description={enderecoGym} />
                      </div>
                    </InfoCardGym>
                  </div>
                  <div className="description_gym">
                    <InfoCardGym title='Descrição'>
                      <InfoDescription title='Sobre nós' description={objectGym.descricao} />
                      <p className='social_midia_title' style={{ color: `${objectGym.cor_secundaria}` }}>Redes Sociais</p>
                      <div className="social_midia">
                        <div className="instagram_social_midia" style={{ background: `${objectGym.cor_primaria}` }} >
                          <InstagramFilled style={{ fontSize: '35px' }} />
                        </div>
                        <div className="facebook_social_midia" style={{ background: `${objectGym.cor_primaria}` }}>
                          <FacebookFilled style={{ fontSize: '35px' }} />
                        </div>
                        <div className="instagram_social_midia" style={{ background: `${objectGym.cor_primaria}` }}>
                          <LinkedinFilled style={{ fontSize: '35px' }} />
                        </div>
                      </div>
                    </InfoCardGym >
                  </div>
                </div>
                {/* SEGUNDA FILEIRA */}
                <div className="data_post_workouts_products">
                  <div className="pages_gym">
                    <SubPagesProfile />
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>

    </div>

  )
}
