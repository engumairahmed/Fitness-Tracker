import React from 'react'
import Sidebar from './Sidebar'
import Home from './Home'
import Profile from './Profile'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar/>
      <div className="flex-1 ml-[250px] p-6">

       <Outlet/> 

      </div>
    </div>
  )
}

export default DashboardLayout