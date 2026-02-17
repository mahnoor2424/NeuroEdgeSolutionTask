// src/Pages/Home.jsx
import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Works from '../Components/Works';
import Services from '../Components/Services';
import TestimonialsSection from '../Components/TestimonialsSection';
import CTA from '../Components/CTA';
import Footertop from '../Components/Footertop';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
     
      <Hero />
      <Works />
      <Services />
      <TestimonialsSection />
      <CTA />
      <Footertop />
      
    </>
  );
};

export default Home;
