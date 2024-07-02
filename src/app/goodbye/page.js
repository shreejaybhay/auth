"use client"
import React from "react";
import { useRouter } from "next/navigation";

const GoodbyePage = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="mb-6 text-4xl font-bold text-center text-white">
          Goodbye!
        </h1>
        <p className="mb-6 text-center text-gray-300">
          We're sorry to see you go. If you ever change your mind, you're always welcome back!
        </p>
        <div className="flex items-center justify-center mb-6">
          <img
            src="https://clipart-library.com/2023/child-boy-good-bye-clipart-xl.png" // Make sure to have an appropriate image at this path
            alt="Goodbye"
            className="object-cover object-top w-32 h-32"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            onClick={handleGoHome}
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoodbyePage;
