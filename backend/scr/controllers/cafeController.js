// controllers/cafeController.js

const CafeModel = require('../models/cafeModel');

// Obtener todos los cafés
async function getAllCafes(req, res) {
    try {
        const cafes = await CafeModel.getAllCafes();
        res.json(cafes);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al obtener los cafés");
    }
}

// Obtener un café por ID
async function getCafeById(req, res) {
    const { id } = req.params;
    try {
        const cafe = await CafeModel.getCafeById(id);
        if (!cafe) {
            return res.status(404).send("Café no encontrado");
        }
        res.json(cafe);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al obtener el café");
    }
}

// Crear un nuevo café
async function createCafe(req, res) {
    const { nombre, origen, descripcion, precio, imagen_url, stock, producto_id } = req.body;
    try {
        const newCafe = await CafeModel.createCafe(nombre, origen, descripcion, precio, imagen_url, stock, producto_id);
        res.status(201).json(newCafe);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al crear el café");
    }
}

// Actualizar un café por ID
async function updateCafe(req, res) {
    const { id } = req.params;
    const { nombre, origen, descripcion, precio, imagen_url, stock, producto_id } = req.body;
    try {
        const updatedCafe = await CafeModel.updateCafe(id, nombre, origen, descripcion, precio, imagen_url, stock, producto_id);
        if (!updatedCafe) {
            return res.status(404).send("Café no encontrado");
        }
        res.json(updatedCafe);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al actualizar el café");
    }
}

// Eliminar un café por ID
async function deleteCafe(req, res) {
    const { id } = req.params;
    try {
        const deletedCafe = await CafeModel.deleteCafe(id);
        if (!deletedCafe) {
            return res.status(404).send("Café no encontrado");
        }
        res.send(`Café con id ${id} eliminado`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al eliminar el café");
    }
}

module.exports = {
    getAllCafes,
    getCafeById,
    createCafe,
    updateCafe,
    deleteCafe
};
