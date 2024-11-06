import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

// Controlador para el login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Busca el usuario por email en la base de datos
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Verifica la contraseña con bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Genera el token JWT
    const token = jwt.sign(
      { id: user._id, email: user.email }, // Incluye información relevante en el payload
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    // Devuelve el token y los datos del usuario (sin el password)
    res.json({
      message: "Inicio de sesión exitoso",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error al iniciar sesión:", error); // Log de error para depuración
    res
      .status(500)
      .json({ message: "Error al iniciar sesión, intente de nuevo más tarde" });
  }
};
