// src/components/RestaurantDetail.jsx

import React, { useState } from 'react';
import { useCartContext } from '../contexts/CartContext';

const RestaurantDetail = ({ menu }) => {
  const { addToCart } = useCartContext();
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (item) => {
    const newItem = {
      ...item,
      quantity,
    };
    addToCart(newItem);
    alert(`${item.name} added to cart`);
    setQuantity(1);  // Reset quantity after adding
  };
const restaurantsList = [
    {
      id: 1,
      name: "The Pizza Place",
      menu: [
        { id: 1, name: "Margherita", price: 250 },
        { id: 2, name: "Pepperoni", price: 280 },
      ],
    },
    {
      id: 2,
      name: "Sushi World",
      menu: [
        { id: 3, name: "California Roll", price: 280 },
        { id: 4, name: "Tuna Sashimi", price: 300 },
      ],
    },
    {
      id: 3,
      name: "Burger Joint",
      menu: [
        { id: 5, name: "Cheeseburger", price: 280 },
      ],
    },
    {
      id: 4,
      name: "Pasta Paradise",
      menu: [
        { id: 6, name: "Spaghetti Bolognese", price: 290 },
      ],
    },
    {
      id: 5,
      name: "Taco Town",
      menu: [
        { id: 7, name: "Beef Tacos", price: 250 },
      ],
    },
    {
      id: 6,
      name: "BBQ Nation",
      menu: [
        { id: 8, name: "Ribs", price: 290 },
      ],
    },
    {
      id: 7,
      name: "Vegan Delight",
      menu: [
        { id: 9, name: "Vegan Burger", price: 280 },
      ],
    },
    {
      id: 8,
      name: "The Salad Bar",
      menu: [
        { id: 10, name: "Caesar Salad", price: 250 },
      ],
    },
    {
      id: 9,
      name: "Indian Feast",
      menu: [
        { id: 11, name: "Butter Chicken", price: 290 },
      ],
    },
    {
      id: 10,
      name: "Steak House",
      menu: [
        { id: 12, name: "Ribeye Steak", price: 300 },
      ],
    },
  ];

  return (
    <div>
      <h1>Menu</h1>
      {menu.map((item) => (
        <div key={item.id} className="menu-item">
          <h3>{item.name} - ₹{item.price}</h3>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default RestaurantDetail;
