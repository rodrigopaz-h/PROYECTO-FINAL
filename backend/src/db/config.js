const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'aromacafe',
    password: '1234',
    port: 5432,
});

// Verificar la conexión
pool.connect((err, client, release) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err);
    } else {
        console.log('Conexión a la base de datos establecida exitosamente.');
    }
    release(); // Liberar el cliente después de la prueba de conexión
});

async function createTablesAndViews() {
    const sqlFiles = ['productos.sql', 'cafes.sql', 'accesorios.sql', 'todos.sql']; // archivos a ejecutar
    for (const file of sqlFiles) {
        const sql = fs.readFileSync(path.join(__dirname, 'db', file)).toString();
        try {
            await pool.query(sql);
            console.log(`Ejecución de '${file}' completada.`);
        } catch (err) {
            console.error(`Error al ejecutar ${file}:`, err);
        }
    }
}

createTablesAndViews()
    .catch(err => console.error("Error al crear tablas y vistas:", err))
    .finally(() => pool.end());
module.exports = pool;
