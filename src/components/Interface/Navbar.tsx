import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="shadow-md py-3 px-5 sm:px-10 bg-white font-[sans-serif] min-h-[60px] tracking-wide relative z-50 border-b border-gray-200">
      <div className="flex items-center justify-between w-full">
        <a href="#" className="flex items-center">
          <img
            src="/FitClave.png"
            alt="logo"
            className="w-20 h-12 object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center space-x-8 ">
          <div className={`lg:flex space-x-5 ${menuOpen ? 'block' : 'hidden'} lg:!block`}>
            <Link to="/" onClick={toggleMenu} className="hover:text-[#31C48D] text-[#31C48D] transition-colors duration-300 font-medium">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium">About</Link>
            <Link to="/feature" onClick={toggleMenu} className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium">Features</Link>
            <Link to="/team" onClick={toggleMenu} className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium">Team</Link>
            <Link to="/nutrition" onClick={toggleMenu} className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium">Nutrition</Link>
            <Link to="/contactus" onClick={toggleMenu} className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium">Contact</Link>
          </div>
        </nav>

        <div className="hidden lg:flex space-x-4">
          <Link to={'/login'} className="px-6 py-4 text-[15px] text-white bg-[#31C48D] border-none rounded-[15px] shadow-md hover:bg-[#31C48D] active:bg-[#31C48D] transition-all duration-300">Login</Link>
          <Link to={'/sign'} className="px-6 py-4 text-[15px] text-white bg-[#31C48D] border-none rounded-[15px] shadow-md hover:bg-[#31C48D] active:bg-[#31C48D] transition-all duration-300">Sign Up</Link>
        </div>

        <button id="toggleOpen" className="lg:hidden" onClick={toggleMenu}>
          <GiHamburgerMenu className="text-[#31C48D] w-7 h-7" />
        </button>
      </div>

  {/* /Mobile View */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white shadow-md p-6 z-50">
          <div className="flex justify-end">
            <button onClick={toggleMenu} className="text-[#31C48D]">
            <RxCross1 className="w-7 h-7" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 text-center">
            <Link to="/" onClick={toggleMenu} className="hover:text-[#31C48D] text-[#31C48D] transition-colors duration-300 font-medium">Home</Link>
            <div className="border-b border-gray-300 my-2"></div>
            <Link to="/about" onClick={toggleMenu} className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium">About</Link>
            <div className="border-b border-gray-300 my-2"></div>
            <Link to="/feature" onClick={toggleMenu} className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium">Features</Link>
            <div className="border-b border-gray-300 my-2"></div>
            <Link to="/team" onClick={toggleMenu} className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium">Team</Link>
            <div className="border-b border-gray-300 my-2"></div>
            <Link to="/nutrition" onClick={toggleMenu } className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium">Nutrition</Link>
            <div className="border-b border-gray-300 my-2"></div>
            <Link to="/contactus" onClick={toggleMenu} className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium">Contact</Link>
           
          </nav>
        </div>
      )}
    </header>
  );
};