
import { MdDashboard } from "react-icons/md";
import { IoMdFitness } from "react-icons/io";
import { IoMdNutrition } from "react-icons/io";
import { FaBarsProgress } from "react-icons/fa6";
import { MdAnalytics } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoAccessibility } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5"
import { Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

const Sidebar = () => {
  return (

    <nav className="bg-white shadow-xl h-screen fixed top-0 left-0 min-w-[250px] py-6 px-4 font-[sans-serif] overflow-auto">
      <div className="relative flex flex-col h-full">
        <div className="flex flex-wrap items-center cursor-pointer relative">
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
              <Link className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all" to={'/Analytics'}>
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
              <Link to="/dashboard/profile" className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all">
                <IoAccessibility className="w-7 h-5 " />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all" to={'/Logout'}>
                <IoLogOut className="w-7 h-5 " />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
          <div className="flex flex-wrap items-center cursor-pointer border-t py-8 mt-8">
            <img src='https://readymadeui.com/team-2.webp' className="w-10 h-10 rounded-md border-2 border-white" />
            <div className="ml-4">
              <p className="text-sm text-[#333] font-semibold">User Account Name</p>
              <p className="text-xs text-[#67C3A2] mt-0.5">Active free account</p>
            </div>
          </div>
        </div>
      </div>
    </nav>


  )

}

export default Sidebar

