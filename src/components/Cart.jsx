import React, { useState } from "react";
import { Container, Typography, Button, List, ListItem, ListItemText, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const handleQuantityChange = (itemId, quantity) => {
    const updatedCart = { ...cart, [itemId]: quantity };
    setCart(updatedCart);

    const newTotal = Object.keys(updatedCart).reduce((sum, itemId) => {
      const item = restaurant.menu.find((item) => item.id === parseInt(itemId));
      return sum + parseInt(updatedCart[itemId]) * parseInt(item.price.replace('₹', ''));
    }, 0);

    setTotal(newTotal);
  };

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ marginTop: "20px" }}>Your Cart</Typography>
      <List>
        {Object.keys(cart).map((itemId) => {
          const item = restaurant.menu.find((item) => item.id === parseInt(itemId));
          return (
            <ListItem key={itemId}>
              <ListItemText primary={`${item.name} - ₹${item.price}`} />
              <TextField
                type="number"
                label="Qty"
                variant="outlined"
                size="small"
                value={cart[itemId]}
                onChange={(e) => handleQuantityChange(itemId, e.target.value)}
              />
            </ListItem>
          );
        })}
      </List>
      <Typography variant="h6" sx={{ marginTop: "20px" }}>Total: ₹{total}</Typography>
      <Button variant="contained" sx={{ marginTop: "20px" }} onClick={handleProceedToCheckout}>Proceed to Checkout</Button>
    </Container>
  );
};

export default Cart;
