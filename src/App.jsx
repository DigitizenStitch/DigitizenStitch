import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import PortfolioHeader from './components/PortfolioHeader';
import Digitaizing from './components/Digitaizing';
import VectorArt from './components/VectorArt';
import Patches from './components/Patches';
import AnemeDesign from './components/AnemeDesign';
import SocialLinks from './components/SocialLinks';
import VerticalCarousel from './components/VerticalCarousel';
import WhyChooseUs from './components/WhyChooseUs';
import BannerCounter from './components/BannerCounter';
import Hiring from './components/Hiring';
import MeetOurTeam from './components/MeetOurTeam';
import Account from './components/Accounts';
import { FooterTwo } from './Footer';
import ClientRemarks from './components/ClientRemarks';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <HeroSection />
        <SocialLinks />
        <VerticalCarousel />
        <AboutUs />
        <BannerCounter />
        <WhyChooseUs />
        <Services />
        <ClientRemarks />
        <Hiring />
        <Portfolio />
        <PortfolioHeader />

        {/* ✅ Routes */}
        <Routes>
          {/* 👇 Redirect Home `/` to `/digitizing` */}
          <Route path="/" element={<Navigate to="/digitizing" />} />
          <Route path="/digitizing" element={<Digitaizing />} />
          <Route path="/vectorArt" element={<VectorArt />} />
          <Route path="/patches" element={<Patches />} />
          <Route path="/AnemeDesign" element={<AnemeDesign />} />
        </Routes>

        <MeetOurTeam />
        <Contact />
        <Account />
        <FooterTwo />
      </div>
    </Router>
  );
};

export default App;
