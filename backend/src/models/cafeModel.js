import { pool } from "../db/config.js";
const CafeModel = {
  // Obtener todos los cafés
  async getAllCafes() {
    const query = "SELECT nombre, origen, precio, imagen_url FROM cafes";
    const result = await pool.query(query);
    return result.rows;
  },

  // Obtener un café por ID
  async getCafeById(id) {
    const query = "SELECT * FROM cafes WHERE id = $1";
    const result = await pool.query(query, [id]);
    return result.rows[0];
  },
};

export default CafeModel;
