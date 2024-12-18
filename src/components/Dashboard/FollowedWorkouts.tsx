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
  exercises: Exercise[];  // Include exercises
};

const FollowedWorkouts = () => {
  const URL = import.meta.env.VITE_SERVER_URL;
  const [followedWorkouts, setFollowedWorkouts] = useState<Workout[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFollowedWorkouts = async () => {
      try {
        const response = await axios.get(`${URL}/workouts/workouts/followed`, {
          headers: {
            Authorization: `Bearer ${Cookies.get('authToken')}`,
          },
        });
        setFollowedWorkouts(response.data);
      } catch (error) {
        console.error('Error fetching followed workouts:', error);
        toast.error('Error fetching followed workouts');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFollowedWorkouts();
  }, []);

  const handleUnfollowWorkout = async (workoutId: string) => {
    try {
      const response = await axios.post(
        `${URL}/workouts/workouts/unfollow`,
        { workoutId },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('authToken')}`,
          },
        }
      );
      toast.success(response.data.message || 'Workout unfollowed successfully!');
      // Update UI by removing the unfollowed workout
      setFollowedWorkouts((prevWorkouts) =>
        prevWorkouts.filter((workout) => workout._id !== workoutId)
      );
    } catch (error) {
      console.error('Error unfollowing workout:', error);
      toast.error('Error unfollowing workout');
    }
  };

  if (isLoading) {
    return <p>Loading followed workouts...</p>;
  }

  return (
    <div className="bg-green-50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-2 ml-9">
      <h2 className="text-lg font-bold text-center text-green-600 mb-6">Workouts I'm Following</h2>
      {followedWorkouts.length === 0 ? (
        <p className="text-center text-gray-500">No followed workouts yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {followedWorkouts.map((workout) => (
            <div
              key={workout._id}
              className="p-4 border rounded-lg bg-green-100 shadow hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-green-700 truncate">
                {workout.workout_name}
              </h3>
              <p className="text-sm text-black mt-1 line-clamp-2">
                {workout.description}
              </p>
              <div className="mt-3">
                <p className="text-sm text-black">
                  <span className="font-semibold text-green-600">Target Muscle Group:</span>{' '}
                  {workout.target_muscle_group}
                </p>
                <p className="text-sm text-black">
                  <span className="font-semibold text-green-600">Difficulty Level:</span>{' '}
                  {workout.difficulty_level}
                </p>
              </div>

              {/* Exercises Section */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-green-600 mb-2">Exercises:</h4>
                <ul className="text-sm text-black space-y-2">
                  {workout.exercises.map((exercise, index) => (
                    <li key={index} className="border-b pb-2 last:border-b-0">
                      <p>
                        <span className="font-medium text-green-700">{exercise.exercise_name}</span>
                      </p>
                      <p>Sets: {exercise.sets} | Reps: {exercise.reps}</p>
                      <p>
                        Weight: {exercise.weight_value} {exercise.weight_unit}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

            
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FollowedWorkouts;
