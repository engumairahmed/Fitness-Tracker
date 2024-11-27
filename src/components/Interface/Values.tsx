import React from "react";

const values = [
  {
    title: "User-Centered Innovation",
    description:
      "We prioritize the needs of our users and continuously innovate to deliver an intuitive, easy-to-use fitness tracker.",
    icon: "💡",
  },
  {
    title: "Holistic Health",
    description:
      "Our tracker emphasizes a balance between exercise, nutrition, and mental well-being, creating a well-rounded approach to health.",
    icon: "🌿",
  },
  {
    title: "Accuracy & Reliability",
    description:
      "We ensure your workout, nutrition, and progress tracking are as accurate as possible.",
    icon: "✅",
  },
  {
    title: "Motivation & Support",
    description:
      "We aim to inspire users to stay committed to their fitness goals with personalized insights.",
    icon: "🎯",
  },
  {
    title: "Simplicity & Accessibility",
    description:
      "Our tracker is designed to be simple, intuitive, and easy to use for all fitness levels.",
    icon: "🔑",
  },
  {
    title: "Community & Collaboration",
    description:
      "We encourage engagement with our community for shared motivation and support.",
    icon: "🤝",
  }
];

export const Values = () => {
  return (
    <div>
      <section className="bg-white text-[#31c48d] py-12 mt-18">
        <h2 className="text-center text-5xl font-bold mb-8">FitClave Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4 text-center">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{value.title}</h3>
              <p className="text-black text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
