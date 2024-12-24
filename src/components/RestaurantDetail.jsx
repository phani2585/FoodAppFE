import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';
import { Box, Card, CardContent, Typography, TextField, Button, Grid, Snackbar, Alert } from '@mui/material';

const RestaurantDetail = () => {
  const { addToCart } = useCartContext();
  const { id } = useParams();
  const navigate = useNavigate();

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
  const restaurant = restaurantsList.find(r => r.id === parseInt(id));

  const [quantities, setQuantities] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleQuantityChange = (itemId, value) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: value > 0 ? value : 1,
    }));
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 1;
    const newItem = { ...item, quantity };
    addToCart(newItem);

    setSnackbarMessage(`${item.name} added to cart`);
    setSnackbarOpen(true);

    setQuantities((prev) => ({
      ...prev,
      [item.id]: 1,
    }));
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const goToCart = () => {
    navigate('/cart');
  };

  const goToRestaurantList = () => {
    navigate('/restaurant-list');
  };

  if (!restaurant) {
    return <Typography variant="h4" align="center">Restaurant not found</Typography>;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        {restaurant.name} Menu
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {restaurant.menu.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ₹{item.price}
                </Typography>

                <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <TextField
                    type="number"
                    label="Quantity"
                    variant="outlined"
                    size="small"
                    sx={{ width: '100px' }}
                    value={quantities[item.id] || 1}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    inputProps={{ min: 1 }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#6a1b9a',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#9c4dcc',
                      },
                    }}
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#9c4dcc',
            '&:hover': { backgroundColor: '#6a1b9a' }
          }}
          onClick={goToCart}
        >
          Go to Cart
        </Button>
        <Button
  variant="outlined"
  sx={{
    color: '#9c4dcc',
    borderColor: '#9c4dcc',
    '&:hover': {
      borderColor: '#7a1ea6',  // Darker shade on hover
      backgroundColor: 'rgba(156, 77, 204, 0.1)',  // Light purple background on hover
    }
  }}
  onClick={goToRestaurantList}
>
  Back to Restaurants
</Button>

      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RestaurantDetail;
