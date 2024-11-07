CREATE OR REPLACE VIEW todos AS
SELECT 
    c.id AS producto_id,
    c.nombre,
    'Cafes' AS categoria,
    c.precio,
    c.imagen_url,
    c.stock,
    c.origen AS procedencia,
    c.descripcion
FROM 
    cafes c

UNION ALL

SELECT 
    a.id AS producto_id,
    a.nombre,
    'Accesorios' AS categoria,
    a.precio,
    a.imagen_url,
    a.stock,
    a.origen AS procedencia,
    a.descripcion
FROM 
    accesorios a;