import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import Services from './pages/Services';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import './styles/global.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppInner() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/about"       element={<About />} />
        <Route path="/experience"  element={<Experience />} />
        <Route path="/work"        element={<Work />} />
        <Route path="/work/:slug"  element={<CaseStudy />} />
        <Route path="/services"    element={<Services />} />
        <Route path="/skills"      element={<Skills />} />
        <Route path="/contact"     element={<Contact />} />
        <Route path="*"            element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
