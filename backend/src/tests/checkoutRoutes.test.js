import request from "supertest";
import app from "../app.js";
import { signToken } from "../utils/authUtils.js";
import pkg from "mocha";
const { describe, it, before, after } = pkg;
import { pool } from "../db/config.js";
import { expect } from "chai";

describe("Checkout Routes", () => {
  let token;
  let productId = "123"; // Puedes actualizar esto con un ID real si tienes productos

  // Configuración previa a las pruebas
  before(async () => {
    // Crear un usuario de prueba usando el pool
    const result = await pool.query(
      "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING id, email",
      [
        "firstNameUserTest",
        "lastNaneUserTest",
        "test@example.com",
        "testpassword",
      ]
    );
    const user = result.rows[0];
    token = signToken({ id: user.id, email: user.email });

    // Crear el carrito si no existe
    const cartResult = await pool.query(
      "SELECT id FROM carts WHERE user_id = $1",
      [user.id]
    );
    if (cartResult.rows.length === 0) {
      // Si no existe un carrito, crear uno
      await pool.query("INSERT INTO carts (user_id) VALUES ($1)", [user.id]);
    }
  });

  after(async () => {
    await pool.query("DELETE FROM users WHERE email = $1", [
      "test@example.com",
    ]);
  });

  // Prueba para obtener el carrito del usuario
  it("should retrieve the user's cart", async () => {
    const res = await request(app)
      .get("/api/checkout/cart")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).to.equal(200);
    expect(Array.isArray(res.body.cart)).toBe(true);
  });

  // Prueba para añadir un producto al carrito
  it("should add a product to the cart", async () => {
    const res = await request(app)
      .post("/api/checkout/cart")
      .set("Authorization", `Bearer ${token}`)
      .send({ productId });
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property("message", "Producto añadido al carrito");
  });

  // Prueba para eliminar un producto del carrito
  it("should remove a product from the cart", async () => {
    const res = await request(app)
      .delete(`/api/checkout/cart/${productId}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property(
      "message",
      "Producto eliminado del carrito"
    );
  });

  // Prueba para guardar la dirección de envío
  it("should save the shipping address", async () => {
    const shippingData = {
      first_name: "John",
      last_name: "Doe",
      address: "123 Test St",
    };
    const res = await request(app)
      .post("/api/checkout/shipping-address")
      .set("Authorization", `Bearer ${token}`)
      .send(shippingData);
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property("message", "Dirección de envío guardada");
  });

  // Prueba para guardar el método de envío
  it("should save the shipping method", async () => {
    const res = await request(app)
      .post("/api/checkout/shipping-method")
      .set("Authorization", `Bearer ${token}`)
      .send({ method: "express" });
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property("message", "Método de envío guardado");
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
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property("message", "Pago procesado con éxito");

    await pool.end();
  });
});
