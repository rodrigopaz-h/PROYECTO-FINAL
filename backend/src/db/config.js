import pkg from "pg";
const { Pool } = pkg;
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("DB_PASSWORD (sólo para pruebas):", process.env.DB_PASSWORD);
console.log("Tipo de DB_PASSWORD:", typeof process.env.DB_PASSWORD);

const initialPool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function createDatabase() {
  try {
    const result = await initialPool.query(
      "SELECT 1 FROM pg_database WHERE datname = 'aromacafe'"
    );
    if (result.rowCount === 0) {
      await initialPool.query("CREATE DATABASE aromacafe");
      console.log("Base de datos aromacafe creada.");
    } else {
      console.log("La base de datos aromacafe ya existe.");
    }
  } catch (error) {
    console.error("Error al crear la base de datos:", error);
  } finally {
    await initialPool.end();
  }
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function createTablesAndViews() {
  const sqlFiles = ["cafes.sql", "accesorios.sql", "todos.sql", "users.sql", "blog.sql", "checkout.sql"];
  for (const file of sqlFiles) {
    const filePath = path.join(__dirname, file);
    const sql = fs.readFileSync(filePath, "utf8");
    try {
      await pool.query(sql);
      console.log(`Ejecución de '${file}' completada.`);
    } catch (err) {
      console.error(`Error al ejecutar ${file}:`, err);
    }
  }

  // Verificar que los datos se hayan cargado correctamente
  try {
    const cafesResult = await pool.query("SELECT * FROM cafes");
    const accesoriosResult = await pool.query("SELECT * FROM accesorios");
    console.log("Contenido de la tabla cafes:", cafesResult.rows);
    console.log("Contenido de la tabla accesorios:", accesoriosResult.rows);
  } catch (error) {
    console.error("Error al verificar el contenido de las tablas:", error);
  }
}
