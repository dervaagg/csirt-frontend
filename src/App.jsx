import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollTop from "./UI/ScrollTop";
import "./App.css";

// Import Pages
import Home from "./pages/Home";
import About from "./components/About";
import RFC from "./components/RFC";
import Layanan from "./components/Layanan";
import Panduan from "./components/Panduan";
import Kontak from "./components/Kontak";
import MainLayout from "./pages/MainLayout";
import PageNotFound from "./pages/PageNotFound";

// Import News Content
import NewsView from "./components/NewsView";

function App() {
  const [isLayoutVisible, setIsLayoutVisible] = useState(true);

  return (
    <MainLayout isLayoutVisible={isLayoutVisible}>
      <ScrollTop />
      <Routes>
        {/* Route Page */}
        <Route path="/" exact element={<Home />} />
        <Route path="/profil" element={<About />} />
        <Route path="/rfc" element={<RFC />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/panduan" element={<Panduan />} />
        <Route path="/kontak" element={<Kontak />} />

        {/* Route News */}
        <Route path="/news/:id" element={<NewsView />} />

        <Route
          path="*"
          element={<PageNotFound setIsLayoutVisible={setIsLayoutVisible} />}
        />
      </Routes>
    </MainLayout>
  );
}

export default App;
