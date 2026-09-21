import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import App from './App.tsx';
import './index.css';

// Initialize EmailJS
emailjs.init("lqrMYSVCqTsNF69Lq");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);