import pkg from "pg";
const { Pool } = pkg;
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();

// Determinar __dirname y __filename solo si no estamos en un entorno de pruebas de Jest
const isJest = typeof jest !== "undefined";
const __filename = isJest ? __filename : fileURLToPath(import.meta.url);
const __dirname = isJest ? __dirname : dirname(__filename);

// Nueva configuración usando DATABASE_URL (simplificación de la conexión)
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Crear tablas y vistas desde archivos SQL
export async function createTablesAndViews() {
  const sqlFiles = ["cafes.sql", "accesorios.sql", "todos.sql", "users.sql", "blog.sql", "checkout.sql"];
  for (const file of sqlFiles) {
    const filePath = path.join(__dirname, file);
    const sql = fs.readFileSync(filePath, "utf8");
    try {
      await pool.query(sql);
      console.log(`Ejecución de '${file}' completada.`);
    } catch (err) {
      console.error(`Error al ejecutar ${file}:`, err); // Corregido el error de formato
    }
  }
}
