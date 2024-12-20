
import { FaRegLightbulb, FaLeaf, FaRegHandshake } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";
import { IoKeyOutline } from 'react-icons/io5';
import { TbTargetArrow } from "react-icons/tb";


export const Values = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto text-center">
      <h2 className="md:text-5xl text-4xl font-bold mb-6 text-[#31C48D] mt-5">FitClave Mission</h2>
        <p className="text-lg text-center text-black font-sans">
          Our mission is to empower individuals to take control of their fitness journey 
          with ease and confidence. We aim to provide a comprehensive platform that integrates 
          workout tracking, nutrition planning, and progress monitoring, enabling users to live 
          healthier and more active lives.
        </p>
      </div>
       <div className="px-4 py-11 sm:px-10">
       <div className="mt-19 max-w-7xl mx-auto">
       <div className="mb-16 max-w-2xl text-center mx-auto">
          <h2 className="md:text-5xl text-4xl font-bold mb-6 text-[#31C48D]">
            FitClave Values
          </h2>
        
        </div>
       <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
    
          <div className="sm:p-8 p-6 flex flex-col items-center bg-gray-100 rounded-lg border-2 border-[#67C3A2] shadow-lg hover:bg-[#D1D5DB] hover:shadow-2xl transition duration-300">
            <FaRegLightbulb className='text-[#FACA15] text-4xl' />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-black">
            User-Centered Innovation
            </h3>
            <p className="text-gray-600 hover:text-black text-center">
            We prioritize the needs of our users and continuously innovate to deliver an intuitive, easy-to-use fitness tracker.
            </p>
          </div>

          <div className="sm:p-8 p-6 flex flex-col items-center bg-gray-100 rounded-lg border-2 border-[#67C3A2] shadow-lg hover:bg-[#D1D5DB] hover:shadow-2xl transition duration-300">
          <FaLeaf className='text-[#057A55] text-4xl' />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-black">
            Holistic Health
            </h3>
            <p className="text-gray-600 hover:text-black text-center">
            Our tracker emphasizes a balance between exercise, nutrition, and mental well-being, creating a well-rounded approach to health.
            </p>
          </div>

          <div className="sm:p-8 p-6 flex flex-col items-center bg-gray-100 rounded-lg border-2 border-[#67C3A2] shadow-lg hover:bg-[#D1D5DB] hover:shadow-2xl transition duration-300">
          <FaRegSquareCheck className='text-[#9B1C1C] text-4xl' />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-black">
            Accuracy & Reliability
            </h3>
            <p className="text-gray-600 hover:text-black text-center">
            We ensure your workout, nutrition, and progress tracking are as accurate as possible.
            </p>
          </div>

          <div className="sm:p-8 p-6 flex flex-col items-center bg-gray-100 rounded-lg border-2 border-[#67C3A2] shadow-lg hover:bg-[#D1D5DB] hover:shadow-2xl transition duration-300">
          <TbTargetArrow className='text-[#1E429F] text-4xl' />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-black">
            Motivation & Support
            </h3>
            <p className="text-gray-600 hover:text-black text-center">
            We aim to inspire users to stay committed to their fitness goals with personalized insights.
            </p>
          </div>

          <div className="sm:p-8 p-6 flex flex-col items-center bg-gray-100 rounded-lg border-2 border-[#67C3A2] shadow-lg hover:bg-[#D1D5DB] hover:shadow-2xl transition duration-300">
          <IoKeyOutline className='text-[#C27803] text-4xl'/>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-black">
            Simplicity & Accessibility
            </h3>
            <p className="text-gray-600 hover:text-black text-center">
            Our tracker is designed to be simple, intuitive, and easy to use for all fitness levels.
            </p>
          </div>
          
          <div className="sm:p-8 p-6 flex flex-col items-center bg-gray-100 rounded-lg border-2 border-[#67C3A2] shadow-lg hover:bg-[#D1D5DB] hover:shadow-2xl transition duration-300">
          <FaRegHandshake className='text-[#E74694] text-4xl' />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-black">
            Community & Collaboration
            </h3>
            <p className="text-gray-600 hover:text-black text-center">
            We encourage engagement with our community for shared motivation and support.
            </p>
          </div>
        </div>
    </div>
    </div>
    </div>
  )
}


 