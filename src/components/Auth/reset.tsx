import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function ResetPassword() {

    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState<boolean>(false);

    const togglePasswordVisibility = (): void =>
        setPasswordVisible((prev) => !prev);
    const toggleConfirmPasswordVisibility = (): void =>
        setConfirmPasswordVisible((prev) => !prev);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        alert("Password reset successfully!");
    };

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
            className="flex items-center justify-center min-h-screen px-4"
            style={{ backgroundColor: "#53d7af" }}
        >
            <motion.div
                initial="hidden"
                animate="visible"
                variants={formVariants}
                className="bg-white rounded-lg shadow-lg p-8 md:p-16 max-w-lg w-full"
            >
                {/* Logo Section */}
                <div className="flex justify-center mb-6">
                    <img
                        src="/public/FitClave.png"
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
                <form onSubmit={handleFormSubmit} className="space-y-6">
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <label
                            htmlFor="reset-password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            New Password
                        </label>
                        <div className="relative">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="reset-password"
                                name="reset-password"
                                placeholder="Enter new password"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                            <span
                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <label
                            htmlFor="confirm-password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={confirmPasswordVisible ? "text" : "password"}
                                id="confirm-password"
                                name="confirm-password"
                                placeholder="Confirm new password"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                            <span
                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                            </span>
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
                </form>
            </motion.div>
        </div>
    );
}