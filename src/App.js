import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ToDoPage from './pages/ToDoPage';
import CardMemoryGamePage from './pages/CardMemoryGamePage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/to-do' element={<ToDoPage />} />
        <Route path='/card-memory-game' element={<CardMemoryGamePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
