import React from "react";

// Sample categories data
// This data can be fetched from an API or database in a real application
const categories = [
  {
    name: "Grocery",
    img: "/categories/grocery.png",
    link: "/disclaimer",
  },
  {
    name: "Mobiles",
    img: "/categories/mobiles.png",
    link: "/disclaimer",
  },
  {
    name: "Fashion",
    img: "/categories/fashion.png",
    link: "/disclaimer",
  },
  {
    name: "Electronics",
    img: "/categories/electronics.png",
    link: "/disclaimer",
  },
  {
    name: "Home & Furniture",
    img: "/categories/home.png",
    link: "/disclaimer",
  },
  {
    name: "Appliances",
    img: "/categories/appliances.png",
    link: "/disclaimer",
  },
  {
    name: "Flight Bookings",
    img: "/categories/flight.png",
    link: "/disclaimer",
  },
  {
    name: "Beauty, Toys & More",
    img: "/categories/beauty.png",
    link: "/disclaimer",
  },
  {
    name: "Two Wheelers",
    img: "/categories/bike.png",
    link: "/disclaimer",
  },
];

const CategoryMenu = () => {
  return (
    <div className="bg-white py-3 mt-4 px-4 shadow-sm w-full">
      <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide
                      md:overflow-x-hidden md:justify-between md:gap-0"> {/* Category Items */}
        {categories.map((cat, idx) => (
          <a
            key={idx}
            href={cat.link}
            className="flex-shrink-0 flex flex-col items-center text-xs sm:text-sm font-medium hover:text-blue-600 transition w-20"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-14 h-14 object-contain mb-1"
            />
            <span className="text-center">{cat.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
