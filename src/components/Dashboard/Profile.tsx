import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { FaCloudUploadAlt } from "react-icons/fa";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    contactNumber: "01234567890",
    gender: "Male",
    dateOfBirth: "1990-01-01",
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("Full name is required")
      .matches(/^[a-zA-Z\s]+$/, "Full name must only contain letters and spaces")
      .min(2, "Full name must be at least 2 characters long")
      .max(50, "Full name cannot exceed 50 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    contactNumber: Yup.string()
      .matches(/^[0-9]{11}$/, "Contact number must be 11 digits")
      .required("Contact number is required"),
    dateOfBirth: Yup.date()
      .required("Date of birth is required")
      .max(new Date(), "Date of birth cannot be in the future"),
    gender: Yup.string()
      .required("Gender is required")
      .oneOf(["Male", "Female"], "Invalid gender"),
  });

  const formik = useFormik({
    initialValues: userData,
    validationSchema,
    onSubmit: (values) => {
      console.log("Profile updated:", values);
      setUserData(values); 
      setIsEditing(true); 
    },
  });

  useEffect(() => {
    formik.setValues(userData);
  }, [userData]);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-12">
      {/* Header Section */}
      <div className="bg-[#31C48D] p-6 text-white">
        <h1 className="text-3xl font-bold">User  Profile</h1>
        <p className="text-sm">Manage and update your personal details below.</p>
      </div>

  
      <div className="p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start">
   
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center border-4 border-[#31C48D]">
              <FaCloudUploadAlt className="w-10 h-10 text-[#67C3A2]" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Upload New Picture</label>
              <input
                type="file"
                className="mt-2 w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#31C48D] file:text-white hover:file:bg-[#67C3A2]"
              />
            </div>
          </div>

    
          <div className="flex-1">
            <form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={!isEditing}
                    className={`mt-2 w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#31C48D] focus:outline-none ${
                      formik.errors.fullName && formik.touched.fullName ? "border-red-500" : ""
                    }`}
                  />
                  {formik.errors.fullName && formik.touched.fullName && (
                 <p className="text-red-500 text-sm mt-1">{formik.errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={!isEditing}
                    className={`mt-2 w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#31C48D] focus:outline-none ${
                      formik.errors.email && formik.touched.email ? "border-red-500" : ""
                    }`}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                  )}
                </div>

                {/* Contact Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                  <input
                    type="text"
                    name="contactNumber"
                    value={formik.values.contactNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={!isEditing}
                    className={`mt-2 w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#31C48D] focus:outline-none ${
                      formik.errors.contactNumber && formik.touched.contactNumber ? "border-red-500" : ""
                    }`}
                  />
                  {formik.errors.contactNumber && formik.touched.contactNumber && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.contactNumber}</p>
                  )}
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Gender</label>
                  <div className="mt-2 space-x-4">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formik.values.gender === "Male"}
                        onChange={formik.handleChange}
                        disabled={!isEditing}
                        className="mr-2"
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formik.values.gender === "Female"}
                        onChange={formik.handleChange}
                        disabled={!isEditing}
                        className="mr-2"
                      />
                      Female
                    </label>
                  </div>
                  {formik.errors.gender && formik.touched.gender && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.gender}</p>
                  )}
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formik.values.dateOfBirth}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={!isEditing}
                    className={`mt-2 w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#31C48D] focus:outline-none ${
                      formik.errors.dateOfBirth && formik.touched.dateOfBirth ? "border-red-500" : ""
                    }`}
                  />
                  {formik.errors.dateOfBirth && formik.touched.dateOfBirth && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.dateOfBirth}</p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center">
                {isEditing ? (
                  <>
                    <button
                      type="submit"
                      className="bg-[#31C48D] text-white py-2 px-4 rounded-lg hover:bg-[#67C3A2] transition duration-200"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={toggleEdit}
                      className="ml-4 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={toggleEdit}
                    className="bg-[#31C48D] text-white py-2 px-4 rounded-lg hover:bg-[#67C3A2] transition duration-200"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
