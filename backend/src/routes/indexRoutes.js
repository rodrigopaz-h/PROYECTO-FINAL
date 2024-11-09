import express from "express";
import userRoutes from "./userRoutes.js";
import productRoutes from "./productRoutes.js";
import blogRoutes from "./blogRoutes.js";
import checkoutRoutes from "./checkoutRoutes.js";
import cafes from "./cafes.js";
import accesorios from "./accesorios.js";
// import contactRoutes from "./contactRoutes.js";

const router = express.Router();

// Rutas principales
router.use("/users", userRoutes); //Faltan funciones en controller
router.use("/products", productRoutes); //Faltan funciones en controller
router.use("/blog", blogRoutes);
router.use("/checkout", checkoutRoutes);
router.use("/cafes", cafes);
router.use("/accesorios", accesorios);

// router.use("/contact", contactRoutes); esta ruta puede ser eliminada porque solo se renderiza desde el front

export default router;
