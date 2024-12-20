import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

export default function EmailVerification() {
    
    const URL = import.meta.env.VITE_SERVER_URL;

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    // Validation Schema using Yup
    const validationSchema = Yup.object({
        email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    });

    // Formik setup
    const formik = useFormik({
        initialValues: { email: "" },
        validationSchema,
        onSubmit: async (values) => {
            setIsLoading(true);            
            await axios.post(`${URL}/auth/new-verification-link`, values)
                .then(
                    (res) => {
                        toast.success('Verification link has been sent to your email', { autoClose: 2000 })
                        console.log(res)
                        setIsLoading(false);
                    }
                )
                .catch(
                    err => {
                        console.error(err);
                        if (err.response && err.response.data) {
                            const serverErrors = err.response.data.errors || {
                                email: err.response.data.msg || "An error occurred",
                            };
                            formik.setErrors(serverErrors);
                        } else {
                            toast.error("Something went wrong. Please try again.");
                        }
                        setIsLoading(false);
                    }
                )
        },
    });

   

    const buttonHover = {
        scale: 1.1,
        transition: { duration: 0.2 },
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-white-50">
            {/* Left Section - Form */}
            <div className="flex flex-1 justify-center items-center bg-white p-4">
                <div className="w-full max-w-md p-6 rounded-lg bg-white shadow-lg">
                    <div className="flex justify-center mb-8">
                        <img
                            src="/FitClave.png"
                            alt="Logo"
                            className="h-14 w-auto"
                        />
                    </div>
                    <h2
                        className="text-center font-bold text-3xl md:text-4xl mb-6"
                        style={{ color: "#67C3A2" }}
                    >
                        Email Verification
                    </h2>
                    <h6 className="text-sm text-gray-500 text-center mb-9">
                    Please check your email for a verification link. Click the link to verify your account and continue.
                    </h6>
                    <motion.form
                        className="space-y-6"
                        onSubmit={formik.handleSubmit}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} className="relative mt-2">
                            <AiOutlineMail className="absolute inset-y-4 left-3 flex items-center text-gray-500 text-lg" />
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Enter your Email"
                                className={`block w-full border-gray-300 py-4 pl-10 pr-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm bg-gray-100 ${
                                    formik.touched.email && formik.errors.email
                                        ? "border-red-500"
                                        : ""
                                }`}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <p className="text-red-500 text-sm mt-2">
                                    {formik.errors.email}
                                </p>
                            ) : null}
                        </motion.div>
                        <motion.div whileHover={buttonHover} className="flex justify-center">
                            <button
                                type="submit"
                                className="rounded-full border-2 px-10 py-3 text-sm font-semibold text-white bg-green-500 hover:bg-green-600"
                                style={{ backgroundColor: "#53d7af" }}
                            >
                                 {isLoading ? <></> : "Resend Verfication Email"}
                            </button>
                        </motion.div>
                        <h6 className="text-sm text-gray-500 text-center mb-9">Didn't receive the email? Check your spam folder or try again.</h6>
                    </motion.form>
                </div>
            </div>
            {/* Right Section - Illustration */}
            <div
                className="flex flex-1 items-center justify-center bg-green-300 p-4"
                style={{ backgroundColor: "#53d7af" 
                    
                }}
            >
                <motion.img
                    src="Fingerprint-bro.png"
                    alt="Forgot Password Illustration"
                    className="max-w-full h-auto rounded-lg "
                    animate={{
                        y: [0, -10, 0], // Floating effect
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                />
            </div>
        </div>
    );
}