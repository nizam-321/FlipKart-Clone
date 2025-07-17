
"use client";
import React, { useRef } from "react";
// Sample products data
const products = [
  {
    name: "Trademill, Exercise",
    price: "Upto 70% Off",
    image: "/sportsHealth/tardemill.png",
    link: "#",
  },
  {
    name: "Non-Geared Cycles",
    price: "Upto 40% Off",
    image: "/sportsHealth/cycle.png",
    link: "#",
  },
  {
    name: "Yoga Mat",
    price: "From ₹159",
    image: "/sportsHealth/yogaMat.png",
    link: "#",
  },
  {
    name: "Best of Action Toys",
    price: "Upto 70% Off",
    image: "/sportsHealth/actionToys.png",
    link: "#",
  },
  {
    name: "Puzzels & Cubes",
    price: "From ₹79",
    image: "/sportsHealth/puzzle.png",
    link: "#",
  },
  {
    name: "Food Spreads",
    price: "Upto 75% Off",
    image: "/sportsHealth/food.png",
    link: "#",
  },
  {
    name: "Tea Powder",
    price: "Upto 60% Off",
    image: "/sportsHealth/tea.png",
    link: "#",
  },
];

// SportsHealth component
// This component displays a list of sports and health-related products with a horizontal scroll feature
const SportsHealth = () => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="w-full bg-white p-4 mt-4">
      <div className="flex flex-col relative">
        <h2 className="text-xl font-semibold mb-4">Sports, Health, Toys and More</h2>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto mt-6 scroll-smooth scrollbar-hide"
        >
          {products.map((product, index) => (
            <a
              key={index}
              href={product.link}
              className="min-w-[160px] text-center"
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
            </a>
          ))}
        </div>

        {/* Scroll Button */}
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

export default SportsHealth;
