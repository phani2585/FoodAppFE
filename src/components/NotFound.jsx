// NotFound.jsx
import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ marginTop: "20px" }}>404 - Page Not Found</Typography>
      <Button component={Link} to="/" variant="contained" sx={{ marginTop: "20px" }}>
        Back to Home
      </Button>
    </Container>
  );
};

export default NotFound;
