import { verifyToken } from "../utils/authUtils.js";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Validar si el encabezado Authorization existe y tiene el formato esperado
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Encabezado de autorización inválido o inexistente" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error en la autenticación del token:", error.message);
    res.status(401).json({ message: "Token inválido o expirado" });
  }
};
