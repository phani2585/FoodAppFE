// src/components/Checkout.jsx

import React from 'react';
import { useCartContext } from '../contexts/CartContext';

const Checkout = () => {
  const { cart, calculateTotal, clearCart } = useCartContext();

  const handlePlaceOrder = () => {
    alert(`Order placed! Your total is ₹${calculateTotal()}`);
    clearCart();
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name} x {item.quantity} - ₹{item.price * item.quantity}</p>
            </div>
          ))}
          <h2>Total: ₹{calculateTotal()}</h2>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
};

export default Checkout;
