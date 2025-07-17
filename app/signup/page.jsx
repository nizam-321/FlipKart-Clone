"use client";
import React from "react";

// SignupPage component
// This component provides a signup form for new users to register with their mobile number.
const SignupPage = () => {
  return (
    <div className="mt-6 mb-6 flex items-center justify-center px-2">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-md overflow-hidden">
        {/* Left Section */}
        <div className="w-full md:w-[40%] flex flex-col items-center bg-blue-500 p-6 text-white space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Looks like you're new here!
          </h2>
          <p className="text-gray-300 text-sm md:text-lg text-center">
            Sign up with your mobile number to get started
          </p>
          <img
            src="/signup.png"
            alt="Signup Illustration"
            className="w-40 h-28 md:w-48 md:h-32 mt-10 md:mt-28"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[60%] p-6 md:p-10 space-y-6">
          <div>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full mt-2 px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          <p className="text-xs text-gray-500 mb-1">
            By continuing, you agree to Flipkart’s{" "}
            <span className="text-blue-600 cursor-pointer">Terms of Use</span> and{" "}
            <span className="text-blue-600 cursor-pointer">Privacy Policy</span>.
          </p>

          <button className="w-full bg-[#fb641b] cursor-pointer text-white font-semibold py-3 rounded">
            CONTINUE
          </button>

          <div className="w-full text-center text-sm pt-2">
            <span className="text-gray-700">Existing User? </span>
            <span className="text-blue-600 font-semibold cursor-pointer">
                Log in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
