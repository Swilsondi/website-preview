import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ This is the only Router needed
import App from './App';
import './index.css';
import ScrollToTop from './components/ScrollToTop';

// Ensure browser does not restore scroll position automatically
history.scrollRestoration = "manual";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
