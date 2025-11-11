
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import WhoWeAre from './components/WhoWeAre';
import WhatWeDo from './components/WhatWeDo';
import Partners from './components/Partners';
import Media from './components/Media';
import Merch from './components/Merch';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <div className="bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <MissionVision />
        <WhoWeAre />
        <WhatWeDo />
        <Partners />
        <Media />
        <Merch />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
};

export default App;
