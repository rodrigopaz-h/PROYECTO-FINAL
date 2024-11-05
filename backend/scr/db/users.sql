-- Crear la base de datos aromacafe si no existe
DO
$do$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'aromacafe') THEN
      PERFORM dblink_exec('dbname=postgres user=postgre password=Esteban23catalan27@', 'CREATE DATABASE aromacafe');
   END IF;
END
$do$;

-- Cambiar el contexto a la base de datos aromacafe
\c aromacafe;

-- Crear la tabla usuarios si no existe
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ultimo_acceso TIMESTAMP
);
