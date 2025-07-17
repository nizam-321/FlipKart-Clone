
"use client";
import React, { useRef } from "react";

const products = [
  {
    name: "Cofee Powder",
    price: "Upto 80% Off",
    image: "/foodToys/cofee.png",
    link: "/disclaimer",
  },
  {
    name: "Top Selling Stationery",
    price: "From ₹49",
    image: "/foodToys/stationery.png",
    link: "/disclaimer",
  },
  {
    name: "Geared Cycles",
    price: "Upto 80% Off",
    image: "/foodToys/cycle.png",
    link: "/disclaimer",
  },
  {
    name: "Gym Essentials",
    price: "From ₹139",
    image: "/foodToys/gym.png",
    link: "/disclaimer",
  },
  {
    name: "Dry Fruits",
    price: "Upto 75% Off",
    image: "/foodToys/dryFruit.png",
    link: "/disclaimer",
  },
  {
    name: "Soft Toys",
    price: "Upto 70% Off",
    image: "/foodToys/toys.png",
    link: "/disclaimer",
  },
  {
    name: "Remote Control Toys",
    price: "Upto 70% Off",
    image: "/foodToys/remoteControlToys.png",
    link: "/disclaimer",
  },
];

const FoodsToyes = () => {
  const scrollRef = useRef(null);


  // Function to scroll the product list to the right
  // This function is triggered when the user clicks the right arrow button
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="w-full bg-white p-4 mt-4">
      <div className="flex flex-col relative">
        <h2 className="text-xl font-semibold mb-4">Beauty, Foods, Toys and More</h2>

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

export default FoodsToyes;
