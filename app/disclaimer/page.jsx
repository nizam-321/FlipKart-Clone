"use client";
import React from "react";
import Link from "next/link";

// DisclaimerPage component
// This component displays a disclaimer message indicating that the site is for educational purposes only.
const DisclaimerPage = () => {
  return (
    <div className="flex items-center justify-center bg-[#f1f2f4] px-4">
      <div className="bg-white p-6 md:p-10 rounded-md shadow-md max-w-xl w-full text-center mt-6 mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">
          Educational Purpose Only
        </h1>
        <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
          It's a clone of Flipkart designed only for{" "}
          <span className="font-medium">educational</span> purposes.
          <br />
          <b>
            On the Home page, under Best of Electronics, the first product
            (Earbuds) is clickable and will open the product listings.
          </b>
          <br />
          <br />
          For actual shopping, please visit the official Flipkart website.
        </p>
        <Link
          href="https://www.flipkart.com"
          target="_blank"
          className="text-blue-600 hover:underline text-base font-medium"
        >
          👉 Go to Flipkart
        </Link>
      </div>
    </div>
  );
};

export default DisclaimerPage;
