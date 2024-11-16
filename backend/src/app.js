import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import indexRoutes from "./routes/indexRoutes.js";

dotenv.config();

const app = express();

// Configuración de CORS para múltiples orígenes
const allowedOrigins = [
  process.env.FRONTEND_URL, // Producción
  "http://localhost:5173", // Desarrollo
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.error(`Origen no permitido por CORS: ${origin}`);
        callback(new Error("No permitido por la política de CORS"));
      }
    },
    credentials: true, // Si necesitas enviar cookies o encabezados de autenticación
  })
);

// Middlewares globales
app.use(morgan("dev"));
app.use(express.json());

// Rutas principales
app.use("/api", indexRoutes);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  const status = err.status || 500;
  const message =
    process.env.NODE_ENV === "development"
      ? err.message
      : "Ocurrió un error en el servidor";
  res.status(status).json({ message });
});

export default app;
