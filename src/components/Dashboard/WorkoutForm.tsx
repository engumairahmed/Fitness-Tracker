import React, { useState } from 'react';
import BreadCrumb from './BreadCrumb';

type Exercise = {
  exercise_name: string;
  sets: number;
  reps: number;
  weight_value: number;
  weight_unit: 'kg' | 'lbs';
};

const WorkoutForm = () => {
  const [exercises, setExercises] = useState<Exercise[]>([
    {
      exercise_name: '',
      sets: 0,
      reps: 0,
      weight_value: 0,
      weight_unit: 'kg',
    },
  ]);

  const [customMuscleGroup, setCustomMuscleGroup] = useState('');
  const [targetMuscleGroup, setTargetMuscleGroup] = useState('');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const workoutData = {
      workout_name: (e.target as any).workout_name.value,
      description: (e.target as any).description.value,
      target_muscle_group: customMuscleGroup || targetMuscleGroup,
      difficulty_level: (e.target as any).difficulty_level.value,
      exercises,
    };
    console.log(workoutData);
  };

  const handleIncrement = (index: number, field: string) => {
    const updatedExercises = [...exercises];
    if (field === 'sets') {
      updatedExercises[index].sets = updatedExercises[index].sets + 1;
    } else if (field === 'reps') {
      updatedExercises[index].reps = updatedExercises[index].reps + 1;
    } else if (field === 'weight_value') {
      updatedExercises[index].weight_value = updatedExercises[index].weight_value + 1;
    }
    setExercises(updatedExercises);
  };

  const handleDecrement = (index: number, field: string) => {
    const updatedExercises = [...exercises];
    if (field === 'sets' && updatedExercises[index].sets > 0) {
      updatedExercises[index].sets = updatedExercises[index].sets - 1;
    } else if (field === 'reps' && updatedExercises[index].reps > 0) {
      updatedExercises[index].reps = updatedExercises[index].reps - 1;
    } else if (field === 'weight_value' && updatedExercises[index].weight_value > 0) {
      updatedExercises[index].weight_value = updatedExercises[index].weight_value - 1;
    }
    setExercises(updatedExercises);
  };

  return (
    <>
      <BreadCrumb name=": Workout Planner" route='/dashboard/workoutform'/>
      <div className="bg-green-50 flex items-center justify-center min-h-screen py-6">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-2xl font-bold text-center mb-3 text-green-600">Create Your Own Workout</h1>
          <p className="text-xl font-bold text-center mb-5 text-green-600">"Your Path to Peak Performance"</p>
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
              <h3 className="text-lg font-medium mb-4 text-green-700">Exercises</h3>
              {exercises.map((exercise, index) => (
                <div key={index} className="mb-6 border p-4 rounded-lg relative bg-green-50">
                  <button
                    type="button"
                    onClick={() => removeExercise(index)}
                    className="absolute top-2 right-2 text-red-500 text-lg"
                  >
                    ✖
                  </button>
                  <div className="mb-4">
                    <label className="block font-medium mb-2 text-green-700">Exercise Name</label>
                    <input
                      type="text"
                      value={exercise.exercise_name}
                      onChange={(e) => handleExerciseChange(index, 'exercise_name', e.target.value)}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-4">
                    <div>
                      <label className="block font-medium mb-2 text-green-700">Sets</label>
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => handleDecrement(index, 'sets')}
                          
                        >
                          
                        </button>
                        <input
                          type="number"
                          value={exercise.sets}
                          onChange={(e) => handleExerciseChange(index, 'sets', Math.max(0, Number(e.target.value)))}
                          className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => handleIncrement(index, 'sets')}
                          
                        >
                          
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium mb-2 text-green-700">Reps</label>
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => handleDecrement(index, 'reps')}
                          
                        >
                          
                        </button>
                        <input
                          type="number"
                          value={exercise.reps}
                          onChange={(e) => handleExerciseChange(index, 'reps', Math.max(0, Number(e.target.value)))}
                          className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => handleIncrement(index, 'reps')}
                          
                        >
                          
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block font-medium mb-2 text-green-700">Weight</label>
                    <div className="flex items-center">
                      <input
                        type="number"
                        value={exercise.weight_value}
                        onChange={(e) => handleExerciseChange(index, 'weight_value', Math.max(0, Number(e.target.value)))}
                        className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        required
                      />
                      <select
                        value={exercise.weight_unit}
                        onChange={(e) => handleExerciseChange(index, 'weight_unit', e.target.value as 'kg' | 'lbs')}
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
                className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
              >
                Add Exercise +
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
            >
              Create Workout
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WorkoutForm;
