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
import { PerfilGym } from './pages/ProfilePage/PerfilGym.jsx'
import { ErrorPage } from './pages/ErrorPage/ErrorPage.jsx'
import { StudentsPage } from './pages/StudentsPage/StudentsPage.jsx'
import { Productspage } from './pages/ProductsPage/Productspage.jsx'
import { Chatpage } from './pages/ChatPage/Chatpage.jsx'
import { Workoutspage } from './pages/WorkoutsPage/Workoutspage.jsx'
import { PostsPage } from './pages/PostsPage/PostsPage.jsx'
import { SuccessPage } from './components/SuccessPage/SuccessPage.jsx'
import { EditProfile } from './pages/EditProfilePage/EditProfile.jsx'


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
    path: "/sucesso",
    element: <SuccessPage />
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
      {
        path: "/menu/perfil/editar",
        element: <EditProfile />
      },
      {
        path: "/menu/alunos",
        element: <StudentsPage />
      },
      {
        path: "/menu/produtos",
        element: <Productspage />
      },
      {
        path: "/menu/treinos",
        element: <Workoutspage />
      },
      {
        path: "/menu/chat",
        element: <Chatpage />
      },
      {
        path: "/menu/posts",
        element: <PostsPage />
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
