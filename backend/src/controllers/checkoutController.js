import {
  getCartByUserId,
  addProductToCart,
  removeProductFromCart,
  saveShippingAddress,
  saveShippingMethod,
  processPayment,
} from "../models/checkoutModel.js";

// Obtener el carrito del usuario
export const getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const cartItems = await getCartByUserId(userId);
    res.status(200).json(cartItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener el carrito" });
  }
};

// Agregar un producto al carrito del usuario
export const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, quantity } = req.body;

    if (!productId || !quantity || quantity <= 0) {
      return res.status(400).json({ message: "Producto o cantidad inválidos" });
    }

    const result = await addProductToCart(userId, productId, quantity);
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error al agregar el producto al carrito" });
  }
};

// Eliminar un producto del carrito del usuario
export const removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.params;

    if (!productId) {
      return res.status(400).json({ message: "Producto no especificado" });
    }

    const result = await removeProductFromCart(userId, productId);
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error al eliminar el producto del carrito" });
  }
};

// Guardar la dirección de envío del usuario
export const saveShippingAddressController = async (req, res) => {
  try {
    const userId = req.user.id;
    const { first_name, last_name, address } = req.body;

    if (!first_name || !last_name || !address) {
      return res
        .status(400)
        .json({ message: "Información de dirección incompleta" });
    }

    const result = await saveShippingAddress(userId, {
      first_name,
      last_name,
      address,
    });
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al guardar la dirección de envío" });
  }
};

// Guardar el método de envío del usuario
export const saveShippingMethodController = async (req, res) => {
  try {
    const userId = req.user.id;
    const { method_name, cost, estimated_delivery_time } = req.body;

    if (!method_name || cost == null) {
      return res
        .status(400)
        .json({ message: "Información del método de envío incompleta" });
    }

    const result = await saveShippingMethod(userId, {
      method_name,
      cost,
      estimated_delivery_time,
    });
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al guardar el método de envío" });
  }
};

// Procesar el pago
export const processPaymentController = async (req, res) => {
  try {
    const userId = req.user.id;
    const { amount, payment_status, payment_method } = req.body;

    if (!amount || !payment_status) {
      return res
        .status(400)
        .json({ message: "Información de pago incompleta" });
    }

    const result = await processPayment(userId, {
      amount,
      payment_status,
      payment_method,
    });
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al procesar el pago" });
  }
};
