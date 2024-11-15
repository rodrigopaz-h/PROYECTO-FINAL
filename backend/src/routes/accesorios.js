import express from "express";
import accessoryController from "../controllers/accessoryController.js";

const router = express.Router();

// Ruta para obtener todos los accesorios
router.get("/", accessoryController.getAllAccessories);

// Ruta para obtener un accesorio por ID
router.get("/:id", accessoryController.getAccessoryById);

export default router;

//opcionales
// 1. ruta para ediatr accesorios
// 2. ruta para eliminar accesorios
