import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";

export default function EmailVerification() {
    const navigate = useNavigate();
    const [code, setCode] = useState<string>("");

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (code === "123456") {
            alert("Email verified successfully!");
            navigate("/dashboard");
        } else {
            alert("Invalid verification code. Please try again.");
        }
    };

    const handleResendCode = () => {
        alert("A new verification code has been sent to your email.");
    };

    const buttonHover = {
        scale: 1.1,
        transition: { duration: 0.2 },
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-white-50">
            {/* Left Section - Form */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-1 justify-center items-center bg-white p-4"
            >
                <div className="w-full max-w-md p-6 rounded-lg bg-white shadow-lg">
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
                        Email Verification
                    </h2>
                    <h6 className="text-sm text-gray-500 text-center mb-9">
                        Enter the verification code sent to your email address.
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
                                id="code"
                                name="code"
                                type="text"
                                placeholder="Enter your verification code"
                                required
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                className="block w-full border-gray-300 py-4 pl-10 pr-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 sm:text-sm bg-gray-100 rounded-md"
                            />
                        </motion.div>
                        <motion.div whileHover={buttonHover} className="flex justify-center">
                            <button
                                type="submit"
                                className="rounded-full border-2 px-10 py-3 text-sm font-semibold text-white bg-green-500 hover:bg-green-600"
                                style={{ backgroundColor: "#53d7af" }}
                            >
                                VERIFY
                            </button>
                        </motion.div>
                        <motion.div whileHover={buttonHover} className="flex justify-center mt-4">
                            <button
                                type="button"
                                onClick={handleResendCode}
                                className="rounded-full border-2 border-gray-500 px-10 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-300"
                            >
                                RESEND CODE
                            </button>
                        </motion.div>
                    </motion.form>
                </div>
            </motion.div>
            {/* Right Section - Illustration */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-1 items-center justify-center bg-green-500 p-4"
                style={{ backgroundColor: "#53d7af" }}
            >
                <img
                    src="https://img.freepik.com/free-vector/verify-concept-illustration_114360-5475.jpg?w=740&t=st=1733186944~exp=1733190544~hmac=ef2db70f7a347e62e94649073c43b5aaae9ee8d2247a8c713f22be63c00bce26"
                    alt="Email Verification Illustration"
                    className="max-w-full h-auto rounded-lg shadow-lg md:w-3/4"
                />
            </motion.div>
        </div>
    );
}