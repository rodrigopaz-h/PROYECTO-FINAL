import request from "supertest";
import app from "../app.js";

describe("Product Routes", () => {
  let productId;

  // Test para crear un nuevo producto
  it("should create a new product", async () => {
    const res = await request(app).post("/api/products").send({
      name: "Café Premium",
      price: 12.99,
      description: "Café de alta calidad.",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("product");
    expect(res.body.product).toHaveProperty("name", "Café Premium");
    productId = res.body.product._id;
  });

  // Test para obtener un producto por ID
  it("should get a product by ID", async () => {
    const res = await request(app).get(`/api/products/${productId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.product).toHaveProperty("name", "Café Premium");
  });

  // Test para obtener todos los productos
  it("should get all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body.products)).toBe(true);
  });
});
