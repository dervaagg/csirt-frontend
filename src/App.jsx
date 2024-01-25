import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollTop from './UI/ScrollTop'
import './App.css'

// Import Pages...................................

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './components/About'
import RFC from './components/RFC'
import Layanan from './components/Layanan'
import Panduan from './components/Panduan'
import Kontak from './components/Kontak'
import Footer from './components/Footer'
import Menu from './components/Menu'

// Import News Content.............................
import NewsView from './components/NewsView'



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollTop />
        <Routes>
          {/* Route Page */}
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/rfc' element={<RFC />} />
          <Route path='/layanan' element={<Layanan />} />
          <Route path='/panduan' element={<Panduan />} />
          <Route path='/kontak' element={<Kontak />} />

          {/* Route News */}
          <Route path="/news/:id" element={<NewsView />} />

        </Routes>
        <Footer />
        <Menu />
      </Router>
    </>
  )
}

export default App
