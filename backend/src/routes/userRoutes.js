import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import * as userController from "../controllers/userController.js";

const router = express.Router();

// Rutas públicas para autenticación
router.post("/api/users/register", userController.createUser);
router.post("/api/users/login", userController.loginUser);
// router.post("/password-reset", userController.passwordResetRequest);

// // Rutas protegidas para perfil de usuario
router.get(
  "/api/users/profile",
  authMiddleware,
  userController.showUserProfile
);
router.put(
  "/api/users/profile",
  authMiddleware,
  userController.updateUserProfile
);

router.get("/", userController.getAllUsers);

export default router;
