"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Importing the ProductCard component to display individual products
// This component is used to render each product's details
const initialProducts = [
  {
    id: "boat-airdopes",
    name: 'boAt Airdopes Alpha with 35 HRS Playback, 13mm Drivers, Dual Mics ENx & Beast Mode Bluetooth  (Jet Black, In the Ear)',
    price: 799,
    originalPrice: 3490,
    discount: '77% off',
    rating: 4.4,
    reviews: 776,
    imageUrl: '/earbuds/boat.png',
    color: 'Black',
    category: 'True Wireless',
  },
  {
    id: "techio-tws",
    name: "Techio TWS AIRPOD black Earbud AN_1 Bluetooth  (Black, True Wireless)",
    price: 599,
    originalPrice: 1499,
    discount: '65% off',
    rating: 3.2,
    reviews: 0,
    imageUrl: '/earbuds/tws-airpod.png',
    color: 'Black',
    category: 'True Wireless',
  },
  {
    id: "sony-wf",
    name: "SONY WF-C710N Noise Cancellation Wireless Earbuds with AI Call Quality, 30Hrs Battery Bluetooth  (Pink, In the Ear)",
    price: 7990,
    originalPrice: 12999,
    discount: '38% off',
    rating: 4.8,
    reviews: 5,
    imageUrl: '/earbuds/sony-wf.png',
    color: 'Pink',
    category: 'In the Ear',
  },
  {
    id: "bolt-z",
    name: "Boult Z40 with Zen ENC Mic, 60H Battery Life, Low Latency Gaming, Made In India, 5.3 Bluetooth",
    price: 999,
    originalPrice: 4999,
    discount: '80% off',
    rating: 4.1,
    reviews: 400,
    imageUrl: '/earbuds/bolt.png',
    color: 'Brown',
    category: 'In the Ear',
  },
  {
    id: "Boult-Astra",
    name: "Boult Astra with Quad Mic ENC, 48Hrs Battery, Low Latency Gaming, Made in India, 5.3v Bluetooth",
    price: 1199,
    originalPrice: 3499,
    discount: '65%  off',
    rating: 4.2,
    reviews: 1200,
    imageUrl: '/earbuds/bolt-astra.png',
    color: 'White Opal',
    category: 'True Wireless',
  },
  {
    id: "navo-buds",
    name: "Number Navo Buds X1 w/ 50H Playtime, Dual Pairing, 13mm Speakers, ENC, 45ms Low Latency Bluetooth",
    price: 599,
    originalPrice: 3999,
    discount: '85%  off',
    rating: 3.7,
    reviews: 938,
    imageUrl: '/earbuds/navo.png',
    color: 'Black Sun',
    category: 'In the Ear',
  },
  {
    id: "trigger",
    name: "TRIGGR Ultrabuds N4 with Premium Finish, Rubber Grip Design, 40H Battery, 13 mm Drivers Bluetooth",
    price: 899,
    originalPrice: 1999,
    discount: '55%  off',
    rating: 4.2,
    reviews: 278,
    imageUrl: '/earbuds/triger.png',
    color: 'Jungle Green',
    category: 'True Wireless',
  },
  {
    id: "mivi-duopods",
    name: "Mivi Duopods K6, 50Hrs PT, HD Call, Fast Charging, 50ms Latency, IPX4,Voice Asst.5.3v Bluetooth Gaming",
    price: 699,
    originalPrice: 3999,
    discount: '82%  off',
    rating: 4.2,
    reviews: 693,
    imageUrl: '/earbuds/mivi.png',
    color: 'Black',
    category: 'True Wireless',
  },
];

const sortOptions = [
  "Popularity",
  "Price -- Low to High",
  "Price -- High to Low",
  "Newest First",
  "Discount",
];

// HeadphonesPage component
// This component displays a list of headphones available for purchase, with sorting options.
const HeadphonesPage = () => {
  const [sortOption, setSortOption] = useState("Popularity");

  const sortedProducts = [...initialProducts].sort((a, b) => {
    if (sortOption === "Price -- Low to High") return a.price - b.price;
    if (sortOption === "Price -- High to Low") return b.price - a.price;
    if (sortOption === "Newest First") return b.id.localeCompare(a.id);
    if (sortOption === "Discount") {
      const discA = parseInt(a.discount);
      const discB = parseInt(b.discount);
      return discB - discA;
    }
    return 0;
  });

  return (
    <div className="p-4 max-w-screen-xl mx-auto bg-white mt-1 mb-1">
      <div className="mb-4 text-sm text-gray-600">
        <Link href="/">Home</Link> &gt; Audio & Video &gt; Headset
      </div>

      {/* <h1 className="text-2xl font-semibold mb-4">Headphones</h1> */}
      {/* Sort Buttons */}
      <div className="mb-4 text-sm">
        <span>Sort By: </span>
        {sortOptions.map(option => (
          <button
            key={option}
            className={`mr-2 ${sortOption === option ? "underline font-semibold text-blue-700" : ""}`}
            onClick={() => setSortOption(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map(product => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="bg-white p-3 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer group">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-contain mb-2"
              />
              <p className="text-sm text-gray-400">Sponsored</p>
              <h2
                className="text-sm font-medium mb-1 truncate group-hover:text-blue-500 transition-colors duration-200"
                title={product.name}
              >
                {product.name}
              </h2>
              <div className="text-xs text-gray-500 mb-1">
                {product.color}, {product.category}
              </div>
              <div className="flex items-center mb-1">
                <span className="text-black font-semibold mr-2">₹{product.price}</span>
                <span className="line-through text-gray-400 text-xs">₹{product.originalPrice}</span>
                <span className="ml-2 text-green-600 text-xs">{product.discount}</span>
              </div>
              <div className="text-xs text-gray-600">{product.rating} ★ ({product.reviews})</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeadphonesPage;

