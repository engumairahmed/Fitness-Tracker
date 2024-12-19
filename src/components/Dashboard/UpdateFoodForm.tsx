import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateFoodForm = ({ }: { onClose: () => void }) => {
    const { state } = useLocation();
    const { meal, food, index } = state || {};
    const [updatedFood, setUpdatedFood] = useState({ ...food });
    const [newVitamin, setNewVitamin] = useState('');
    const [newMineral, setNewMineral] = useState('');

    const navigate = useNavigate();

    const handleUpdate = () => {
        // Validate input
        if (!updatedFood.name.trim()) {
            alert('Food name cannot be empty');
            return;
        }
        // Save changes and redirect back to the main page
        navigate('/dashboard/nutri-mon', { state: { updatedMeal: meal, updatedFood, foodIndex: index } });
    };

    const handleAddVitamin = () => {
        if (newVitamin.trim()) {
            setUpdatedFood((prev: { vitamins: any; }) => ({
                ...prev,
                vitamins: [...(prev.vitamins || []), newVitamin.trim()],
            }));
            setNewVitamin('');
        }
    };

    const handleAddMineral = () => {
        if (newMineral.trim()) {
            setUpdatedFood((prev: { minerals: any; }) => ({
                ...prev,
                minerals: [...(prev.minerals || []), newMineral.trim()],
            }));
            setNewMineral('');
        }
    };

    const handleRemoveVitamin = (vitamin: string) => {
        setUpdatedFood((prev: { vitamins: any[]; }) => ({
            ...prev,
            vitamins: prev.vitamins.filter((v: string) => v !== vitamin),
        }));
    };

    const handleRemoveMineral = (mineral: string) => {
        setUpdatedFood((prev: { minerals: any[]; }) => ({
            ...prev,
            minerals: prev.minerals.filter((m: string) => m !== mineral),
        }));
    };

    return (
        <div className="max-w-4xl mt-10 mx-auto bg-white p-6 rounded shadow">
            <h1 className="text-lg font-bold mb-4">Update Food</h1>

            {/* Prefilled form for editing */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-semibold mb-1">Food Name</label>
                    <input
                        type="text"
                        value={updatedFood.name}
                        onChange={(e) => setUpdatedFood({ ...updatedFood, name: e.target.value })}
                        className="border rounded px-2 py-1 w-full"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold mb-1">Calories</label>
                    <input
                        type="number"
                        value={updatedFood.calories}
                        onChange={(e) => setUpdatedFood({ ...updatedFood, calories: Number(e.target.value) })}
                        className="border rounded px-2 py-1 w-full"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold mb-1">Fats (g)</label>
                    <input
                        type="number"
                        value={updatedFood.fats}
                        onChange={(e) => setUpdatedFood({ ...updatedFood, fats: Number(e.target.value) })}
                        className="border rounded px-2 py-1 w-full"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold mb-1">Protein (g)</label>
                    <input
                        type="number"
                        value={updatedFood.protein}
                        onChange={(e) => setUpdatedFood({ ...updatedFood, protein: Number(e.target.value) })}
                        className="border rounded px-2 py-1 w-full"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold mb-1">Carbs (g)</label>
                    <input
                        type="number"
                        value={updatedFood.carbs}
                        onChange={(e) => setUpdatedFood({ ...updatedFood, carbs: Number(e.target.value) })}
                        className="border rounded px-2 py-1 w-full"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold mb-1">Sodium (mg)</label>
                    <input
                        type="number"
                        value={updatedFood.sodium}
                        onChange={(e) => setUpdatedFood({ ...updatedFood, sodium: Number(e.target.value) })}
                        className="border rounded px-2 py-1 w-full"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold mb-1">Sugar (g)</label>
                    <input
                        type="number"
                        value={updatedFood.sugar}
                        onChange={(e) => setUpdatedFood({ ...updatedFood, sugar: Number(e.target.value) })}
                        className="border rounded px-2 py-1 w-full"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold mb-1">Cholesterol (mg)</label>
                    <input
                        type="number"
                        value={updatedFood.cholesterol}
                        onChange={(e) => setUpdatedFood({ ...updatedFood, cholesterol: Number(e.target.value) })}
                        className="border rounded px-2 py-1 w-full"
                    />
                </div>
            </div>

            <div className="mt-4">
                <h2 className="text-md font-bold">Vitamins</h2>
                <div className="flex items-center gap-2 mt-2">
                    <input
                        type="text"
                        placeholder="Add Vitamin"
                        value={newVitamin}
                        onChange={(e) => setNewVitamin(e.target.value)}
                        className="border rounded px-2 py-1 w-full"
                    />
                    <button
                        onClick={handleAddVitamin}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add
                    </button>
                </div>
                <ul className="mt-2">
                    {updatedFood.vitamins?.map((vitamin: string, idx: number) => (
                        <li key={idx} className="flex justify-between items-center mb-1">
                            <span>{vitamin}</span>
                            <button
                                onClick={() => handleRemoveVitamin(vitamin)}
                                className="text-red-500 hover:underline">
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <h2 className="text-md font-bold">Minerals</h2>
                <div className="flex items-center gap-2 mt-2">
                    <input
                        type="text"
                        placeholder="Add Mineral"
                        value={newMineral}
                        onChange={(e) => setNewMineral(e.target.value)}
                        className="border rounded px-2 py-1 w-full"/>
                    <button
                        onClick={handleAddMineral}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Add
                    </button>
                </div>
                <ul className="mt-2">
                    {updatedFood.minerals?.map((mineral: string, idx: number) => (
                        <li key={idx} className="flex justify-between items-center mb-1">
                            <span>{mineral}</span>
                            <button
                                onClick={() => handleRemoveMineral(mineral)}
                                className="text-red-500 hover:underline">
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <button
                onClick={handleUpdate}
                className="bg-green-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-green-600 transition-all"
            >
                Save Changes
            </button>
        </div>
    );
};

export default UpdateFoodForm;
