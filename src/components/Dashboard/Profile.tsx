import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie"
import { toast } from "react-toastify";
import { UserProfile } from "../../utils/Types";

declare global {
  interface Window {
    cloudinary: any; // Declare cloudinary if it's not defined
  }
}

const Profile = () => {

  const serverURL = import.meta.env.VITE_SERVER_URL;
  const cloudName = import.meta.env.VITE_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState<UserProfile>({
    name: "",
    email: "",
    contact: "",
    gender: "Male",
    dob: "",
    picture: "",
  });

  const [loaded, setLoaded] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const toggleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsEditing(!isEditing);
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Full name is required")
      .matches(/^[a-zA-Z\s]+$/, "Full name must only contain letters and spaces")
      .min(2, "Full name must be at least 2 characters long")
      .max(50, "Full name cannot exceed 50 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    contact: Yup.string()
      .matches(/^[0-9]{11}$/, "Contact number must be 11 digits"),
    dob: Yup.date()
      .max(new Date(), "Date of birth cannot be in the future"),
    gender: Yup.string()
      .oneOf(["Male", "Female"], "Invalid gender"),
  });

  const formik = useFormik<UserProfile>({
    initialValues: userData,
    validationSchema,
    onSubmit: async (values) => {
      console.log("Profile updated:", values);
      setUserData(values);
      setIsEditing(false);
      await axios.put(`${serverURL}/profile/update`,
        {
          values: values,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('authToken')}`,
          },
        }
      )
        .then(()=>{
          toast.success('Profile updated successfully', { autoClose: 2000 })
        })
        .catch((error)=>{
          toast.error('Failed to update profile' + error, { autoClose: 2000 })
        })
    },
  });

  const getUserData = async () => {
    const token = Cookies.get('authToken')
    const response = await axios
      .get(`${serverURL}/profile/info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { name, email, contact, gender, dob, picture } = response.data.user;

        setUserData({
          name: name,
          email: email,
          contact: contact || "",
          gender: gender || "undefined",
          dob: dob || "",
          picture: picture || ""
        });

        formik.setValues({
          name: name,
          email: email,
          contact: contact || "",
          gender: gender || "undefined",
          dob: dob || ""
        });

        setImagePreview(picture);

      })
      .catch((error) => {
        toast.error("Error fetching profile info", error)
      })
  }

  const handleImageUpload = async (imageURL:string) =>{
      await axios.put(
        `${serverURL}/profile/image`,
        {
          imageURL: imageURL,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('authToken')}`,
          },
        }
      )
      .then(()=>{
        toast.success("Image uploaded successfully");
      })
      .catch((error)=>{
        toast.error("Error uploading image", error)
      })
  }

  const processResults = (error:any, result:any) => {
    if (error) {
      console.log("error", error);
      toast.error("Error uploading image", error)
    }
    if (result && result.event === "success") {
      setImagePreview(result.info.secure_url);
      handleImageUpload(result.info.secure_url)
    }
  };

  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        cropping: true,
        sources: ["local"],
      },
      processResults
    );
  };

  useEffect(() => {
    getUserData();
    const cldScript = document.getElementById("cloudinaryUploadWidgetScript");
      // if window is defined and script is not loaded and not in window add script
      if (typeof window !== "undefined" && !loaded && !cldScript) {
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "cloudinaryUploadWidgetScript");
        script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      }
  }, [loaded]);

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

              {imagePreview ? (
                <img
                  src={`${imagePreview}`}
                  alt="Profile"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full"
                />
              ) : (
                <FaCloudUploadAlt className="w-10 h-10 text-[#67C3A2]" />
              )}
            </div>
            <div className="mt-4">
              <p className="block text-sm text-center font-medium text-gray-700">Upload New Picture</p>
              <button
                type="button"
                onClick={uploadWidget}
                className=" mt-2 w-full text-sm font-semibold py-2 px-4 rounded-lg border border-green-200 bg-[#31C48D] text-white shadow-md hover:bg-[#67C3A2] hover:shadow-lg  transition-all"
              >Upload Image</button>
            </div>
          </div>

          <form onSubmit={formik.handleSubmit}>

            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={true}
                    className={`mt-2 w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#31C48D] focus:outline-none ${formik.errors.name && formik.touched.name ? "border-red-500" : ""
                      }`}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
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
                    disabled={true}
                    className={`mt-2 w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#31C48D] focus:outline-none ${formik.errors.email && formik.touched.email ? "border-red-500" : ""
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
                    name="contact"
                    value={formik.values.contact}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={!isEditing}
                    className={`mt-2 w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#31C48D] focus:outline-none ${formik.errors.contact && formik.touched.contact ? "border-red-500" : ""
                      }`}
                  />
                  {formik.errors.contact && formik.touched.contact && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.contact}</p>
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
                    name="dob"
                    value={formik.values.dob}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={!isEditing}
                    className={`mt-2 w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#31C48D] focus:outline-none ${formik.errors.dob && formik.touched.dob ? "border-red-500" : ""
                      }`}
                  />
                  {formik.errors.dob && formik.touched.dob && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.dob}</p>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
