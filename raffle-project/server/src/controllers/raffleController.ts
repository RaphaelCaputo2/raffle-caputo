import express from 'express';
import { Raffle } from '../models/raffleModel';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

// Get all raffles
router.get('/', async (req, res) => {
  try {
    const raffles = await Raffle.find();
    res.json(raffles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one raffle
router.get('/:id', getRaffle, (req, res) => {
  res.json(res.raffle);
});

// Create one raffle
router.post('/', authMiddleware, async (req, res) => {
  const raffle = new Raffle({
    name: req.body.name,
    photo: req.body.photo,
    tickets: req.body.tickets,
  });

  try {
    const newRaffle = await raffle.save();
    res.status(201).json(newRaffle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one raffle
router.patch('/:id', authMiddleware, getRaffle, async (req, res) => {
  if (req.body.name != null) {
    res.raffle.name = req.body.name;
  }

  if (req.body.photo != null) {
    res.raffle.photo = req.body.photo;
  }

  if (req.body.tickets != null) {
    res.raffle.tickets = req.body.tickets;
  }

  try {
    const updatedRaffle = await res.raffle.save();
    res.json(updatedRaffle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one raffle
router.delete('/:id', authMiddleware, getRaffle, async (req, res) => {
  try {
    await res.raffle.remove();
    res.json({ message: 'Deleted Raffle' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getRaffle(req, res, next) {
  let raffle;
  try {
    raffle = await Raffle.findById(req.params.id);
    if (raffle == null) {
      return res.status(404).json({ message: 'Cannot find raffle' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.raffle = raffle;
  next();
}

export default router;