import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

type Exercise = {
  exercise_name: string;
  sets: number;
  reps: number;
  weight_value: number;
  weight_unit: 'kg' | 'lbs';
};

type Workout = {
  _id: string;
  workout_name: string;
  description: string;
  target_muscle_group: string;
  difficulty_level: string;
  exercises: Exercise[];
};

const WorkoutList = () => {
  const URL = import.meta.env.VITE_SERVER_URL;
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get(`${URL}workouts/workouts`, {
          headers: {
            Authorization: `Bearer ${Cookies.get('authToken')}`,
          },
        });
        setWorkouts(response.data);
      } catch (error) {
        console.error('Error fetching workouts:', error);
        toast.error('Error fetching workouts');
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (isLoading) {
    return <p>Loading workouts...</p>;
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6 text-green-600">My Workouts</h1>
      {workouts.length === 0 ? (
        <p className="text-center text-gray-500">You haven't created any workouts yet.</p>
      ) : (
        <div>
          {workouts.map((workout) => (
            <div key={workout._id} className="mb-6 border p-4 rounded-lg bg-green-50">
              <h2 className="text-xl font-bold text-green-700">{workout.workout_name}</h2>
              <p className="text-sm text-gray-600">{workout.description}</p>
              <p className="mt-2 text-green-600">Target Muscle Group: {workout.target_muscle_group}</p>
              <p className="text-green-600">Difficulty Level: {workout.difficulty_level}</p>

              <h3 className="mt-4 text-lg font-medium text-green-700">Exercises</h3>
              <ul>
                {workout.exercises.map((exercise, index) => (
                  <li key={index} className="mt-2">
                    <p className="font-semibold">{exercise.exercise_name}</p>
                    <p>Sets: {exercise.sets} | Reps: {exercise.reps}</p>
                    <p>
                      Weight: {exercise.weight_value} {exercise.weight_unit}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutList;
