"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    const itemsWithQty = items.map(item => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCartItems(itemsWithQty);
  }, []);

  // Handle item removal and quantity changes
  const handleRemove = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const handleQuantityChange = (id, delta) => {
    const updatedItems = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  // Calculate total price and discounts
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const originalPrice = cartItems.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0);
  const totalDiscount = originalPrice - totalPrice;

  return (
    <div className="max-w-6xl mx-auto bg-white mt-6 mb-6 p-8 shadow-sm">
      {/* Page Title */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center">
          <img src="/empty-cart.png" alt="Empty Cart" className="w-48 h-38 mb-8" />
          <p className="text-center text-gray-500">Your cart is empty</p>
          <Link href="/">
            <button className='bg-[#fb641b] cursor-pointer px-6 py-2 text-white mt-2 mb-4'>Shop Now</button>
          </Link>
        </div>
      ) : (  
        <div className="grid md:grid-cols-3 gap-6"> {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex gap-4 shadow-sm p-4  border-gray-200">
                <Link href={`/product/${item.id}`} className="block w-24 h-24 flex-shrink-0">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 object-contain"
                />
                </Link>
                <div className="flex-1">
                  
                  <h2 className="font-medium">
                    {item.name.split(" ").slice(0, 10).join(" ")}{item.name.split(" ").length > 10 ? "..." : ""}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {item.category} | {item.color}
                  </p>
                  <div className="flex items-center gap-2 text-sm mt-1"> {/* Price and discount */}
                    <span className="text-green-600 font-semibold">₹{item.price}</span>
                    <span className="line-through text-gray-400">₹{item.originalPrice}</span>
                    <span className="text-green-600">{item.discount}</span>
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    {item.rating} ★ ({item.reviews} reviews)
                  </div>
                 
                  <div className="mt-2 flex items-center gap-4">
                    <div className="flex items-center border rounded px-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="px-2 text-lg"
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="px-2 text-lg"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-gray-200 p-4 h-fit">
            <h2 className="font-semibold mb-2">PRICE DETAILS</h2>
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span>Price ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                <span>₹{originalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">− ₹{totalDiscount}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr className="my-2 text-gray-300" />
              <div className="flex justify-between font-semibold">
                <span>Total Amount</span>
                <span>₹{totalPrice}</span>
              </div>
              <p className="text-green-600 text-xs mt-2">
                You will save ₹{totalDiscount} on this order
              </p>
            </div>
            <button className="w-full mt-4 bg-[#fb641b] text-white py-2 rounded cursor-pointer">
              PLACE ORDER
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
