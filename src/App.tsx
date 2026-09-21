import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GetYourCard from './pages/GetYourCard';
import Reservation from './pages/Reservation';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-outfit">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-your-card" element={<GetYourCard />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;