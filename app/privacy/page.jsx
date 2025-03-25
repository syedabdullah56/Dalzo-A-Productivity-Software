"use client";

import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bgColor text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 md:p-12 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-400">Privacy Policy</h1>
        
        <p className="text-gray-300 mb-4">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-blue-300">1. Information We Collect</h2>
        <p className="text-gray-300">
          We may collect personal details like name, email, and social media profiles when you interact with our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-blue-300">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-gray-300">
          <li>To improve user experience and provide better services.</li>
          <li>To personalize content and enhance security.</li>
          <li>For communication regarding updates and offers.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-blue-300">3. Third-Party Sharing</h2>
        <p className="text-gray-300">
          We do not sell or share your personal data with third parties except for essential services like authentication providers.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-blue-300">4. Data Security</h2>
        <p className="text-gray-300">
          We take security seriously and implement strong measures to safeguard your data from unauthorized access.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-blue-300">5. Your Rights</h2>
        <p className="text-gray-300">
          You have the right to access, update, or delete your personal data. Contact us for any privacy-related concerns.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-blue-300">6. Changes to Policy</h2>
        <p className="text-gray-300">
          We may update this policy from time to time. Any changes will be posted on this page.
        </p>

        <p className="text-center text-gray-400 mt-6">For any questions, reach us at <span className="text-blue-400">syedabdullah8750@gmail.com</span></p>

        <div className="text-center mt-6">
          <Link href="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;