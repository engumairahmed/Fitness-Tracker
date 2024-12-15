import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Exercise {
  exercise_name: string;
  sets: number;
  reps: number;
  weight_value: number;
  weight_unit: 'kg' | 'lbs';
}

interface Workout {
  _id: string;
  workout_name: string;
  description: string;
  exercises: Exercise[];
  target_muscle_group: string;
  difficulty_level: string;
}

const WorkoutsList = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/workouts/workouts'); 
        setWorkouts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching workouts');
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading) {
    return <div>Loading workouts...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-green-50 py-6 px-4">
      <h1 className="text-2xl font-bold text-center text-green-600 mb-5">All Workouts</h1>
      <div className="space-y-6">
        {workouts.map((workout) => (
          <div key={workout._id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-green-600">{workout.workout_name}</h2>
            <p className="text-sm text-gray-700 mt-2">{workout.description}</p>
            <p className="text-sm text-green-600 mt-4">Target Muscle Group: {workout.target_muscle_group}</p>
            <p className="text-sm text-green-600">Difficulty Level: {workout.difficulty_level}</p>
            
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-green-600">Exercises</h3>
              <ul className="list-disc ml-5 mt-2">
                {workout.exercises.map((exercise, index) => (
                  <li key={index} className="text-sm text-gray-700">
                    <strong>{exercise.exercise_name}</strong>: {exercise.sets} sets x {exercise.reps} reps, {exercise.weight_value} {exercise.weight_unit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutsList;
