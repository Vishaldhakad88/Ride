import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Aboutus from './pages/Aboutus';
import Cursor from './components/cursor';
import ScrollToTop from "./components/ScrollToTop";
import StarBackground from './components/StarBackground';   // ⭐ ADD THIS
import Blogs from './pages/Blogs';
import Career from './pages/Career';
import Newsroom from './pages/Newsroom';
import Safety from './pages/Safety';
import TrydeAds from './pages/TrydeAds';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Cursor />
      <StarBackground />   {/* ⭐ GLOBAL STAR BG HERE */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/trydeAds" element={<TrydeAds />} />
        <Route path="/aboutus" element={<Aboutus />} />
         <Route path="/blogs" element={<Blogs />} />
         <Route path="/career" element={<Career/>}/>
           <Route path="/newsroom" element={<Newsroom/>}/>
           <Route path="/newsroom" element={<Newsroom/>}/>
            <Route path="/safety" element={<Safety/>}/>
            <Route path="/privacy_policy" element={<PrivacyPolicy/>}/>
            <Route path="/terms_service" element={<TermsOfService/>}/>
      </Routes>
    </BrowserRouter>
  );
}
