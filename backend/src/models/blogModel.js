import { pool } from "../db/config.js";

const BlogModel = {
  // Función para obtener todos los blogs
  async getAllBlogs() {
    const query =
      "SELECT title, description, imgSrc, authorImg, authorName, link FROM blog_posts";
    const result = await pool.query(query);
    return result.rows;
  },

  // Función para obtener un blog por ID
  async getBlogById(id) {
    const query = "SELECT * FROM blog_posts WHERE id = $1";
    const result = await pool.query(query, [id]);
    return result.rows[0];
  },

  // Función para crear un nuevo blog
  async createBlog({ title, content, author }) {
    const query = `
        INSERT INTO blog_posts (title, content, author, created_at)
        VALUES ($1, $2, $3, NOW())
        RETURNING *;
      `;
    const values = [title, content, author];
    const result = await pool.query(query, values);
    return result.rows[0]; // Devolvemos el nuevo blog creado
  },

  // Función para eliminar un blog por ID
  async deleteBlogById(id) {
    const query = "DELETE FROM blog_posts WHERE id = $1 RETURNING *";
    const result = await pool.query(query, [id]);
    return result.rowCount > 0; // Retorna true si se eliminó correctamente
  },
};

export default BlogModel;
