"use client";

import Link from "next/link";
import { FaRocket } from "react-icons/fa";

export default function ProgressPage() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bodyColor text-white px-4 text-center">
      <div className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 max-w-xl">
        <FaRocket className="text-5xl text-blue-400 mb-4 animate-bounce mx-auto" />

        <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Page in Progress
        </h1>
        <p className="text-gray-300 mb-6 text-md sm:text-lg">
          We're crafting something awesome here. <br className="hidden sm:block" />
          This page will be available very soon — stay tuned!
        </p>

        <Link
          href="/"
          className="inline-block mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
