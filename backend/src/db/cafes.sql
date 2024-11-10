
-- Crear la tabla cafes 
CREATE TABLE IF NOT EXISTS cafes (
    id SERIAL PRIMARY KEY,
    categoria_id INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    origen VARCHAR(50),
    descripcion TEXT,
    formato VARCHAR(50),
    precio DECIMAL(10, 2) NOT NULL,
    imagen_url VARCHAR(255),
    stock INT DEFAULT 0,
    categoria VARCHAR(50)
);

-- Vaciar la tabla cafes
TRUNCATE TABLE cafes RESTART IDENTITY CASCADE;

-- Insertar los nuevos datos de ejemplo en la tabla cafes
INSERT INTO cafes (categoria_id, nombre, origen, descripcion, formato, precio, imagen_url, stock, categoria)
VALUES 
(1, 'Café Arábica', 'Colombia', 'Café suave y aromático de alta calidad.', '250g', 4500, '../images/arabica.png', 20, 'Cafes'),
(1, 'Café Robusta', 'Brasil', 'Café fuerte con un sabor intenso.', '250g', 5000, '../images/robusta.png', 15, 'Cafes'),
(1, 'Café Peruano', 'Perú', 'Café con notas de frutas y chocolate.', '250g', 4700, '../images/foto.png', 30, 'Cafes'),
(1, 'Café Espresso', 'Italia', 'Café concentrado y con cuerpo.', '250g', 6000, '../images/foto.png', 25, 'Cafes'),
(1, 'Café Orgánico', 'México', 'Café cultivado sin pesticidas ni químicos.', '250g', 5500, '../images/foto.png', 10, 'Cafes'),
(1, 'Café Tostado Medio', 'Etiopía', 'Café con un equilibrio perfecto entre sabor y aroma.', '250g', 4800, '../images/foto.png', 18, 'Cafes'),
(1, 'Café Frío', 'Colombia', 'Café preparado y servido frío.', '250g', 3000, '../images/foto.png', 22, 'Cafes'),
(1, 'Café Gourmet', 'Jamaica', 'Café premium para los amantes del buen café.', '250g', 7500, '../images/foto.png', 5, 'Cafes'),
(1, 'Café Mocha', 'Venezuela', 'Café con sabor a chocolate.', '250g', 6000, '../images/foto.png', 12, 'Cafes'),
(1, 'Café de Olla', 'México', 'Café tradicional mexicano con especias.', '250g', 5200, '../images/foto.png', 20, 'Cafes');

-- Verificar el contenido de la tabla
SELECT * FROM cafes;
