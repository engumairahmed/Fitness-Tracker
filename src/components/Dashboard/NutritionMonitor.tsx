import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BreadCrumb from './BreadCrumb';
import { Nutrition } from '../Interface/Nutrition';

interface Nutrition {
  calories: string;
  protein: string;
  carbs: string;
  fats: string;
  fibers: string;
  vitamins: string;
}

const NutritionMonitor = () => {
  const [nutritionData, setNutritionData] = useState<Nutrition[]>([]);
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fats, setFats] = useState('');
  const [fibers, setFibers] = useState('');
  const [vitamins, setVitamins] = useState('');

  // Fetch data from the backend (MongoDB via Express)
  useEffect(() => {
    axios.get('http://localhost:5000/api/nutrition')
      .then(response => setNutritionData(response.data))
      .catch(error => console.error("Error fetching nutrition data:", error));
  }, []);

  // Submit the form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNutrition = { calories, protein, carbs, fats, fibers, vitamins };

    axios.post('http://localhost:5000/api/nutrition', newNutrition)
      .then(response => {
        setNutritionData([nutritionData, response.data]);
        setCalories('');
        setProtein('');
        setCarbs('');
        setFats('');
        setFibers('');
        setVitamins('');
      })
      .catch(error => console.error("Error submitting nutrition data:", error));
  };

  return (
    <>
      <BreadCrumb name="— Nutrition Monitor" />

      {/* Nutrition Monitor Container (Aligned to the left side) */}
      <div className="container mt-8 flex justify-start w-1/2">
        {/* Nutrition Form */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
          <h2 className="text-2xl font-bold mb-4">Track Your Nutrition</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Stack inputs vertically */}
            <div className="flex flex-col">
              <label className="font-semibold">Calories</label>
              <input
                type="number"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                className="p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Protein</label>
              <input
                type="number"
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                className="p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Carbs</label>
              <input
                type="number"
                value={carbs}
                onChange={(e) => setCarbs(e.target.value)}
                className="p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Fats</label>
              <input
                type="number"
                value={fats}
                onChange={(e) => setFats(e.target.value)}
                className="p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Fibers</label>
              <input
                type="number"
                value={fibers}
                onChange={(e) => setFibers(e.target.value)}
                className="p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Vitamins</label>
              <input
                type="text"
                value={vitamins}
                onChange={(e) => setVitamins(e.target.value)}
                className="p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#31C48D] text-white py-3 px-2 rounded-[15px] w-40 ml-0"
            >
              Add Nutrition Data
            </button>
          </form>
        </div>
      </div>

      {/* Display Nutrition Data */}
      <div className="container mt-10 w-1/2">
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Your Nutrition Insights</h2>
          <div className="mt-6">
            {nutritionData.length === 0 ? (
              <p>No nutrition data available.</p>
            ) : (
              <table className="min-w-full table-fixed">
                <thead>
                  <tr>
                    <th className="border px-4 py-2 w-1/6">Calories</th>
                    <th className="border px-4 py-2 w-1/6">Protein</th>
                    <th className="border px-4 py-2 w-1/6">Carbs</th>
                    <th className="border px-4 py-2 w-1/6">Fats</th>
                    <th className="border px-4 py-2 w-1/6">Fibers</th>
                    <th className="border px-4 py-2 w-1/6">Vitamins</th>
                  </tr>
                </thead>
                <tbody>
                  {nutritionData.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{item.calories}</td>
                      <td className="border px-4 py-2">{item.protein}</td>
                      <td className="border px-4 py-2">{item.carbs}</td>
                      <td className="border px-4 py-2">{item.fats}</td>
                      <td className="border px-4 py-2">{item.fibers}</td>
                      <td className="border px-4 py-2">{item.vitamins}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NutritionMonitor;
