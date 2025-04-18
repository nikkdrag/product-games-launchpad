
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import InterviewsSection from '../components/InterviewsSection';
import CasesSection from '../components/CasesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ExpertsSection from '../components/ExpertsSection';
import PricingSection from '../components/PricingSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { initializeAnimations } from '../utils/animation';

const Index = () => {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          e.preventDefault();
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    // Initialize animations
    const cleanupAnimations = initializeAnimations();
    
    // Meta tags update
    document.title = "Product Games - Продуктовый кейс-клуб";
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cleanupAnimations();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <InterviewsSection />
      <CasesSection />
      <TestimonialsSection />
      <ExpertsSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
