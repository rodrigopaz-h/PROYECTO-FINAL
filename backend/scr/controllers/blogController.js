import { getAllBlogs, getBlogById } from '../models/blogModel.js';

export const getAllBlogsController = async (req, res) => {
    try {
        const blogs = await getAllBlogs();
        res.json(blogs);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al obtener los blogs");
    }
};

export const getBlogByIdController = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const blog = await getBlogById(id);
        if (blog) {
            res.json(blog);
        } else {
            res.status(404).send("Blog no encontrado");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al obtener el blog");
    }
};