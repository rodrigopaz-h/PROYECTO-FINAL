import users from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/users.js";

// Función para crear un nuevo usuario
export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Verifica si el usuario ya existe
    const existingUser = await UserModel.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Crea el nuevo usuario en la base de datos
    const newUser = await UserModel.create(firstName, lastName, email, password);

    // Envía una respuesta exitosa
    res.status(201).json({ success: true, message: "Usuario creado exitosamente", user: newUser });
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ message: "Error interno del servidor al crear el usuario" });
  }
};

// Función para iniciar sesión
export async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    const user = await users.findByEmail(email);

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Comparar la contraseña ingresada con el hash almacenado
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send("Incorrect password");
    }

    // Generar el token con el ID del usuario y su email
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
    );

    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}

//Acá debe ir la función de para mostrar el perfil del usuario. se debe llamar "showUserProfile"

//Acá debe ir la función de para editar el perfil del usuario. se debe llamar "updateUserProfile"
