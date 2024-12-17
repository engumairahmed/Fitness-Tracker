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
  isFollowed: boolean; // Indicates if the workout is followed
};

const WorkoutList = () => {
  const URL = import.meta.env.VITE_SERVER_URL;
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get(`${URL}/workouts/workouts`, {
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

  const handleFollowWorkout = async (workoutId: string) => {
    try {
      const response = await axios.post(
        `${URL}/workouts/workouts/follow`,
        { workoutId },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('authToken')}`,
          },
        }
      );
      toast.success(response.data.message || 'Workout followed successfully!');
      setWorkouts((prevWorkouts) =>
        prevWorkouts.map((workout) =>
          workout._id === workoutId ? { ...workout, isFollowed: true } : workout
        )
      );
    } catch (error) {
      console.error('Error following workout:', error);
      toast.error('Error following workout');
    }
  };

  const handleUnfollowWorkout = async (workoutId: string) => {
    try {
      const response = await axios.post(
        `${URL}/workouts/workouts/unfollow/${workoutId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('authToken')}`,
          },
        }
      );
      toast.success(response.data.message || 'Workout unfollowed successfully!');
      setWorkouts((prevWorkouts) =>
        prevWorkouts.map((workout) =>
          workout._id === workoutId ? { ...workout, isFollowed: false } : workout
        )
      );
    } catch (error) {
      console.error('Error unfollowing workout:', error);
      toast.error('Error unfollowing workout');
    }
  };

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

              {/* Follow/Unfollow button */}
              {workout.isFollowed ? (
                <button
                  onClick={() => handleUnfollowWorkout(workout._id)}
                  className="mt-4 w-full p-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
                >
                  Unfollow Workout
                </button>
              ) : (
                <button
                  onClick={() => handleFollowWorkout(workout._id)}
                  className="mt-4 w-full p-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
                >
                  Follow Workout
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutList;
