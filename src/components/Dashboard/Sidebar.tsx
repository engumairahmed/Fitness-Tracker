
import { MdDashboard } from "react-icons/md";
import { IoMdFitness } from "react-icons/io";
import { IoMdNutrition } from "react-icons/io";
import { FaBarsProgress } from "react-icons/fa6";
import { MdAnalytics } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoAccessibility } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5"
import { FiMenu, FiArrowLeft } from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import { useAuth } from "../Auth/AuthContext";
import { useState } from "react";
import { LogoutModal } from "./LogoutModal";
import { ToastContainer } from "react-toastify";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { logout, getName } = useAuth();
  const name = getName();

  // const navigate=useNavigate();

  // const handleLogout = () => {
  //    logout();
  //    navigate('/');
  // }

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      {/* Sidebar */}
  <nav
    className={`bg-white shadow-xl h-full fixed z-30 transform ${
      isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    } md:translate-x-0 transition-transform w-[200px] md:static`}
  >
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between py-4 px-4">
        <a href="javascript:void(0)" className="text-center">
          <img src="/FitClave.png" alt="logo" className="w-[150px] inline" />
        </a>
      </div>
      <hr className="my-2" />
      <div className="mt-4">
        <ul className="space-y-7 px-3 flex-1">
          <li>
            <a
              href="javascript:void(0)"
              className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all"
            >
              <MdDashboard className="w-7 h-5" />
              <span className="ml-2">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all"
            >
              <IoMdFitness className="w-7 h-5" />
              <span className="ml-2">Workout Planner</span>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all"
            >
              <IoMdNutrition className="w-7 h-5" />
              <span className="ml-2">Nutrition Tracker</span>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all"
            >
              <FaBarsProgress className="w-7 h-5" />
              <span className="ml-2">Progress Tracker</span>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all"
            >
              <MdAnalytics className="w-7 h-5" />
              <span className="ml-2">Analytics</span>
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-2" />
      <div className="mt-3">
        <ul className="space-y-4 px-2">
          <li>
            <a
              href="javascript:void(0)"
              className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all"
            >
              <IoSettings className="w-7 h-5" />
              <span className="ml-2">Settings</span>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all"
            >
              <IoAccessibility className="w-7 h-5" />
              <span className="ml-2">Profile</span>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all"
            >
              <IoLogOut className="w-7 h-5" />
              <span className="ml-2">Logout</span>
            </a>
          </li>
        </ul>
        <div className="flex flex-wrap items-center cursor-pointer border-t py-8 mt-8">
          <img
            src="https://readymadeui.com/team-2.webp"
            className="w-10 h-10 rounded-md border-2 border-white"
          />
          <div className="ml-4">
            <p className="text-sm text-[#333] font-semibold">Palwasha Qasim</p>
            <p className="text-xs text-[#4] mt-0.5">Active free account</p>
          </div>
        </div>
      </div>
    </div>
  </nav>

  {/* Overlay for Small Screens */}
  {isSidebarOpen && (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
      onClick={() => setIsSidebarOpen(false)}
    ></div>
  )}

      <ToastContainer/>
    </>


  )

}

export default Sidebar

