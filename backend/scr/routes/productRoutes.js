import express from "express";
import * as todosController from "../controllers/todosController.js";

const router = express.Router();

// Rutas públicas para productos
router.get("/", todosController.getAllProducts);
// router.get("/:id", todosController.getProduct);
// router.get("/category/:category",todosControllerController.getProductsByCategory);

// // Rutas protegidas para administración de productos
// router.post("/create",authMiddleware,todosControllertController.createProduct);
// router.put("/:id", authMiddleware, todosControllerController.updateProduct);
// router.delete("/:id", authMiddleware, todosControllerController.deleteProduct);

export default router;
