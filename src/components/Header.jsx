import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#f3e5f5' }}>
      <Toolbar>
        {/* Brand name with custom style */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Lobster", cursive',  // Custom font for brand
            fontWeight: 'bold',
            letterSpacing: '2px',
            color: '#6a1b9a',  // Adjusted color for contrast
            flexGrow: 1,
            fontSize: '2.5rem',  // Larger font size for brand name
          }}
        >
          Food Finder
        </Typography>

        {/* Navigation buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/"
            variant="contained"
            sx={{
              backgroundColor: '#6a1b9a',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#9c4dcc',
              },
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/restaurant-list"
            variant="contained"
            sx={{
              backgroundColor: '#6a1b9a',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#9c4dcc',
              },
            }}
          >
            Restaurant List
          </Button>
          <Button
            component={Link}
            to="/cart"
            variant="contained"
            sx={{
              backgroundColor: '#6a1b9a',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#9c4dcc',
              },
            }}
          >
            Cart
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
