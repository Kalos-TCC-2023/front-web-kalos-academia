import './App.css'
import { LoginPage } from './pages/LoginPage/LoginPage'
import Helmet from 'react-helmet'


function App() {
  return (
    <div className='App'>
      <Helmet>
        <title>Kalos - para sua academia</title>
        <meta 
          name='description'
          content='Aplicação web para academias'
        />
        <meta name='keywords' content='Academias, gerenciamento, alunos, fitness' />
      </Helmet>
      <LoginPage/>
    </div>
  )
}

export default App
