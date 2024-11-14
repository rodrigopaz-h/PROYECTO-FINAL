import express from "express";
import userRoutes from "./userRoutes.js";
import productRoutes from "./productRoutes.js";
import blogRoutes from "./blogRoutes.js";
import checkoutRoutes from "./checkoutRoutes.js";
import cafes from "./cafes.js";
import accesorios from "./accesorios.js";

const router = express.Router();

// Definición correcta de la ruta /hello
router.get("/hello", (req, res) => {
  res.status(200).send("Hello, World!");
});

// Rutas principales
router.use("/api/users", userRoutes);
router.use("/api/products", productRoutes);
router.use("/api/blog", blogRoutes);
router.use("/api/checkout", checkoutRoutes);
router.use("/api/cafes", cafes);
router.use("/api/accesorios", accesorios);

export default router;
