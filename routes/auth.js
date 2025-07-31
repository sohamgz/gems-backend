const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
} = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');

// Auth Routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// User Routes
router.get('/users', protect, getAllUsers);
router.get('/users/:id', protect, getUserById);
router.put('/users/:id', protect, updateUser);

module.exports = router;
