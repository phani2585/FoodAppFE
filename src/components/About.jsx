// About.jsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ paddingTop: '40px' }}>
      <Box>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          About Foodie Explorer
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '18px' }}>
          Foodie Explorer is your ultimate guide to discovering and enjoying the best restaurants around.
          Whether you’re looking for a cozy pizza place, a trendy sushi restaurant, or a gourmet steakhouse,
          we’ve got you covered. Explore the most popular eateries in your area, check out reviews, browse
          menus, and find the perfect place to satisfy your cravings.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '18px' }}>
          Our mission is to provide a seamless and intuitive experience for food lovers who want to explore
          new places to dine. We provide restaurant details such as ratings, categories, pricing, and a full
          menu for every place listed on our platform.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '18px' }}>
          Explore today, and discover your next favorite restaurant with Foodie Explorer.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
