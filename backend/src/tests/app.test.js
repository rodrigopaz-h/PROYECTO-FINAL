// src/tests/app.test.js
import test from "node:test";
import assert from "node:assert/strict";
import request from "supertest";
import app from "../app.js"; // Ruta relativa desde src/tests

test('GET /api/hello should return "Hello, World!"', async () => {
  const response = await request(app).get("/api/hello");
  assert.equal(response.statusCode, 200);
  assert.equal(response.text, "Hello, World!");
});
