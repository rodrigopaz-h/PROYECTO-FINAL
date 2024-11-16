import pool from "../db/config.js";


const CafeModel = {
  // Obtener todos los cafés
  async getAllCafes() {
    try {
      const query = "SELECT id, nombre, origen, descripcion, formato, precio, imagen_url, stock, categoria FROM cafes";
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error("Error en getAllCafes:", error);
      throw error; // Propaga el error para que el controlador pueda capturarlo
    }
  },

  // Obtener un café por ID
  async getCafeById(id) {
    try {
      const query = "SELECT * FROM cafes WHERE id = $1";
      const result = await pool.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      console.error("Error en getCafeById:", error);
      throw error;
    }
  },
};

export default CafeModel;
