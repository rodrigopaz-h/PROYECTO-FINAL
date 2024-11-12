import users from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Función para crear un nuevo usuario
export async function createUser(req, res) {
  const { first_name, last_name, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10); // 10 es el número de rondas de salt, puedes ajustarlo
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await users.create(
      first_name,
      last_name,
      email,
      hashedPassword
    );
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

//Acá debe ir la función de para mostrar el perfil del usuario.
export async function showUserProfile(req, res) {
  const userId = req.user.id;

  try {
    const user = await users.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}

//Acá debe ir la función de para editar el perfil del usuario. se debe llamar "updateUserProfile"
export async function updateUserProfile(req, res) {
  const userId = req.user.id;
  const { first_name, last_name, email, password } = req.body;

  try {
    const user = await users.findById(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    let updatedPassword = user.password;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      updatedPassword = await bcrypt.hash(password, salt);
    }

    const updatedUser = await users.update(userId, {
      first_name,
      last_name,
      email,
      password: updatedPassword,
    });

    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}
