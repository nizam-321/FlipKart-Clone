
"use client";
import React, { useRef } from "react";
import Link from "next/link";

// Sample products data
// This data can be fetched from an API or database in a real application
const products = [
  {
    name: "Best TrueWireless H...",
    price: "Grab Now",
    image: "/products/earbuds.png",
    link: "/headphones",
  },
  {
    name: "Noise Smartwatches",
    price: "From ₹1,099",
    image: "/products/smartwatch.png",
    link: "/disclaimer",
  },
  {
    name: "viewSonic Monitors",
    price: "From ₹8,999",
    image: "/products/monitor1.png",
    link: "/disclaimer",
  },
  {
    name: "Printers",
    price: "From ₹2,390",
    image: "/products/printer.png",
    link: "/disclaimer",
  },
  {
    name: "Best of Shavers",
    price: "From ₹1,649",
    image: "/products/shaver.png",
    link: "/disclaimer",
  },
  {
    name: "ViewSonic Monitors",
    price: "From ₹8,999",
    image: "/products/monitor1.png",
    link: "/disclaimer",
  },
  {
    name: "Printers",
    price: "From ₹2,390",
    image: "/products/printer.png",
    link: "/disclaimer",
  },
];

const BestOfElectronics = () => {
  const scrollRef = useRef(null);

  // Function to scroll the product list to the right
  // This function is triggered when the user clicks the right arrow button
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft += 300;
  };

  return (
    <div className="w-full bg-white p-4 mt-4">
      <div className="flex flex-col relative">
        <h2 className="text-xl font-semibold mb-4">Best of Electronics</h2>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto mt-6 scroll-smooth scrollbar-hide"
        >
          {products.map((product, index) => (
            <Link
              key={index}
              href={product.link}
              className="min-w-[160px] text-center block"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-36 h-36 object-contain mx-auto transition-transform duration-300 hover:scale-[1.05]"
              />
              <p className="mt-2 text-base font-medium">{product.name}</p>
              <p className="text-green-600 text-sm font-semibold">
                {product.price}
              </p>
            </Link>
          ))}
        </div>

        <button
          className="absolute right-0 top-10 bg-white border shadow-md rounded-full p-2"
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BestOfElectronics;