import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className="bg-green-50 flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 mt-2 mr-2 lg:ml-[200px] md:ml-[200px] sm:ml-0 overflow-y-auto">

        <Outlet />

      </div>
    </div>
  )
}

export default DashboardLayout