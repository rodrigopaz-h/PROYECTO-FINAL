import express from "express";
import cafeController from "../controllers/cafeController.js";

const router = express.Router();

// Ruta para obtener todos los cafés
router.get("/cafes", cafeController.getAllCafes);

// Ruta para obtener un café por ID
router.get("/cafes/:id", cafeController.getCafeById);

//opcionales
// 1. ruta para ediatr cafe
// 2. ruta para eliminar cafe

export default router;

//este modulo se debe cambaira  ES module
