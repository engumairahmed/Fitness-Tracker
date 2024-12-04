import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import "./App.css";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLock } from "react-icons/bs";

export const  SignUp= () => {
  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleFormSignUp = () => {
    navigate("/login");
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonHover = {
    scale: 1.1,
    transition: { duration: 0.2 },
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "200px",
    position: "relative",
  };

  const circleStyle: React.CSSProperties = {
    width: "30%",
    height: "210%",
    borderRadius: "50%",
    backgroundColor: "yellow",
    marginTop: "57%",
    marginLeft: "-10%",
  };

  const triangleStyle: React.CSSProperties = {
    width: 0,
    height: 0,
    borderLeft: "250px solid transparent",
    borderBottom: "300px solid red",
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row justify-center bg-white-500 m-0">
      {/* Image Section */}
      <div
        className="relative lg:w-2/5 flex flex-col justify-center items-center p-6 rounded-lg text-center space-y-4 bg-cover bg-center m-0"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/05/78/57/84/360_F_578578454_Kr1qKNMUHYvIEwzzZM3o8o7XErZHVakv.jpg')",
          color: "#31C48D",
        }}
      >
        <div className="absolute inset-0 bg-green-500 bg-opacity-70 rounded-lg m-0"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-bold text-white">Welcome Back</h1>
          <p className="text-lg text-white">
            To keep connected with us please <br /> login with your personal info.
          </p>
          <motion.button
            whileHover={buttonHover}
            onClick={handleFormSignUp}
            className="rounded-[2.375rem] border-2 border-seagreen px-12 py-2 text-sm font-semibold text-white hover:bg-seagreen"
            style={{ marginTop: 40 }}
          >
            Sign In
          </motion.button>
        </motion.div>
      </div>

      {/* Form Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 m-0"
      >
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img
            src="/public/FitClave.png"
            alt="Logo"
            className="h-14 w-auto"
          />
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2
            className="text-center font-bold tracking-tight text-gray-900"
            style={{ fontSize: "2.5rem", lineHeight: "2rem", color: "#67C3A2" }}
          >
            Create Account
          </h2>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-6 flex justify-center gap-4"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-300">
              <BiLogoFacebook className="h-6 w-6 text-black-600" />
            </div>
            <div className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-300">
              <IoLogoGoogleplus className="h-6 w-6 text-black-600" />
            </div>
            <div className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-300">
              <FaLinkedinIn className="h-6 w-6 text-black-500" />
            </div>
          </motion.div>
        </div>
        <h5 className="flex items-center justify-center" style={{ paddingTop: 35 }}>
          Use your email for Registration!
        </h5>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <motion.form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleFormSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} className="relative mt-2">
              <IoPerson className="absolute inset-y-4 left-3 flex items-center text-gray-500 text-lg" />
              <input
                id="Name"
                name="Name"
                type="text"
                placeholder="Enter your name"
                required
                autoComplete="name"
                className="block w-full border-gray-300 py-4 pl-10 pr-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 sm:text-sm bg-gray-100"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="relative mt-2">
              <AiOutlineMail className="absolute inset-y-4 left-3 flex items-center text-gray-500 text-lg" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                autoComplete="email"
                className="block w-full border-gray-300 py-4 pl-10 pr-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 sm:text-sm bg-gray-100"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="relative mt-2">
              <BsPersonLock
                className="absolute inset-y-4 left-3 flex items-center text-gray-500 text-lg"
              />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                autoComplete="current-password"
                className="block w-full border-gray-300 py-4 pl-10 pr-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 sm:text-sm bg-gray-100"
              />
            </motion.div>
            <motion.div
              whileHover={buttonHover}
              className="flex justify-center"
            >
              <button
                className="rounded-[2.375rem] border-2 border-seagreen px-14 py-3 text-sm font-semibold text-green hover:bg-seagreen"
                style={{ marginLeft: 30 }}
              >
                Sign Up
              </button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};
