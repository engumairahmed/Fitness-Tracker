import { useFormik } from 'formik';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import * as Yup from "yup";
import Cookies from 'js-cookie';
import axios from 'axios';

const SettingsComponent = () => {
    const serverURL = import.meta.env.VITE_SERVER_URL;

    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const validationSchema = Yup.object().shape({
        oldPassword: Yup.string().required("Old Password is required"),
        newPassword: Yup.string()
            .required("New Password is required")
            .min(8, "Password must be at least 8 characters"),
        confirmPassword: Yup.string()
            .required("Confirm Password is required")
            .oneOf([Yup.ref("newPassword")], "Passwords must match"),
    });

    const formik = useFormik({
        initialValues: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                await axios.put(`${serverURL}/auth/update-password`, values, {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('authToken')}`,
                    },
                });
                toast.success('Password updated successfully', { autoClose: 2000 });
            } catch (error) {
                toast.error('Failed to update password', { autoClose: 2000 });
            }
        },
    });

    return (
        <div className="lg:max-w-screen-md sm:max-w-screen-sm md:max-w-screen-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-8 md:mt-12">
            {/* Header Section */}
            <div className="bg-[#31C48D] p-6 text-white text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold">Change Password</h1>
                <p className="text-sm mt-1">Manage and update your credentials below.</p>
            </div>

            {/* Form Section */}
            <div className="p-6">
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
                    {/* Password Fields Container */}
                    <div className="flex flex-col gap-4 w-full">
                        {/* Old Password */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700">Old Password</label>
                            <input
                                type={showOldPassword ? "text" : "password"}
                                name="oldPassword"
                                value={formik.values.oldPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`mt-2 w-full p-2 pr-10 border rounded-lg focus:ring-2 focus:ring-[#31C48D] focus:outline-none `}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-600"
                                onClick={() => setShowOldPassword(!showOldPassword)}
                            >
                                {showOldPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            {formik.errors.oldPassword && formik.touched.oldPassword && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.oldPassword}</p>
                            )}
                        </div>

                        {/* New Password */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700">New Password</label>
                            <input
                                type={showNewPassword ? "text" : "password"}
                                name="newPassword"
                                value={formik.values.newPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`mt-2 w-full p-2 pr-10 border rounded-lg focus:ring-2 focus:ring-[#31C48D] focus:outline-none `}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-600"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                            >
                                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            {formik.errors.newPassword && formik.touched.newPassword && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.newPassword}</p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`mt-2 w-full p-2 pr-10 border rounded-lg focus:ring-2 focus:ring-[#31C48D] focus:outline-none`}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-600"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>
                            )}
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-center md:justify-start">
                        <button
                            type="submit"
                            className="bg-[#31C48D] text-white py-2 px-6 rounded-lg hover:bg-[#67C3A2] transition duration-200"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SettingsComponent;
