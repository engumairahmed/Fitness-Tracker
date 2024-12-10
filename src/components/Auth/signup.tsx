import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLock } from "react-icons/bs";

export const SignUp = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values); // Replace this with your API call logic
      navigate("/login");
    },
  });

  const buttonHover = {
    scale: 1.1,
    transition: { duration: 0.2 },
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row justify-center bg-white-500 m-0">
      {/* Image Section */}
      <div
        className="relative lg:w-2/5 flex flex-col justify-center items-center p-6 rounded-lg text-center space-y-4 bg-cover bg-center m-0"
        style={{
          backgroundImage:
            "url('Tablet login-bro.png')",
          color: "#31C48D",
        }}
      >
        <div className="absolute inset-0 bg-green-300 bg-opacity-70 rounded-lg m-0"></div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-bold text-white" style={{ lineHeight: "2rem" }}>
            Welcome Back
          </h1>
          <p className="text-lg text-white">
            To keep connected with us please <br /> login with your personal info.
          </p>
          <motion.button
            whileHover={buttonHover}
            onClick={() => navigate("/login")}
            className="rounded-[2.375rem] border-2 border-seagreen px-12 py-2 text-sm font-semibold text-white hover:bg-white hover:text-green-300"
            style={{ marginTop: 40 }}
          >
            Sign In
          </motion.button>
        </motion.div>
      </div>

      {/* Form Section */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 m-0">
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
            style={{ fontSize: "2.5rem", lineHeight: "2rem", color: "green-300" }}
          >
            Create Account
          </h2>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-6 flex justify-center gap-4"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-300 hover:bg-blue-300">
              <Link to={"https://www.facebook.com"}>
                <BiLogoFacebook className="h-6 w-6 text-black-600" />
              </Link>
            </div>
            <div className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-300 hover:bg-yellow-300">
              <Link to={"https://www.google.com"}>
                <IoLogoGoogleplus className="h-6 w-6 text-black-600" />
              </Link>
            </div>
            <div className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-300 hover:bg-blue-300">
              <Link to={"https://www.linkedin.com"}>
                <FaLinkedinIn className="h-6 w-6 text-black-500" />
              </Link>
            </div>
          </motion.div>
        </div>
        <h5 className="flex items-center justify-center" style={{ paddingTop: 35 }}>
          Use your email for Registration!
        </h5>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <motion.form
            className="space-y-6"
            onSubmit={formik.handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} className="relative mt-2">
              <IoPerson className="absolute inset-y-4 left-3 flex items-center text-gray-500 text-lg" />
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="block w-full border-gray-300 py-4 pl-10 pr-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm bg-gray-100"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
              )}
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="relative mt-2">
              <AiOutlineMail className="absolute inset-y-4 left-3 flex items-center text-gray-500 text-lg" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="block w-full border-gray-300 py-4 pl-10 pr-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm bg-gray-100"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
              )}
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="relative mt-2">
              <BsPersonLock className="absolute inset-y-4 left-3 flex items-center text-gray-500 text-lg" />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="block w-full border-gray-300 py-4 pl-10 pr-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm bg-gray-100"
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
              )}
            </motion.div>
            <motion.div
              whileHover={buttonHover}
              className="flex justify-center"
            >
              <button
                type="submit"
                className="rounded-[2.375rem] border-2 border-seagreen px-14 py-3 text-sm font-semibold text-green hover:bg-green-300 hover:text-white"
              >
                Sign Up
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};