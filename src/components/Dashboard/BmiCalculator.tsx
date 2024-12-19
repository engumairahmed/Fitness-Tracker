import React, { useState } from "react";
import { toast } from "react-toastify";

type UnitType = "kg" | "lbs" | "cm" | "ft-in";

interface Prop {
  setBmi: (bmi: number | null) => void;
}

const BMICalculator = ({ setBmi }: Prop) => {
  const [weight, setWeight] = useState<number | string>("");
  const [weightUnit, setWeightUnit] = useState<UnitType>("kg");
  const [heightFeet, setHeightFeet] = useState<number | string>("");
  const [heightInches, setHeightInches] = useState<number | string>("");
  const [heightCm, setHeightCm] = useState<number | string>("");
  const [heightUnit, setHeightUnit] = useState<UnitType>("cm");
  const [localBmi, setLocalBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");

  // Function to calculate BMI
  const calculateBMI = () => {
    let heightInMeters: number | null = null;

    // Convert height to meters
    if (heightUnit === "cm" && heightCm) {
      heightInMeters = Number(heightCm) / 100; // Convert cm to meters
    } else if (heightUnit === "ft-in" && heightFeet && heightInches !== null) {
      const totalInches =
        parseInt(heightFeet as string, 10) * 12 + parseInt(heightInches as string, 10); // Convert feet & inches to total inches
      heightInMeters = totalInches * 0.0254; // Convert inches to meters
    }

    // Convert weight to kilograms
    const weightInKg =
      weightUnit === "lbs" ? Number(weight) * 0.453592 : Number(weight);

    // Check for valid inputs
    if (heightInMeters && weightInKg) {
      const bmiValue = +(weightInKg / (heightInMeters * heightInMeters)).toFixed(1); // BMI formula
      setLocalBmi(bmiValue); // Update local BMI state
      setBmi(bmiValue); // Update parent BMI state
      determineCategory(bmiValue);
    } else {
      toast.error("Please enter valid weight and height!");
    }
  };

  // Function to determine BMI category
  const determineCategory = (bmiValue: number) => {
    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setCategory("Normal weight");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setCategory("Overweight");
    } else {
      setCategory("Obesity");
    }
  };

  // Function to reset the calculator
  const resetCalculator = () => {
    setWeight("");
    setWeightUnit("kg");
    setHeightFeet("");
    setHeightInches("");
    setHeightCm("");
    setHeightUnit("cm");
    setLocalBmi(null);
    setCategory("");
    setBmi(null);
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
        BMI Calculator
      </h1>
      <div className="flex flex-col gap-4">
        {/* Weight Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Weight</label>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight"
              className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
            />
            <select
              value={weightUnit}
              onChange={(e) => setWeightUnit(e.target.value as UnitType)}
              className="mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
            >
              <option value="kg">kg</option>
              <option value="lbs">lbs</option>
            </select>
          </div>
        </div>

        {/* Height Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Height</label>
          {heightUnit === "cm" ? (
            <div className="flex gap-2 items-center">
              <input
                type="number"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                placeholder="Enter height in cm"
                className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
              <select
                value={heightUnit}
                onChange={(e) => setHeightUnit(e.target.value as UnitType)}
                className="mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
              >
                <option value="cm">cm</option>
                <option value="ft-in">ft & in</option>
              </select>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <input
                type="number"
                value={heightFeet}
                onChange={(e) => setHeightFeet(e.target.value)}
                placeholder="Feet"
                className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
              <input
                type="number"
                value={heightInches}
                onChange={(e) => setHeightInches(e.target.value)}
                placeholder="Inches"
                className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
              <select
                value={heightUnit}
                onChange={(e) => setHeightUnit(e.target.value as UnitType)}
                className="mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
              >
                <option value="ft-in">ft & in</option>
                <option value="cm">cm</option>
              </select>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={calculateBMI}
            className="bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-200"
          >
            Calculate
          </button>
          <button
            onClick={resetCalculator}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Result Section */}
      {localBmi !== null && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-800">Your BMI: {localBmi}</h2>
          <p className="text-lg text-gray-600">Category: {category}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
