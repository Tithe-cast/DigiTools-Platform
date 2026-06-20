import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MainSection from './components/MainSection';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} />
      <Banner />
      <MainSection cart={cart} setCart={setCart} />
      <Steps />
      <Pricing />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        closeOnClick
        theme="light"
        style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
      />
    </div>
  );
};

export default App;
