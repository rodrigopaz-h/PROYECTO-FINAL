import express from 'express';
import morgan from 'morgan';
// import userRoutes from './routes/userRoutes.js';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Rutas
// app.use('/api/users', userRoutes);

export default app;
