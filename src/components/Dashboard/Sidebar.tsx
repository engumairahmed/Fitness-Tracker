
import { MdDashboard } from "react-icons/md";
import { IoMdFitness } from "react-icons/io";
import { IoMdNutrition } from "react-icons/io";
import { FaBarsProgress } from "react-icons/fa6";
import { MdAnalytics } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoAccessibility } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import { useAuth } from "../Auth/AuthContext";
import { useState } from "react";
import { LogoutModal } from "./LogoutModal";
import { ToastContainer } from "react-toastify";

const Sidebar = () => {
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
      <nav className="w-[200px] bg-white shadow-xl flex-shrink-0 h-full fixed">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center py-4">
            <Link className="text-center" to={"/"}><img src="/FitClave.png" alt="logo"
              className='w-[150px] inline' />
            </Link>
          </div>
          <hr className="my-6 " />
          <div>
            <ul className="space-y-7 px-3 flex-1">
              <li>
                <Link className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all" to={'/dashboard'}>
                  <MdDashboard className="w-7 h-5 " />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all" to={'/dashboard/workoutform'}>
                  <IoMdFitness className="w-7 h-5 " />
                  <span>Workout Planner
                  </span>
                </Link>                                </li>
              <li>
                <Link className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all" to={'/dashboard/nutri-mon'}>
                  <IoMdNutrition className="w-7 h-5 " />
                  <span> Nutrition Tracker</span>
                </Link>
              </li>
              <li>
                <Link className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all" to={'/ProgressTracker'}>
                  <FaBarsProgress className="w-7 h-5 " />
                  <span> Progress Tracker</span>
                </Link>
              </li>
              <li>
                <Link className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all" to={'/dashboard/analytics'}>
                  <MdAnalytics className="w-7 h-5 " />
                  <span>Analytics</span>
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6" />
          <div className="mt-4">
            <ul className="space-y-4 px-2">
              <li>
                <Link className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all" to={'/Settings'}>
                  <IoSettings className="w-7 h-5 " />
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all" to="/dashboard/profile">
                  <IoAccessibility className="w-7 h-5 " />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <button className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all" onClick={openModal}>
                  <IoLogOut className="w-7 h-5 " />
                  <span>Logout</span>
                </button>
                {isModalOpen && <LogoutModal onClose={closeModal} />}
              </li>
            </ul>
            <div className="flex flex-wrap items-center cursor-pointer border-t py-8 mt-8">
              <img src='https://readymadeui.com/team-2.webp' className="w-10 h-10 rounded-md border-2 border-white" />
              <div className="ml-4">
                <p className="text-sm text-[#333] font-semibold">{name}</p>
                <p className="text-xs text-[#67C3A2] mt-0.5">Active free account</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <ToastContainer/>
    </>


  )

}

export default Sidebar

