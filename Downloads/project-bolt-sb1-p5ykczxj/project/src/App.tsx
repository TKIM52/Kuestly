import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import TradingSupport from './components/TradingSupport';
import CryptoInfo from './pages/CryptoInfo';
import CryptoDetail from './pages/CryptoDetail';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import KolNews from './pages/KolNews';
import KolDetail from './pages/KolDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import BusinessRegister from './pages/BusinessRegister';
import RegisterComplete from './pages/RegisterComplete';
import About from './pages/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <div className="bg-[#EBEFFF] w-full h-16 flex items-center justify-center">
                <div className="w-[1280px] mx-auto px-4 text-center">
                  <p className="text-[#3e5eff] font-medium">지금 Kuestly에서 다양한 가상자산 정보를 확인하세요!</p>
                </div>
              </div>
              <Banner />
              <div className="w-[1280px] mx-auto px-4 py-6 flex-grow mt-4">
                <TradingSupport />
              </div>
            </>
          } />
          <Route path="/crypto" element={
            <>
              <div className="bg-[#EBEFFF] w-full h-16 flex items-center justify-center">
                <div className="w-[1280px] mx-auto px-4 text-center">
                  <p className="text-[#3e5eff] font-medium">지금 Kuestly에서 다양한 가상자산 정보를 확인하세요!</p>
                </div>
              </div>
              <Banner />
              <CryptoInfo />
            </>
          } />
          <Route path="/crypto/:symbol" element={<CryptoDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/kol-news" element={<KolNews />} />
          <Route path="/kol/:id" element={<KolDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/individual" element={<Register />} />
          <Route path="/register/business" element={<BusinessRegister />} />
          <Route path="/register/complete" element={<RegisterComplete />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;