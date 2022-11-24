import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ToDoPage from './pages/ToDoPage';
import MemoryPage from './pages/MemoryPage';
import HangmanPage from './pages/HangmanPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/to-do' element={<ToDoPage />} />
        <Route path='/card-memory-game' element={<MemoryPage />} />
        <Route path='/hangman-game' element={<HangmanPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
