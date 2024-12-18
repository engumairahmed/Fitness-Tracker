import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen px-6 sm:px-20 py-12">
      <div className=" shadow-2xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-[#31C48D] mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          Welcome to FitClave, your trusted fitness tracking application. Your privacy is of utmost importance to us. This Privacy Policy explains how we collect, use, and protect your personal information.
        </p>

        <h2 className="text-xl font-semibold text-[#31C48D] mt-6">1. Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          <strong>Personal Information:</strong> When you sign up, we may collect your name, email address and other profile details.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Fitness Data:</strong> Data related to your workouts, nutrition, progress, and goals.
        </p>
      
        <h2 className="text-xl font-semibold text-[#31C48D] mt-6">2. How We Use Your Information</h2>
        <ul className="text-gray-700 mb-4 list-disc list-inside">
          <li>To provide personalized fitness recommendations.</li>
          <li>To track your progress and generate insights.</li>
          <li>To send updates, reminders, and promotional emails (with your consent).</li>
          <li>To improve the functionality and user experience of the application.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#31C48D] mt-6">3. Data Sharing and Protection</h2>
        <p className="text-gray-700 mb-4">
          <strong>Data Sharing:</strong> We do not sell or share your personal information with third parties, except when required by law or with your explicit consent.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Data Protection:</strong> All data is stored securely using encryption protocols. We regularly review our security practices to ensure your information is safe.
        </p>

        <h2 className="text-xl font-semibold text-[#31C48D] mt-6">4. Your Rights</h2>
        <p className="text-gray-700 mb-4">
          - You have the right to access, correct, or delete your personal data.
        </p>
    
        <h2 className="text-xl font-semibold text-[#31C48D] mt-6">5. Cookies and Analytics</h2>
        <p className="text-gray-700 mb-4">
          - We use cookies to enhance your experience and analyze app usage.
        </p>
        <p className="text-gray-700 mb-4">
          - You can disable cookies through your browser settings, but some features may not function properly.
        </p>
        
        <h2 className="text-xl font-semibold text-[#31C48D] mt-6">7. Changes to this Privacy Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically for the latest information on our privacy practices.
        </p>

        <h2 className="text-xl font-semibold text-[#31C48D] mt-6">8. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about this Privacy Policy, feel free to contact us at <a href="mailto:support@fitclave.com" className="text-[#31C48D] underline">support@fitclave.com</a>.
        </p>

        <p className="text-gray-500 text-sm mt-8">
          Last updated: December 12, 2024
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;