import express from 'express';
import * as userController from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

// User registration route
router.post('/register', userController.registerUser);

// User login route
router.post('/login', userController.loginUser);

// Get user details route
router.get('/details', authMiddleware, userController.getUserDetails);

// Update user details route
router.put('/update', authMiddleware, userController.updateUser);

// Delete user route
router.delete('/delete', authMiddleware, userController.deleteUser);

export default router;