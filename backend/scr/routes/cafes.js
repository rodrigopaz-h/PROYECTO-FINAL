// routes/cafes.js

const express = require('express');
const router = express.Router();
const cafeController = require('../controllers/cafeController');

// Ruta para obtener todos los cafés
router.get('/cafes', cafeController.getAllCafes);

// Ruta para obtener un café por ID
router.get('/cafes/:id', cafeController.getCafeById);

// Ruta para crear un nuevo café
router.post('/cafes', cafeController.createCafe);

// Ruta para actualizar un café por ID
router.put('/cafes/:id', cafeController.updateCafe);

// Ruta para eliminar un café por ID
router.delete('/cafes/:id', cafeController.deleteCafe);

module.exports = router;
