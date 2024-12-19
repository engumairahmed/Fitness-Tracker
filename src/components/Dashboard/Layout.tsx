import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open state

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Toggle sidebar visibility:" +isSidebarOpen);
  };
  return (
    <div className="relative h-full min-h-screen font-[sans-serif] bg-green-50">
    <div className="flex items-start">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
  
      <button id="open-sidebar" className='ml-auto fixed top-[30px] left-[18px]' onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5  fill-gray-600 hover:fill-gray-400 transition-all duration-150" viewBox="0 0 20 20">
          <path fillRule="evenodd"
            d="M.13 17.05a1.41 1.41 0 0 1 1.41-1.41H10a1.41 1.41 0 1 1 0 2.82H1.54a1.41 1.41 0 0 1-1.41-1.41zm0-14.1a1.41 1.41 0 0 1 1.41-1.41h16.92a1.41 1.41 0 1 1 0 2.82H1.54A1.41 1.41 0 0 1 .13 2.95zm0 7.05a1.41 1.41 0 0 1 1.41-1.41h16.92a1.41 1.41 0 1 1 0 2.82H1.54A1.41 1.41 0 0 1 .13 10z"
            clipRule="evenodd" data-original="#000000" />
        </svg>
      </button>
  
      <section className="main-content w-full p-6 max-lg:ml-8">  
        <div className="mt-12 mb-6 px-2 mx-4 lg:mx-12">
          <Outlet/>
          </div>
      </section>
    </div>
  </div>
  )
}

export default DashboardLayout