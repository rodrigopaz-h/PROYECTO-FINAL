import request from "supertest";
import app from "../app.js";

describe("Blog Routes", () => {
  let postId;

  // Test para crear un nuevo post
  it("should create a new blog post", async () => {
    const res = await request(app).post("/api/blog").send({
      title: "Mi primera publicación",
      content: "Contenido de prueba para mi blog.",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("post");
    expect(res.body.post).toHaveProperty("title", "Mi primera publicación");
    postId = res.body.post._id;
  });

  // Test para obtener un post por ID
  it("should get a blog post by ID", async () => {
    const res = await request(app).get(`/api/blog/${postId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.post).toHaveProperty("title", "Mi primera publicación");
  });

  // Test para obtener todos los posts
  it("should get all blog posts", async () => {
    const res = await request(app).get("/api/blog");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body.posts)).toBe(true);
  });
});
