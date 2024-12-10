import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLock } from "react-icons/bs";

export const Login = () => {
    const navigate = useNavigate();

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

    const handleFormSubmit = (values: { email: string; password: string }) => {
        console.log("Form Submitted", values);
        navigate("/faq");
    };

    const handleForgotPassword = () => {
        navigate("/forget-password");
    };

    const handleFormSignIn = () => {
        navigate("/sign");
    };

    const buttonHover = {
        scale: 1.1,
        transition: { duration: 0.2 },
    };

    return (
        <div className="flex min-h-screen flex-col lg:flex-row justify-center bg-white-500 m-0">
            {/* Form Section */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 m-0 ">
                <div className="flex justify-center mb-8 ">
                    <img
                        src="/FitClave.png"
                        alt="Logo"
                        className="h-14 w-auto"
                    />
                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2
                        className="text-center font-bold tracking-tight text-gray-900"
                        style={{ fontSize: "2.5rem", lineHeight: "2rem", color: "#67C3A2" }}
                    >
                        Sign In to FitClave
                    </h2>
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mt-6 flex justify-center gap-4"
                    >
                        <div className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-300 hover:bg-blue-500">
                            <Link to={"https://www.facebook.com"}><BiLogoFacebook className="h-6 w-6 text-black-600" /></Link>
                        </div>
                        <div className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-300 hover:bg-yellow-300">
                            <Link to={"https://www.google.com"}><IoLogoGoogleplus className="h-6 w-6 text-black-600" /></Link>
                        </div>
                        <div className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-300 hover:bg-blue-300">
                            <Link to={"https://www.linkedin.com"}><FaLinkedinIn className="h-6 w-6 text-black-500" /></Link>
                        </div>
                    </motion.div>
                </div>
                <h5 className="flex items-center justify-center" style={{ paddingTop: 35 }}>
                    Use your email for Registration!
                </h5>
                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form className="space-y-6">
                                <motion.div whileHover={{ scale: 1.05 }} className="relative mt-2">
                                    <AiOutlineMail className="absolute inset-y-4 left-3 flex items-center text-gray-500 text-lg" />
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className={`block w-full border-gray-300 py-4 pl-10 pr-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm bg-gray-100 ${
                                            errors.email && touched.email ? "border-red-500" : ""
                                        }`}
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} className="relative mt-2">
                                    <BsPersonLock className="absolute inset-y-4 left-3 flex items-center text-gray-500 text-lg" />
                                    <Field
                                        name="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        className={`block w-full border-gray-300 py-4 pl-10 pr-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm bg-gray-100 ${
                                            errors.password && touched.password ? "border-red-500" : ""
                                        }`}
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </motion.div>
                                <div className="text-center mt-4 bg-white border-gray-300 rounded-md">
                                    <button
                                        type="button"
                                        onClick={handleForgotPassword}
                                        className="text-sm font-medium text-indigo-600 hover:underline"
                                        style={{ color: "black" }}
                                    >
                                        FORGET YOUR PASSWORD?
                                    </button>
                                </div>
                                <motion.div
                                    whileHover={buttonHover}
                                    className="flex justify-center"
                                >
                                    <button
                                        type="submit"
                                        className="rounded-[2.375rem] border-2 border-seagreen px-14 py-3 text-sm font-semibold text-green hover:bg-green-300 hover:text-white"
                                        style={{ marginLeft: 30 }}
                                    >
                                        SIGN IN
                                    </button>
                                </motion.div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            {/* Image Section */}
            <div
                className="relative lg:w-2/5 flex flex-col justify-center items-center p-6 rounded-lg text-center space-y-4 bg-cover bg-center m-0 "
                style={{
                    backgroundImage: "url('Tablet login-bro.png')",
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
                    <h1 className="text-5xl font-bold text-white">Hello, Friends!</h1>
                    <p className="text-lg text-white">
                        Enter your personal details <br /> and start journey with us
                    </p>
                    <motion.button
                        whileHover={buttonHover}
                        onClick={handleFormSignIn}
                        className="rounded-[2.375rem] border-2 border-seagreen px-12 py-2 text-sm font-semibold text-white hover:bg-white hover:text-green-300"
                        style={{ marginTop: 40 }}
                    >
                        SIGN UP
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};