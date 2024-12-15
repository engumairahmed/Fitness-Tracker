import React from "react";

export const Workout = () => {
  return (
    <div className="workout-page bg-white text-gray-800 p-6">
      <section className="hero bg-gray-100 text-[#31c48d] p-8 text-center rounded-lg">
        <h1 className="text-4xl font-bold">
          Your Fitness Journey Starts Here!
        </h1>
        <p className="text-lg mt-4">
          Watch guided workouts, learn new exercises, and stay motivated.
        </p>
        <a
          href="https://youtube.com/@fitclave"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-[#67C4A2] text-white px-6 py-3 rounded-lg hover:bg-[#31C4AD]"
        >
          Visit Our YouTube Channel
        </a>
      </section>

      {/* Embedded YouTube Videos */}
      <section className="videos mt-8">
        <h2 className="text-2xl font-bold mb-4 text-[#31c4ad]">Featured Workouts Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Video 1 */}
          <div className="video-card bg-white shadow-md p-4 rounded-lg">
            <div className="aspect-w-16 aspect-h-9">
            <iframe
                src="https://www.youtube.com/embed/OBkzpAzMcOY?si=uMB501iEpMWZTXR5"
                title="Workout Video 1"
                className="w-full h-full rounded-md"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-lg font-bold mt-4">
              30-Minute Full-Body Workout
            </h3>
            <p className="text-sm text-gray-600">
              Burn calories and build strength with this intense session.
            </p>
          </div>

          {/* Repeat for more videos */}
          <div className="video-card bg-white shadow-md p-4 rounded-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/X2j5C5HYE1Q?si=GdOAoyjHiEsJJOpL"
                title="Workout Video 2"
                className="w-full h-full rounded-md"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-lg font-bold mt-4">
              15-Minute Beginner Workout
            </h3>
            <p className="text-sm text-gray-600">
              Perfect for beginners to improve stamina and burn calories.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}; 