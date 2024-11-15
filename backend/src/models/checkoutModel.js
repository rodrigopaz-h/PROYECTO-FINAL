import { pool } from "../db/config.js";
// Función para obtener el carrito del usuario por su ID
export const getCartByUserId = async (userId) => {
  try {
    const result = await pool.query(
      `SELECT ci.id, ci.product_id, p.name, p.description, p.price, ci.quantity
       FROM cart_items ci
       JOIN carts c ON ci.cart_id = c.id
       JOIN products p ON ci.product_id = p.id
       WHERE c.user_id = $1`,
      [userId]
    );
    return result.rows;
  } catch (err) {
    throw new Error("Error al obtener el carrito: " + err.message);
  }
};

// Función para agregar un producto al carrito del usuario
export const addProductToCart = async (userId, productId, quantity) => {
  try {
    // Verificar si el usuario ya tiene un carrito
    let cart = await pool.query(`SELECT id FROM carts WHERE user_id = $1`, [
      userId,
    ]);

    if (cart.rowCount === 0) {
      // Crear un nuevo carrito si no existe
      cart = await pool.query(
        `INSERT INTO carts (user_id) VALUES ($1) RETURNING id`,
        [userId]
      );
    }

    const cartId = cart.rows[0].id;

    // Verificar si el producto ya está en el carrito
    const existingItem = await pool.query(
      `SELECT id, quantity FROM cart_items WHERE cart_id = $1 AND product_id = $2`,
      [cartId, productId]
    );

    if (existingItem.rowCount > 0) {
      // Actualizar la cantidad si el producto ya está en el carrito
      const newQuantity = existingItem.rows[0].quantity + quantity;
      await pool.query(`UPDATE cart_items SET quantity = $1 WHERE id = $2`, [
        newQuantity,
        existingItem.rows[0].id,
      ]);
    } else {
      // Agregar un nuevo producto al carrito
      await pool.query(
        `INSERT INTO cart_items (cart_id, product_id, quantity) VALUES ($1, $2, $3)`,
        [cartId, productId, quantity]
      );
    }

    return { message: "Producto agregado al carrito" };
  } catch (err) {
    throw new Error("Error al agregar el producto al carrito: " + err.message);
  }
};

// Función para eliminar un producto del carrito del usuario
export const removeProductFromCart = async (userId, productId) => {
  try {
    // Obtener el carrito del usuario
    const cart = await pool.query(`SELECT id FROM carts WHERE user_id = $1`, [
      userId,
    ]);

    if (cart.rowCount === 0) {
      throw new Error("El usuario no tiene un carrito");
    }

    const cartId = cart.rows[0].id;

    // Eliminar el producto del carrito
    await pool.query(
      `DELETE FROM cart_items WHERE cart_id = $1 AND product_id = $2`,
      [cartId, productId]
    );

    return { message: "Producto eliminado del carrito" };
  } catch (err) {
    throw new Error(
      "Error al eliminar el producto del carrito: " + err.message
    );
  }
};

// Función para guardar la dirección de envío
export const saveShippingAddress = async (userId, shippingAddress) => {
  try {
    const { first_name, last_name, address } = shippingAddress;
    await pool.query(
      `INSERT INTO shipping_addresses (user_id, first_name, last_name, address)
       VALUES ($1, $2, $3, $4)`,
      [userId, first_name, last_name, address]
    );

    return { message: "Dirección de envío guardada" };
  } catch (err) {
    throw new Error("Error al guardar la dirección de envío: " + err.message);
  }
};

// Función para guardar el método de envío
export const saveShippingMethod = async (userId, shippingMethod) => {
  try {
    const { method_name, cost, estimated_delivery_time } = shippingMethod;
    await pool.query(
      `INSERT INTO shipping_methods (user_id, method_name, cost, estimated_delivery_time)
       VALUES ($1, $2, $3, $4)`,
      [userId, method_name, cost, estimated_delivery_time]
    );

    return { message: "Método de envío guardado" };
  } catch (err) {
    throw new Error("Error al guardar el método de envío: " + err.message);
  }
};

// Función para procesar el pago
export const processPayment = async (userId, paymentDetails) => {
  try {
    const { amount, payment_status, payment_method } = paymentDetails;
    await pool.query(
      `INSERT INTO payments (user_id, amount, payment_status, payment_method)
       VALUES ($1, $2, $3, $4)`,
      [userId, amount, payment_status, payment_method]
    );

    return { message: "Pago procesado exitosamente" };
  } catch (err) {
    throw new Error("Error al procesar el pago: " + err.message);
  }
};
