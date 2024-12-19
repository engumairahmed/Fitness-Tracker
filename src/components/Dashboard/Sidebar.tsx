import { MdDashboard, MdAnalytics } from "react-icons/md";
import { IoMdFitness, IoMdNutrition } from "react-icons/io";
import { FaArrowLeft, FaBarsProgress } from "react-icons/fa6";
import { IoSettings, IoLogOut, IoAccessibility } from "react-icons/io5";
import { BsPersonBoundingBox } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import { useAuth } from "../Auth/AuthContext";
import { useEffect, useRef, useState } from "react";
import { LogoutModal } from "./LogoutModal";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";

interface SidebarProps {
  isSidebarOpen: boolean;  // Control sidebar open/close
  toggleSidebar: () => void;  // Function to toggle sidebar
}

const Sidebar = ({ isSidebarOpen, toggleSidebar }: SidebarProps) => {
  const URL = import.meta.env.VITE_SERVER_URL
  const { logout, getName } = useAuth();
  const name = getName();
  const [pictureUrl, setPictureUrl] = useState('')

  const getPicture = async () => {
    await axios.get(`${URL}/profile/picture`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('authToken')}`,
      }
    })
      .then((response) => {
        setPictureUrl(response.data.user.picture);
      })
      .catch(() => {
        setPictureUrl('');
      });
  }

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => {setModalOpen(false);
    toggleSidebar();
  }

  type NavItem = {
    to: string;
    label: string;
    icon: React.ReactNode;
  };

  const navItems: NavItem[] = [
    {
      to: '/dashboard',
      label: 'Dashboard',
      icon: <MdDashboard className="w-[22px] h-[22px] mr-3" />,
    },
    {
      to: 'progress-track',
      label: 'Progress Tracker',
      icon: <FaBarsProgress className="w-[22px] h-[22px] mr-3" />,
    },
    {
      to: 'workoutform',
      label: 'Workout Plan',
      icon: <IoMdFitness className="w-[22px] h-[22px] mr-3" />,
    },
    {
      to: 'workoutlist',
      label: 'Workouts',
      icon: <IoMdFitness className="w-[22px] h-[22px] mr-3" />,
    },
    {
      to: 'workoutdays',
      label: 'Workout Days',
      icon: <IoMdFitness className="w-[22px] h-[22px] mr-3" />,
    },
    {
      to: 'nutri-mon',
      label: 'Nutrition Monitor',
      icon: <IoMdNutrition className="w-[22px] h-[22px] mr-3" />,
    },
    {
      to: 'analytics',
      label: 'Analytics',
      icon: <MdAnalytics className="w-[22px] h-[22px] mr-3" />,
    },
  ];
  
  useEffect(() => {
    getPicture()
  }, [])
  
  return (
    <>
    {isModalOpen && <LogoutModal onClose={closeModal} />}
    <nav id="sidebar" className={`lg:w-[270px] 
  ${isSidebarOpen ? "w-[270px] visible opacity-100" : "w-[32px] hidden opacity-0"} 
  max-lg:fixed 
  transition-[width,opacity] 
  duration-500 
  shrink-0 
  z-[100]`}>
  <div id="sidebar-collapse-menu"
    className={`bg-white ${isSidebarOpen ? "w-[270px] visible" : "w-[32px] hidden"} 
      shadow-lg h-screen fixed top-0 left-0 overflow-auto overflow-x-hidden z-[99] 
      lg:w-[270px] max-lg:w-[270px] transition-all duration-500`}>
          <div className={`bg-white flex items-center gap-4 pt-6 pb-2 px-4 top-0 min-h-[64px] z-[100] `}>
            <Link to={"/"} className="flex items-center gap-2">
              <img src="/FitClave.png" alt="logo"
                className='w-[150px] inline' />
            </Link>

            <button id="close-sidebar" className='ml-auto' onClick={toggleSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-gray-600 hover:fill-gray-400 transition-all duration-150" viewBox="0 0 20 20">
                <path fillRule="evenodd"
                  d="M.13 17.05a1.41 1.41 0 0 1 1.41-1.41H10a1.41 1.41 0 1 1 0 2.82H1.54a1.41 1.41 0 0 1-1.41-1.41zm0-14.1a1.41 1.41 0 0 1 1.41-1.41h16.92a1.41 1.41 0 1 1 0 2.82H1.54A1.41 1.41 0 0 1 .13 2.95zm0 7.05a1.41 1.41 0 0 1 1.41-1.41h16.92a1.41 1.41 0 1 1 0 2.82H1.54A1.41 1.41 0 0 1 .13 10z"
                  clipRule="evenodd" data-original="#000000" />
              </svg>
            </button>
          </div>

          <hr className="border-gray-300 my-6" />

          <div className="px-4">
            <ul className="space-y-2 mt-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    className="text-gray-900 text-sm flex items-center cursor-pointer hover:bg-gray-200 rounded-md px-3 py-2.5 transition-all duration-300"
                  >
                    {item.icon}
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <hr className="border-gray-300 my-6" />

            <div>

              <ul className="space-y-2">
                <li>
                  <Link to={'profile'}
                    className="text-gray-900 text-sm flex items-center cursor-pointer hover:bg-gray-200 rounded-md px-3 py-2.5 transition-all duration-300">
                    <IoAccessibility className="w-[22px] h-[22px] mr-3" />
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to={'settings'}
                    className="text-gray-900 text-sm flex items-center cursor-pointer hover:bg-gray-200 rounded-md px-3 py-2.5 transition-all duration-300">
                    <IoSettings className="w-[22px] h-[22px] mr-3" />
                    <span>Settings</span>
                  </Link>
                </li>
                <li>
                  <button onClick={()=>{openModal();toggleSidebar();}}
                    className="text-gray-900 text-sm flex items-center cursor-pointer hover:bg-gray-200 rounded-md px-3 py-2.5 transition-all duration-300">
                    <IoLogOut className="w-[22px] h-[22px] mr-3" />
                    <span>Logout</span>
                  </button>

                </li>
              </ul>

              <hr className="border-gray-300 my-6" />


              <div className="mt-6 flex items-center">
                {pictureUrl ? <img src={pictureUrl} className="w-9 h-9 rounded-full border-2 border-gray-600 shrink-0" /> : <BsPersonBoundingBox size={30} />}
                {/* <img src='https://readymadeui.com/profile.webp'
                  className="w-9 h-9 rounded-full border-2 border-gray-600 shrink-0" /> */}
                <div className="ml-4">
                  <p className="text-lg text-gray-800 whitespace-nowrap">{name}</p>
                  <p className="text-xs text-gray-400 whitespace-nowrap">Active free account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </>


  )

}

export default Sidebar