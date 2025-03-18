import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PortfolioHeader from './PortfolioHeader';
import Digitaizing from './Digitaizing';
import VectorArt from './VectorArt';
import Patches from './Patches';
import AnemeDesign from './AnemeDesign';

const PortfolioRout = () => {
  return (
    <>
      {/* Portfolio Navigation Tabs */}
      <PortfolioHeader />

      {/* Routes for Portfolio Pages */}
      <Routes>
        {/* Redirect from '/portfolio' to '/digitizing' */}
        <Route path="/portfolio" element={<Navigate to="/digitizing" />} />

        {/* Portfolio Sections */}
        <Route path="/digitizing" element={<Digitaizing />} />
        <Route path="/vectorArt" element={<VectorArt />} />
        <Route path="/patches" element={<Patches />} />
        <Route path="/AnemeDesign" element={<AnemeDesign />} />
      </Routes>
    </>
  );
};

export default PortfolioRout;
