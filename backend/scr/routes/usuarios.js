const express = require('express');
const router = express.Router();

// Crear un nuevo usuario
router.post('/usuarios', (req, res) => {
    const { email, contrasena } = req.body;
    // Lógica para crear un usuario
    res.send("Usuario creado");
});

// Obtener todos los usuarios
router.get('/usuarios', (req, res) => {
    // Lógica para obtener todos los usuarios
    res.send("Lista de usuarios");
});

// Obtener un solo usuario por id
router.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    // Lógica para obtener un usuario por su id
    res.send(`Usuario con id ${id}`);
});

// Actualizar un usuario por id
router.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { email, contrasena } = req.body;
    // Lógica para actualizar un usuario
    res.send(`Usuario con id ${id} actualizado`);
});

// Eliminar un usuario por id
router.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    // Lógica para eliminar un usuario
    res.send(`Usuario con id ${id} eliminado`);
});

module.exports = router;
