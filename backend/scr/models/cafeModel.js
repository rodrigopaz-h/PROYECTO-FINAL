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
    }
};

module.exports = CafeModel;
