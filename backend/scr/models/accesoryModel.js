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
    }
};

module.exports = AccessoryModel;
