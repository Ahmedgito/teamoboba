import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';  // Import Loader component
import './App.css';
import Section1 from './Section1';
import Navbar from './Navbar';
import SocialSidebar from './components/Sidebar';
import MenuGrid from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Footer from './Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader Overlay - Will be Visible on Top Until Loading is False */}
      {loading && (
        <div className="fixed inset-0 bg-[#f6dbbf] flex items-center justify-center z-50 transition-opacity duration-500">
          <Loader />
        </div>
      )}

      {/* Render Everything in the Background */}
      <Navbar />
      <div id="home">
        <Section1 />
      </div>
      <SocialSidebar />
      <div id="menu">
        <MenuGrid />
      </div>
      <div id="menu">
        <Section3 />
      </div>
      <div id="online-ordering">
        <Section4 />
      </div>
      <Footer />
    </>
  );
}

export default App;
