import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes';
import adminRoutes from './routes/adminRoutes';
import raffleRoutes from './routes/raffleRoutes';
import { dbConfig } from './config/dbConfig';

const app = express();

// Database connection
dbConfig();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/raffles', raffleRoutes);

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

export default app;