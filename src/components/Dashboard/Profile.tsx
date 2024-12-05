import React, { useState } from 'react'

const Profile = () => {


    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        profilePicture: "https://via.placeholder.com/150",
        fullName: "Palwasha",
        email: "palwashaqasim@gmail.com",
        contactNumber: "0123456789",
        gender: "female",
        dateOfBirth: "1990-01-01",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };
    return (
        <>

            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Header Section */}
                <div className="bg-[#31C48D] p-6 text-white">
                    <h1 className="text-3xl font-bold">User Profile</h1>
                    <p className="text-sm">Manage and update your personal details below.</p>
                </div>

                {/* Profile Content */}
                <div className="p-6">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        {/* Profile Picture */}
                        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                            <img
                                src={profile.profilePicture}
                                alt="Profile"
                                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#31C48D]"
                            />
                            {isEditing && (
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Upload New Picture
                                    </label>
                                    <input
                                        type="file"
                                        className="mt-2 w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#31C48D] file:text-white hover:file:bg-[#67C3A2]"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Profile Details */}
                        <div className="flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { label: "Full Name", name: "fullName", value: profile.fullName },
                                    { label: "Email Address", name: "email", value: profile.email },
                                    {
                                        label: "Contact Number",
                                        name: "contactNumber",
                                        value: profile.contactNumber,
                                    },
                                    { label: "Gender", name: "gender", value: profile.gender },
                                    {
                                        label: "Date of Birth",
                                        name: "dateOfBirth",
                                        value: profile.dateOfBirth,
                                    },
                                ].map((field, index) => (
                                    <div key={index}>
                                        <label className="block text-sm font-medium text-gray-700">
                                            {field.label}
                                        </label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name={field.name}
                                                value={field.value}
                                                onChange={handleInputChange}
                                                className="mt-2 w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#31C48D] focus:outline-none"
                                            />
                                        ) : (
                                            <p className="mt-2 text-gray-800">{field.value}</p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-6 flex items-center">
                                {isEditing ? (
                                    <>
                                        <button
                                            onClick={toggleEdit}
                                            className="bg-[#31C48D] text-white px-6 py-2 rounded-lg hover:bg-[#67C3A2] transition"
                                        >
                                            Save Changes
                                        </button>
                                        <button
                                            onClick={() => setIsEditing(false)}
                                            className="ml-4 bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={toggleEdit}
                                        className="bg-[#31C48D] text-white px-6 py-2 rounded-lg hover:bg-[#67C3A2] transition"
                                    >
                                        Edit Profile
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </>

    )
}

export default Profile
