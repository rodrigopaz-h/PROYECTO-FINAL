-- Tabla de usuarios
-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(50) NOT NULL,
--     email VARCHAR(100) UNIQUE NOT NULL,
--     password_hash VARCHAR(255) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );
-- Tabla de productos
-- CREATE TABLE products (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     description TEXT,
--     price DECIMAL(10, 2) NOT NULL,
--     stock INT DEFAULT 0,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );
-- Tabla de carritos
CREATE TABLE IF NOT EXISTS carts (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de elementos del carrito
CREATE TABLE IF NOT EXISTS cart_items (
  id SERIAL PRIMARY KEY,
  cart_id INT REFERENCES carts(id) ON DELETE CASCADE,
  product_id INT REFERENCES products(id),
  quantity INT NOT NULL CHECK (quantity > 0),
  UNIQUE (cart_id, product_id) -- Evita duplicar productos en el mismo carrito
);

-- Tabla de direcciones de envío
CREATE TABLE IF NOT EXISTS shipping_addresses (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  address_line1 VARCHAR(255) NOT NULL,
  address_line2 VARCHAR(255),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  postal_code VARCHAR(20) NOT NULL,
  country VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de métodos de envío
CREATE TABLE IF NOT EXISTS shipping_methods (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  method_name VARCHAR(100) NOT NULL,
  cost DECIMAL(10, 2) NOT NULL,
  estimated_delivery_time VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de pagos
CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  amount DECIMAL(10, 2) NOT NULL,
  payment_status VARCHAR(50) NOT NULL,
  payment_method VARCHAR(50),
  payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);