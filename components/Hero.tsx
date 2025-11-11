
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative text-white bg-primary-blue h-[calc(100vh-60px)] lg:h-[calc(100vh-80px)] min-h-[500px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://picsum.photos/seed/rally/1920/1080')" }}
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          WE DON'T ASK PERMISSION TO EXIST
        </h1>
        <p className="mt-4 font-body text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
          While others build for tomorrow, we fight for today. No apologies. No compromise. Just action.
        </p>
        <a 
          href="#get-involved"
          className="mt-8 inline-block bg-action-red text-white font-bold uppercase tracking-wider px-10 py-4 text-sm md:text-base transition-transform hover:scale-105"
        >
          Take Action Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
