// App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './Components/Footer';
import ServicePage from './Pages/ServicePage';
import BookConsultationpage from './Pages/BookConsultationpage';
import PricingPage from './Pages/PricingPage';
import CareerPage from './Pages/CareerPage';
import ContactPage from './Pages/ContactPage';
import LoginPage from './Components/Login';
import CustomCursor from './Components/CustomCursor';
import ScrollGradient from './Components/ScrollGradient';

// Component to handle dynamic title
const TitleHandler = () => {
  const location = useLocation();

  useEffect(() => {
    switch(location.pathname) {
      case '/':
        document.title = 'NeuroEdgeSolutionTask - Home';
        break;
      case '/about':
        document.title = 'NeuroEdgeSolutionTask - About';
        break;
      case '/services':
        document.title = 'NeuroEdgeSolutionTask - Services';
        break;
      case '/pricing':
        document.title = 'NeuroEdgeSolutionTask - Pricing';
        break;
      case '/career':
        document.title = 'NeuroEdgeSolutionTask - Career';
        break;
      case '/contact':
        document.title = 'NeuroEdgeSolutionTask - Contact';
        break;
      case '/login':
        document.title = 'NeuroEdgeSolutionTask - Login';
        break;
      case '/book-consultation':
        document.title = 'NeuroEdgeSolutionTask - Book Consultation';
        break;
      default:
        document.title = 'NeuroEdgeSolutionTask';
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <TitleHandler /> {/* Title updater */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/book-consultation" element={<BookConsultationpage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
