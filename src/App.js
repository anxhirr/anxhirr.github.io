import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ToDoPage from './pages/ToDoPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/to-do' element={<ToDoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
