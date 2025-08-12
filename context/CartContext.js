"use client";
import { createContext, useContext, useEffect, useState } from "react";

// CartContext.js
// This context provides a way to manage the shopping cart state across the application.
const CartContext = createContext();

// CartProvider component
// This component wraps the application and provides the cart state and functions to its children.
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // useEffect hook to load the cart items from local storage when the component mounts.
  // It parses the stored cart items from local storage and sets them as the initial cart items state.
  // If there is no stored cart, an empty array is used as the initial state.
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // addToCart function
  // This function adds a product to the cart.
  // It creates a copy of the current cart items array and adds the new product to it.
  // The updated cart is then stored in local storage and the cartItems state is updated.
  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // removeFromCart function
  // This function removes an item from the cart.
  // It filters out the item with the specified ID from the cart items array.
  // The updated cart is then stored in local storage and the cartItems state is updated.
  // removeFromCart function
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };


// Ab jo bhi child component is CartProvider ke andar hoga, use:
// cartItems (current cart) addToCart() function removeFromCart() functionmil sakta hai.
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>   
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext); 
// Ye ek shortcut banaya gaya hai.
// Ab aap kisi bhi component me bas useCart() likh ke cart ka data aur functions le sakte ho.
