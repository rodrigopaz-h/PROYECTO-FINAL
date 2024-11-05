const express = require('express');
const router = express.Router();
const accessoryController = require('../controllers/accessoryController');

// Ruta para obtener todos los accesorios
router.get('/accesorios', accessoryController.getAllAccessories);

// Ruta para obtener un accesorio por ID
router.get('/accesorios/:id', accessoryController.getAccessoryById);

module.exports = router;
