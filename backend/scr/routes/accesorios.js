// routes/accesorios.js

const express = require('express');
const router = express.Router();
const accessoryController = require('../controllers/accessoryController');

// Ruta para obtener todos los accesorios
router.get('/accesorios', accessoryController.getAllAccessories);

// Ruta para obtener un accesorio por ID
router.get('/accesorios/:id', accessoryController.getAccessoryById);

// Ruta para crear un nuevo accesorio
router.post('/accesorios', accessoryController.createAccessory);

// Ruta para actualizar un accesorio por ID
router.put('/accesorios/:id', accessoryController.updateAccessory);

// Ruta para eliminar un accesorio por ID
router.delete('/accesorios/:id', accessoryController.deleteAccessory);

module.exports = router;
