import React, { useState } from 'react';
import BreadCrumb from './BreadCrumb';
import { FaRegPlusSquare } from 'react-icons/fa';
import axios from "axios";
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

type Exercise = {
  exercise_name: string;
  sets: number;
  reps: number;
  weight_value: number;
  weight_unit: 'kg' | 'lbs';
};

const WorkoutForm = () => {
  const URL = import.meta.env.VITE_SERVER_URL;
  const [exercises, setExercises] = useState<Exercise[]>([{
    exercise_name: '',
    sets: 0,
    reps: 0,
    weight_value: 0,
    weight_unit: 'kg',
  }]);

  const [customMuscleGroup, setCustomMuscleGroup] = useState('');
  const [targetMuscleGroup, setTargetMuscleGroup] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const targetMuscleGroups = [
    'Chest',
    'upper-chest',
    'lower-chest',
    'Back',
    'Legs',
    'Shoulders',
    'Arms',
    'Core',
    'Glutes',
    'Traps',
    'Forearms',
    'Calves',
  ];

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const handleExerciseChange = (index: number, field: string, value: string | number) => {
    const updatedExercises = exercises.map((exercise, i) =>
      i === index ? { ...exercise, [field]: value } : exercise
    );
    setExercises(updatedExercises);
  };

  const addExercise = () => {
    setExercises([
      ...exercises,
      { exercise_name: '', sets: 0, reps: 0, weight_value: 0, weight_unit: 'kg' },
    ]);
  };

  const removeExercise = (index: number) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this exercise?');
    if (isConfirmed) {
      const updatedExercises = exercises.filter((_, i) => i !== index);
      setExercises(updatedExercises);
    }
  };

  const handleDaySelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
    console.log(selectedValues); // Log to check if the days are correctly selected
    setSelectedDays(selectedValues);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build workout data
    const workoutData = {
      workout_name: e.currentTarget.workout_name.value,
      description: e.currentTarget.description.value,
      target_muscle_group: targetMuscleGroup === 'custom' ? customMuscleGroup : targetMuscleGroup,
      difficulty_level: e.currentTarget.difficulty_level.value,
      exercises,
      day: selectedDays, // Include selected days
    };

    try {
      const response = await axios.post(
        `${URL}workouts/workouts`,
        workoutData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('authToken')}`,
          },
        }
      );
      console.log('Workout created:', response.data);
      toast.success("Workout created successfully");

      // Reset form
      setExercises([{
        exercise_name: '',
        sets: 0,
        reps: 0,
        weight_value: 0,
        weight_unit: 'kg',
      }]);
      setCustomMuscleGroup('');
      setTargetMuscleGroup('');
      setSelectedDays([]);  // Reset selected days
      (e.target as any).reset();
    } catch (error) {
      console.error('Error creating workout:', error);
      toast.error("Error creating workout");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <BreadCrumb name="Workout Planner" route="/dashboard/workoutform" />
      <div className="bg-green-50 flex items-center justify-center min-h-screen py-6">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-2xl font-bold text-center mb-3 text-green-600">
            Create Your Own Workout
          </h1>
          <p className="text-xl font-bold text-center mb-5 text-green-600">
            "Your Path to Peak Performance"
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block font-medium mb-2 text-green-700">Workout Name</label>
              <input
                type="text"
                name="workout_name"
                className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block font-medium mb-2 text-green-700">Description</label>
              <textarea
                name="description"
                rows={4}
                className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block font-medium mb-2 text-green-700">Target Muscle Group</label>
              <select
                name="target_muscle_group"
                className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                value={targetMuscleGroup}
                onChange={(e) => setTargetMuscleGroup(e.target.value)}
              >
                <option value="">Select Muscle Group</option>
                {targetMuscleGroups.map((muscle, index) => (
                  <option key={index} value={muscle} className="text-green-600">
                    {muscle}
                  </option>
                ))}
                <option value="custom">Custom</option>
              </select>
            </div>

            {targetMuscleGroup === 'custom' && (
              <div className="mb-6">
                <label className="block font-medium mb-2 text-green-700">Enter Custom Muscle Group</label>
                <input
                  type="text"
                  value={customMuscleGroup}
                  onChange={(e) => setCustomMuscleGroup(e.target.value)}
                  className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="Enter custom muscle group"
                />
              </div>
            )}

            <div className="mb-6">
              <label className="block font-medium mb-2 text-green-700">Difficulty Level</label>
              <select
                name="difficulty_level"
                className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select Difficulty</option>
                <option value="Beginner" className="text-green-600">
                  Beginner
                </option>
                <option value="Intermediate" className="text-green-600">
                  Intermediate
                </option>
                <option value="Advanced" className="text-green-600">
                  Advanced
                </option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block font-medium mb-2 text-green-700">Day(s)</label>
              <select
                name="days"
                multiple
                value={selectedDays}
                onChange={handleDaySelection}
                className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                {daysOfWeek.map((day, index) => (
                  <option key={index} value={day} className="text-green-600">
                    {day}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4 text-green-700">Exercises</h3>
              {exercises.map((exercise, index) => (
                <div
                  key={index}
                  className="mb-6 border p-4 rounded-lg relative bg-green-50"
                >
                  <button
                    type="button"
                    onClick={() => removeExercise(index)}
                    className="absolute top-2 right-2 text-red-500 text-lg"
                  >
                    ✖
                  </button>
                  <div className="mb-4">
                    <label className="block font-medium mb-2 text-green-700">
                      Exercise Name
                    </label>
                    <input
                      type="text"
                      value={exercise.exercise_name}
                      onChange={(e) =>
                        handleExerciseChange(index, 'exercise_name', e.target.value)
                      }
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-4">
                    <div>
                      <label className="block font-medium mb-2 text-green-700">Sets</label>
                      <input
                        type="number"
                        value={exercise.sets}
                        onChange={(e) =>
                          handleExerciseChange(
                            index,
                            'sets',
                            Math.max(0, Number(e.target.value))
                          )
                        }
                        className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-medium mb-2 text-green-700">Reps</label>
                      <input
                        type="number"
                        value={exercise.reps}
                        onChange={(e) =>
                          handleExerciseChange(
                            index,
                            'reps',
                            Math.max(0, Number(e.target.value))
                          )
                        }
                        className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block font-medium mb-2 text-green-700">Weight</label>
                    <div className="flex items-center">
                      <input
                        type="number"
                        value={exercise.weight_value}
                        onChange={(e) =>
                          handleExerciseChange(
                            index,
                            'weight_value',
                            Math.max(0, Number(e.target.value))
                          )
                        }
                        className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        required
                      />
                      <select
                        value={exercise.weight_unit}
                        onChange={(e) =>
                          handleExerciseChange(index, 'weight_unit', e.target.value as 'kg' | 'lbs')
                        }
                        className="ml-3 p-3 border border-green-300 rounded-lg"
                      >
                        <option value="kg">kg</option>
                        <option value="lbs">lbs</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addExercise}
                className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 flex items-center justify-center space-x-2"
              >
                <span>Add Exercise</span>
                <FaRegPlusSquare size={20} />
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Create Workout'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WorkoutForm;
