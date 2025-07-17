"use client";
import React from "react";

// Sample deal sections data
// This data can be fetched from an API or database in a real application

const dealSections = [
  {
    title: "Make Your Home Stylish",
    products: [
      { name: "Home Temple", offer: "Top Collection", image: "/deals/home-temple.png", link: "/disclaimer" },
      { name: "Shoe Rack", offer: "Top Deals", image: "/deals/shoe-rack.png", link: "/disclaimer" },
      { name: "Wardrobes & More", offer: "Special Offer", image: "/deals/wardrobe.png", link: "/disclaimer" },
      { name: "Hammock Swings", offer: "Great Picks", image: "/deals/swing.png", link: "/disclaimer" },
    ],
  },
  {
    title: "Monsoon Ready Styles",
    products: [
      { name: "Men’s Slippers", offer: "Min. 70% Off", image: "/deals/slippers.png", link: "/disclaimer" },
      { name: "Men’s Sandals", offer: "Min. 70% Off", image: "/deals/sandals.png", link: "/disclaimer" },
      { name: "Pendants & Lockets", offer: "Min. 70% Off", image: "/deals/pendant.png", link: "/disclaimer" },
      { name: "Jewellery", offer: "Min. 70% Off", image: "/deals/jewellery.png", link: "/disclaimer" },
    ],
  },
  {
    title: "Trending Gadgets & Appliances",
    products: [
      { name: "Cameras", offer: "Special Offer", image: "/deals/camera.png", link: "/disclaimer" },
      { name: "Trimmers", offer: "Don't Miss", image: "/deals/trimmer.png", link: "/disclaimer" },
      { name: "Hair Dryers", offer: "Great Offer", image: "/deals/dryer.png", link: "/disclaimer" },
      { name: "Washing Machines", offer: "Best Deal", image: "/deals/washing-machine.png", link: "/disclaimer" },
    ],
  },
];

const DealsSection = () => {
  return (
    <div
      className="flex flex-col md:flex-row gap-4 w-full px-4 py-6 overflow-x-auto"
      style={{ backgroundColor: "#f5f5f5d7" }}
    > 
      {dealSections.map((section, idx) => (
        <div
          key={idx}
          className="p-6 w-full md:w-[425px] h-auto mx-0 flex-shrink-0 flex flex-col justify-between bg-white"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-xl">{section.title}</h3>
            <button className="text-white bg-blue-800 cursor-pointer text-base rounded-full h-6 w-6 flex items-center justify-center">
              &gt;
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-4 flex-grow">
            {section.products.map((prod, i) => (
              <a
                key={i}
                href={prod.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-200 rounded p-2 h-auto cursor-pointer"
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-40 object-contain mb-2 mt-2 transition-transform duration-300 hover:scale-[1.03]"
                />
                <p className="text-lg font-medium">{prod.name}</p>
                <p className="text-green-600 text-lg font-semibold">{prod.offer}</p>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DealsSection;
