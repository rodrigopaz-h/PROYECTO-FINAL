import request from "supertest";
import app from "../app.js";
import pkg from "mocha";
const { describe, it } = pkg;
import { expect } from "chai";

describe("User Routes", () => {
  let token;

  // Test para registro de usuario
  it("should register a new user", async () => {
    const res = await request(app).post("/api/users/register").send({
      first_name: "firstNameUserTest",
      last_name: "lastNaneUserTest",
      email: "testuser@example.com",
      password: "testpassword123",
    });
    expect(res.statusCode).to.equal(201);
    expect(res.body).to.have.property("token");
    expect(res.body.message).toBe("Usuario registrado con éxito");
    token = res.body.token;
  });

  // Test para inicio de sesión de usuario
  it("should log in a user", async () => {
    const res = await request(app).post("/api/users/login").send({
      email: "testuser@example.com",
      password: "testpassword123",
    });
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property("token");
    expect(res.body.message).toBe("Inicio de sesión exitoso");
    token = res.body.token;
  });

  // Test para obtener perfil de usuario
  it("should return the user profile", async () => {
    const res = await request(app)
      .get("/api/users/profile")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).to.equal(200);
    expect(res.body.user).to.have.property("username", "testuser");
  });
});
