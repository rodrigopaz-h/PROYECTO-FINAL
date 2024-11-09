// routes/userRoutes.js
import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import * as userController from "../controllers/userController.js";

const router = express.Router();

// Rutas protegidas de usario
router.get("/profile", authMiddleware, userController.showUserProfile);
router.put("/profile", authMiddleware, userController.updateUserProfile);

export default router;
