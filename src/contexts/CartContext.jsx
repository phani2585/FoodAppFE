// src/contexts/CartContext.js

import React, { createContext, useContext, useState } from 'react';

// Create the cart context
const CartContext = createContext();

// Custom hook for using cart context
export const useCartContext = () => {
  return useContext(CartContext);
};

// CartProvider to manage cart state
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add items individually
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemIndex) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== itemIndex));
  };

  const clearCart = () => setCart([]);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};
