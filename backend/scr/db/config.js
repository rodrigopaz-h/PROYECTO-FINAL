const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
    user: 'postgre',
    host: 'localhost',
    database: 'aromacafe',
    password: 'Esteban23catalan27@',
    port: 5432,
});

async function createTablesAndViews() {
    const sqlFiles = ['cafes.sql', 'accesorios.sql', 'todos.sql']; // archivos a ejecutar
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

createTablesAndViews();

module.exports = pool;
