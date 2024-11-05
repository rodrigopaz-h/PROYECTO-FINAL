// models/CafeModel.js

const pool = require('../db/config');

const CafeModel = {
    // Obtener todos los cafés
    async getAllCafes() {
        const query = 'SELECT * FROM cafes';
        const result = await pool.query(query);
        return result.rows;
    },

    // Obtener un café por ID
    async getCafeById(id) {
        const query = 'SELECT * FROM cafes WHERE id = $1';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    },

    // Crear un nuevo café
    async createCafe(nombre, origen, descripcion, precio, imagen_url, stock, producto_id) {
        const query = `
            INSERT INTO cafes (nombre, origen, descripcion, precio, imagen_url, stock, producto_id) 
            VALUES ($1, $2, $3, $4, $5, $6, $7) 
            RETURNING *`;
        const values = [nombre, origen, descripcion, precio, imagen_url, stock, producto_id];
        const result = await pool.query(query, values);
        return result.rows[0];
    },

    // Actualizar un café
    async updateCafe(id, nombre, origen, descripcion, precio, imagen_url, stock, producto_id) {
        const query = `
            UPDATE cafes 
            SET nombre = $1, origen = $2, descripcion = $3, precio = $4, imagen_url = $5, stock = $6, producto_id = $7
            WHERE id = $8
            RETURNING *`;
        const values = [nombre, origen, descripcion, precio, imagen_url, stock, producto_id, id];
        const result = await pool.query(query, values);
        return result.rows[0];
    },

    // Eliminar un café
    async deleteCafe(id) {
        const query = 'DELETE FROM cafes WHERE id = $1 RETURNING *';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }
};

module.exports = CafeModel;
