import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function MessageVerification() {
    const navigate = useNavigate();
    const [code, setCode] = useState<string>("");

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (code === "123456") {
            alert("Code verified successfully!");
            navigate("/dashboard");
        } else {
            alert("Invalid code. Please try again.");
        }
    };


    const buttonHover = {
        scale: 1.1,
        transition: { duration: 0.2 },
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
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
                        className="font-bold mb-6"
                        style={{ fontSize: "1.8rem", color: "#53d7af" }}
                    >
                        Follow the link in your email <br /> to reset your password
                    </h2>
                    <p className="text-sm text-gray-500 text-center mb-8">
                        Please enter the verification code sent to your contact.
                    </p>
                    <motion.form
                        action="#"
                        method="POST"
                        className="space-y-6"
                        onSubmit={handleFormSubmit}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            type="button"
                            onClick={() => alert(`Code Entered: ${code}`)} // Replace with desired action
                            className="block w-full py-4 text-white font-semibold text-center rounded-lg shadow-md  focus:outline-none"style={{backgroundColor:"#53d7af"}}
                        >
                            Enter your verification code
                        </motion.button>
                    </motion.form>
                </div>
            </div>
            {/* Right Section - Illustration */}
            <div
                className="flex flex-1 items-center justify-center p-4"style={{backgroundColor:"#53d7af"}}
            >
                <motion.img
                    src="3675555.jpg"
                    alt="Verification Illustration"
                    className="max-w-full h-auto rounded-lg shadow-lg md:w-3/4 w-2/3"
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