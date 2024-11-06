// models/TodosModel.js

const pool = require('../db/config');

const TodosModel = {
    // Obtener todos los productos (cafés y accesorios) de la vista 'todos'
    async getAllProducts() {
        const query = 'SELECT * FROM todos';
        const result = await pool.query(query);
        return result.rows;
    }
};

module.exports = TodosModel;
