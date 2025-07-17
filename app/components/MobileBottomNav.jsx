"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiPlay, FiGrid, FiUser, FiShoppingCart } from "react-icons/fi";

// MobileBottomNav component
// This component provides a bottom navigation bar for mobile devices, allowing users to navigate between different sections
const MobileBottomNav = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;
//
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-t-gray-200 shadow-md flex justify-around items-center py-2 z-50 md:hidden">
      <Link href="/" className="flex flex-col items-center text-xs text-gray-700">
        <FiHome className={`text-xl ${isActive("/") ? "text-blue-600" : ""}`} />
        <span className={isActive("/") ? "text-blue-600" : ""}>Home</span>
      </Link>

      <button className="flex flex-col items-center text-xs text-gray-700">
        <FiPlay className="text-xl" />
        <span>Play</span>
      </button>

      <button className="flex flex-col items-center text-xs text-gray-700">
        <FiGrid className="text-xl" />
        <span>Categories</span>
      </button>

      <Link href="/signup" className="flex flex-col items-center text-xs text-gray-700">
        <FiUser className={`text-xl ${isActive("/signup") ? "text-blue-600" : ""}`} />
        <span className={isActive("/signup") ? "text-blue-600" : ""}>Account</span>
      </Link>

      <Link href="/cart" className="flex flex-col items-center text-xs text-gray-700">
        <FiShoppingCart className={`text-xl ${isActive("/cart") ? "text-blue-600" : ""}`} />
        <span className={isActive("/cart") ? "text-blue-600" : ""}>Cart</span>
      </Link>
    </div>
  );
};

export default MobileBottomNav;
