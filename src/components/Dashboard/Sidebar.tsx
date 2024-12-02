import React from 'react'
import { MdDashboard } from "react-icons/md";
import { IoMdFitness } from "react-icons/io";
import { IoMdNutrition } from "react-icons/io";
import { FaBarsProgress } from "react-icons/fa6";
import { MdAnalytics } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoAccessibility } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5"

const Sidebar = () => {
  return (

    <div className="flex h-screen bg-gray-100">
      <nav className="bg-white shadow-xl h-screen fixed top-0 left-0 min-w-[250px] py-6 px-4 font-[sans-serif] overflow-auto">
                    <div className="relative flex flex-col h-full">
                        <div className="flex flex-wrap items-center cursor-pointer relative">
                           <link className="text-center"><img src="/FitClave.png" alt="logo"
                                className='w-[150px] inline' />
                          </link>
                        </div>
                        <hr className="my-6 " />
                        <div>
                            <ul className="space-y-7 px-3 flex-1">
                                <li>
                                   <link className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all">
                                        <MdDashboard className="w-7 h-5 " />
                                        to={'/'}<span>Dashboard</span>
                                  </link>
                                </li>
                                <li>
                                    <link className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all">
                                        <IoMdFitness className="w-7 h-5 " />
                                        to={'/WorkoutPlanner'}<span>Workout Planner
                                        </span>
                                        </link>                                </li>
                                <li>
                                   <link className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all">
                                        <IoMdNutrition className="w-7 h-5 " />
                                       to={'/NutritionTracker'} <span> Nutrition Tracker</span>
                                  </link>
                                </li>
                                <li>
                                   <link className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all">
                                        <FaBarsProgress className="w-7 h-5 " />
                                        to={'/ProgressTracker'} <span> Progress Tracker</span>
                                  </link>
                                </li>
                                <li>
                                   <link className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all">
                                        <MdAnalytics className="w-7 h-5 " />
                                        to={'/Analytics'}<span>Analytics</span>
                                  </link>
                                </li>
                            </ul>
                        </div>
                        <hr className="my-6" />
                        <div className="mt-4">
                            <ul className="space-y-4 px-2">
                                <li>
                                   <link className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all">
                                        <IoSettings className="w-7 h-5 " />
                                        to={'/Settings'}  <span>Settings</span>
                                  </link>
                                </li>
                                <li>
                                   <link className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all">
                                        <IoAccessibility className="w-7 h-5 " />
                                        to={'/Profile'}    <span>Profile</span>
                                  </link>
                                </li>
                                <li>
                                   <link className="text-[#333] text-sm flex items-center hover:text-[#67C3A2] transition-all">
                                        <IoLogOut className="w-7 h-5 " />
                                        to={'/Logout'}   <span>Logout</span>
                                  </link>
                                </li>
                            </ul>
                            <div className="flex flex-wrap items-center cursor-pointer border-t py-8 mt-8">
                                <img src='https://readymadeui.com/team-2.webp' className="w-10 h-10 rounded-md border-2 border-white" />
                                <div className="ml-4">
                                    <p className="text-sm text-[#333] font-semibold">Palwasha Qasim</p>
                                    <p className="text-xs text-[#67C3A2] mt-0.5">Active free account</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                </div>


  )
   
}

export default Sidebar

