import './App.css'
import Helmet from 'react-helmet'


function App() {
  return (
    <div className='App'>
      <Helmet>
        <title>Kalos - Login</title>
        <meta
          name='description'
          content='Aplicação web para academias'
        />
        <meta name='keywords' content='Academias, gerenciamento, alunos, fitness' />
      </Helmet>
        
    </div>
  )
}

export default App
