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
  "/shipping-address",
  authMiddleware,
  checkoutController.saveShippingAddress
);
router.post(
  "/shipping-method",
  authMiddleware,
  checkoutController.saveShippingMethod
);
router.post("/payment", authMiddleware, checkoutController.processPayment);

export default router;
