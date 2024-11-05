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

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (first_name, last_name, email, password)
VALUES ('Juan', 'Perez', 'juan.perez@example.com', 'hashed_password');

