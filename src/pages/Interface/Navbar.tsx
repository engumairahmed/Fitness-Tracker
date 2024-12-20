import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import * as jwtdecode from "jwt-decode";
import { DecodedToken } from "../../utils/Types";
import { useAuth } from "../../utils/AuthContext";

export const Navbar = () => {
  const { logout } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [User, setUser] = useState<DecodedToken>();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    logout();
  };
  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      const decoded: DecodedToken = jwtdecode.jwtDecode(token);
      setUser(decoded);
      setIsLoggedIn(true);
    }
  }, []);
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
          <div
            className={`lg:flex space-x-5 ${
              menuOpen ? "block" : "hidden"
            } lg:!block`}
          >
            <Link
              to="/"
              onClick={toggleMenu}
              className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link
              to="/feature"
              onClick={toggleMenu}
              className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium"
            >
              Features
            </Link>
            <Link
              to="/team"
              onClick={toggleMenu}
              className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium"
            >
              Team
            </Link>
            <Link
              to="/nutrition"
              onClick={toggleMenu}
              className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium"
            >
              Nutrition
            </Link>
            <Link
              to="/workout"
              onClick={toggleMenu}
              className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium"
            >
              Workout
            </Link>
            <Link
              to="/contactus"
              onClick={toggleMenu}
              className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
          </div>
        </nav>

        <div className="hidden lg:flex space-x-4">
          {isLoggedIn ? (
            <>
              {/* Dashboard */}
              <Link
                to={"/dashboard"}
                className="px-6 py-4 text-[15px] text-white bg-[#31C48D] border-none rounded-[15px] shadow-md hover:bg-[#28A374] transition-all duration-300"
              >
                Dashboard
              </Link>
              {/* Sign Out */}
              <button
                onClick={handleSignOut}
                className="px-6 py-4 text-[15px] text-white bg-red-500 border-none rounded-[15px] shadow-md hover:bg-red-600 transition-all duration-300"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              {/* Login Button */}
              <Link
                to={"/login"}
                className="px-6 py-4 text-[15px] text-white bg-[#31C48D] border-none rounded-[15px] shadow-md hover:bg-[#28A374] transition-all duration-300"
              >
                Login
              </Link>
              {/* Sign Up Button */}
              <Link
                to={"/sign"}
                className="px-6 py-4 text-[15px] text-white bg-[#31C48D] border-none rounded-[15px] shadow-md hover:bg-[#28A374] transition-all duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
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
            <Link
              to="/"
              onClick={toggleMenu}
              className="hover:text-[#31C48D] text-[#31C48D] transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <div className="border-b border-gray-300 my-2"></div>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <div className="border-b border-gray-300 my-2"></div>
            <Link
              to="/feature"
              onClick={toggleMenu}
              className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium"
            >
              Features
            </Link>
            <div className="border-b border-gray-300 my-2"></div>
            <Link
              to="/team"
              onClick={toggleMenu}
              className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium"
            >
              Team
            </Link>
            <div className="border-b border-gray-300 my-2"></div>
            <Link
              to="/nutrition"
              onClick={toggleMenu}
              className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium"
            >
              Nutrition
            </Link>
            <div className="border-b border-gray-300 my-2"></div>
            <Link
              to="/workout"
              onClick={toggleMenu}
              className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium"
            >
              Workout
            </Link>
            <div className="border-b border-gray-300 my-2"></div>
            <Link
              to="/contactus"
              onClick={toggleMenu}
              className="text-gray-600 hover:text-[#31C48D] transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
          </nav>
          {/* Buttons */}
          <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-md border-t border-gray-300 flex flex-col items-center space-y-4">
            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="w-3/4 px-4 py-2 text-white bg-[#31C48D] rounded-md shadow-md hover:bg-[#28A374] transition-all duration-300 text-sm text-center"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleSignOut();
                    toggleMenu();
                  }}
                  className="w-3/4 px-4 py-2 text-white bg-red-500 rounded-md shadow-md hover:bg-red-600 transition-all duration-300 text-sm text-center"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="w-3/4 px-4 py-2 text-white bg-[#31C48D] rounded-md shadow-md hover:bg-[#28A374] transition-all duration-300 text-sm text-center"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  to="/sign"
                  className="w-3/4 px-4 py-2 text-white bg-[#31C48D] rounded-md shadow-md hover:bg-[#28A374] transition-all duration-300 text-sm text-center"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
