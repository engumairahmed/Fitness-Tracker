import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className="bg-green-50 flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 ml-[200px] overflow-y-auto">

        <Outlet />

      </div>
    </div>
  )
}

export default DashboardLayout