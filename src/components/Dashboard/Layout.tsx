import React from 'react'
import Sidebar from './Sidebar'
import Home from './Home'
import Profile from './Profile'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 ml-[200px] overflow-y-auto">

        <Outlet />

      </div>
    </div>
  )
}

export default DashboardLayout