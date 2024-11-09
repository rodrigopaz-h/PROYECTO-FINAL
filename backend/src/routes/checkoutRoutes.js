import express from "express";
import * as checkoutController from "../controllers/checkoutController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Rutas de carrito (protegidas)
router.get("/carrito", authMiddleware, checkoutController.getCart);
router.post("/carrito", authMiddleware, checkoutController.addToCart);
router.delete(
  "/carrito/:productId",
  authMiddleware,
  checkoutController.removeFromCart
);

// Rutas de proceso de checkout
router.post(
  "/direccion",
  authMiddleware,
  checkoutController.saveShippingAddress
);
router.post("/envio", authMiddleware, checkoutController.saveShippingMethod);
router.post("/pago", authMiddleware, checkoutController.processPayment);

export default router;
