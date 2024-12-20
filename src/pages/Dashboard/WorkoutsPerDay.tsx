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
  day: string[];
  isFollowed: boolean; // Indicates if the workout is followed
};

const WorkoutDay = () => {
  const URL = import.meta.env.VITE_SERVER_URL;
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });

  useEffect(() => {
    const fetchWorkoutsByDay = async () => {
      try {
        const response = await axios.get(`${URL}/workouts/workouts/day/${currentDay}`, {
          headers: {
            Authorization: `Bearer ${Cookies.get('authToken')}`,
          },
        });
        setWorkouts(response.data);
      } catch (error) {
        console.error('Error fetching workouts:', error);
        toast.error('Error fetching workouts for today');
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorkoutsByDay();
  }, [URL, currentDay]);

  const handleFollowWorkout = async (workoutId: string) => {
    try {
      const response = await axios.post(
        `${URL}workouts/workouts/follow`,
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
        `${URL}workouts/workouts/unfollow/${workoutId}`,
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

  const handleDeleteWorkout = async (workoutId: string) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this workout?');
    if (!isConfirmed) {
      return;
    }

    try {
      const response = await axios.delete(`${URL}workouts/workouts/${workoutId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('authToken')}`,
        },
      });
      toast.success(response.data.message || 'Workout deleted successfully!');
      setWorkouts((prevWorkouts) =>
        prevWorkouts.filter((workout) => workout._id !== workoutId)
      );
    } catch (error) {
      console.error('Error deleting workout:', error);
      toast.error('Error deleting workout');
    }
  };

  if (isLoading) {
    return <p>Loading workouts for {currentDay}...</p>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full mx-auto mt-5 ml-9">
      <h1 className="text-xl font-semibold text-center mb-4 text-green-600">
        Workouts for {currentDay}
      </h1>
      {workouts.length === 0 ? (
        <p className="text-center text-gray-500">No workouts for {currentDay}.</p>
      ) : (
        <div>
          {workouts.map((workout) => (
            <div key={workout._id} className="mb-4 border p-4 rounded-lg bg-green-50">
              <h2 className="text-lg font-bold text-green-700">{workout.workout_name}</h2>
              <p className="text-sm text-gray-600">{workout.description}</p>
              <p className="mt-2 text-green-600">Target Muscle Group: {workout.target_muscle_group}</p>
              <p className="text-green-600">Difficulty Level: {workout.difficulty_level}</p>
              <p className="text-green-600">Day: {workout.day.join(', ')}</p>

              <h3 className="mt-2 text-md font-medium text-green-700">Exercises</h3>
              <ul>
                {workout.exercises.map((exercise, index) => (
                  <li key={index} className="mt-1">
                    <p className="font-semibold">{exercise.exercise_name}</p>
                    <p>Sets: {exercise.sets} | Reps: {exercise.reps}</p>
                    <p>
                      Weight: {exercise.weight_value} {exercise.weight_unit}
                    </p>
                  </li>
                ))}
              </ul>

           
              {/* Delete button */}
              <button
                onClick={() => handleDeleteWorkout(workout._id)}
                className="w-full mt-2 p-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                Delete Workout
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutDay;
