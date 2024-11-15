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

// Evita imprimir contraseñas u otra información sensible en la consola en entornos públicos
console.log("DB_PASSWORD (sólo para pruebas):", process.env.DB_PASSWORD);
console.log("Tipo de DB_PASSWORD:", typeof process.env.DB_PASSWORD);

// Configuración inicial de conexión para verificar o crear la base de datos
// Comentado el uso de configuraciones individuales para reemplazar con DATABASE_URL
// const initialPool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: "postgres", // Conexión a la base de datos "postgres" por defecto
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// Nueva configuración usando DATABASE_URL (simplificación de la conexión)
// const initialPool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// export async function createDatabase() {
//   try {
//     // Verificar si la base de datos 'aromacafe' existe
//     const result = await initialPool.query(
//       "SELECT 1 FROM pg_database WHERE datname = 'aromacafe'"
//     );
//     if (result.rowCount === 0) {
//       // Crear la base de datos si no existe
//       await initialPool.query("CREATE DATABASE aromacafe");
//       console.log("Base de datos aromacafe creada.");
//     } else {
//       console.log("La base de datos aromacafe ya existe.");
//     }
//   } catch (error) {
//     console.error("Error al crear la base de datos:", error);
//   } finally {
//     await initialPool.end(); // Cerrar la conexión al finalizar
//   }
// }

// Conexión a la base de datos "aromacafe"
// Comentado el uso de configuraciones individuales para reemplazar con DATABASE_URL
// export const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// Nueva configuración usando DATABASE_URL (simplificación de la conexión)
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Crear tablas y vistas desde archivos SQL
export async function createTablesAndViews() {
  const sqlFiles = [
    "cafes.sql",
    "accesorios.sql",
    "todos.sql",
    "users.sql",
    "blog.sql",
    "checkout.sql",
  ];
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

  // Verificar que los datos se hayan cargado correctamente
//   try {
//     const cafes = await pool.query("SELECT * FROM cafes");
//     const accesorios = await pool.query("SELECT * FROM accesorios");
//   } catch (error) {
//     console.error("Error al verificar el contenido de las tablas:", error); // Corregido el error de formato
//   }
}
