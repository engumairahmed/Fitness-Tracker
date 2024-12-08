import React from 'react'

const DashboardHome = () => {
  return (
    <>

      
   {/* Main Content */}
   <div className="flex-1 p-4">
      {/* Heading Section */}

      <div className="p-4 bg-[#31C48D] text-white rounded-lg shadow-lg">
                        <h1 className="text-2xl md:text-3xl font-bold">
                            Welcome to Your Dashboard—Your Fitness Story Begins Now! 💪
                        </h1>
                        <p className="mt-2 font-bold">
                            Track your workouts, monitor nutrition, and achieve your goals—all in one place.
                        </p>
                    </div>

      {/* Widgets Section */}
      <div className="mt-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="p-7 bg-white hover:text-[#67C3A2] border border-transparent hover:border-[#31C48D]   shadow rounded-lg">
                                <h2 className="text-lg md:text-xl font-bold">Recent Workouts</h2>
                                <p className="text-sm text-gray-600">Last workout: 2 days ago</p>
                            </div>
                            <div className="p-4 bg-white hover:text-[#67C3A2] border border-transparent hover:border-[#31C48D] shadow rounded-lg">
                                <h2 className="text-lg md:text-xl font-bold">Calorie Intake</h2>
                                <p className="text-sm text-gray-600">Today: 1200 calories</p>
                            </div>
                            <div className="p-4 bg-white hover:text-[#67C3A2] border border-transparent hover:border-[#31C48D] shadow rounded-lg">
                                <h2 className="text-lg md:text-xl font-bold">Progress Overview</h2>
                                <p className="text-sm text-gray-600">Weight change: -2kg this month</p>
                            </div>
                        </div>
                    </div>
      </div>
    </>
  )
}

export default DashboardHome
