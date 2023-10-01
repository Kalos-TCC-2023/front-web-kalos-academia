import React from 'react'
import CountUp from 'react-countup';
import { Statistic } from 'antd';
import { Helmet } from 'react-helmet'

import './Profile.css'

export const PerfilGym = () => {

  const formatter = (value) => <CountUp end={value} separator="," />;

  const nameGym = 'ACADEMIA ORIGINAL'
  const typeGym = 'Academia'
  const operationGym = 'Aberto - Fecha ás 22:00'

  return (
    <div className='profile_gym'>
      <Helmet>
        <title>Kalos - Perfil</title>
      </Helmet>
      <div className="profile_gym">
        <div className="profile_items">
          <div className="top_profile_data">
            <div className="img_name_type_operation">
              <div className="img_name_gym">
                <div className="img_gym"></div>
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
              <div className="tags_gym"></div>
              <div className="info_gym"></div>
              <div className="description_gym"></div>
            </div>
            {/* SEGUNDA FILEIRA */}
            <div className="data_post_workouts_products">
              <div className="pages_gym"></div>
              <div className="title_page_button_gym">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
