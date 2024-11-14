import request from "supertest";
import app from "../app.js";
import pkg from "mocha";
const { describe, it } = pkg;
import { expect } from "chai";
import bcrypt from "bcrypt"; // Importar bcrypt

describe("User Routes", () => {
  let token;

  // Test para registro de usuario
  it("should register a new user", async () => {
    const password = "testpassword123";
    const saltRounds = 10;
    // Hashear la contraseña antes de enviarla
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const res = await request(app).post("/api/users/register").send({
      first_name: "firstNameUserTest",
      last_name: "lastNaneUserTest",
      email: "testuser@example.com",
      password: hashedPassword, // Usar la contraseña hasheada
    });

    expect(res.statusCode).to.equal(201);
    expect(res.body).to.have.property("token");
    expect(res.body.message).to.equal("Usuario registrado con éxito");
    token = res.body.token;
  });

  // Test para inicio de sesión de usuario
  it("should log in a user", async () => {
    const res = await request(app).post("/api/users/login").send({
      email: "testuser@example.com",
      password: "testpassword123", // Esta es la contraseña en texto plano
    });

    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property("token");
    expect(res.body.message).to.equal("Inicio de sesión exitoso");
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
