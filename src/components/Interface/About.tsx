
import { TiTick } from "react-icons/ti"
import { Values } from "./Values"


export const About = () => {
  return (
    <div>
          <div className="py-16 px-4 sm:px-10 mt-19">
          <h1 className="text-4xl sm:text-5xl text-center font-bold text-[#31C48D] mb-8 leading-tight">
              About FitClave
            </h1>
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center space-x-10">
   
      
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-lg text-gray-700 mb-6">
            Welcome to the future of fitness tracking! At FitClave, we believe fitness is not just a goal—it's a lifestyle. Our mission is to empower individuals to lead healthier lives by offering an innovative platform for tracking workouts, nutrition, and progress effortlessly.
          </p>
          <ul className="space-y-4 text-left text-gray-600">
            <li className="flex items-center">
            <TiTick className="mr-2 text-[#67C3A2] text-3xl"></TiTick>Fitness Tracking: Plan, organize, and monitor workouts with personalized routines tailored to your goals.
            </li>
            <li className="flex items-center">
            <TiTick className="mr-2 text-[#67C3A2] text-3xl"></TiTick> Nutrition Monitoring: Keep track of your daily meals and maintain a balanced calorie and nutrient intake.
            </li>
            <li className="flex items-center">
            <TiTick className="mr-2 text-[#67C3A2] text-3xl"></TiTick> Progress Visualization: Celebrate milestones with clear, intuitive graphs and insights that show your fitness journey.
            </li>
            <li className="flex items-center">
            <TiTick className="mr-2 text-[#67C3A2] text-3xl"></TiTick> Seamless Accessibility: Whether on a desktop or mobile device, FitClave keeps you connected to your goals anytime, anywhere.
            </li>
            <li className="flex items-center">
            <TiTick className="mr-2 text-[#67C3A2] text-3xl"></TiTick>Customizable Features: Alerts, reminders, themes, and more—designed to suit your unique fitness needs.
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 mb-10 md:mb-0">
          <img 
            src="/Fitness About.jpg" 
            alt="Fitness Tracker" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        
      </div>
    </div>
   <Values></Values>
    </div>
  )
}
