import React, { useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

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

                <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-8 max-sm:justify-center text-center mt-12">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all"  data-aos="fade-right" data-aos-delay="100">
                        <div className="bg-[#31c48d] h-32"></div>
                        <img src="https://readymadeui.com/team-1.webp" className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block" />

                        <div className="p-6">
                            <h4 className="text-gray-800 text-base font-extrabold">Umair Ahmed</h4>
                            <p className="text-gray-600 text-xs mt-1">Backend Developer & Lead</p>
                            <p className="text-gray-600 mt-4 text-sm">Leads the backend development of our fitness tracker. He ensures that the system's architecture is scalable and secure, and he works on building the APIs that support the app’s core functionalities. His expertise allows us to manage large sets of fitness data and deliver real-time updates to users seamlessly.</p>

                            <div className="space-x-4 mt-6">
                                <button type="button"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 155.139 155.139">
                                        <path
                                            d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                            data-original="#010002" />
                                    </svg>
                                </button>
                                <button type="button"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 512 512">
                                        <path
                                            d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                            data-original="#03a9f4" />
                                    </svg>
                                </button>
                                <button type="button"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#333" viewBox="0 0 24 24">
                                        <path
                                            d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                            data-original="#0077b5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>


                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all" data-aos="fade-left" data-aos-delay="300">
                        <div className="bg-[#31c48d] h-32"></div>
                        <img src="https://readymadeui.com/team-2.webp" className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block" />

                        <div className="p-6">
                            <h4 className="text-gray-800 text-base font-extrabold">Laiba Waqar</h4>
                            <p className="text-gray-600 text-xs mt-1">Frontend Developer</p>
                            <p className="text-gray-600 mt-4 text-sm">She brings the fitness tracker to life by focusing on creating responsive and user-friendly interfaces. She works closely with the design team to implement the visual aspects of the app, ensuring that all interactions are smooth, quick, and visually engaging.</p>

                            <div className="space-x-4 mt-6">
                                <button type="button"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 155.139 155.139">
                                        <path
                                            d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                            data-original="#010002" />
                                    </svg>
                                </button>
                                <button type="button"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 512 512">
                                        <path
                                            d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                            data-original="#03a9f4" />
                                    </svg>
                                </button>
                                <button type="button"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#333" viewBox="0 0 24 24">
                                        <path
                                            d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                            data-original="#0077b5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    
                    {/* <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all" data-aos="fade-left" data-aos-delay="400">
                        <div className="bg-[#31c48d] h-32"></div>
                        <img src="https://readymadeui.com/team-2.webp" className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block" />

                        <div className="p-6">
                            <h4 className="text-gray-800 text-base font-extrabold">Maryam Ali</h4>
                            <p className="text-gray-600 text-xs mt-1">  Frontend Developer</p>
                            <p className="text-gray-600 mt-4 text-sm">member of our frontend team, working to implement user-friendly interfaces and features. He focuses on writing clean, efficient code to ensure the app looks great and functions smoothly across all devices.</p>

                            <div className="space-x-4 mt-6">
                                <button type="button"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 155.139 155.139">
                                        <path
                                            d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                            data-original="#010002" />
                                    </svg>
                                </button>
                                <button type="button"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 512 512">
                                        <path
                                            d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                            data-original="#03a9f4" />
                                    </svg>
                                </button>
                                <button type="button"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#333" viewBox="0 0 24 24">
                                        <path
                                            d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                            data-original="#0077b5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all" data-aos="fade-right" data-aos-delay="400">
                        <div className="bg-[#31c48d] h-32"></div>
                        <img src="https://readymadeui.com/team-3.webp" className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block" />

                        <div className="p-6">
                            <h4 className="text-gray-800 text-base font-extrabold">Palwasha Qasim</h4>
                            <p className="text-gray-600 text-xs mt-1">Dashboard UI Developer</p>
                            <p className="text-gray-600 mt-4 text-sm">Responsible for designing and developing the dashboard UI, ensuring it's both user-friendly and visually appealing. She focuses on creating a seamless, intuitive experience for users to track their data and interact with the app’s features effectively.</p>

                            <div className="space-x-4 mt-6">
                                <button type="button"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 155.139 155.139">
                                        <path
                                            d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                            data-original="#010002" />
                                    </svg>
                                </button>
                                <button type="button"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 512 512">
                                        <path
                                            d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                            data-original="#03a9f4" />
                                    </svg>
                                </button>
                                <button type="button"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#333" viewBox="0 0 24 24">
                                        <path
                                            d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                            data-original="#0077b5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all" data-aos="fade-left" data-aos-delay="600">
                        <div className="bg-[#31c48d] h-32"></div>
                        <img src="https://readymadeui.com/team-1.webp" className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block" />

                        <div className="p-6">
                            <h4 className="text-gray-800 text-base font-extrabold">Ayan Najam</h4>
                            <p className="text-gray-600 text-xs mt-1">Quality Assurance Developer</p>
                            <p className="text-gray-600 mt-4 text-sm">Responsible for quality assurance processes and ensures that all features and functionalities of the fitness tracker app are rigorously tested. He works closely with developers and designers to identify potential issues before they reach the user, ensuring that FitClave runs smoothly for everyone.</p>

                            <div className="space-x-4 mt-6">
                                <button type="button"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 155.139 155.139">
                                        <path
                                            d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                            data-original="#010002" />
                                    </svg>
                                </button>
                                <button type="button"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 512 512">
                                        <path
                                            d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                            data-original="#03a9f4" />
                                    </svg>
                                </button>
                                <button type="button"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#333" viewBox="0 0 24 24">
                                        <path
                                            d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                            data-original="#0077b5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all" data-aos="fade-right" data-aos-delay="600">
                        <div className="bg-[#31c48d] h-32"></div>
                        <img src="https://readymadeui.com/team-2.webp" className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block" />

                        <div className="p-6">
                            <h4 className="text-gray-800 text-base font-extrabold">Hamza Adnan</h4>
                            <p className="text-gray-600 text-xs mt-1"></p>
                            <p className="text-gray-600 mt-4 text-sm">Ensures that the fitness tracker is bug-free and functions smoothly. Responsible for rigorous testing of every feature to guarantee a seamless user experience and high reliability.</p>

                            <div className="space-x-4 mt-6">
                                <button type="button"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 155.139 155.139">
                                        <path
                                            d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                            data-original="#010002" />
                                    </svg>
                                </button>
                                <button type="button"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 512 512">
                                        <path
                                            d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                            data-original="#03a9f4" />
                                    </svg>
                                </button>
                                <button type="button"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#333" viewBox="0 0 24 24">
                                        <path
                                            d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                            data-original="#0077b5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>  */}

        

                </div>
            </div>
        </div>
    </div>
  )
}
