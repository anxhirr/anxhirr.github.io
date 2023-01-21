import { Route, Routes } from 'react-router-dom'
import NavBar from './components/home/NavBar'
import Footer from './components/home/Footer'
import HomePage from './pages/HomePage'
import ToDoPage from './pages/ToDoPage'
import MemoryPage from './pages/MemoryPage'
import HangmanPage from './pages/HangmanPage'
import Calculator from './components/calculator/Calculator'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/to-do' element={<ToDoPage />} />
          <Route path='/card-memory-game' element={<MemoryPage />} />
          <Route path='/hangman-game' element={<HangmanPage />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
