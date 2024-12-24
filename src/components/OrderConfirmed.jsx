// OrderConfirmed.jsx
import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrderConfirmed = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ marginTop: "20px" }}>
        Order Placed Successfully!
      </Typography>
      <Typography variant="h6" sx={{ marginTop: "10px" }}>
        Your order is being processed. You will receive a notification once it is ready.
      </Typography>
      <Button
        variant="contained"
        sx={{ marginTop: "20px" }}
        onClick={handleBackToHome}
      >
        Back to Home
      </Button>
    </Container>
  );
};

export default OrderConfirmed;
