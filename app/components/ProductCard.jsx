"use client";
import React from "react";
import Link from "next/link";

// ProductCard component
// This component displays individual product details including image, name, price, and ratings.
const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white p-3 shadow-sm hover:shadow-md transition-shadow duration-200">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-contain mb-2"
        />
        <p className='text-sm text-gray-400'>Sponsored</p>
        <h2 className="text-sm font-medium mb-1 truncate" title={product.name}>
          {product.name}
        </h2>
        <div className="text-xs text-gray-500 mb-1">
          {product.color}, {product.category}
        </div>
        <div className="flex items-center mb-1">
          <span className="text-green-600 font-semibold mr-2">
            ₹{product.price}
          </span>
          <span className="line-through text-gray-400 text-xs">
            ₹{product.originalPrice}
          </span>
          <span className="ml-2 text-green-600 text-xs">{product.discount}</span>
        </div>
        <div className="text-xs text-gray-600">
          {product.rating} ★ ({product.reviews})
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
