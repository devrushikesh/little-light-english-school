
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import HomePage from './pages/Home'
import Footer from './components/footer'
import AdmissionPage from './pages/Admission'
import ContactUsPage from './pages/ContactUs'
import GalleryPage from './pages/Galary'
import AboutUsPage from './pages/About'

function App() {

  return (
    <>
      <Navbar />
      <Routes >

        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUsPage/> } />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/admission' element={<AdmissionPage />} />
        <Route path='/contact-us' element={<ContactUsPage/> } />
      </Routes>

      <Footer />

    </>
  )
}

export default App
