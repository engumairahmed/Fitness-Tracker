import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Field, Form, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function ResetPassword() {

    const URL = import.meta.env.VITE_SERVER_URL;

    const navigate = useNavigate();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const { token } = useParams();

    const togglePasswordVisibility = () => setPasswordVisible((prev) => !prev);
    const toggleConfirmPasswordVisibility = () =>
        setConfirmPasswordVisible((prev) => !prev);

    const validationSchema = Yup.object({
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), ], "Passwords must match")
            .required("Confirm Password is required"),
    });

    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const buttonHover = {
        scale: 1.1,
        transition: { duration: 0.2 },
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen px-4 bg-[#67C3A2]"
        >
            <motion.div
                initial="hidden"
                animate="visible"
                variants={formVariants}
                className="bg-white rounded-lg shadow-lg p-8 md:p-16 max-w-lg w-full"
            >
                <div className="flex justify-center mb-6">
                    <img
                        src="/FitClave.png"
                        alt="Logo"
                        className="h-14 w-auto"
                    />
                </div>
                <h2
                    className="text-center font-bold mb-6 text-xl md:text-2xl"
                    style={{ lineHeight: "2.5rem", color: "#53d7af" }}
                >
                    Reset Your Password!
                </h2>
                <Formik
                    initialValues={{
                        password: "",
                        confirmPassword: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values) => {
                        await axios.put(`${URL}/auth/reset-password/${token}`, values)
                            .then(()=>{
                                toast.success("Password updated successfully");
                                setTimeout(() => {
                                    navigate("/login");
                                  }, 1000);
                            })
                            .catch((error)=>{
                                if (error.request) {
                                  toast.error('No response received from the server.', { theme: 'dark' });
                                } else {
                                  toast.error('Something went wrong.', { theme: 'dark' });
                                }
                            })
                    }}
                >
                    {({ touched, errors }) => (
                        <Form className="space-y-6">
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    New Password
                                </label>
                                <div className="relative">
                                    <Field
                                        type={passwordVisible ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        placeholder="Enter new password"
                                        className={`block w-full border-gray-300 py-4 pl-10 pr-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm bg-gray-100 ${
                                            touched.password && errors.password
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                    />
                                    <span
                                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <Field
                                        type={
                                            confirmPasswordVisible
                                                ? "text"
                                                : "password"
                                        }
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Confirm new password"
                                        className={`block w-full border-gray-300 py-4 pl-10 pr-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm bg-gray-100 ${
                                            touched.confirmPassword &&
                                            errors.confirmPassword
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                    />
                                    <span
                                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                        onClick={toggleConfirmPasswordVisibility}
                                    >
                                        {confirmPasswordVisible ? (
                                            <FaEyeSlash />
                                        ) : (
                                            <FaEye />
                                        )}
                                    </span>
                                    <ErrorMessage
                                        name="confirmPassword"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                whileHover={buttonHover}
                                className="flex justify-center"
                            >
                                <button
                                    type="submit"
                                    className="bg-[#53d7af] text-white font-bold py-3 rounded-[2.5rem] hover:bg-green-700"
                                    style={{ width: "50%" }}
                                >
                                    Reset Password
                                </button>
                            </motion.div>
                        </Form>
                    )}
                </Formik>
            </motion.div>
            <ToastContainer/>
        </div>
    );
}