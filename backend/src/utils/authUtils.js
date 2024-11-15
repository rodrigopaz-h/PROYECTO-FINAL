import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Sal rounds ajustables
const saltRounds = process.env.NODE_ENV === "production" ? 12 : 10;

// Función para hacer el hash de la contraseña
export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
};

// Función para firmar un JWT (token de acceso)
export const signToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
    audience: "aromaCafe",
    issuer: "server",
  });
};

// Función para firmar un Refresh Token
export const signRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "7d",
    audience: "aromaCafe",
    issuer: "server",
  });
};

// Función para verificar un JWT (token de acceso)
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET, {
      audience: "aromaCafe",
      issuer: "server",
    });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      throw new Error("Token expirado");
    }
    throw new Error("Token inválido");
  }
};

// Función para verificar un Refresh Token
export const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET, {
      audience: "aromaCafe",
      issuer: "server",
    });
  } catch (error) {
    throw new Error("Refresh token inválido");
  }
};

// Función para comparar la contraseña proporcionada con la almacenada (hashed)
export const comparePassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};
