import express from "express";
import * as productController from "../controllers/productController.js";

const router = express.Router();

// Rutas públicas para productos
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProduct);
router.get("/category/:category", productController.getProductsByCategory);

// Rutas protegidas para administración de productos
router.post("/create", authMiddleware, productController.createProduct);
router.put("/:id", authMiddleware, productController.updateProduct);
router.delete("/:id", authMiddleware, productController.deleteProduct);

export default router;
