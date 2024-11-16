import pkg from "pg";
const { Pool } = pkg;
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();

const isJest = typeof jest !== "undefined";
const __filename = isJest ? __filename : fileURLToPath(import.meta.url);
const __dirname = isJest ? __dirname : dirname(__filename);

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const query = (text, params) => pool.query(text, params);

(async () => {
  try {
    const res = await query("SELECT NOW()");
    console.log("Conexión exitosa:", res.rows[0]);
  } catch (err) {
    console.error("Error al conectar a la base de datos:", err);
  }
})();

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
}

// Exporta pool como default
export default pool;