import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import BreadCrumb from './BreadCrumb';

interface Nutrition {
  name: string;
  calories: number;
  carbs: number;
  fats: number;
  protein: number;
  sodium: number;
  sugar: number;
}

const NutritionMonitor: React.FC = () => {
  const [selectedMeal, setSelectedMeal] = useState<string>(''); // Tracks the selected meal
  const [breakfast, setBreakfast] = useState<Nutrition[]>([]);
  const [lunch, setLunch] = useState<Nutrition[]>([]);
  const [dinner, setDinner] = useState<Nutrition[]>([]);
  const [snacks, setSnacks] = useState<Nutrition[]>([]);

  const [foodInput, setFoodInput] = useState<Nutrition>({
    name: '',
    calories: 0,
    carbs: 0,
    fats: 0,
    protein: 0,
    sodium: 0,
    sugar: 0,
  });

  const handleAddFood = () => {
    const newFood = { ...foodInput };

    if (selectedMeal === 'breakfast') setBreakfast([...breakfast, newFood]);
    if (selectedMeal === 'lunch') setLunch([...lunch, newFood]);
    if (selectedMeal === 'dinner') setDinner([...dinner, newFood]);
    if (selectedMeal === 'snacks') setSnacks([...snacks, newFood]);

    setFoodInput({
      name: '',
      calories: 0,
      carbs: 0,
      fats: 0,
      protein: 0,
      sodium: 0,
      sugar: 0,
    });
  };

  const handleClearMeal = (meal: string) => {
    if (meal === 'breakfast') setBreakfast([]);
    if (meal === 'lunch') setLunch([]);
    if (meal === 'dinner') setDinner([]);
    if (meal === 'snacks') setSnacks([]);
  };

  const handleDeleteFood = (meal: string, index: number) => {
    if (meal === 'breakfast') {
      setBreakfast(breakfast.filter((_, i) => i !== index));
    }
    if (meal === 'lunch') {
      setLunch(lunch.filter((_, i) => i !== index));
    }
    if (meal === 'dinner') {
      setDinner(dinner.filter((_, i) => i !== index));
    }
    if (meal === 'snacks') {
      setSnacks(snacks.filter((_, i) => i !== index));
    }
  };

  const calculateTotal = (field: keyof Nutrition): number => {
    return (
      breakfast.reduce((sum, food) => sum + (food[field] as number), 0) +
      lunch.reduce((sum, food) => sum + (food[field] as number), 0) +
      dinner.reduce((sum, food) => sum + (food[field] as number), 0) +
      snacks.reduce((sum, food) => sum + (food[field] as number), 0)
    );
  };

  const renderForm = () => (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="food-name" className="block text-sm font-semibold mb-1">
            Food Name
          </label>
          <input
            id="food-name"
            type="text"
            placeholder="Food Name"
            value={foodInput.name}
            onChange={(e) => setFoodInput({ ...foodInput, name: e.target.value })}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="calories" className="block text-sm font-semibold mb-1">
            Calories
          </label>
          <input
            id="calories"
            type="number"
            placeholder="Calories"
            value={foodInput.calories}
            onChange={(e) => setFoodInput({ ...foodInput, calories: Number(e.target.value) })}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="carbs" className="block text-sm font-semibold mb-1">
            Carbs (g)
          </label>
          <input
            id="carbs"
            type="number"
            placeholder="Carbs (g)"
            value={foodInput.carbs}
            onChange={(e) => setFoodInput({ ...foodInput, carbs: Number(e.target.value) })}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="fats" className="block text-sm font-semibold mb-1">
            Fats (g)
          </label>
          <input
            id="fats"
            type="number"
            placeholder="Fats (g)"
            value={foodInput.fats}
            onChange={(e) => setFoodInput({ ...foodInput, fats: Number(e.target.value) })}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="protein" className="block text-sm font-semibold mb-1">
            Protein (g)
          </label>
          <input
            id="protein"
            type="number"
            placeholder="Protein (g)"
            value={foodInput.protein}
            onChange={(e) => setFoodInput({ ...foodInput, protein: Number(e.target.value) })}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="sodium" className="block text-sm font-semibold mb-1">
            Sodium (mg)
          </label>
          <input
            id="sodium"
            type="number"
            placeholder="Sodium (mg)"
            value={foodInput.sodium}
            onChange={(e) => setFoodInput({ ...foodInput, sodium: Number(e.target.value) })}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="sugar" className="block text-sm font-semibold mb-1">
            Sugar (g)
          </label>
          <input
            id="sugar"
            type="number"
            placeholder="Sugar (g)"
            value={foodInput.sugar}
            onChange={(e) => setFoodInput({ ...foodInput, sugar: Number(e.target.value) })}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
      </div>
      <button onClick={handleAddFood} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
        Add Food
      </button>
    </div>
  );
  
  

  return (
    <>
    <BreadCrumb  name=": Your Personalized Nutrition Guide" route='/dashboard/nutri-mon' />
    <div className="max-w-4xl mt-10 mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-lg text-center font-bold mb-4">Nutrition Monitor</h1>

      <select
        value={selectedMeal}
        onChange={(e) => setSelectedMeal(e.target.value)}
        className="border rounded px-2 py-1 w-full mb-4"
      >
        <option value="">-- Select a Meal --</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snacks">Snacks</option>
      </select>

      {selectedMeal && (
        <div>
          <h2 className="text-lg font-semibold capitalize">{selectedMeal} Form</h2>
          {renderForm()}
        </div>
      )}

      {/* Meal Tables with Delete Button */}
      {['breakfast', 'lunch', 'dinner', 'snacks'].map((meal) => (
        <div key={meal}>
          <h3 className="text-xl font-semibold mt-6">{meal.charAt(0).toUpperCase() + meal.slice(1)}</h3>
          <button
            onClick={() => handleClearMeal(meal)}
            className="bg-[#31C48D] text-white px-4 py-2 rounded mt-2"
          >
            Clear {meal.charAt(0).toUpperCase() + meal.slice(1)}
          </button>
          <table className="border-collapse border border-gray-300 w-full mt-2">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Food</th>
                <th className="border border-gray-300 px-4 py-2">Calories</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(meal === 'breakfast' ? breakfast : meal === 'lunch' ? lunch : meal === 'dinner' ? dinner : snacks).map(
                (food, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">{food.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{food.calories}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        onClick={() => handleDeleteFood(meal, index)}
                        className="text-red-500"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      ))}

      {/* Total Daily Nutritional Breakdown Table */}
      <h2 className="text-lg text-center font-bold mt-7">Total Daily Nutritional Breakdown</h2>
      <table className="border-collapse border border-gray-300 w-full mt-2">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Nutrient</th>
            <th className="border border-gray-300 px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Calories</td>
            <td className="border border-gray-300 px-4 py-2">{calculateTotal('calories')}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Carbs (g)</td>
            <td className="border border-gray-300 px-4 py-2">{calculateTotal('carbs')}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Fats (g)</td>
            <td className="border border-gray-300 px-4 py-2">{calculateTotal('fats')}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Protein (g)</td>
            <td className="border border-gray-300 px-4 py-2">{calculateTotal('protein')}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Sodium (mg)</td>
            <td className="border border-gray-300 px-4 py-2">{calculateTotal('sodium')}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Sugar (g)</td>
            <td className="border border-gray-300 px-4 py-2">{calculateTotal('sugar')}</td>
          </tr>
        </tbody>
      </table>

      {/* Total Calories Table */}
      <h2 className="text-lg text-center font-bold mt-7">Total Calories Eaten Today</h2>
      <table className="border-collapse border border-gray-300 w-full mt-2">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Meal</th>
            <th className="border border-gray-300 px-4 py-2">Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Total Calories</td>
            <td className="border border-gray-300 px-4 py-2">{calculateTotal('calories')}</td>
          </tr>
        </tbody>
      </table>
    </div></>
  );
};

export default NutritionMonitor;
