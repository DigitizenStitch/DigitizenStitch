import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import '@fontsource-variable/inter/wght.css';
import '@fontsource/playfair-display/latin-400.css';
import '@fontsource/playfair-display/latin-400-italic.css';
import '@fontsource/playfair-display/latin-600.css';
import App from './App.jsx';
import './index.css';

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

const root = document.getElementById('root');
// Pages are prerendered at build time; hydrate them, otherwise render normally (dev).
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
