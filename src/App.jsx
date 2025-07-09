
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import HomePage from './pages/Home'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes >

        <Route path='/' element={<HomePage />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App
