import React, { useState, useDeferredValue } from "react";
import { Link } from "react-router-dom";
import { TextField, Card, CardContent, Typography, Button, Container, Grid, CardMedia } from "@mui/material";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);

  // Static restaurant data for 10 restaurants with images
  const restaurants = [
    {
      id: 1,
      name: "The Pizza Place",
      category: "Pizza",
      rating: 4.5,
      numRatings: 150,
      avgPrice: 20,
      image: "/images/pizza.jpg",
    },
    {
      id: 2,
      name: "Sushi World",
      category: "Sushi",
      rating: 4.8,
      numRatings: 200,
      avgPrice: 30,
      image: "/images/sushi.jpg",
    },
    {
      id: 3,
      name: "Burger Joint",
      category: "Burgers",
      rating: 4.3,
      numRatings: 180,
      avgPrice: 15,
      image: "/images/burger.jpg",
    },
    {
      id: 4,
      name: "Pasta Paradise",
      category: "Pasta",
      rating: 4.6,
      numRatings: 120,
      avgPrice: 18,
      image: "/images/pasta.jpg",
    },
    {
      id: 5,
      name: "Taco Town",
      category: "Mexican",
      rating: 4.7,
      numRatings: 250,
      avgPrice: 12,
      image: "/images/taco.jpg",
    },
    {
      id: 6,
      name: "BBQ Nation",
      category: "BBQ",
      rating: 4.4,
      numRatings: 100,
      avgPrice: 25,
      image: "/images/bbq.jpg",
    },
    {
      id: 7,
      name: "Vegan Delight",
      category: "Vegan",
      rating: 4.9,
      numRatings: 220,
      avgPrice: 22,
      image: "/images/veg.jpg",
    },
    {
      id: 8,
      name: "The Salad Bar",
      category: "Salads",
      rating: 4.2,
      numRatings: 90,
      avgPrice: 14,
      image: "/images/salad.jpg",
    },
    {
      id: 9,
      name: "Indian Feast",
      category: "Indian",
      rating: 4.8,
      numRatings: 300,
      avgPrice: 20,
      image: "/images/indian.jpg",
    },
    {
      id: 10,
      name: "Steak House",
      category: "Steak",
      rating: 4.7,
      numRatings: 110,
      avgPrice: 35,
      image: "/images/steak.jpg",
    },
  ];
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(deferredSearchQuery.toLowerCase())
  );

  return (
    <div>
      <Container sx={{ paddingTop: "20px" }}>
        <TextField
          label="Search for a restaurant..."
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ marginBottom: "20px", backgroundColor: "#fff" }}
        />
        <Grid container spacing={3}>
          {filteredRestaurants.map((restaurant) => (
            <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
              <Card sx={{ boxShadow: 3, backgroundColor: "#f3e5f5" }}>
                <CardMedia
                  component="img"
                  alt={restaurant.name}
                  height="200"
                  image={restaurant.image}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom sx={{ color: "#6a1b9a", fontWeight: "bold" }}>
                    {restaurant.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {restaurant.category} | Rating: {restaurant.rating} ({restaurant.numRatings} reviews)
                  </Typography>
                  <Button
                    component={Link}
                    to={`/restaurant/${restaurant.id}`}
                    variant="contained"
                    sx={{
                      backgroundColor: "#6a1b9a",
                      "&:hover": { backgroundColor: "#9c4dcc" },
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
