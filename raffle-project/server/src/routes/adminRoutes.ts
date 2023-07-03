import express from 'express';
import * as adminController from '../controllers/adminController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

// Admin registration route
router.post('/register', adminController.registerAdmin);

// Admin login route
router.post('/login', adminController.loginAdmin);

// Middleware to authenticate all the following routes
router.use(authMiddleware);

// Admin dashboard route
router.get('/dashboard', adminController.getDashboard);

// CRUD operations for raffles
router.post('/raffle', adminController.createRaffle);
router.get('/raffle', adminController.getRaffles);
router.get('/raffle/:id', adminController.getRaffle);
router.put('/raffle/:id', adminController.updateRaffle);
router.delete('/raffle/:id', adminController.deleteRaffle);

// CRUD operations for users
router.post('/user', adminController.createUser);
router.get('/user', adminController.getUsers);
router.get('/user/:id', adminController.getUser);
router.put('/user/:id', adminController.updateUser);
router.delete('/user/:id', adminController.deleteUser);

export default router;