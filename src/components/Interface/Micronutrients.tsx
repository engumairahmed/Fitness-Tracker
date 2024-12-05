import React from "react";

export const Micronutrients = () => {
  return (
    <div>
      <div className="flex justify-center items-center md:w-1/2 mx-auto mb-10 md:mb-0 mt-4">
        <img
          src="/Micronutrient_pic.jpg"
          alt="Fitness Tracker"
          className="w-full max-w-[500px] h-auto object-contain rounded-lg shadow-lg"
        />
      </div>
      <p className="text-lg text-[#333] mt-4 font-sans font-bold">
        Micronutrients consist of vitamins and minerals and are measured in
        either milligrams (mg), micrograms (mcg) or International Units (IU).
        Compared to macronutrients, your body needs a smaller amount of
        micronutrients for optimal performance. Though micronutrients don’t
        provide energy, they’re essential for functions like digestion, hormone
        production and brain function.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src="/VitaminsPic.PNG"
            alt="Fitness Tracker"
            className="w-[500px] h-[350px] object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="md:w-1/2 text-left">
          <h3 className="text-2xl font-bold text-[#31C48D] mt-2 mb-4">
            Vitamins
          </h3>
          <p className="text-lg text-[#333] mb-4">
            Vitamins are very essential for the human body as they play an
            important role in metabolism and absorption of essential minerals in
            the body. There are two categories of vitamins based on their
            solubility and they are: Fat Soluble vitamins Water Soluble Vitamins
          </p>
          <h4 className="text-2xl font-bold text-[#31C48D] mt-2 mb-4">
            Fat-Soluble Vitamins
          </h4>
          <ul className="list-disc list-inside text-lg text-[#333]">
            <li>
              Vitamin A: Important for vision, skin health, and immune function.
            </li>
            <li>
              Vitamin D: Regulates calcium and phosphorus, supporting bone
              health.
            </li>
            <li>
              Vitamin E: Acts as an antioxidant, protecting cells from damage.
            </li>
            <li>
              Vitamin K: Essential for blood clotting and bone metabolism.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10">
        <div className="md:w-1/2 text-left">
          <h3 className="text-2xl font-bold text-[#31C48D] mt-2 mb-4">
            Minerals
          </h3>
          <p className="text-lg text-[#333] mb-4">
            Minerals are inorganic nutrients that the body needs in varying
            amounts for a wide range of physiological functions. They must be
            obtained through diet.
          </p>
          <ul className="text-left list-disc list-inside text-lg text-[#333]">
            <li>Minerals are essential for structural, regulatory, and metabolic functions in the body.</li>
            <li>A balanced diet containing fruits, vegetables, whole grains, dairy, lean proteins, and nuts/seeds typically provides all the necessary minerals.</li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src="/minerals_pic.jpg"
            alt="Fitness Tracker"
            className="w-[500px] h-[350px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};
