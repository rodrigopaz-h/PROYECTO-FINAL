import UserModel from '../models/UserModel.js';
import bcrypt from 'bcrypt';

// Función para crear un nuevo usuario
export async function createUser(req, res) {
    const { first_name, last_name, email, password } = req.body;
    try {
        const newUser = await UserModel.create(first_name, last_name, email, password);
        res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating user");
    }
}

// Función para iniciar sesión
export async function loginUser(req, res) {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findByEmail(email);

        if (!user) {
            return res.status(404).send("User not found");
        }

        // Comparar la contraseña ingresada con el hash almacenado
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send("Incorrect password");
        }

        res.send("Login successful");
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}