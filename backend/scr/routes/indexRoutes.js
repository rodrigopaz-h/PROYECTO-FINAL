import express from "express";
import userRoutes from "./userRoutes.js";
import productRoutes from "./productRoutes.js";
import blogRoutes from "./blogRoutes.js";
import checkoutRoutes from "./checkoutRoutes.js";
import contactRoutes from "./contactRoutes.js";

const router = express.Router();

// Rutas principales
router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/blog", blogRoutes);
router.use("/checkout", checkoutRoutes);
router.use("/contact", contactRoutes);

export default router;
