
import { MdDashboard, MdAnalytics } from "react-icons/md";
import { IoMdFitness, IoMdNutrition } from "react-icons/io";
import { FaBarsProgress } from "react-icons/fa6";
import { IoSettings, IoLogOut, IoAccessibility } from "react-icons/io5";
import { BsPersonBoundingBox } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import { useAuth } from "../Auth/AuthContext";
import { useEffect, useState } from "react";
import { LogoutModal } from "./LogoutModal";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";

const Sidebar = () => {
  const URL = import.meta.env.VITE_SERVER_URL
  const { logout, getName } = useAuth();
  const name = getName();
  const [isPicture, setPicture] = useState(false)
  const [pictureUrl, setPictureUrl] = useState('')

  const getPicture = async () => {
    await axios.get(`${URL}profile/picture`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('authToken')}`,
      }
    })
      .then((response) => {
        setPicture(true);
        setPictureUrl(response.data.user.picture);
      })
      .catch(() => {
        setPicture(false);
      });
  }

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    getPicture()
  }, [])

  return (
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
              <Link className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all" to={'/dashboard/workoutlist'}>
                <IoMdFitness className="w-7 h-5 " />
                <span>Workout List
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


  )

}

export default Sidebar

