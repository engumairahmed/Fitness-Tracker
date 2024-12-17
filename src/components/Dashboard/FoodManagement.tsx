import React, { useState } from 'react';
import UpdateFoodForm from './UpdateFoodForm'; // Adjust the path based on your file structure

const FoodManagement: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="p-6">
            <button
                onClick={handleOpenModal}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Open Update Form
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full relative">
                        {/* Close Button */}
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                        >
                            ✕
                        </button>

                        {/* UpdateFoodForm */}
                        <UpdateFoodForm />

                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodManagement;
