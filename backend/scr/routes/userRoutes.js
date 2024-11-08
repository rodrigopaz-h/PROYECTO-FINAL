import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import * as userController from "../controllers/userController.js";

const router = express.Router();

// Rutas públicas para autenticación
router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
// router.post("/password-reset", userController.passwordResetRequest);

// // Rutas protegidas para perfil de usuario
// router.get("/profile", authMiddleware, userController.showUserProfile);
// router.put("/profile", authMiddleware, userController.updateUserProfile);

export default router;
