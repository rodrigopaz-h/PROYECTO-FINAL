import { pool } from "../db/config.js";

const TodosModel = {
  // Obtener todos los productos (cafés y accesorios) de la vista 'todos'
  async getAllProducts() {
    try {
      const query = "SELECT * FROM todos";
      const result = await pool.query(query);
      return result.rows; // Devuelve los resultados de la consulta
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      throw new Error("No se pudieron obtener los productos");
    }
  },
};

export default TodosModel;
