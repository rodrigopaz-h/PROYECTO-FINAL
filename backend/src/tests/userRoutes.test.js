import request from "supertest";
import app from "../app";

describe("User Routes", () => {
  let token;

  // Test para registro de usuario
  it("should register a new user", async () => {
    const res = await request(app).post("/api/users/register").send({
      username: "testuser",
      email: "testuser@example.com",
      password: "testpassword123",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("token");
    expect(res.body.message).toBe("Usuario registrado con éxito");
    token = res.body.token;
  });

  // Test para inicio de sesión de usuario
  it("should log in a user", async () => {
    const res = await request(app).post("/api/users/login").send({
      email: "testuser@example.com",
      password: "testpassword123",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token");
    expect(res.body.message).toBe("Inicio de sesión exitoso");
    token = res.body.token;
  });

  // Test para obtener perfil de usuario
  it("should return the user profile", async () => {
    const res = await request(app)
      .get("/api/users/profile")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.user).toHaveProperty("username", "testuser");
  });
});
