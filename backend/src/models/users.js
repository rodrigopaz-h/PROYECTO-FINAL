import bcrypt from "bcrypt";
import pool from "../db/config.js";


const UserModel = {
  // Función para crear un usuario en la base de datos
  async create(first_name, last_name, email, password) {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const query = `
        INSERT INTO users (first_name, last_name, email, password) 
        VALUES ($1, $2, $3, $4) 
        RETURNING *`;
      const values = [first_name, last_name, email, hashedPassword];

      const result = await pool.query(query, values);
      return result.rows[0]; // Devolver el usuario creado
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      throw new Error("Error al crear el usuario");
    }
  },

  // Función para obtener un usuario por email
  async findByEmail(email) {
    try {
      const query = `SELECT * FROM users WHERE email = $1`;
      const result = await pool.query(query, [email]);

      if (result.rows.length === 0) {
        return false;
      }

      return result.rows[0]; // Retorna el usuario encontrado
    } catch (error) {
      console.error("Error al buscar usuario por email:", error);
      throw new Error("Error al buscar usuario por email");
    }
  },

  // Función para obtener todos los usuarios
  async getAll() {
    try {
      const query = `SELECT * FROM users`;
      const result = await pool.query(query);
      return result.rows; // Retorna todos los usuarios
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      throw new Error("Error al obtener usuarios");
    }
  },

  // Función para obtener un usuario por ID
async findById(id) {
  try {
    const query = `SELECT * FROM users WHERE id = $1`;
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      return null;
    }

    return result.rows[0];
  } catch (error) {
    console.error("Error al buscar usuario por ID:", error);
    throw new Error("Error al buscar usuario por ID");
  }
},

// Función para actualizar un usuario
async update(id, { firstName, lastName, email, password }) {
  try {
    const query = `
      UPDATE users 
      SET first_name = $1, last_name = $2, email = $3, password = $4
      WHERE id = $5 
      RETURNING *`;
    const values = [firstName, lastName, email, password, id];

    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    throw new Error("Error al actualizar el usuario");
  }
},

};



export default UserModel;
