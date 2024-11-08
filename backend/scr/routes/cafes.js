const express = require("express");
const router = express.Router();
const cafeController = require("../controllers/cafeController");

// Ruta para obtener todos los cafés
router.get("/cafes", cafeController.getAllCafes);

// Ruta para obtener un café por ID
router.get("/cafes/:id", cafeController.getCafeById);

//opcionales
// 1. ruta para ediatr cafe
// 2. ruta para eliminar cafe

module.exports = router;

//este modulo se debe cambaira  ES module
