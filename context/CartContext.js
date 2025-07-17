"use client";
import { createContext, useContext, useEffect, useState } from "react";

// CartContext.js
// This context provides a way to manage the shopping cart state across the application.
const CartContext = createContext();

// CartProvider component
// This component wraps the application and provides the cart state and functions to its children.
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
