import React from 'react'
import CountUp from 'react-countup';
import { Helmet } from 'react-helmet'
import { Statistic, FloatButton, Avatar, Tag } from 'antd';
import { EditOutlined, UserOutlined, MailFilled, PhoneFilled, PushpinFilled, InstagramFilled, FacebookFilled, LinkedinFilled } from '@ant-design/icons'
import { SubPagesProfile } from '../../components/SubPagesProfile/SubPagesProfile';
import { InfoCardGym } from '../../components/InfoCardGym/InfoCardGym';
import { InfoDescription } from '../../components/InfoDescription/InfoDescription';
import './Profile.css'


export const PerfilGym = () => {

  const formatter = (value) => <CountUp end={value} separator="," />;

  const nameGym = 'ACADEMIA ORIGINAL'
  const typeGym = 'Academia'
  const operationGym = 'Aberto - Fecha ás 22:00'
  const emailGym = 'academiaoriginal@gmail.com'
  const telefoneGym = '+55 11 9999-9999'
  const enderecoGym = 'Av. Presidente Washington Luis, 850 - Parque dos Camargos, Barueri - SP, 06434-000'
  const gymDescription = 'Lorem ipsum dolor sit amet consectetur. Morbi tempor vitae nulla sem nunc. Aliquet at eget eu lectus id eget est. Aliquam ut fermentum lacus vitae dui facilisi nibh augue id. Etiam neque laoreet scelerisque non tempor enim.'

  return (
    <div className='profile_gym'>
      <Helmet>
        <title>Kalos - Perfil</title>
      </Helmet>
      <div className="profile_gym">
        <FloatButton tooltip='Editar Perfil' icon={<EditOutlined />} onClick={() => console.log('click')} />
        <div className="profile_items">
          <div className="top_profile_data">
            <div className="img_name_type_operation">
              <div className="img_name_gym">
                <div className="img_gym">
                  <Avatar size={190} icon={<UserOutlined />} />
                </div>
                <div className="name_type_operation">
                  <span className='name_gym'>{nameGym}</span>
                  <span className='type_gym'>{typeGym}</span>
                  <span className='operation_gym'>{operationGym}</span>
                </div>
              </div>
              <div className="statistic">
                <div className="students_number">
                  <Statistic title="Alunos cadastrados" value={250} formatter={formatter} />
                </div>
                <div className="workouts_number">
                  <Statistic title="Treinos" value={28} formatter={formatter} />
                </div>
              </div>
            </div>
          </div>
          <div className="data_profile_gym">
            {/* PRIMEIRA FILEIRA */}
            <div className="basic_data_gym">
              <div className="tags_gym">
                <span className="title_tags">Tags</span>
                <div className="tags_gym">
                  <Tag color="#ffb800">Academia</Tag>
                  <Tag color="#ffb800">Acessibilidade</Tag>
                </div>
              </div>
              <div className="info_gym">
                <InfoCardGym title='Info'>
                  <div className="email">
                    <MailFilled style={{ color: '#ffb800', fontSize: '20px' }} />
                    <InfoDescription title='E-mail' description={emailGym} />
                  </div>
                  <div className="telefone">
                    <PhoneFilled style={{ color: '#ffb800', fontSize: '20px' }} />
                    <InfoDescription title='Telefone' description={telefoneGym} />

                  </div>
                  <div className="endereco">
                    <PushpinFilled style={{ color: '#ffb800', fontSize: '20px' }} />
                    <InfoDescription title='Endereço' description={enderecoGym} />
                  </div>
                </InfoCardGym>
              </div>
              <div className="description_gym">
                <InfoCardGym title='Descrição'>
                  <InfoDescription title='Sobre nós' description={gymDescription} />
                  <p className='social_midia_title'>Redes Sociais</p>
                  <div className="social_midia">
                    <div className="instagram_social_midia">
                      <InstagramFilled style={{ fontSize: '35px' }} />
                    </div>
                    <div className="facebook_social_midia">
                      <FacebookFilled  style={{ fontSize: '35px' }} />
                    </div>
                    <div className="instagram_social_midia">
                      <LinkedinFilled  style={{ fontSize: '35px' }} />
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
      </div>
    </div>
  )
}
