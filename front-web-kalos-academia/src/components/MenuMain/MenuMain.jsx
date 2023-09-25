import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../Navbar/NavBar'
import './Menu.css'

export const MenuMain = () => {
  return (
    <div className='menu_main'>
      <NavBar />
      <div className="page_main">
        <p>Header</p>
      <Outlet />
      </div>
    </div>
  )
}
