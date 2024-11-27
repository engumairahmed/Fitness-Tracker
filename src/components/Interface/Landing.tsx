import React from 'react';
import { Features } from './Features';
import { About } from './About';
import { Team } from './Team';
import { Contactus } from './Contactus';
import { Teams } from './Teams';

export const Landing = () => {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="\6914597_Motion Graphics_Motion Graphic_3840x2160.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#004d40] via-[#004d40b3] to-[#004d40] opacity-92 z-0"></div>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-[#fff] z-10 px-4">
          {/* Main Content Section */}
          <div className="text-left max-w-4xl mx-auto text-center">
          <h1 className="lg:text-6xl md:text-6xl text-4xl text-[#fff] font-bold mb-6 md:!leading-[80px]">
              Transform your fitness journey <br />
              with our FitClave Fitness 
              Tracker!
            </h1>
            <p className="text-lg sm:text-xl text-white leading-relaxed">
              Track your workout, nutrition, and progress in one place. <br />
              Your all-in-one solution for workouts, nutrition, and progress
              tracking....
            </p>
            <a
              href="#getStarted"
              className="inline-block mt-8 px-8 py-3 text-white border-2 border-[#67C3A2] bg-transparent rounded-full text-lg shadow-lg hover:bg-[#31C48D] hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </a>
      </div>
      </div>
    </div>
      <About></About>
      <Features></Features>
      <Teams></Teams>
    </div>
  );
};