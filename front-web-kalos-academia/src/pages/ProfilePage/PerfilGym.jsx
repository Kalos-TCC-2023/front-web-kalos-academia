import React from 'react'
import { Helmet } from 'react-helmet'
import './Profile.css'

export const PerfilGym = () => {
  return (
    <div className='profile_gym'>
      <Helmet>
        <title>Kalos - Perfil</title>
      </Helmet>
      <div className="profile_gym">
        Profile Gym
      </div>
    </div>
  )
}
