import express from "express";
import * as blogController from "../controllers/blogController.js";

const router = express.Router();

// Rutas para publicaciones del blog
router.get("/", blogController.getAllBlogsController);
router.get("/:id", blogController.getBlogByIdController);

// // Rutas protegidas para crear contenido en el blog
// router.post("/create", authMiddleware, blogController.createPost);
// router.delete("/:id", authMiddleware, blogController.deletePost);

export default router;
