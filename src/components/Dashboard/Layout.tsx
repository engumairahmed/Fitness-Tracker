import React from 'react'
import Sidebar from './Sidebar'
import Home from './Home'
import Profile from './Profile'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
<div className="flex flex-row h-screen overflow-y-auto">
<Sidebar/>
<div className="flex-1 p-4">

       <Outlet/> 

      </div>
    </div>
  )
}

export default DashboardLayout