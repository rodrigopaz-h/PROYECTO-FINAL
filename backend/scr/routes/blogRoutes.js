import express from "express";
import * as blogController from "../controllers/blogController.js";

const router = express.Router();

// Rutas para publicaciones del blog
router.get("/", blogController.getAllPosts);
router.get("/:id", blogController.getPost);

// Rutas protegidas para crear contenido en el blog
router.post("/create", authMiddleware, blogController.createPost);
export default router;
