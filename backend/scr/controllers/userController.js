const bcrypt = require('bcrypt');
const pool = require('../db/config');

// Función para crear un nuevo usuario
async function crearUsuario(req, res) {
    const { email, contrasena } = req.body;
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

        const result = await pool.query(
            'INSERT INTO usuarios (email, contrasena) VALUES ($1, $2) RETURNING *',
            [email, hashedPassword]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al crear el usuario");
    }
}

// Función para iniciar sesión
async function iniciarSesion(req, res) {
    const { email, contrasena } = req.body;
    try {
        const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
        const usuario = result.rows[0];

        if (!usuario) {
            return res.status(404).send("Usuario no encontrado");
        }

        // Comparar la contraseña ingresada con el hash almacenado
        const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);
        if (!isMatch) {
            return res.status(401).send("Contraseña incorrecta");
        }

        res.send("Inicio de sesión exitoso");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error en el servidor");
    }
}

module.exports = {
    crearUsuario,
    iniciarSesion,
};
