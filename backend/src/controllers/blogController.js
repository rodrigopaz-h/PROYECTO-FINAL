import BlogModel from "../models/blogModel.js";

export const getAllBlogsController = async (req, res) => {
  try {
    const blogs = await BlogModel.getAllBlogs();
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al obtener los blogs");
  }
};

export const getBlogByIdController = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const blog = await BlogModel.getBlogById(id);
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

//Acá debe ir la función que crea un nuevo post
export const createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    // Validación básica
    if (!title || !content || !author) {
      return res
        .status(400)
        .send("Todos los campos son obligatorios: título, contenido y autor.");
    }

    // Crear un nuevo post usando el modelo
    const newPost = await BlogModel.createBlog({ title, content, author });

    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al crear el blog");
  }
};

//aca deberia ir un postDelete
export const deletePost = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    // Validación básica de id
    if (isNaN(id)) {
      return res.status(400).send("El ID proporcionado no es válido");
    }

    // Llamar al modelo para eliminar el blog por id
    const deleted = await BlogModel.deleteBlogById(id);

    if (deleted) {
      res.send(`El blog con ID ${id} fue eliminado correctamente.`);
    } else {
      res.status(404).send("Blog no encontrado");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al eliminar el blog");
  }
};
