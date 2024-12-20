
import { FaRunning } from "react-icons/fa";
import { FaNutritionix, FaLock } from "react-icons/fa";
import { PiChartLineUp } from "react-icons/pi";
import { IoNotifications } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi"; 

export const Features = () => {
  return (
    <div className="px-4 py-11 sm:px-10">
      <div className="mt-19 max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl text-center mx-auto">
          <h2 className="md:text-5xl text-4xl font-bold mb-6 text-[#31C48D]">
            FitClave Features
          </h2>
          <p className="mt-6 text-gray-600 text-xl font-serif font-bold">
            Stay ahead in your fitness journey with powerful tools and insights.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Workout Tracking Card */}
          <div className="sm:p-8 p-6 flex flex-col items-center bg-gray-100 rounded-lg border-2 border-[#67C3A2] shadow-lg hover:bg-[#D1D5DB] hover:shadow-2xl transition duration-300">
            <FaRunning style={{ color: "#057A55", fontSize: "40px" }} />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-black">
              Workout Tracking
            </h3>
            <p className="text-gray-600 hover:text-black text-center">
              Log workouts, track exercises, and monitor detailed stats.
            </p>
          </div>

          {/* Nutrition Tracking Card */}
          <div className="sm:p-8 p-6 flex flex-col items-center bg-gray-100 rounded-lg border-2 border-[#67C3A2] shadow-lg hover:bg-[#D1D5DB] hover:shadow-2xl transition duration-300">
            <FaNutritionix style={{ color: "#F05252", fontSize: "40px" }} />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-black">
              Nutrition Tracking
            </h3>
            <p className="text-gray-600 hover:text-black text-center">
              Record meals and track calorie and macronutrient intake.
            </p>
          </div>

          {/* Progress Tracking Card */}
          <div className="sm:p-8 p-6 flex flex-col items-center bg-gray-100 rounded-lg border-2 border-[#67C3A2] shadow-lg hover:bg-[#D1D5DB] hover:shadow-2xl transition duration-300">
            <PiChartLineUp style={{ color: "#751A3D", fontSize: "40px" }} />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-black">
              Progress Tracking
            </h3>
            <p className="text-gray-600 hover:text-black text-center">
              View graphs and insights into your fitness journey over time.
            </p>
          </div>

          {/* Secure Login Card */}
          <div className="sm:p-8 p-6 flex flex-col items-center bg-gray-100 rounded-lg border-2 border-[#67C3A2] shadow-lg hover:bg-[#D1D5DB] hover:shadow-2xl transition duration-300">
            <FaLock style={{ color: "#E3A008", fontSize: "40px" }} />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-black">
              Secure Login
            </h3>
            <p className="text-gray-600 hover:text-black text-center">
              Safely log in to access your fitness data anytime, anywhere.
            </p>
          </div>

          {/* Activity Notifications Card */}
          <div className="sm:p-8 p-6 flex flex-col items-center bg-gray-100 rounded-lg border-2 border-[#67C3A2] shadow-lg hover:bg-[#D1D5DB] hover:shadow-2xl transition duration-300">
            <IoNotifications style={{ color: "#1E90FF", fontSize: "40px" }} />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-black">
              Activity Notifications
            </h3>
            <p className="text-gray-600 hover:text-black text-center">
              Get alerts for workout completion, goals achieved, and more.
            </p>
          </div>

          {/* Search and Filter Card */}
          <div className="sm:p-8 p-6 flex flex-col items-center bg-gray-100 rounded-lg border-2 border-[#67C3A2] shadow-lg hover:bg-[#D1D5DB] hover:shadow-2xl transition duration-300">
            <BiSearchAlt2 style={{ color: "#FF4500", fontSize: "40px" }} />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-black">
              Search and Filter
            </h3>
            <p className="text-gray-600 hover:text-black text-center">
              Search workouts, nutrition entries, or other users with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
