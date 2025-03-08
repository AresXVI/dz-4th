import './App.css';
import MainPage from './pages/aboutPage/MainPage';
import AboutPage from './pages/mainPage/AboutPage';
import TodosPage from './pages/todosPage/TodosPage';

function App() {
  return (
    <div className="App">
      <MainPage/>
      <AboutPage/>
      <TodosPage/>
    </div>
  );
}

export default App;
