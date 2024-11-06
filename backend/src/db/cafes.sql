CREATE TABLE IF NOT EXISTS cafes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    origen VARCHAR(50),
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    imagen_url VARCHAR(255),
    stock BOOLEAN DEFAULT TRUE
);

INSERT INTO cafes (nombre, origen, descripcion, precio, imagen_url, stock, producto_id)
VALUES 
('Café Arábica', 'Colombia', 'Café suave y aromático de alta calidad.', 4500, '../images/foto.png', TRUE, (SELECT id FROM productos WHERE nombre = 'Café Arábica')),
('Café Robusta', 'Brasil', 'Café fuerte con un sabor intenso.', 5000, '../images/foto.png', TRUE, (SELECT id FROM productos WHERE nombre = 'Café Robusta')),
('Café Peruano', 'Perú', 'Café con notas de frutas y chocolate.', 4700, '../images/foto.png', TRUE, (SELECT id FROM productos WHERE nombre = 'Café Peruano')),
('Café Espresso', 'Italia', 'Café concentrado y con cuerpo.', 6000, '../images/foto.png', TRUE, (SELECT id FROM productos WHERE nombre = 'Café Espresso')),
('Café Orgánico', 'México', 'Café cultivado sin pesticidas ni químicos.', 5500, '../images/foto.png', TRUE, (SELECT id FROM productos WHERE nombre = 'Café Orgánico')),
('Café Tostado Medio', 'Etiopía', 'Café con un equilibrio perfecto entre sabor y aroma.', 4800, '../images/foto.png', TRUE, (SELECT id FROM productos WHERE nombre = 'Café Tostado Medio')),
('Café Frío', 'Colombia', 'Café preparado y servido frío.', 3000, '../images/foto.png', TRUE, (SELECT id FROM productos WHERE nombre = 'Café Frío')),
('Café Gourmet', 'Jamaica', 'Café premium para los amantes del buen café.', 7500, '../images/foto.png', TRUE, (SELECT id FROM productos WHERE nombre = 'Café Gourmet')),
('Café Mocha', 'Venezuela', 'Café con sabor a chocolate.', 6000, '../images/foto.png', TRUE, (SELECT id FROM productos WHERE nombre = 'Café Mocha')),
('Café de Olla', 'México', 'Café tradicional mexicano con especias.', 5200, '../images/foto.png', TRUE, (SELECT id FROM productos WHERE nombre = 'Café de Olla'));
