import { useEffect } from "react";
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
import Cookies from "js-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { GoogleUserProfile } from "../../utils/Types";
import { useGoogleLogin } from "@react-oauth/google";

export const SignUp = () => {

  const URL = import.meta.env.VITE_SERVER_URL;

  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {

      console.log(codeResponse)

      try {
        const response = await axios.get<GoogleUserProfile>('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${codeResponse.access_token}`,
          },
        });
  
        const userProfile: GoogleUserProfile = response.data;
        console.log('User Profile:', userProfile);
        handleGoogleLogin(userProfile)
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    },
    onError: () => console.log("Login Failed"),
  });

  const handleGoogleLogin = async (codeResponse:GoogleUserProfile) => {
    try {
      const { name, email, picture } = codeResponse;
      console.log(codeResponse)
      const response = await axios.post(`${URL}auth/register-with-google`, { name, email, password: "dummyPassword", role: "user", picture })
        .then(
          (res) => {            
            console.log(res)
            Cookies.set("authToken", res.data.token, { expires: 1 });
            toast.success("Google login successful!");
            navigate("/dashboard");
          }
        )
        .catch(
          (err)=>{
            console.log(err);
            
            toast.error("Google login failed. Please try again.", { theme: "dark" });
          }
        );

    } catch (error) {
      handleError(error);
    }
  };

 const handleError = (error: unknown): void => {
  if (axios.isAxiosError(error) && error.response) {
    formik.setErrors({
      ...formik.errors,
      email: error.response.data.msg || "An error occurred",
    });
  } else if (axios.isAxiosError(error) && error.request) {
    toast.error("No response received from the server.", { theme: "dark" });
  } else {
    toast.error("Something went wrong.", { theme: "dark" });
  }
};

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
      axios
      .post(`${URL}auth/register`, values)
      .then(() => {
        toast.success("Success Notification !");
        setTimeout(() => {
          navigate("/email-verification");
        }, 1000);
      })
      .catch((error) => {
        if (error.response) {
          formik.setErrors({
            ...formik.errors,
            email: error.response.data.msg,
          });
        } else if (error.request) {
          toast.error("No response received from the server.", {
            theme: "dark",
          });
        } else {
          toast.error("Something went wrong.", { theme: "dark" });
        }
      });
    },
  });

  const buttonHover = {
    scale: 1.1,
    transition: { duration: 0.3 },
  };

  useEffect(()=>{
    if (Cookies.get("authToken")) {
      navigate("/dashboard");
    }
  })

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
            className="rounded-[2.375rem] border-2 border-seagreen bg-white text-green-300 px-12 py-2 text-sm font-semibold text-white hover:bg-white hover:text-green-300"
            style={{ marginTop: 40 }}
          >
            Sign In
          </motion.button>
        </motion.div>      
      </div>

        <ToastContainer position="top-left"/>
      {/* Form Section */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 m-0">
        <div className="flex justify-center mb-8">
          <img
            src="/FitClave.png"
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
            <div >
              <Link className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-300 transition-all duration-500 hover:bg-[#0564ff]" to={"https://www.facebook.com"}>
                <BiLogoFacebook className="h-6 w-6 text-black-500"/>
              </Link>
            </div>
            <div>
              <button className="flex items-center justify-center h-12 w-12 rounded-full border transition-all duration-500 border-gray-300 hover:bg-yellow-300" onClick={()=>googleLogin()}>
                <IoLogoGoogleplus className="h-6 w-6 text-black-500" />
              </button>
            </div>
            <div className="flex items-center justify-center h-12 w-12 rounded-full border transition-all duration-500 border-gray-300 hover:bg-[#0b66be]">
              <Link to={"https://www.linkedin.com"}>
                <FaLinkedinIn className="h-5 w-5 text-black-500" />
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