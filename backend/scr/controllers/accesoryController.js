// controllers/accessoryController.js

const AccessoryModel = require('../models/accessoryModel');

// Obtener todos los accesorios
async function getAllAccessories(req, res) {
    try {
        const accessories = await AccessoryModel.getAllAccessories();
        res.json(accessories);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al obtener los accesorios");
    }
}

// Obtener un accesorio por ID
async function getAccessoryById(req, res) {
    const { id } = req.params;
    try {
        const accessory = await AccessoryModel.getAccessoryById(id);
        if (!accessory) {
            return res.status(404).send("Accesorio no encontrado");
        }
        res.json(accessory);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al obtener el accesorio");
    }
}

// Crear un nuevo accesorio
async function createAccessory(req, res) {
    const { nombre, origen, descripcion, precio, imagen_url, stock, producto_id } = req.body;
    try {
        const newAccessory = await AccessoryModel.createAccessory(nombre, origen, descripcion, precio, imagen_url, stock, producto_id);
        res.status(201).json(newAccessory);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al crear el accesorio");
    }
}

// Actualizar un accesorio por ID
async function updateAccessory(req, res) {
    const { id } = req.params;
    const { nombre, origen, descripcion, precio, imagen_url, stock, producto_id } = req.body;
    try {
        const updatedAccessory = await AccessoryModel.updateAccessory(id, nombre, origen, descripcion, precio, imagen_url, stock, producto_id);
        if (!updatedAccessory) {
            return res.status(404).send("Accesorio no encontrado");
        }
        res.json(updatedAccessory);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al actualizar el accesorio");
    }
}

// Eliminar un accesorio por ID
async function deleteAccessory(req, res) {
    const { id } = req.params;
    try {
        const deletedAccessory = await AccessoryModel.deleteAccessory(id);
        if (!deletedAccessory) {
            return res.status(404).send("Accesorio no encontrado");
        }
        res.send(`Accesorio con id ${id} eliminado`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al eliminar el accesorio");
    }
}

module.exports = {
    getAllAccessories,
    getAccessoryById,
    createAccessory,
    updateAccessory,
    deleteAccessory
};
