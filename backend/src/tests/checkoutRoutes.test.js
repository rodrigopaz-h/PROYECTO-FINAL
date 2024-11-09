import request from "supertest";
import app from "../app.js";
import { signToken } from "../utils/authUtils.js";
import User from "../models/User.js";

describe("Checkout Routes", () => {
  let token;
  let productId = "sampleProductId123"; // Puedes actualizar esto con un ID real si tienes productos

  // Configuración previa a las pruebas
  beforeAll(async () => {
    // Crear un token de autenticación para un usuario de prueba
    const user = await User.create({
      username: "testuser",
      email: "test@example.com",
      password: "testpassword",
    });
    token = signToken({ id: user._id, email: user.email });
  });

  afterAll(async () => {
    // Eliminar usuario de prueba después de las pruebas
    await User.deleteOne({ email: "test@example.com" });
  });

  // Prueba para obtener el carrito del usuario
  it("should retrieve the user's cart", async () => {
    const res = await request(app)
      .get("/api/checkout/cart")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body.cart)).toBe(true);
  });

  // Prueba para añadir un producto al carrito
  it("should add a product to the cart", async () => {
    const res = await request(app)
      .post("/api/checkout/cart")
      .set("Authorization", `Bearer ${token}`)
      .send({ productId });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Producto añadido al carrito");
  });

  // Prueba para eliminar un producto del carrito
  it("should remove a product from the cart", async () => {
    const res = await request(app)
      .delete(`/api/checkout/cart/${productId}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty(
      "message",
      "Producto eliminado del carrito"
    );
  });

  // Prueba para guardar la dirección de envío
  it("should save the shipping address", async () => {
    const shippingData = {
      address: "123 Test St",
      city: "Test City",
      postalCode: "12345",
      country: "Test Country",
    };
    const res = await request(app)
      .post("/api/checkout/shipping-address")
      .set("Authorization", `Bearer ${token}`)
      .send(shippingData);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Dirección de envío guardada");
  });

  // Prueba para guardar el método de envío
  it("should save the shipping method", async () => {
    const res = await request(app)
      .post("/api/checkout/shipping-method")
      .set("Authorization", `Bearer ${token}`)
      .send({ method: "express" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Método de envío guardado");
  });

  // Prueba para procesar el pago
  it("should process the payment", async () => {
    const paymentData = {
      amount: 100,
      currency: "USD",
      paymentMethod: "creditCard",
    };
    const res = await request(app)
      .post("/api/checkout/payment")
      .set("Authorization", `Bearer ${token}`)
      .send(paymentData);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Pago procesado con éxito");
  });
});
