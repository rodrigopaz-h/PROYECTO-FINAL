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
    const newUser = await UserModel.create(
      firstName,
      lastName,
      email,
      hashedPassword
    );

    // Envía una respuesta exitosa
    res.status(201).json({
      success: true,
      message: "Usuario creado exitosamente",
      user: {
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res
      .status(500)
      .json({ message: "Error interno del servidor al crear el usuario" });
  }
};

// Función para obtener todos los usuarios
export async function getAllUsers(req, res) {
  try {
    const allUsers = await UserModel.getAll();
    res.json(allUsers);
  } catch (err) {
    console.error("Error al obtener usuarios:", err);
    res.status(500).send("Error al obtener usuarios");
  }
}

// Función para iniciar sesión
export async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findByEmail(email); // Corregido a UserModel

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

    res.json({
      message: "Login successful",
      token,
      expiresIn: process.env.JWT_EXPIRES_IN || "1h",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}

// Función para mostrar el perfil del usuario
export async function showUserProfile(req, res) {
  const userId = req.user.id;

  try {
    const user = await UserModel.findById(userId); // Corregido a UserModel
    if (!user) {
      return res.status(404).send("User not found");
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}

// Función para editar el perfil del usuario
export async function updateUserProfile(req, res) {
  const userId = req.user.id;
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await UserModel.findById(userId); // Corregido a UserModel

    if (!user) {
      return res.status(404).send("User not found");
    }

    let updatedPassword = user.password;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      updatedPassword = await bcrypt.hash(password, salt);
    }

    const updatedUser = await UserModel.update(userId, {
      firstName,
      lastName,
      email,
      password: updatedPassword,
    });

    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}
