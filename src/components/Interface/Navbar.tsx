import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <header className="shadow-md py-3 px-5 sm:px-10 bg-white font-[sans-serif] min-h-[60px] tracking-wide relative z-50 border-b border-gray-200">
      <div className="flex items-center justify-between w-full">
      
        <a href="#" className="flex items-center">
          <img src="/FitClave.png" alt="logo" className="w-20 h-12 object-contain" />
        </a>

  
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to='/'
            className="hover:text-[#31C48D] text-[#31C48D] transition-colors duration-300 font-medium"
          >
            Home
          </Link>
          <Link to={'/about'}
            className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium"
          >
            About
          </Link>
          <Link to='/feature'
           
            className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium"
          >
           Features
          </Link>
          <Link to={'/team'}
            className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium"
          >
            Team
          </Link>
          <a
            href="#"
            className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium"
          >
            Blog
          </a>
          <Link to={'/contactus'}
            className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex space-x-4">
          <button className="button px-5 py-2 rounded-full font-medium text-white bg-[#67C3A2] border border-[#67C3A2] transition-all duration-300 hover:bg-white hover:text-[#67C3A2]">
            Login
          </button>
          <button className="button px-5 py-2 rounded-full font-medium text-[#67C3A2] border border-[#67C3A2] hover:bg-[#67C3A2] hover:text-white transition-all duration-300">
            Sign Up
          </button>
        </div>

      
        <button className="lg:hidden text-gray-700">
          <svg
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 6h18M3 12h18m-9 6h9"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};
