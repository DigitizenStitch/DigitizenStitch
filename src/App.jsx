// App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio'

import PortfolioHeader from './components/PortfolioHeader';
import Digitaizing from './components/Digitaizing';
import VectorArt from './components/VectorArt';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Patches from './components/Patches';
import AnemeDesign from './components/AnemeDesign';
import SocialLinks from './components/SocialLinks';
import VerticalCarousel from './components/VerticalCarousel';
import WhyChooseUs from './components/WhyChooseUs';
import BannerCounter from './components/BannerCounter';
import Hiring from './components/Hiring';
import MeetOurTeam from './components/MeetOurTeam';
import { FooterTwo } from './Footer';



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
        <Routes>
          <Route path="/digitaizing" element={<Digitaizing />} />
        </Routes>
      <Hiring />
      <Portfolio />
        <PortfolioHeader />
        <Routes>
          <Route path="/digitaizing" element={<Digitaizing />} />
          <Route path="/vectorArt" element={<VectorArt />} />
          <Route path='/patches' element={<Patches />}></Route>
          <Route path='/AnemeDesign' element={<AnemeDesign />}></Route>
        </Routes>
        
        <MeetOurTeam />
        <Contact />
        <FooterTwo />
      </div>
    </Router>
  );
};

export default App;
