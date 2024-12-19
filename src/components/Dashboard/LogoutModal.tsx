import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import { AiOutlineCloseCircle } from "react-icons/ai"; 
import { BiLogOut } from "react-icons/bi";

export const LogoutModal = ({ onClose }: { onClose: () => void }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
     
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 relative">
   
        <button
        type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-700 focus:outline-none"
        >
          <AiOutlineCloseCircle size={24} />
        </button>

      
        <div className="text-center">
         
          <BiLogOut size={50} className="mx-auto text-red-600 mb-4" />
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
            Confirm Logout
          </h4>
          <p className="text-gray-600 mb-6">
            Are you sure you want to log out? Any unsaved progress will be lost.
          </p>

       
          <div className="space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
