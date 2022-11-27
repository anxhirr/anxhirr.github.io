import React from 'react';
import AboutSection from '../components/home/AboutSection';
import HeroSection from '../components/home/HeroSection';
import ProjectsSection from '../components/home/ProjectsSection';
import ServicesSection from '../components/home/ServicesSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
    </>
  );
};

export default HomePage;
