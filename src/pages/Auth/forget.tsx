import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie"
import axios from "axios";
import { toast } from "react-toastify";

export const ForgotPassword = () => {
    const URL = import.meta.env.VITE_SERVER_URL;
    const navigate = useNavigate();

    // Validation Schema
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
    });

    // Handle form submission
    const handleFormSubmit = async (values: { email: string }) => {
        // alert(`Password reset link sent to: ${values.email}`);
        await axios.post(`${URL}/auth/forgot-password`,values)
        .then((response)=>{
            toast.success(`Password reset link sent to: ${response.data.msg}`)
        })
        .catch((error)=>{
            toast.error(error.msg)
        })
    };

    const handleBackToLogin = () => {
        navigate("/login");
    };

    const buttonHover = {
        scale: 1.1,
        transition: { duration: 0.2 },
    };

    useEffect(() => {
        if (Cookies.get("authToken")) {
            navigate("/dashboard");
        }
    })

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Right Section - Image */}
            <div className="flex flex-1 items-center justify-center bg-green-300">
                <img
                    src="Reset password.gif"
                    alt="Forgot Password Illustration"
                    className="max-w-full h-auto rounded-lg shadow-lg md:w-3/4 w-2/3"
                   
                />
            </div>

            {/* Left Section - Form */}
            <div className="flex flex-1 justify-center items-center bg-white p-4">
                <div className="w-full max-w-md p-6 rounded-lg bg-gray shadow-lg">
                    <div className="flex justify-center mb-8">
                        <img
                            src="/FitClave.png"
                            alt="Logo"
                            className="h-14 w-auto" />
                    </div>
                    <h2
                        className="text-center font-bold text-3xl md:text-4xl mb-6"
                        style={{ color: "#67C3A2" }}>
                        Forgot Password
                    </h2>
                    <h6 className="text-sm text-gray-500 text-center mb-9">
                        Enter your email address below, and we will send you a link to reset your password.
                    </h6>

                    <Formik
                        initialValues={{ email: "" }}
                        validationSchema={validationSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-6">
                                <motion.div whileHover={{ scale: 1.05 }} className="relative mt-2">
                                    <AiOutlineMail className="absolute inset-y-4 left-3 flex items-center text-gray-500 text-lg" />
                                    <Field
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="block w-full border-gray-300 py-4 pl-10 pr-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm bg-gray-100"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </motion.div>
                                <motion.div whileHover={buttonHover} className="flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="rounded-full border-2 px-10 py-3 text-sm font-semibold text-white bg-green-500 hover:bg-green-600"
                                        style={{ backgroundColor: "#53d7af" }}
                                    >
                                        {isSubmitting ? "Submitting..." : "SUBMIT"}
                                    </button>
                                </motion.div>
                                <motion.div whileHover={buttonHover} className="flex justify-center mt-4">
                                    <button
                                        type="button"
                                        onClick={handleBackToLogin}
                                        className="rounded-full border-2 border-gray-500 px-10 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-300"
                                    >
                                        BACK TO LOGIN
                                    </button>
                                </motion.div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};