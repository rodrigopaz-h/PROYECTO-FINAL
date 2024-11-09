const express = require("express");
const router = express.Router();
const accessoryController = require("../controllers/accessoryController");

// Ruta para obtener todos los accesorios
router.get("/accesorios", accessoryController.getAllAccessories);

// Ruta para obtener un accesorio por ID
router.get("/accesorios/:id", accessoryController.getAccessoryById);

module.exports = router;

//cambair a es module

//opcionales
// 1. ruta para ediatr accesorios
// 2. ruta para eliminar accesorios
