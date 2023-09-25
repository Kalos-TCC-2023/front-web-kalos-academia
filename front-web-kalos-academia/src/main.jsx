import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from 'react-router-dom'
import { ForgotPass } from './pages/ForgotPass/ForgotPass.jsx'
import { RegisterPage } from './pages/RegisterPage/RegisterPage.jsx'
import { HomePage } from './pages/HomePage/HomePage.jsx'
import { LoginPage } from './pages/LoginPage/LoginPage.jsx'
import { MenuMain } from './components/MenuMain/MenuMain.jsx'
import { PerfilGym } from './pages/Profile/PerfilGym.jsx'
import { ErrorPage } from './pages/ErrorPage/ErrorPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/esqueciSenha",
    element: <ForgotPass />
  },
  {
    path: "/cadastro",
    element: <RegisterPage />
  },
  {
    path: "/menu",
    element: <MenuMain />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/menu/home",
        element: <HomePage />
      },
      {
        path: "/menu/perfil",
        element: <PerfilGym />
      },
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/esqueciSenha' element={<ForgotPass/>}/>
        <Route path='/cadastro' element={<RegisterPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>,
)
