const pool = require('../db/config');

const AccessoryModel = {
    // Obtener todos los accesorios
    async getAllAccessories() {
        const query = 'SELECT * FROM accesorios';
        const result = await pool.query(query);
        return result.rows;
    },

    // Obtener un accesorio por ID
    async getAccessoryById(id) {
        const query = 'SELECT * FROM accesorios WHERE id = $1';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    },

    // Crear un nuevo accesorio
    async createAccessory(nombre, origen, descripcion, precio, imagen_url, stock, producto_id) {
        const query = `
            INSERT INTO accesorios (nombre, origen, descripcion, precio, imagen_url, stock, producto_id) 
            VALUES ($1, $2, $3, $4, $5, $6, $7) 
            RETURNING *`;
        const values = [nombre, origen, descripcion, precio, imagen_url, stock, producto_id];
        const result = await pool.query(query, values);
        return result.rows[0];
    },

    // Actualizar un accesorio por ID
    async updateAccessory(id, nombre, origen, descripcion, precio, imagen_url, stock, producto_id) {
        const query = `
            UPDATE accesorios 
            SET nombre = $1, origen = $2, descripcion = $3, precio = $4, imagen_url = $5, stock = $6, producto_id = $7
            WHERE id = $8
            RETURNING *`;
        const values = [nombre, origen, descripcion, precio, imagen_url, stock, producto_id, id];
        const result = await pool.query(query, values);
        return result.rows[0];
    },

    // Eliminar un accesorio por ID
    async deleteAccessory(id) {
        const query = 'DELETE FROM accesorios WHERE id = $1 RETURNING *';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }
};

module.exports = AccessoryModel;
