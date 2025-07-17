"use client";
import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import Link from "next/link";

const LoginDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
// Toggle dropdown visibility on hover
  // This function is triggered when the user hovers over the login button
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center space-x-2 cursor-pointer px-2 py-1 rounded hover:bg-blue-700 hover:text-white">
        <FiUser className="text-xl" />
        <span className="font-medium">Login</span>
        <svg
          className="w-3 h-3 text-gray-500 mt-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded mt-0 z-50">
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-300">
            <span>New customer?</span>
            <Link href="/signup" className="text-blue-600 font-bold hover:underline">
              Sign Up
            </Link>
          </div>
          <ul className="text-sm">
            <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">My Profile</li>
            <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Flipkart Plus Zone</li>
            <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Orders</li>
            <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Wishlist</li>
            <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Rewards</li>
            <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Gift Cards</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
