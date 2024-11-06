const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/usuarios', userController.createUser);

router.post('/usuarios/login', userController.loginUser);

router.get('/usuarios', (req, res) => {
    res.send("Lista de usuarios");
});

router.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Usuario con id ${id}`);
});

router.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { email, contrasena } = req.body;
    res.send(`Usuario con id ${id} actualizado`);
});

router.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Usuario con id ${id} eliminado`);
});

module.exports = router;
