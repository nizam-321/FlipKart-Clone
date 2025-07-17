import React from "react";
import { FiUser, FiChevronRight } from "react-icons/fi";

// MobileSidebar component
// This component provides a sidebar for mobile devices, allowing users to navigate through various sections of the
const MobileSidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      {/* Top section */}
      <div className="bg-blue-600 text-white px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FiUser className="text-xl" />
            <span className="font-semibold cursor-pointer">Login & Signup</span>
          </div>
        <FiChevronRight />
      </div>

      {/* Menu List */}
      <ul className="p-4 space-y-4 text-sm text-gray-800 font-medium">
        <li>SuperCoin Zone</li>
        <li>Flipkart Plus Zone</li>
        <li>All Categories</li>
        <li>More on Flipkart</li>
        <li>Choose Language</li>
        <li>Offer Zone</li>
        <li>Sell on Flipkart</li>
        <li>My Orders</li>
        <li>Coupons</li>
        <li>My Cart</li>
        <li>My Wishlist</li>
        <li>My Account</li>
        <li>My Notifications</li>
        <li>Help Centre</li>
        <li>Legal</li>
      </ul>

      {/* Close Button (optional) */}
      <button
        onClick={onClose}
        className="absolute top-0 right-2 text-2xl text-gray-500"
      >
        &times;
      </button>
    </div>
  );
};

export default MobileSidebar;
