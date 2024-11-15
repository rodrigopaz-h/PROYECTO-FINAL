-- Borrar la tabla accesorios si ya existe
DROP TABLE IF EXISTS accesorios CASCADE;

-- Crear la tabla accesorios con las mismas columnas que cafes
CREATE TABLE IF NOT EXISTS accesorios (
    id SERIAL PRIMARY KEY,
    categoria_id INT NOT NULL DEFAULT 2, -- Valor distinto de categoria_id para accesorios
    nombre VARCHAR(100) NOT NULL,
    origen VARCHAR(50),
    descripcion TEXT,
    formato VARCHAR(50) DEFAULT 'Unidad', -- Añadido para alinear con cafes
    precio DECIMAL(10, 2) NOT NULL,
    imagen_url VARCHAR(255),
    stock INT DEFAULT 0, -- Cambiado a INT para alinearse con cafes
    categoria VARCHAR(50) DEFAULT 'Accesorios' -- Columna de categoría con valor predeterminado
);

-- Vaciar la tabla accesorios y reiniciar el ID para pruebas
TRUNCATE TABLE accesorios RESTART IDENTITY CASCADE;

-- Insertar los nuevos datos de ejemplo en la tabla accesorios con todas las columnas
-- Insertar los datos solo si la tabla está vacía
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM accesorios) THEN
        INSERT INTO accesorios (categoria_id, nombre, origen, descripcion, formato, precio, imagen_url, stock, categoria)
        VALUES 
        (2, 'Espresso Maker', 'China', 'Máquina para preparar espresso en casa.', 'Unidad', 15000, '../images/espreso.png', 50, 'Accesorios'),
        (2, 'Filtros de Café', 'Brasil', 'Filtros desechables para preparar café.', 'Unidad', 2000, '../images/filtros.png', 100, 'Accesorios'),
        (2, 'Molino de Café', 'Japón', 'Molino manual para café.', 'Unidad', 8000, '../images/molino.png', 30, 'Accesorios'),
        (2, 'Taza de Café', 'Chile', 'Taza de cerámica para café.', 'Unidad', 3500, '../images/taza.png', 75, 'Accesorios'),
        (2, 'Termo para Café', 'Chile', 'Termo de acero inoxidable.', 'Unidad', 7000, '../images/termo.png', 60, 'Accesorios');
    END IF;
END $$;

-- Verificar el contenido de la tabla
SELECT * FROM accesorios;