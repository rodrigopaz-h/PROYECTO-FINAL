CREATE TABLE IF NOT EXISTS cafes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    origen VARCHAR(50),
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    imagen_url VARCHAR(255),
    stock BOOLEAN DEFAULT TRUE
);

INSERT INTO cafes (nombre, origen, descripcion, precio, imagen_url, stock)
VALUES 
('Café Arábica', 'Colombia', 'Café suave y aromático de alta calidad.', 4500, '../images/foto.png', TRUE),
('Café Robusta', 'Brasil', 'Café fuerte con un sabor intenso.', 5000, '../images/foto.png', TRUE),
('Café Peruano', 'Perú', 'Café con notas de frutas y chocolate.', 4700, '../images/foto.png', TRUE),
('Café Espresso', 'Italia', 'Café concentrado y con cuerpo.', 6000, '../images/foto.png', TRUE),
('Café Orgánico', 'México', 'Café cultivado sin pesticidas ni químicos.', 5500, '../images/foto.png', TRUE),
('Café Tostado Medio', 'Etiopía', 'Café con un equilibrio perfecto entre sabor y aroma.', 4800, '../images/foto.png', TRUE),
('Café Frío', 'Colombia', 'Café preparado y servido frío.', 3000, '../images/foto.png', TRUE),
('Café Gourmet', 'Jamaica', 'Café premium para los amantes del buen café.', 7500, '../images/foto.png', TRUE),
('Café Mocha', 'Venezuela', 'Café con sabor a chocolate.', 6000, '../images/foto.png', TRUE),
('Café de Olla', 'México', 'Café tradicional mexicano con especias.', 5200, '../images/foto.png', TRUE);
