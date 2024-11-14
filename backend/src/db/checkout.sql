-- Eliminar y crear la tabla de usuarios
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar usuarios ficticios
INSERT INTO
  users (first_name, last_name, email, password)
VALUES
  (
    'John',
    'Doe',
    'john.doe@example.com',
    'password123'
  ),
  (
    'Jane',
    'Smith',
    'jane.smith@example.com',
    'password456'
  );

-- Eliminar y crear la tabla de productos
DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  stock INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Recomendación: Podrías agregar una columna para la categoría del producto (por ejemplo, category_id), lo cual podría ser útil si más adelante deseas expandir la funcionalidad para tener diferentes categorías de productos.
-- Insertar productos ficticios
INSERT INTO
  products (name, description, price, stock)
VALUES
  (
    'Café Arábica',
    'Café de grano arábica',
    5.99,
    100
  ),
  (
    'Café Robusta',
    'Café de grano robusta',
    4.99,
    150
  ),
  (
    'Taza de cerámica',
    'Taza de cerámica blanca',
    2.99,
    50
  ),
  (
    'Molinillo de café',
    'Molinillo manual de café',
    15.49,
    30
  );

-- Eliminar y crear la tabla de carritos
DROP TABLE IF EXISTS carts CASCADE;

CREATE TABLE IF NOT EXISTS carts (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar carritos ficticios
INSERT INTO
  carts (user_id)
VALUES
  (1),
  (2);

-- Eliminar y crear la tabla de elementos del carrito
DROP TABLE IF EXISTS cart_items CASCADE;

CREATE TABLE IF NOT EXISTS cart_items (
  id SERIAL PRIMARY KEY,
  cart_id INT REFERENCES carts(id) ON DELETE CASCADE,
  product_id INT REFERENCES products(id),
  quantity INT NOT NULL CHECK (quantity > 0),
  UNIQUE (cart_id, product_id)
);

--Recomendación: La restricción UNIQUE (cart_id, product_id) es adecuada para evitar que el mismo producto se agregue más de una vez al carrito. Sin embargo, si el producto se repite (por ejemplo, 2 unidades de un producto), no se está manejando en esta tabla. Podrías considerar agregar una columna quantity y manejar la cantidad de cada producto dentro del carrito.
-- Insertar elementos en los carritos ficticios
INSERT INTO
  cart_items (cart_id, product_id, quantity)
VALUES
  (1, 1, 2),
  -- 2 unidades de Café Arábica
  (1, 3, 1),
  -- 1 unidad de Taza de cerámica
  (2, 2, 3),
  -- 3 unidades de Café Robusta
  (2, 4, 1);

-- 1 unidad de Molinillo de café
-- Eliminar y crear la tabla de direcciones de envío
DROP TABLE IF EXISTS shipping_addresses CASCADE;

CREATE TABLE IF NOT EXISTS shipping_addresses (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar direcciones de envío ficticias
INSERT INTO
  shipping_addresses (user_id, first_name, last_name, address)
VALUES
  (1, 'John', 'Doe', '123 Main St, Ciudad, 12345'),
  (2, 'Jane', 'Smith', '456 Elm St, Ciudad, 67890');

-- Eliminar y crear la tabla de métodos de envío
DROP TABLE IF EXISTS shipping_methods CASCADE;

CREATE TABLE IF NOT EXISTS shipping_methods (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  method_name VARCHAR(100) NOT NULL,
  cost DECIMAL(10, 2) NOT NULL,
  estimated_delivery_time VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar métodos de envío ficticios
INSERT INTO
  shipping_methods (
    user_id,
    method_name,
    cost,
    estimated_delivery_time
  )
VALUES
  (1, 'Envío estándar', 5.99, '3-5 días'),
  (2, 'Envío exprés', 9.99, '1-2 días');

-- Eliminar y crear la tabla de pagos
DROP TABLE IF EXISTS payments CASCADE;

CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  amount DECIMAL(10, 2) NOT NULL,
  payment_status VARCHAR(50) NOT NULL,
  payment_method VARCHAR(50),
  payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar pagos ficticios
INSERT INTO
  payments (user_id, amount, payment_status, payment_method)
VALUES
  (1, 15.97, 'Completado', 'Tarjeta de crédito'),
  (2, 34.47, 'Pendiente', 'PayPal');