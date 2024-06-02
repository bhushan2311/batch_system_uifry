'use client'
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import './styles/App.css';
import Navbar from '@/components/Navbar';
import Features from '@/components/Features';
import Advantages from '@/components/Advantages';
import Testimonial from '@/components/Testimonial';
import FAQ from '@/components/FAQ';
import Started from '@/components/Started';
import Footer from '@/components/Footer';

export default function Home() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className={`App ${isNightMode ? 'night-mode' : ''}`}>
      <button id="nightmode-btn" onClick={toggleNightMode}>
        {isNightMode ? 'Day Mode' : 'Night Mode'}
      </button>
      <Navbar />
      <HeroSection />
      <Features/>
      <Advantages/>
      <Testimonial/>
      <FAQ/>
      <Started/>
      <Footer/>
    </div>
  );
}
