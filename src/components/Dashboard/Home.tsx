import React , { useState } from 'react'
import { FiMenu, FiArrowLeft } from "react-icons/fi";


const DashboardHome = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>

      
     {/* Toggle Button */}
     <button
      className="text-gray-600 fixed top-9 left-4 z-30 md:hidden"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      <FiMenu  size={30} />
    </button>

 

    <div className="p-10 mt-9 mx-4 lg:mx-12 bg-[#31C48D] text-white rounded-lg shadow-lg">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
        Welcome to Your Dashboard—Your Fitness Story Begins Now! 💪
      </h1>
      <p className="mt-2 font-bold">
        Track your workouts, monitor nutrition, and achieve your goals—all in one place.
      </p>
    </div>

    {/* Widgets Section */}
    <div className="mt-10 mx-4 lg:ml-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white hover:text-[#67C3A2] border border-transparent hover:border-[#31C48D] shadow rounded-lg flex flex-col items-start">
          <h2 className="text-lg md:text-xl font-bold">Recent Workouts</h2>
          <p className="text-sm text-gray-600 mt-2">Last workout: 2 days ago</p>
        </div>
        <div className="p-6 bg-white hover:text-[#67C3A2] border border-transparent hover:border-[#31C48D] shadow rounded-lg flex flex-col items-start">
          <h2 className="text-lg md:text-xl font-bold">Calorie Intake</h2>
          <p className="text-sm text-gray-600 mt-2">Today: 1200 calories</p>
        </div>
        <div className="p-6 bg-white hover:text-[#67C3A2] border border-transparent hover:border-[#31C48D] shadow rounded-lg flex flex-col items-start">
          <h2 className="text-lg md:text-xl font-bold">Progress Overview</h2>
          <p className="text-sm text-gray-600 mt-2">Weight change: -2kg this month</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default DashboardHome
