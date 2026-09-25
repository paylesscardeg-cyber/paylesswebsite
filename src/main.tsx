import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import App from './App.tsx';
import './index.css';

// Initialize EmailJS
emailjs.init("lqrMYSVCqTsNF69Lq");

// Override Meta Pixel ID from environment if provided
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || 'YOUR_META_PIXEL_ID';
if (window.fbq && META_PIXEL_ID !== 'YOUR_META_PIXEL_ID') {
  window.fbq('init', META_PIXEL_ID);
  window.fbq('track', 'PageView');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);