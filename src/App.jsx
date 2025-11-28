import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Aboutus from './pages/Aboutus';
import Cursor from './components/cursor';
import ScrollToTop from "./components/ScrollToTop";
import StarBackground from './components/StarBackground';   // ⭐ ADD THIS

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Cursor />
      <StarBackground />   {/* ⭐ GLOBAL STAR BG HERE */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  );
}
