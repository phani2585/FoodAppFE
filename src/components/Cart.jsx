import React, { useState } from 'react';
import { useCartContext } from '../contexts/CartContext';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Modal,
  Snackbar,
  Alert,
  Paper,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete'; // For the delete button

const Cart = () => {
  const { cart, removeFromCart, resetCart } = useCartContext();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Calculate total amount
  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleOpenModal = () => {
    const total = calculateTotal();
    setTotalAmount(total);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleConfirmCheckout = () => {
    setSnackbarOpen(true);
    setOrderSuccess(true);
    setOpenModal(false);

    // Simulate a delay for the success message before redirecting and clearing the cart
    setTimeout(() => {
      resetCart(); // Reset cart after successful order
    }, 2000);  // Delay reset until after the Snackbar auto closes
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    setOrderSuccess(false);

    // Redirect to home after Snackbar closes
    navigate('/');
  };

  const handleDeleteItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleResetCart = () => {
    resetCart();
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3">Your Cart</Typography>

      {cart.length === 0 ? (
        <Typography variant="h6">Cart is empty</Typography>
      ) : (
        <List>
          {cart.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${item.name} x ${item.quantity}`}
                secondary={`₹${item.price * item.quantity}`}
              />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteItem(item.id)}
                sx={{ ml: 2 }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}

      {cart.length > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            variant="outlined"
            onClick={handleResetCart}
            sx={{
              backgroundColor: '#f44336',
              '&:hover': { backgroundColor: '#d32f2f' },
              color: '#fff',
            }}
          >
            Reset Cart
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#9c4dcc',
              '&:hover': { backgroundColor: '#6a1b9a' },
            }}
            onClick={handleOpenModal}
          >
            Checkout
          </Button>
        </Box>
      )}

      {/* Modal for Checkout */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Paper
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            p: 4,
          }}
        >
          <Typography variant="h4" id="modal-title" gutterBottom>
            Final Bill
          </Typography>
          <List>
            {cart.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`${item.name} x ${item.quantity}`}
                  secondary={`₹${item.price * item.quantity}`}
                />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Total Amount: ₹{totalAmount}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button onClick={handleCloseModal} variant="outlined" sx={{
    color: '#9c4dcc',
    borderColor: '#9c4dcc',
    '&:hover': {
      borderColor: '#7a1ea6',  // Darker shade on hover
      backgroundColor: 'rgba(156, 77, 204, 0.1)',  // Light purple background on hover
    }
  }}>
              Cancel
            </Button>
            <Button
              onClick={handleConfirmCheckout}
              variant="contained"
              sx={{
                backgroundColor: '#9c4dcc',
                '&:hover': { backgroundColor: '#6a1b9a' },
              }}
            >
              Confirm & Pay
            </Button>
          </Box>
        </Paper>
      </Modal>

      {/* Snackbar for Success Message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={orderSuccess ? 'success' : 'error'}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {orderSuccess
            ? `Order placed successfully! Amount to be paid: ₹${totalAmount}`
            : 'Something went wrong. Please try again.'}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Cart;
