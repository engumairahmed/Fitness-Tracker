import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    { question: 'How often should I exercise?', answer: 'For general health, aim for at least 150 minutes of moderate aerobic activity per week.' },
    { question: 'What are the components of fitness?', answer: 'Cardiovascular endurance, muscular strength, flexibility, body composition, and balance.' },
    { question: 'Is diet important for fitness?', answer: 'Yes, a balanced diet is crucial for energy, muscle repair, and overall health.' },
    { question: 'Can I lose weight without exercise?', answer: 'Yes, but combining diet and exercise is more effective for long-term results.' },
    { question: 'Should I rest between workouts?', answer: 'Yes, rest days are important for muscle recovery and preventing injury.' },
    { question: 'What is a warm-up?', answer: 'Light exercises done before a workout to prepare the body and reduce injury risk.' },
    { question: 'How much water should I drink daily?', answer: 'Around 2-3 liters, depending on activity level and climate.' },
  ];

  const randomHeadings: string[] = ['General Fitness', 'Workouts', 'Nutrition & Diet', 'Weight Loss/Gain', 'Injuries & Recovery'];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: '#53d7af', padding: '5%' }}>
      <div
        className="font-sans divide-y max-w-9xl mx-auto px-4 lg:px-12"
        style={{
          backgroundColor: '#ffffff',
          paddingTop: '7rem',
        }}
      >
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-800" style={{ color: '#53d7af' }}>
            Questions? Look Here!
          </h2>
          <h5 className="text-sm md:text-base mt-2">
            Can't find an answer? Call us at 84748-8474 or email: abcd@gmail.com
          </h5>
        </div>
        <div
          className="flex  justify-center items-start gap-8"
          style={{ marginTop: '7%' }}
        >
          {/* Left Column */}
          <div className="w-full md:w-1/4 bg-white-100 p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Content of Tables</h2>
            <ul className="space-y-2">
              {randomHeadings.map((heading, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-700 hover:text-blue-600 font-bold"
                >
                  {heading}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-3/4">
            {faqData.map((item, index) => (
              <div key={index}>
                <div className="accordion mb-4">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="toggle-button text-sm md:text-base outline-none text-left font-semibold py-4 text-gray-800 hover:text-blue-600 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 42 42"
                      className={`w-4 h-4 md:w-5 md:h-5 fill-current ml-auto shrink-0 transform transition-transform duration-300 ${
                        activeIndex === index ? 'rotate-45' : 'rotate-0'
                      }`}
                      style={{ marginRight: '20px' }}
                    >
                      <path d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                      <path
                        className={activeIndex === index ? 'hidden' : 'block'}
                        d="M16 37.059V4.941C16 2.224 18.282 0 21 0s5 2.224 5 4.941v32.118C26 39.776 23.718 42 21 42s-5-2.224-5-4.941z"
                      />
                    </svg>
                    <span className="mr-4">{item.question}</span>
                  </button>
                  <div
                    className={`content overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? 'max-h-screen' : 'max-h-0 invisible'
                    }`}
                  >
                    <p className="text-sm text-gray-600 py-4">{item.answer}</p>
                  </div>
                </div>
                {/* Divider */}
                {index < faqData.length - 1 && (
                  <div className="border-t border-gray-300 my-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

