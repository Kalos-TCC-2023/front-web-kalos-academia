import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ForgotPass } from './pages/ForgotPass/ForgotPass.jsx'
import { RegisterPage } from './pages/RegisterPage/RegisterPage.jsx'
import { HomePage } from './pages/HomePage/HomePage.jsx'
import { LoginPage } from './pages/LoginPage/LoginPage.jsx'
import { MenuMain } from './components/MenuMain/MenuMain.jsx'
import { PerfilGym } from './pages/ProfilePage/PerfilGym.jsx'
import { ErrorPage } from './pages/ErrorPage/ErrorPage.jsx'
import { StudentsPage } from './pages/StudentsPage/StudentsPage.jsx'
import { Productspage } from './pages/ProductsPage/Productspage.jsx'
import Workoutspage from './pages/WorkoutsPage/Workoutspage';
import { PostsPage } from './pages/PostsPage/PostsPage.jsx'
import { SuccessPage } from './components/SuccessPage/SuccessPage.jsx'
import { EditProfile } from './pages/EditProfilePage/EditProfile.jsx'
import { AddStudentPage } from './components/AddStudentPage/AddStudentPage.jsx'
import { CreateWorkouts } from './pages/CreateWorkouts/CreateWorkouts.jsx'
import GaleryWorkouts from './pages/GaleryWokouts.jsx/GaleryWorkouts.jsx'
import { AboutStudent } from './pages/AboutStudent/AboutStudent.jsx'
import { AddNewStudentPage } from './pages/AddNewStudentPage/AddNewStudentPage.jsx'
import AddExerciseRepetsSets from './pages/AddExerciseReptsSets/AddExerciseReptsSets'
import { EditStudentGym } from './components/EditStudentGym/EditStudentGym.jsx'
import { AddStudentWorkouts } from './pages/AddStudentWorkouts/AddStudentWorkouts'
import ChangeExercise from './pages/ChangeExercise/changeExerciseForWorkout.jsx'
import { ExerciseCreated } from './pages/exerciseCreate/exerciseCreate.jsx'
import { ProductReservationPage } from './pages/ProductReservationPage/ProductReservationPage.jsx'
import { NewProductPage } from './pages/NewProductPage/NewProductPage.jsx'
import { DataReservationPage } from './pages/DataReservationPage/DataReservationPage'



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
        element: <StudentsPage />,
      },
      {
        path: "/menu/alunos/novo_aluno",
        element: <AddStudentPage />
      },
      {
        path: "/menu/alunos/novo_aluno/add_novo_aluno",
        element: <AddNewStudentPage />
      },
      {
        path: "/menu/alunos/sobre_aluno",
        element: <AboutStudent />,
      },
      {
        path: "/menu/alunos/sobre_aluno/editar_aluno",
        element: <EditStudentGym />,
      },
      {
        path: "/menu/produtos",
        element: <Productspage />
      },
      {
        path: "/menu/produtos/reservas",
        element: <ProductReservationPage />
      },
      {
        path: "/menu/produtos/novo_produto",
        element: <NewProductPage />
      },
      {
        path: "/menu/produtos/reservas/reserva",
        element: <DataReservationPage />
      },
      {
        path: "/menu/treinos",
        element: <Workoutspage />

      },
      {
        path: "/menu/criarTreinos",
        element: <CreateWorkouts />

      },
      {
        path: "/menu/galeria_exercicios",
        element: <GaleryWorkouts />

      },
      {
        path: "/menu/treinos/adicionar_novo_aluno_no_treino",
        element: <AddStudentWorkouts />

      },
      {
        path: "/menu/posts",
        element: <PostsPage />
      },
      {
        path: "/menu/adicionar_exercicio",
        element: <AddExerciseRepetsSets />
      }
      ,
      {
        path: "/menu/escolher_exercicio",
        element: <ChangeExercise />
      },
      {
        path: "/menu/exercicio_criado_com_sucesso",
        element: <ExerciseCreated />
      }

    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />


)
