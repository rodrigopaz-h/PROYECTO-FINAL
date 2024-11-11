DROP TABLE cafes CASCADE;
CREATE TABLE IF NOT EXISTS cafes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    origen VARCHAR(50),
    descripcion TEXT,
    formato VARCHAR(50),
    precio DECIMAL(10, 2) NOT NULL,
    imagen_url VARCHAR(255),
    stock INT DEFAULT 0,
    categoria VARCHAR(50)
);

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM cafes) THEN
        INSERT INTO cafes (nombre, origen, descripcion, formato, precio, imagen_url, stock, categoria)
        VALUES 
        ('Café Arábica', 'Colombia', 'Café suave y aromático de alta calidad.', '250g', 4500, '../images/arabica.png', 20, 'Cafes'),
        ('Café Robusta', 'Brasil', 'Café fuerte con un sabor intenso.', '250g', 5000, '../images/robusta.png', 15, 'Cafes'),
        ('Café Peruano', 'Perú', 'Café con notas de frutas y chocolate.', '250g', 4700, '../images/peruano.png', 30, 'Cafes'),
        ('Café Espresso', 'Italia', 'Café concentrado y con cuerpo.', '250g', 6000, '../images/expresso.png', 25, 'Cafes'),
        ('Café Orgánico', 'México', 'Café cultivado sin pesticidas ni químicos.', '250g', 5500, '../images/organico.png', 10, 'Cafes'),
        ('Café Tostado Medio', 'Etiopía', 'Café con un equilibrio perfecto entre sabor y aroma.', '250g', 4800, '../images/medio.png', 18, 'Cafes'),
        ('Café Frío', 'Colombia', 'Café preparado y servido frío.', '250g', 3000, '../images/frio.png', 22, 'Cafes'),
        ('Café Gourmet', 'Jamaica', 'Café premium para los amantes del buen café.', '250g', 7500, '../images/gourmet.png', 5, 'Cafes'),
        ('Café Mocha', 'Venezuela', 'Café con sabor a chocolate.', '250g', 6000, '../images/mocha.png', 12, 'Cafes'),
        ('Café de Olla', 'México', 'Café tradicional mexicano con especias.', '250g', 5200, '../images/deolla.png', 20, 'Cafes');
    END IF;
END $$;

-- Verificar el contenido de la tabla
SELECT * FROM cafes;