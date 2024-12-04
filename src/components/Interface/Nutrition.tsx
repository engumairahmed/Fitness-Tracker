import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Nutrition = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="text-center px-6">
      <h2 className="md:text-5xl text-4xl font-sans font-bold mb-6 text-[#31C48D] mt-10">
        Your Essential Guide to Nutrition and Macronutrients
      </h2>
      <div className="flex justify-center items-center md:w-1/2 mx-auto mb-10 md:mb-0 mt-4">
        <img
          src="/Nutritionpic.jpg"
          alt="Fitness Tracker"
          className="w-auto h-[250px] object-cover rounded-lg shadow-lg"
        />
      </div>
      <p className="text-lg text-[#333] mt-4 font-sans font-bold">
        Macronutrients are the three main types of nutrients—carbohydrates,
        proteins, and fats—that provide the energy our bodies need to function.
        Nutrition is the process of getting these essential nutrients from food
        to fuel growth, maintain health, and prevent diseases. A balanced diet
        ensures we get the right amounts of each macronutrient to stay healthy
        and energized.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10">
        <div
          className="md:w-1/2 flex justify-center mb-6 md:mb-0"
          data-aos="fade-right"
          data-aos-delay="250"
        >
          <img
            src="/ProtienPic.jpg"
            alt="Fitness Tracker"
            className="w-[500px] h-[350px] object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="md:w-1/2 text-left">
          <h3 className="text-2xl font-bold text-[#31C48D] mt-2 mb-4">
            Protein
          </h3>
          <p className="text-lg text-[#333] mb-4">
            Protein is the building block of muscles and a crucial component for
            repair and growth. Not only that, but protein helps to:
          </p>
          <ul className="list-disc list-inside text-lg text-[#333]">
            <li>Regulate blood sugar levels.</li>
            <li>Provide satiety to prevent overeating.</li>
            <li>Support muscle repair and growth.</li>
          </ul>
          <p className="mt-4 text-lg text-[#333]">
            Sources like Animal-Based: Chicken, fish, beef, eggs, dairy (milk,
            cheese, yogurt). Plant-Based: Legumes (beans, lentils), tofu,
            quinoa, nuts (almonds, peanuts), seeds (chia, flax) are best
            examples of protein.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10">
        <div className="md:w-1/2 text-left">
          <h3 className="text-2xl font-bold text-[#31C48D] mt-2 mb-4">
            Carbohydrates
          </h3>
          <p className="text-lg text-[#333] mb-4">
            Carbohydrates are your body’s primary source of energy. They are
            essential for various functions, especially for those with an active
            lifestyle. Here’s why carbohydrates are important:
          </p>
          <ul className="text-left list-disc list-inside text-lg text-[#333]">
            <li>Provide quick and sustained energy for daily activities.</li>
            <li>Fuel your brain and central nervous system.</li>
            <li>Play a vital role in athletic performance and recovery.</li>
          </ul>
          <p className="mt-4 text-lg text-[#333]">
            Sources like whole grains, fruits, vegetables, and legumes are
            excellent choices for complex carbohydrates, providing sustained
            energy throughout the day.
          </p>
        </div>
        <div
          className="md:w-1/2 flex justify-center mb-6 md:mb-0"
          data-aos="fade-left"
          data-aos-delay="550"
        >
          <img
            src="/CarbsPic.jpg"
            alt="Fitness Tracker"
            className="w-[500px] h-[350px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10">
        <div
          className="md:w-1/2 flex justify-center mb-6 md:mb-0"
          data-aos="fade-right"
          data-aos-delay="850"
        >
          <img
            src="/FatsPic.jpg"
            alt="Fitness Tracker"
            className="w-[500px] h-[350px] object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 text-left">
          <h3 className="text-2xl font-bold text-[#31C48D] mt-2 mb-4">Fats</h3>
          <p className="text-lg text-[#333] mb-4">
            Fats are an essential macronutrient that provide energy, support
            cell growth, and help the body absorb certain nutrients. Despite
            their bad reputation, healthy fats are crucial for your overall
            well-being. Here's why:
          </p>
          <ul className="text-left list-disc list-inside text-lg text-[#333]">
            <li>
              Energy Source: Fats provide a concentrated source of energy,
              especially for longer periods of activity or during rest.
            </li>
            <li>
              Supports Brain and Hormone Health: Healthy fats are essential for
              brain function and the production of hormones that regulate body
              processes.
            </li>
          </ul>
          <p className="mt-4 text-lg text-[#333]">
            Sources like nuts (almonds, walnuts, cashews), seeds (chia,
            flaxseeds, sunflower seeds), oils (olive oil, avocado oil, canola
            oil). Full-fat dairy products such as cheese, whole milk, and cream
            are the best examples of fats.
          </p>
        </div>
      </div>
    </div>
  );
};
