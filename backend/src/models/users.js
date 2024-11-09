import bcrypt from "bcrypt";
import { pool } from "../db/config.js";

const UserModel = {
  // Función para crear un usuario en la base de datos
  async create(first_name, last_name, email, password) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const query = `
            INSERT INTO users (first_name, last_name, email, password) 
            VALUES ($1, $2, $3, $4) 
            RETURNING *`;
    const values = [first_name, last_name, email, hashedPassword];

    const result = await pool.query(query, values);
    return result.rows[0];
  },

  // Función para obtener un usuario por email
  async findByEmail(email) {
    const query = `SELECT * FROM users WHERE email = $1`;
    const result = await pool.query(query, [email]);
    return result.rows[0];
  },
};

export default UserModel;
