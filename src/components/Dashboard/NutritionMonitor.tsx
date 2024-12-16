import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import BreadCrumb from './BreadCrumb';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UpdateFoodForm from './UpdateFoodForm';
import { Nutrition } from '../../utils/Types';
import FoodManagement from './FoodManagement';

const predefinedFoods: Nutrition[] = [
  {
    name: 'Apple', calories: 52, carbs: 14, fats: 0.2, protein: 0.3, sodium: 1, sugar: 10, cholesterol: 0, quantity: 1, weight: 182, // Add weight here
    vitamins: { vitaminC: 4.6 }, minerals: { potassium: 107, calcium: 6 }
  },
  {
    name: 'Banana', calories: 89, carbs: 23, fats: 0.3, protein: 1.1, sodium: 1, sugar: 12, cholesterol: 0, quantity: 1, weight: 118, // Add weight here
    vitamins: { vitaminC: 8.7, vitaminB6: 0.4 }, minerals: { potassium: 358, magnesium: 27 }
  },
  {
    name: 'Chicken Breast', calories: 165, carbs: 0, fats: 3.6, protein: 31, sodium: 74, sugar: 0, cholesterol: 85, quantity: 1, weight: 174, // Add weight here
    vitamins: { vitaminB6: 0.5, niacin: 13 }, minerals: { potassium: 256, phosphorus: 221 }
  },
  {
    name: 'Rice', calories: 130, carbs: 28, fats: 0.3, protein: 2.7, sodium: 1, sugar: 0, cholesterol: 0, quantity: 1, weight: 195, // Add weight here
    vitamins: { thiamine: 0.1 }, minerals: { potassium: 26, magnesium: 12 }
  },
  {
    name: 'Broccoli', calories: 55, carbs: 11, fats: 0.6, protein: 4.2, sodium: 33, sugar: 2.2, cholesterol: 0, quantity: 1, weight: 91, // Add weight here
    vitamins: { vitaminC: 89.2, vitaminK: 101.6 }, minerals: { potassium: 316, calcium: 47 }
  },
  {
    name: 'Egg', calories: 68, carbs: 0.4, fats: 4.8, protein: 6, sodium: 62, sugar: 0.4, cholesterol: 186, quantity: 1, weight: 50, // Add weight here
    vitamins: { vitaminA: 270, vitaminD: 41 }, minerals: { potassium: 63, calcium: 28 }
  },
  {
    name: 'Salmon', calories: 208, carbs: 0, fats: 13, protein: 22, sodium: 63, sugar: 0, cholesterol: 63, quantity: 1, weight: 154, // Add weight here
    vitamins: { vitaminD: 570, vitaminB12: 2.8 }, minerals: { potassium: 628, selenium: 36 }
  },
  {
    name: 'Avocado', calories: 160, carbs: 9, fats: 15, protein: 2, sodium: 7, sugar: 0.2, cholesterol: 0, quantity: 1, weight: 150, // Add weight here
    vitamins: { vitaminK: 26.8, vitaminE: 2.1 }, minerals: { potassium: 485, magnesium: 29 }
  },
  {
    name: 'Carrot', calories: 41, carbs: 10, fats: 0.2, protein: 0.9, sodium: 69, sugar: 4.7, cholesterol: 0, quantity: 1, weight: 61, // Add weight here
    vitamins: { vitaminA: 835, vitaminC: 7.6 }, minerals: { potassium: 320, calcium: 33 }
  },
  {
    name: 'Yogurt', calories: 59, carbs: 7.7, fats: 3.3, protein: 3.5, sodium: 46, sugar: 4.7, cholesterol: 10, quantity: 1, weight: 245, // Add weight here
    vitamins: { vitaminB12: 1.1, riboflavin: 0.2 }, minerals: { calcium: 110, potassium: 180 }
  }
];

const NutritionMonitor: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMeal, setSelectedMeal] = useState<string>('');
  const [breakfast, setBreakfast] = useState<Nutrition[]>([]);
  const [lunch, setLunch] = useState<Nutrition[]>([]);
  const [dinner, setDinner] = useState<Nutrition[]>([]);
  const [snacks, setSnacks] = useState<Nutrition[]>([]);
  const [quantityType, setQuantityType] = useState<'quantity' | 'weight'>('quantity'); // Add state for quantity type

  const [foodInput, setFoodInput] = useState<Nutrition>({
    name: '',
    calories: 0,
    carbs: 0,
    fats: 0,
    protein: 0,
    sodium: 0,
    sugar: 0,
    cholesterol: 0,
    vitamins: {}, 
    minerals: {},
    quantity: 1,
    weight: 0,
  });

  const handleAddFood = () => {
    if (
      !foodInput.name.trim() ||
      (foodInput.calories === 0 &&
        foodInput.carbs === 0 &&
        foodInput.fats === 0 &&
        foodInput.protein === 0 &&
        foodInput.sodium === 0 &&
        foodInput.sugar === 0 &&
        foodInput.cholesterol === 0
      )
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
      vitamins: {},
      minerals: {},
      quantity: 1,
      weight: 0,
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
    const sumField = (meals: Nutrition[]) =>
      meals.reduce((sum, food) => {
        if (field === 'vitamins' || field === 'minerals') {
          // If field is an object, sum all values within the object
          const nutrients = food[field] as Record<string, number>;
          return sum + Object.values(nutrients || {}).reduce((subSum, value) => subSum + (value || 0), 0);
        } else {
          // Otherwise, treat field as a number
          return sum + (food[field] as number || 0);
        }
      }, 0);

    return (
      sumField(breakfast) +
      sumField(lunch) +
      sumField(dinner) +
      sumField(snacks)
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
                setFoodInput({ ...selectedFood, quantity: 1, weight: selectedFood.weight });
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
                  vitamins: {},
                  minerals: {},
                  quantity: 1,
                  weight: 0,
                });
              } else {
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
            {quantityType === 'quantity' ? 'Quantity' : 'Weight (g)'}
          </label>
          <input
            id="quantity"
            type="number"
            value={foodInput.quantity}
            onChange={(e) => {
              const quantity = Math.max(1, Number(e.target.value));
              setFoodInput({ ...foodInput, quantity });
              if (foodInput.weight) {
                updateNutritionalValues(foodInput.weight, quantity); // Adjust values based on weight
              }
            }}
            min="1"
            className="border rounded px-2 py-1 w-full"
          />
        </div>

        {/* Weight-based Nutritional Calculation */}
        <div>
          <label htmlFor="weight" className="block text-sm font-semibold mb-1">
            Weight (g)
          </label>
          <input
            id="weight"
            type="number"
            value={foodInput.weight}
            onChange={(e) => {
              setFoodInput({ ...foodInput, weight: parseFloat(e.target.value) || 0 });
            }}
            className="border rounded px-2 py-1 w-full"
          />
        </div>

        {/* Nutritional Fields */}
        <div>
          <label htmlFor="calories" className="block text-sm font-semibold mb-1">
            Calories
          </label>
          <input
            id="calories"
            type="number"
            value={foodInput.calories}
            onChange={(e) =>
              setFoodInput({ ...foodInput, calories: parseFloat(e.target.value) || 0 })
            }
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
            onChange={(e) =>
              setFoodInput({ ...foodInput, carbs: parseFloat(e.target.value) || 0 })
            }
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
            onChange={(e) =>
              setFoodInput({ ...foodInput, fats: parseFloat(e.target.value) || 0 })
            }
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
            onChange={(e) =>
              setFoodInput({ ...foodInput, protein: parseFloat(e.target.value) || 0 })
            }
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
            onChange={(e) =>
              setFoodInput({ ...foodInput, sodium: parseFloat(e.target.value) || 0 })
            }
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
            onChange={(e) =>
              setFoodInput({ ...foodInput, sugar: parseFloat(e.target.value) || 0 })
            }
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
            onChange={(e) =>
              setFoodInput({ ...foodInput, cholesterol: parseFloat(e.target.value) || 0 })
            }
            className="border rounded px-2 py-1 w-full"
          />
        </div>



        {/* Vitamins */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="vitamins" className="block text-sm font-semibold mb-1">
              Vitamins
            </label>
            <div className="space-y-2">
              {foodInput.vitamins && Object.entries(foodInput.vitamins).map(([vitamin, amount]) => (
                <div key={vitamin} className="flex items-center space-x-2">
                  <span className="flex-1">{vitamin}</span>
                  <input
                    type="number"
                    min="0"
                    value={amount}
                    onChange={(e) => {
                      const updatedVitamins = { ...foodInput.vitamins, [vitamin]: Math.max(0, Number(e.target.value)) };
                      setFoodInput({ ...foodInput, vitamins: updatedVitamins });
                    }}
                    className="border rounded px-2 py-1 w-20"
                  />
                  <button
                    onClick={() => {
                      const updatedVitamins = { ...foodInput.vitamins };
                      delete updatedVitamins[vitamin];
                      setFoodInput({ ...foodInput, vitamins: updatedVitamins });
                    }}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <select
                onChange={(e) => {
                  const vitamin = e.target.value;
                  if (vitamin && !foodInput.vitamins[vitamin]) {
                    setFoodInput({
                      ...foodInput,
                      vitamins: { ...foodInput.vitamins, [vitamin]: 0 },
                    });
                  }
                  e.target.value = '';
                }}
                className="border rounded px-2 py-1 w-full"
              >
                <option value="">-- Add a Vitamin --</option>
                {['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin E', 'Vitamin K', 'Vitamin B12'].map((vitamin) => (
                  <option key={vitamin} value={vitamin}>
                    {vitamin}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Minerals */}
          <div>
            <label htmlFor="minerals" className="block text-sm font-semibold mb-1">
              Minerals
            </label>
            <div className="space-y-2">
              {foodInput.minerals && Object.entries(foodInput.minerals).map(([mineral, amount]) => (
                <div key={mineral} className="flex items-center space-x-2">
                  <span className="flex-1">{mineral}</span>
                  <input
                    type="number"
                    min="0"
                    value={amount}
                    onChange={(e) => {
                      const updatedMinerals = { ...foodInput.minerals, [mineral]: Math.max(0, Number(e.target.value)) };
                      setFoodInput({ ...foodInput, minerals: updatedMinerals });
                    }}
                    className="border rounded px-2 py-1 w-20"
                  />
                  <button
                    onClick={() => {
                      const updatedMinerals = { ...foodInput.minerals };
                      delete updatedMinerals[mineral];
                      setFoodInput({ ...foodInput, minerals: updatedMinerals });
                    }}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <select
                onChange={(e) => {
                  const mineral = e.target.value;
                  if (mineral && !foodInput.minerals[mineral]) {
                    setFoodInput({
                      ...foodInput,
                      minerals: { ...foodInput.minerals, [mineral]: 0 },
                    });
                  }
                  e.target.value = '';
                }}
                className="border rounded px-2 py-1 w-full"
              >
                <option value="">-- Add a Mineral --</option>
                {['Iron', 'Calcium', 'Magnesium', 'Zinc', 'Potassium', 'Phosphorus'].map((mineral) => (
                  <option key={mineral} value={mineral}>
                    {mineral}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={handleAddFood}
          className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 shadow-lg hover:bg-blue-600 transition-all"
        >
          Add Food
        </button>
      </div>
    </div>
  );

  const updateNutritionalValues = (weight: number, _quantity: number) => {
    const scalingFactor = weight / foodInput.weight;

    setFoodInput({
      ...foodInput,
      calories: scalingFactor * foodInput.calories,
      carbs: scalingFactor * foodInput.carbs,
      fats: scalingFactor * foodInput.fats,
      protein: scalingFactor * foodInput.protein,
      sodium: scalingFactor * foodInput.sodium,
      sugar: scalingFactor * foodInput.sugar,
      cholesterol: scalingFactor * foodInput.cholesterol,
    });
  };

  

  const navigateToUpdatePage = (meal: string, food: Nutrition, index: number) => {
    navigate('/dashboard/update-food', {
      state: {
        meal,  
        food, 
        index,  
      },
    });
  };

  return (
    <>
      <BreadCrumb name="Your Personalized Nutrition Guide" route='/dashboard/nutri-mon' nestedRoute={{ name: "test", route: "test" }} />
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
                          <div className="flex space-x-2">
                            <button
                              onClick={() => navigateToUpdatePage(meal, food, index)}
                              className="text-blue-500 hover:text-blue-700 transition-all flex items-center space-x-1 px-3 py-1 rounded-full border border-blue-300 hover:bg-blue-100 shadow-sm"
                            >
                              <FaEdit />
                              <span>Update</span>
                            </button>
                            <button
                              onClick={() => handleDeleteFood(meal, index)}
                              className="text-red-500 hover:text-red-700 transition-all flex items-center space-x-1 px-3 py-1 rounded-full border border-red-300 hover:bg-red-100 shadow-sm"
                            >
                              <FaTrashAlt />
                              <span>Delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ))}
        <h2 className="text-lg text-center font-bold mt-7">Total Daily Nutritional Breakdown</h2>
        <table className="border-collapse border border-gray-300 w-full mt-2">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Nutrient</th>
              <th className="border border-gray-300 px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: 'Calories', key: 'calories' },
              { label: 'Carbs (g)', key: 'carbs' },
              { label: 'Fats (g)', key: 'fats' },
              { label: 'Protein (g)', key: 'protein' },
              { label: 'Sodium (mg)', key: 'sodium' },
              { label: 'Sugar (g)', key: 'sugar' },
              { label: 'Cholesterol (g)', key: 'cholesterol' },
              { label: 'Vitamins (g)', key: 'vitamins' },
              { label: 'Minerals (g)', key: 'minerals' },
              { label: 'Weight (g)', key: 'weight' },
            ].map(({ label, key }) => (
              <tr key={key}>
                <td className="border border-gray-300 px-4 py-2">{label}</td>
                <td className="border border-gray-300 px-4 py-2">{calculateTotal(key as keyof Nutrition)}</td>
              </tr>
            ))}
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
      <FoodManagement></FoodManagement>
    </>
  );
};

export default NutritionMonitor;