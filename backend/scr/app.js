// src/app.js
const express = require('express');
const morgan = require('morgan');
// const userRoutes = require('./routes/userRoutes');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Rutas
//app.use('/api/users', userRoutes);

module.exports = app;
