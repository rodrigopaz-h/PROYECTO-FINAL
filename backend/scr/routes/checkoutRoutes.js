import express from "express";
import * as checkoutController from "../controllers/checkoutController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Rutas de carrito (protegidas)
router.get("/cart", authMiddleware, checkoutController.getCart);
router.post("/cart", authMiddleware, checkoutController.addToCart);
router.delete(
  "/cart/:productId",
  authMiddleware,
  checkoutController.removeFromCart,
);

// Rutas de proceso de checkout
router.post(
  "/shipping-address",
  authMiddleware,
  checkoutController.saveShippingAddress,
);
router.post(
  "/shipping-method",
  authMiddleware,
  checkoutController.saveShippingMethod,
);
router.post("/payment", authMiddleware, checkoutController.processPayment);

export default router;
