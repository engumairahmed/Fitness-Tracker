
import React, { useState, useRef } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const faqData: FAQItem[] = [
      { question: 'What is physical fitness?', answer: 'Physical fitness refers to the ability to perform daily tasks with vigor and without undue fatigue.', category: 'General Fitness' },
    { question: 'What are the main components of fitness?', answer: 'Cardiovascular endurance, muscular strength, muscular endurance, flexibility, and body composition.', category: 'General Fitness' },
    { question: 'What is the importance of warm-up exercises?', answer: 'Warm-ups increase blood flow, prepare muscles, and reduce the risk of injuries.', category: 'General Fitness' },
    { question: 'How can I lose weight effectively?', answer: 'Combine regular exercise with a balanced, calorie-controlled diet.', category: 'General Fitness' },
    { question: 'How does fitness improve mental health?', answer: 'It reduces stress, anxiety, and depression while boosting mood and cognitive function.', category: 'General Fitness' },

    { question: 'What are supersets in strength training?', answer: 'Performing two exercises back-to-back with minimal rest in between.', category: 'Workouts' },
    { question: 'What is the difference between aerobic and anaerobic workouts?', answer: 'Aerobic workouts use oxygen for energy (e.g., running), while anaerobic workouts rely on stored energy (e.g., sprinting).', category: 'Workouts' },
    { question: 'Can I work out every day?', answer: 'Light workouts like walking or stretching are fine daily, but intense workouts need rest days..', category: 'Workouts' },
    { question: 'How long should a workout last?', answer: 'For most people, 30-60 minutes per session, depending on intensity and goals.', category: 'Workouts' },
    { question: 'What is the difference between reps and sets?', answer: 'Reps (repetitions) are the number of times you perform an exercise; a set is a group of reps.', category: 'Workouts' },

    { question: 'What are good sources of protein?', answer: 'Eggs, chicken, fish, lentils, nuts, tofu, paneer (cottage cheese), and beans.', category: 'Nutrition & Diet' },
    { question: 'Which foods are rich in fiber?', answer: 'Whole grains (brown rice, oats), fruits (apple, pear, banana), vegetables (broccoli, carrots), and legumes (beans, lentils).', category: 'Nutrition & Diet' },
    { question: 'What should one eat to combat iron deficiency?', answer: 'Spinach, red meat, lentils, tofu, fortified cereals, and Vitamin C-rich foods (like lemon, orange) to enhance iron absorption.', category: 'Nutrition & Diet' },
    { question: 'Is it necessary to take multivitamins?', answer: 'If your diet is balanced, they’re not necessary. However, for deficiencies, consult a doctor before taking multivitamins.', category: 'Nutrition & Diet' },
    { question: 'HWhat can be used as a substitute for sugar?', answer: 'Honey, jaggery, stevia, and maple syrup, but these should also be used in moderation..', category: 'Nutrition & Diet' },

    { question: 'Can I lose weight without exercise?', answer: 'Yes, but combining diet and exercise is more effective for long-term results.', category: 'Weight Loss/Gain' },
    { question: 'Should I rest between workouts?', answer: 'Yes, rest days are important for muscle recovery and preventing injury.', category: 'Injuries & Recovery' },

  ];

  const randomHeadings: string[] = ['General Fitness', 'Workouts', 'Nutrition & Diet', 'Injuries & Recovery'];

  // Create a ref for each category
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category === activeCategory ? null : category);

    // Scroll to the category section
    const categoryElement = categoryRefs.current[category];
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <div
        className="font-sans divide-y max-w-9xl mx-auto px-4 lg:px-12"
        style={{
          backgroundColor: '#ffffff',
          paddingTop: '7rem',
        }}
      >
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-6xl font-bold text-gray-800" style={{ color: '#31c4ad' }}>
            Questions? Look Here!
          </h2>
          <h5 className="text-sm md:text-base mt-2">
            Can't find an answer? Call us at 84748-8474 or email: abcd@gmail.com
          </h5>
        </div>
        <div className="flex justify-center items-start gap-8" style={{ marginTop: '7%' }}>
          {/* Left Column */}
          <div className="w-full md:w-1/4 bg-white-100 p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Content of Tables</h2>
            <ul className="space-y-2">
              {randomHeadings.map((heading, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(heading)}
                  className={`text-sm text-gray-700 hover:text-[#53d7af] font-bold cursor-pointer ${
                    activeCategory === heading ? 'text-[#53d7af]' : ''
                  }`}
                >
                  {heading}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-3/4">
            {randomHeadings.map((heading, index) => (
              <div
                key={index}
                ref={(el) => (categoryRefs.current[heading] = el)}
                className="mb-8"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{heading}</h3>
                {faqData
                  .filter((item) => item.category === heading)
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className={`accordion mb-4 ${
                        activeCategory === heading ? 'bg-[#f0fdf9]' : ''
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleAccordion(idx)}
                        className="toggle-button text-sm md:text-base outline-none text-left font-semibold py-4 text-gray-800 hover:text-[#53d7af] flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 42 42"
                          className={`w-4 h-4 md:w-5 md:h-5 fill-current ml-auto shrink-0 transform transition-transform duration-300 ${
                            activeIndex === idx ? 'rotate-45' : 'rotate-0'
                          }`}
                          style={{ marginRight: '20px' }}
                        >
                          <path d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                          <path
                            className={activeIndex === idx ? 'hidden' : 'block'}
                            d="M16 37.059V4.941C16 2.224 18.282 0 21 0s5 2.224 5 4.941v32.118C26 39.776 23.718 42 21 42s-5-2.224-5-4.941z"
                          />
                        </svg>
                        <span className="mr-4">{item.question}</span>
                      </button>
                      <div
                        className={`content overflow-hidden transition-all duration-300 ${
                          activeIndex === idx ? 'max-h-screen' : 'max-h-0 invisible'
                        }`}
                      >
                        <p className="text-sm text-gray-600 py-4">{item.answer}</p>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
