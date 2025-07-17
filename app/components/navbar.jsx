"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import LoginDropdown from "./LoginDropdown";
import MobileSidebar from "./mobileSidebar";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMoreVertical,
  FiMenu,
} from "react-icons/fi";
import { MdStorefront } from "react-icons/md";




// Navbar component
// This component handles the desktop and mobile navigation bar, including search functionality and user interactions.

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showFullNavbar, setShowFullNavbar] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowFullNavbar(false); // scrolling down → hide full navbar
      } else {
        setShowFullNavbar(true); // scrolling up → show full navbar
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll); // Attach scroll event listener
    return () => window.removeEventListener("scroll", handleScroll); 
  }, []);

  return (
    <>
      {/* Navbar (desktop only) */}
      <header
        className={`w-full bg-white shadow-sm px-4 py-3 sticky top-0 z-50 transition-all duration-300 ${
          showFullNavbar ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <div className="w-full flex items-center flex-wrap justify-between gap-3">
          {/* Left: Hamburger & Logo */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              className="md:hidden text-3xl"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FiMenu />
            </button>
            <Link href="/">
            <img
              src="/flipkart-logo.png"
              alt="Flipkart"
              className="w-32 h-auto"
            />
            </Link>
          </div>

          {/* Middle: Search Bar */}
          <div className="hidden md:flex flex-[1.5] justify-start max-w-[600px]">
            <div className="flex items-center bg-blue-50 h-11 rounded-md px-3 w-full">
              <FiSearch className="text-gray-500 text-xl" />
              <input
                type="text"
                placeholder="Search for Products, Brands and More"
                className="bg-transparent h-11 px-3 py-2 outline-none text-base w-full"
              />
            </div>
          </div>

          {/* Right: Icons */}
          <div className="hidden md:flex flex-1 justify-between items-center text-base font-medium max-w-[400px]">
            <div className="flex items-center space-x-2 cursor-pointer">
              {/* <FiUser className="text-xl" /> */}
              <span><LoginDropdown/></span>
            </div>
            <Link href="/cart">
            <div className="flex items-center space-x-2 cursor-pointer">
              <FiShoppingCart className="text-xl" />
              <span>Cart</span>
            </div>
             </Link>
            <div className="flex items-center space-x-2 cursor-pointer">
              <MdStorefront className="text-xl" />
              <span>Become a Seller</span>
            </div>
            <FiMoreVertical className="cursor-pointer text-xl" />
          </div>
        </div>
      </header>

      {/* Search bar for mobile (always visible) */}
      <div className="sm:hidden p-3 sticky top-0 bg-white z-40">
        <div className="flex items-center bg-blue-50 h-10 rounded-md px-2 w-full">
          <FiSearch className="text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="bg-transparent h-10 px-2 py-2 outline-none text-sm w-full"
          />
        </div>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black opacity-40 z-40"
        ></div>
      )}

      {/* Sidebar */}
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default Navbar;

