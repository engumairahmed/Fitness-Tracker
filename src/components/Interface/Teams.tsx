import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const Teams = () => {
  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration in ms
      easing: "ease-in-out", // Type of animation
      once: true, // Animate only once while scrolling
    });
  }, []);
  return (
    <div>
      <div className="font-[sans-serif]">
        <div className=" max-w-5xl max-lg:max-w-2xl max-sm:max-w-sm mx-auto ">
          <div className="mb-8 mt-10 max-w-2xl text-center mx-auto">
            <h2 className="md:text-5xl text-4xl font-bold mb-6 text-[#31C48D]">
              FitClave Team
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-8 max-sm:justify-center text-center mt-12 overflow-hidden overflow-x-hidden">
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="bg-[#31c48d] h-32"></div>
              <img
                src="https://readymadeui.com/team-1.webp"
                className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block"
              />

              <div className="p-6">
                <h4 className="text-gray-800 text-base font-extrabold">
                  Umair Ahmed
                </h4>
                <p className="text-gray-600 text-xs mt-1">
                  Team Lead, Full-stack developer
                </p>
                <p className="text-gray-600 mt-4 text-sm">
                  Leads the backend development of our fitness tracker. He
                  ensures that the system's architecture is scalable and secure,
                  and he works on building the APIs that support the app’s core
                  functionalities. His expertise allows us to manage large sets
                  of fitness data and deliver real-time updates to users
                  seamlessly.
                </p>

                <div className="space-x-4 mt-6">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100  hover:bg-blue-900 transition"
                  >
                    <FaFacebookF size={12} className="text-gray-800" />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-[#1DA1F2]"
                  >
                    <FaTwitter size={12} className="text-gray-800" />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-[#0077b5] transition"
                  >
                    <FaLinkedinIn size={12} className="text-gray-800" />
                  </button>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="bg-[#31c48d] h-32"></div>
              <img
                src="https://readymadeui.com/team-2.webp"
                className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block"
              />

              <div className="p-6">
                <h4 className="text-gray-800 text-base font-extrabold">
                  Laiba Waqar
                </h4>
                <p className="text-gray-600 text-xs mt-1">Frontend Developer</p>
                <p className="text-gray-600 mt-4 text-sm">
                  She brings the fitness tracker to life by focusing on creating
                  responsive and user-friendly interfaces. She works closely
                  with the design team to implement the visual aspects of the
                  app, ensuring that all interactions are smooth, quick, and
                  visually engaging.
                </p>

                <div className="space-x-4 mt-6">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100  hover:bg-blue-900 transition"
                  >
                    <FaFacebookF size={12} className="text-gray-800" />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-[#1DA1F2]"
                  >
                    <FaTwitter size={12} className="text-gray-800" />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-[#0077b5] transition"
                  >
                    <FaLinkedinIn size={12} className="text-gray-800" />
                  </button>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="bg-[#31c48d] h-32"></div>
              <img
                src="https://readymadeui.com/team-2.webp"
                className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block"
              />

              <div className="p-6">
                <h4 className="text-gray-800 text-base font-extrabold">
                  Syeda Maryam{" "}
                </h4>
                <p className="text-gray-600 text-xs mt-1">
                  {" "}
                  Frontend Developer
                </p>
                <p className="text-gray-600 mt-4 text-sm">
                  member of our frontend team, working to implement
                  user-friendly interfaces and features. Shee focuses on writing
                  clean, efficient code to ensure the app looks great and
                  functions smoothly across all devices.
                </p>

                <div className="space-x-4 mt-6">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100  hover:bg-blue-900 transition"
                  >
                    <FaFacebookF size={12} className="text-gray-800" />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-[#1DA1F2]"
                  >
                    <FaTwitter size={12} className="text-gray-800" />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-[#0077b5] transition"
                  >
                    <FaLinkedinIn size={12} className="text-gray-800" />
                  </button>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all"
              data-aos="fade-left"
              data-aos-delay="700"
            >
              <div className="bg-[#31c48d] h-32"></div>
              <img
                src="https://readymadeui.com/team-3.webp"
                className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block"
              />

              <div className="p-6">
                <h4 className="text-gray-800 text-base font-extrabold">
                  Palwasha Qasim
                </h4>
                <p className="text-gray-600 text-xs mt-1">
                  Dashboard UI Developer
                </p>
                <p className="text-gray-600 mt-4 text-sm">
                  Responsible for designing and developing the dashboard UI,
                  ensuring it's both user-friendly and visually appealing. She
                  focuses on creating a seamless, intuitive experience for users
                  to track their data and interact with the app’s features
                  effectively.
                </p>

                <div className="space-x-4 mt-6">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100  hover:bg-blue-900 transition"
                  >
                    <FaFacebookF size={12} className="text-gray-800" />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-[#1DA1F2]"
                  >
                    <FaTwitter size={12} className="text-gray-800" />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-[#0077b5] transition"
                  >
                    <FaLinkedinIn size={12} className="text-gray-800" />
                  </button>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <div className="bg-[#31c48d] h-32"></div>
              <img
                src="https://readymadeui.com/team-1.webp"
                className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block"
              />

              <div className="p-6">
                <h4 className="text-gray-800 text-base font-extrabold">
                  Ayan Najam
                </h4>
                <p className="text-gray-600 text-xs mt-1">
                  Quality Assurance Developer
                </p>
                <p className="text-gray-600 mt-4 text-sm">
                  Responsible for quality assurance processes and ensures that
                  all features and functionalities of the fitness tracker app
                  are rigorously tested. He works closely with developers and
                  designers to identify potential issues before they reach the
                  user, ensuring that FitClave runs smoothly for everyone.
                </p>

                <div className="space-x-4 mt-6">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100  hover:bg-blue-900 transition"
                  >
                    <FaFacebookF size={12} className="text-gray-800" />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-[#1DA1F2]"
                  >
                    <FaTwitter size={12} className="text-gray-800" />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-[#0077b5] transition"
                  >
                    <FaLinkedinIn size={12} className="text-gray-800" />
                  </button>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all"
              data-aos="fade-left"
              data-aos-delay="1100"
            >
              <div className="bg-[#31c48d] h-32"></div>
              <img
                src="https://readymadeui.com/team-2.webp"
                className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block"
              />

              <div className="p-6">
                <h4 className="text-gray-800 text-base font-extrabold">
                  Hamza Adnan
                </h4>
                <p className="text-gray-600 text-xs mt-1"></p>
                <p className="text-gray-600 mt-4 text-sm">
                  Ensures that the fitness tracker is bug-free and functions
                  smoothly. Responsible for rigorous testing of every feature to
                  guarantee a seamless user experience and high reliability.
                </p>

                <div className="space-x-4 mt-6">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100  hover:bg-blue-900 transition"
                  >
                    <FaFacebookF size={12} className="text-gray-800" />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-[#1DA1F2]"
                  >
                    <FaTwitter size={12} className="text-gray-800" />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-[#0077b5] transition"
                  >
                    <FaLinkedinIn size={12} className="text-gray-800" />
                  </button>
                </div>
              </div>
            </div>
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all"
              data-aos="fade-left"
              data-aos-delay="1100"
            >
              <div className="bg-[#31c48d] h-32"></div>
              <img
                src="https://readymadeui.com/team-2.webp"
                className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block"
              />

              <div className="p-6">
                <h4 className="text-gray-800 text-base font-extrabold">
                  Ashir
                </h4>
                <p className="text-gray-600 text-xs mt-1"></p>
                <p className="text-gray-600 mt-4 text-sm">
                  Ensures that the fitness tracker is bug-free and functions
                  smoothly. Responsible for rigorous testing of every feature to
                  guarantee a seamless user experience and high reliability.
                </p>

                <div className="space-x-4 mt-6">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100  hover:bg-blue-900 transition"
                  >
                    <FaFacebookF size={12} className="text-gray-800" />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-[#1DA1F2]"
                  >
                    <FaTwitter size={12} className="text-gray-800" />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-[#0077b5] transition"
                  >
                    <FaLinkedinIn size={12} className="text-gray-800" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
