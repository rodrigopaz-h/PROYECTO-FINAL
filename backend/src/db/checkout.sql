--Tabla de productos
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  stock INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de carritos
CREATE TABLE carts (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de elementos del carrito
CREATE TABLE cart_items (
  id SERIAL PRIMARY KEY,
  cart_id INT REFERENCES carts(id) ON DELETE CASCADE,
  product_id INT REFERENCES products(id),
  quantity INT NOT NULL CHECK (quantity > 0),
  UNIQUE (cart_id, product_id)
);

-- Tabla de direccion de envío
CREATE TABLE shipping_addresses (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de métodos de envío
CREATE TABLE shipping_methods (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  method_name VARCHAR(100) NOT NULL,
  cost DECIMAL(10, 2) NOT NULL,
  estimated_delivery_time VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de pagos
CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  amount DECIMAL(10, 2) NOT NULL,
  payment_status VARCHAR(50) NOT NULL,
  payment_method VARCHAR(50),
  payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);