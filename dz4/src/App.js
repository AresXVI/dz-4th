import './App.css';
import ErrorPage from './pages/errorPage/ErrorPage';
import MainPage from './pages/mainPage/MainPage';
const user = {
  name: prompt('Name: ').toUpperCase().trim().replace(/\s+/g, ''),
  lastname: prompt('Lastname: ').toUpperCase().trim().replace(/\s+/g, '')
}
const {name, lastname} = user

function App() {
  if (name === 'JOHN' && lastname === 'JOHNS') return <MainPage name={name} lastname={lastname}/>
  return <ErrorPage name={name} lastname={lastname}/>
}

export default App;