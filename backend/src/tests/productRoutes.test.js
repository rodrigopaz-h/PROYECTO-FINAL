import request from "supertest";
import app from "../app.js";
import pkg from "mocha";
const { describe, it } = pkg;
import { expect } from "chai";

describe("Product Routes", () => {
  let productId;

  // Test para crear un nuevo producto
  it("should create a new product", async () => {
    const res = await request(app).post("/api/products").send({
      name: "Café Premium",
      price: 12.99,
      description: "Café de alta calidad.",
    });
    expect(res.statusCode).to.equal(201);
    expect(res.body).to.have.property("product");
    expect(res.body.product).to.have.property("name", "Café Premium");
    productId = res.body.product._id;
  });

  // Test para obtener un producto por ID
  it("should get a product by ID", async () => {
    const res = await request(app).get(`/api/products/${productId}`);
    expect(res.statusCode).to.equal(200);
    expect(res.body.product).to.have.property("name", "Café Premium");
  });

  // Test para obtener todos los productos
  it("should get all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).to.equal(200);
    expect(Array.isArray(res.body.products)).toBe(true);
  });
});
