import pool from '../db/config';

const BlogModel = {
    // Función para obtener todos los blogs
    async getAllBlogs() {
        const query = 'SELECT * FROM blogs';
        const result = await pool.query(query);
        return result.rows;
    },

    // Función para obtener un blog por ID
    async getBlogById(id) {
        const query = 'SELECT * FROM blogs WHERE id = $1';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }
};

export default BlogModel;
