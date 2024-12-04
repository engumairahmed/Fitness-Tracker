import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";

export const ForgotPassword = () => {
    const navigate = useNavigate();

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Password reset link sent to your email.");
    };

    const handleBackToLogin = () => {
        navigate("/login");
    };

    const buttonHover = {
        scale: 1.1,
        transition: { duration: 0.2 },
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Right Section - Image */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-1 items-center justify-center bg-green-300"
            >
                <img
                    src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg?t=st=1733185793~exp=1733189393~hmac=ec674621672aa2a887d2a349c2cd1aae53375e4212fefa681c86c55d91ea7637&w=740"
                    alt="Forgot Password Illustration"
                    className="max-w-full h-auto rounded-lg shadow-lg md:w-3/4 w-2/3"
                />
            </motion.div>

            {/* Left Section - Form */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-1 justify-center items-center bg-white"
            >
                <div className="w-full max-w-md p-6 rounded-lg">
                    <div className="flex justify-center mb-8">
                        <img
                            src="/public/FitClave.png"
                            alt="Logo"
                            className="h-14 w-auto"
                        />
                    </div>
                    <h2
                        className="text-center font-bold text-3xl md:text-4xl mb-6"
                        style={{ color: "#67C3A2" }}
                    >
                        Forgot Password
                    </h2>
                    <h6 className="text-sm text-gray-500 text-center mb-9">
                        Enter your email address below, and we will send you a link to reset your password.
                    </h6>
                    <motion.form
                        action="#"
                        method="POST"
                        className="space-y-6"
                        onSubmit={handleFormSubmit}
                    >
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
                        <motion.div whileHover={buttonHover} className="flex justify-center">
                            <button
                                type="submit"
                                className="rounded-full border-2 px-10 py-3 text-sm font-semibold text-white bg-green-500 hover:bg-green-600"
                                style={{ backgroundColor: "#53d7af" }}
                            >
                                SUBMIT
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
                    </motion.form>
                </div>
            </motion.div>
        </div>
    );
};

