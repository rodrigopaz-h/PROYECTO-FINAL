import request from "supertest";
import app from "../app.js";

describe("Contact Routes", () => {
  // Prueba para enviar el formulario de contacto
  it("should submit the contact form", async () => {
    const formData = {
      name: "John Doe",
      email: "johndoe@example.com",
      message: "This is a test message.",
    };

    const res = await request(app).post("/api/contact/submit").send(formData);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Formulario enviado con éxito");
  });

  // Prueba para enviar el formulario de contacto con datos faltantes
  it("should return an error for missing required fields", async () => {
    const formData = {
      email: "johndoe@example.com",
      message: "This is a test message without a name.",
    };

    const res = await request(app).post("/api/contact/submit").send(formData);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty(
      "message",
      "Todos los campos son obligatorios"
    );
  });
});
