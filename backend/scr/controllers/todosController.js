// controllers/todosController.js

const TodosModel = require('../models/todosModel');

// Obtener todos los productos (cafés y accesorios) de la vista 'todos'
async function getAllProducts(req, res) {
    try {
        const products = await TodosModel.getAllProducts();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al obtener los productos");
    }
}

module.exports = {
    getAllProducts
};
