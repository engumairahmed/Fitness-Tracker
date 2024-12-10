import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import BreadCrumb from './BreadCrumb';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


// const navigate = useNavigate();

// const navigateToUpdatePage = (meal: string, food: Nutrition, index: number) => {
//   navigate('/updatefoodform', { state: { meal, food, index } });
// };


interface Nutrition {
  name: string;
  calories: number;
  carbs: number;
  fats: number;
  protein: number;
  sodium: number;
  sugar: number;
  cholesterol: number;
  quantity: number,
}
const predefinedFoods: Nutrition[] = [
  { name: 'Apple', calories: 52, carbs: 14, fats: 0.2, protein: 0.3, sodium: 1, sugar: 10, cholesterol: 0, quantity: 1 },
  { name: 'Banana', calories: 89, carbs: 23, fats: 0.3, protein: 1.1, sodium: 1, sugar: 12, cholesterol: 0, quantity: 1 },
  { name: 'Chicken Breast', calories: 165, carbs: 0, fats: 3.6, protein: 31, sodium: 74, sugar: 0, cholesterol: 85, quantity: 1 },
  { name: 'Rice', calories: 130, carbs: 28, fats: 0.3, protein: 2.7, sodium: 1, sugar: 0, cholesterol: 0, quantity: 1 },
  { name: 'Broccoli', calories: 55, carbs: 11, fats: 0.6, protein: 4.2, sodium: 33, sugar: 2.2, cholesterol: 0, quantity: 1 },
  { name: 'Egg', calories: 68, carbs: 0.4, fats: 4.8, protein: 6, sodium: 62, sugar: 0.4, cholesterol: 186, quantity: 1 },
  { name: 'Salmon', calories: 208, carbs: 0, fats: 13, protein: 22, sodium: 63, sugar: 0, cholesterol: 63, quantity: 1 },
  { name: 'Avocado', calories: 160, carbs: 9, fats: 15, protein: 2, sodium: 7, sugar: 0.2, cholesterol: 0, quantity: 1 },
  { name: 'Carrot', calories: 41, carbs: 10, fats: 0.2, protein: 0.9, sodium: 69, sugar: 4.7, cholesterol: 0, quantity: 1 },
  { name: 'Yogurt', calories: 59, carbs: 7.7, fats: 3.3, protein: 3.5, sodium: 46, sugar: 4.7, cholesterol: 10, quantity: 1 },
];



const NutritionMonitor: React.FC = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const { updatedMeal, updatedFood, foodIndex } = location.state || {};

  const [selectedMeal, setSelectedMeal] = useState<string>('');
  const [breakfast, setBreakfast] = useState<Nutrition[]>([]);
  const [lunch, setLunch] = useState<Nutrition[]>([]);
  const [dinner, setDinner] = useState<Nutrition[]>([]);
  const [snacks, setSnacks] = useState<Nutrition[]>([]);

  // useEffect(() => {
  //   if (updatedMeal && updatedFood !== undefined) {
  //     const updateMeal = (meal: string, newFood: Nutrition) => {
  //       if (meal === 'breakfast') {
  //         setBreakfast((prev) => prev.map((item, i) => (i === foodIndex ? newFood : item)));
  //       }
  //       if (meal === 'lunch') {
  //         setLunch((prev) => prev.map((item, i) => (i === foodIndex ? newFood : item)));
  //       }
  //       if (meal === 'dinner') {
  //         setDinner((prev) => prev.map((item, i) => (i === foodIndex ? newFood : item)));
  //       }
  //       if (meal === 'snacks') {
  //         setSnacks((prev) => prev.map((item, i) => (i === foodIndex ? newFood : item)));
  //       }
  //     };

  //     updateMeal(updatedMeal, updatedFood);
  //   }
  // }, [updatedMeal, updatedFood, foodIndex]);


  const [foodInput, setFoodInput] = useState<Nutrition>({
    name: '',
    calories: 0,
    carbs: 0,
    fats: 0,
    protein: 0,
    sodium: 0,
    sugar: 0,
    cholesterol: 0,
    quantity: 1,
  });

  const handleAddFood = () => {
    // Validate that the food name is not empty and at least one nutritional value is non-zero
    if (
      !foodInput.name.trim() ||
      (foodInput.calories === 0 &&
        foodInput.carbs === 0 &&
        foodInput.fats === 0 &&
        foodInput.protein === 0 &&
        foodInput.sodium === 0 &&
        foodInput.sugar === 0 &&
        foodInput.cholesterol === 0)
    ) {
      alert("Please enter a valid food name and at least one non-zero nutritional value.");
      return;
    }

    const newFood = { ...foodInput };

    if (selectedMeal === 'breakfast') setBreakfast([...breakfast, newFood]);
    if (selectedMeal === 'lunch') setLunch([...lunch, newFood]);
    if (selectedMeal === 'dinner') setDinner([...dinner, newFood]);
    if (selectedMeal === 'snacks') setSnacks([...snacks, newFood]);

    // Reset the input fields
    setFoodInput({
      name: '',
      calories: 0,
      carbs: 0,
      fats: 0,
      protein: 0,
      sodium: 0,
      sugar: 0,
      cholesterol: 0,
      quantity: 1,
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
          <select
            id="food-name"
            value={foodInput.name}
            onChange={(e) => {
              const selectedFood = predefinedFoods.find((food) => food.name === e.target.value);

              if (selectedFood) {
                // Set form fields to the selected food's values
                setFoodInput({ ...selectedFood, quantity: 1 });
              } else if (e.target.value === '') {
                // Clear fields when the user deselects
                setFoodInput({
                  name: '',
                  calories: 0,
                  carbs: 0,
                  fats: 0,
                  protein: 0,
                  sodium: 0,
                  sugar: 0,
                  cholesterol: 0,
                  quantity: 1,
                });
              } else {
                // Allow custom food name input
                setFoodInput({ ...foodInput, name: e.target.value });
              }
            }}
            className="border rounded px-2 py-1 w-full"
          >
            <option value="">-- Select a Food or Write --</option>
            {predefinedFoods.map((food) => (
              <option key={food.name} value={food.name}>
                {food.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Or type a custom food"
            value={foodInput.name}
            onChange={(e) => setFoodInput({ ...foodInput, name: e.target.value })}
            className="border rounded px-2 py-1 w-full mt-2"
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-semibold mb-1">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            value={foodInput.quantity}
            onChange={(e) => setFoodInput({ ...foodInput, quantity: Math.max(1, Number(e.target.value)) })}
            min="1"
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
            value={foodInput.sugar}
            onChange={(e) => setFoodInput({ ...foodInput, sugar: Number(e.target.value) })}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="cholesterol" className="block text-sm font-semibold mb-1">
            Cholesterol (mg)
          </label>
          <input
            id="cholesterol"
            type="number"
            value={foodInput.cholesterol}
            onChange={(e) => setFoodInput({ ...foodInput, cholesterol: Number(e.target.value) })}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
      </div>
      <button
        onClick={handleAddFood}
        className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2 shadow-lg hover:bg-blue-600 transition-all"
      >
        Add Food
      </button>



    </div>
  );



  // function navigateToUpdatePage(_meal: string, _food: Nutrition, _index: number): void {
  //   throw new Error('Function not implemented.');
  // }

 


  return (
    <>
      <BreadCrumb name=": Your Personalized Nutrition Guide" route='/dashboard/nutri-mon' />
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

        {['breakfast', 'lunch', 'dinner', 'snacks'].map((meal) => (
          <div key={meal}>
            <h3 className="text-xl font-semibold mt-6">{meal.charAt(0).toUpperCase() + meal.slice(1)}</h3>
            <button
              onClick={() => handleClearMeal(meal)}
              className="text-white px-4 py-2 rounded-full mt-2 shadow-lg hover:opacity-90 transition-all"
              style={{ backgroundColor: "#66C4A4" }}
            >
              Clear {meal.charAt(0).toUpperCase() + meal.slice(1)}
            </button>




            <div className="overflow-x-auto mt-4">
              <table className="border-collapse border border-gray-300 w-full rounded-lg shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="border border-gray-300 px-4 py-2 text-left">Food</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Calories</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {(meal === 'breakfast' ? breakfast : meal === 'lunch' ? lunch : meal === 'dinner' ? dinner : snacks).map(
                    (food, index) => (
                      <tr
                        key={index}
                        className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                          } hover:bg-gray-100 transition-all`}
                      >
                        <td className="border border-gray-300 px-4 py-2">{food.name}</td>
                        <td className="border border-gray-300 px-4 py-2">{food.calories}</td>
                        <td className="border border-gray-300 px-4 py-2">
                          {/* <button
                            onClick={() => navigateToUpdatePage(meal, food, index)}
                            className="text-blue-500 hover:text-blue-700 transition-all flex items-center space-x-1 px-3 py-1 rounded-full border border-blue-300 hover:bg-blue-100 shadow-sm mr-2"
                          >
                            <FaEdit />
                            <span>Update</span>
                          </button> */}
                          <button
                            onClick={() => handleDeleteFood(meal, index)}
                            className="text-red-500 hover:text-red-700 transition-all flex items-center space-x-1 px-3 py-1 rounded-full border border-red-300 hover:bg-red-100 shadow-sm"
                          >
                            <FaTrashAlt />
                            <span>Delete</span>
                          </button>

                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
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
            <tr>
              <td className="border border-gray-300 px-4 py-2">Cholesterol (g)</td>
              <td className="border border-gray-300 px-4 py-2">{calculateTotal('cholesterol')}</td>
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
      </div>
    </>
  );
};

export default NutritionMonitor;

