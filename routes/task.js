const express = require('express');
const router = express.Router();
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const protect = require('../middleware/authMiddleware');

//All routes below require the user to be authenticated

// Create a new task
router.post('/', protect, createTask);

// Get all tasks
router.get('/', protect, getTasks);

// Get task by ID
router.get('/:id', protect, getTaskById);

// Update a task
router.put('/:id', protect, updateTask);

// Delete a task
router.delete('/:id', protect, deleteTask);

module.exports = router;
