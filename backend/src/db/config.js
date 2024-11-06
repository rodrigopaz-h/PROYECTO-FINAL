import pkg from 'pg';
const { Pool } = pkg;
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

// Definir __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración inicial de conexión para verificar o crear la base de datos
const initialPool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'postgres', // Conexión a la base de datos "postgres" por defecto
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Crear la base de datos si no existe
export async function createDatabase() {
    try {
        const result = await initialPool.query("SELECT 1 FROM pg_database WHERE datname = 'aromacafe'");
        if (result.rowCount === 0) {
            await initialPool.query('CREATE DATABASE aromacafe');
            console.log('Base de datos aromacafe creada.');
        } else {
            console.log('La base de datos aromacafe ya existe.');
        }
    } catch (error) {
        console.error('Error al crear la base de datos:', error);
    } finally {
        await initialPool.end();
    }
}

// Conexión a la base de datos "aromacafe"
export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'aromacafe',
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Crear tablas y vistas desde archivos SQL
export async function createTablesAndViews() {
    const sqlFiles = ['cafes.sql', 'accesorios.sql', 'todos.sql', 'users.sql'];
    for (const file of sqlFiles) {
        const filePath = path.join(__dirname, file); // Eliminado el subdirectorio 'db'
        const sql = fs.readFileSync(filePath, 'utf8');
        try {
            await pool.query(sql);
            console.log(`Ejecución de '${file}' completada.`);
        } catch (err) {
            console.error(`Error al ejecutar ${file}:`, err);
        }
    }
}
