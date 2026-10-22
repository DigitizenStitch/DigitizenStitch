import { Navigate, Route, Routes } from 'react-router';
import FileFormats from './pages/FileFormats';
import Layout from './components/Layout';
import Home from './pages/Home';
import { EmbroideryDigitizing, Patches, VectorArt } from './pages/Services';
import Portfolio from './pages/Portfolio';
import { About, Faq, HowItWorks, NotFound, Pricing, Quote } from './pages/InfoPages';
import { Privacy, RefundPolicy, Terms } from './pages/Legal';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/embroidery-digitizing" element={<EmbroideryDigitizing />} />
        <Route path="/vector-art" element={<VectorArt />} />
        <Route path="/patches" element={<Patches />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/embroidery-file-formats" element={<FileFormats />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/refund-revision-policy" element={<RefundPolicy />} />

        {/* Old URLs (also 301-redirected in public/_redirects) */}
        <Route path="/digitizing" element={<Navigate replace to="/portfolio?category=embroidery" />} />
        <Route path="/AnemeDesign" element={<Navigate replace to="/portfolio?category=embroidery" />} />
        <Route path="/vectorArt" element={<Navigate replace to="/portfolio?category=vector" />} />
        <Route path="/contact" element={<Navigate replace to="/quote" />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
