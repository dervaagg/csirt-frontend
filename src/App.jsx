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

// Import News Content.............................

import NewsV1 from './components/News Viwer/NewsV1'
import NewsV2 from './components/News Viwer/NewsV2'
import NewsV3 from './components/News Viwer/NewsV3'
import NewsV4 from './components/News Viwer/NewsV4'
import NewsV5 from './components/News Viwer/NewsV5'


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
          <Route path='/news1' element={<NewsV1 />} />
          <Route path='/news2' element={<NewsV2 />} />
          <Route path='/news3' element={<NewsV3 />} />
          <Route path='/news4' element={<NewsV4 />} />
          <Route path='/news5' element={<NewsV5 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
