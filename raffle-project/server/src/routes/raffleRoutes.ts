import express from 'express';
import * as raffleController from '../controllers/raffleController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

// Route to create a new raffle
router.post('/create', authMiddleware, raffleController.createRaffle);

// Route to get all raffles
router.get('/', raffleController.getRaffles);

// Route to get a specific raffle by ID
router.get('/:id', raffleController.getRaffleById);

// Route to update a raffle by ID
router.put('/:id', authMiddleware, raffleController.updateRaffle);

// Route to delete a raffle by ID
router.delete('/:id', authMiddleware, raffleController.deleteRaffle);

// Route to add a photo to a raffle
router.post('/:id/photos', authMiddleware, raffleController.addPhotoToRaffle);

// Route to get all photos of a raffle
router.get('/:id/photos', raffleController.getRafflePhotos);

// Route to customize the number of raffle tickets
router.put('/:id/tickets', authMiddleware, raffleController.customizeRaffleTickets);

export default router;