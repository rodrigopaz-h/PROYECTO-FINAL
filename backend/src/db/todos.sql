CREATE VIEW todos AS
SELECT 
    p.id AS producto_id,
    p.nombre,
    p.categoria,
    p.precio,
    p.imagen_url,
    p.stock,
    c.origen AS procedencia,
    c.descripcion
FROM 
    productos p
JOIN 
    cafes c ON p.id = c.producto_id

UNION ALL

SELECT 
    p.id AS producto_id,
    p.nombre,
    p.categoria,
    p.precio,
    p.imagen_url,
    p.stock,
    a.origen AS procedencia,
    a.descripcion
FROM 
    productos p
JOIN 
    accesorios a ON p.id = a.producto_id;
