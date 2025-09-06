import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import BrandDevelopment from './BrandDevelopment';
import AccountHelp from './AccountHelp';
import CRMSection from './CRMSection';
import ProcessSection from './ProcessSection';
import AwardsSection from './AwardsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const Homepage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BrandDevelopment />
      <AccountHelp />
      <CRMSection />
      <ProcessSection />
      <AwardsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Homepage;