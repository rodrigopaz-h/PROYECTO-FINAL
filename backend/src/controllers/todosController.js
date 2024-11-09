import TodosModel from "../../src/models/todosModel.js";

// Obtener todos los productos (cafés y accesorios) de la vista 'todos'
export async function getAllProducts(req, res) {
  try {
    const products = await TodosModel.getAllProducts();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al obtener los productos");
  }
}

//Acá va la funciín que responde un producto por id. la funcion debe llamarse "getProduct"

//Acá va la función que responde una categoría. la funion debe llamarse "getProductsByCategory"

//Acá deberian ir funciones de admin. Nosotros nontenemos roles, porque no tenemos un formulario que lo crea en el front
// 1. crea un nuvo producto
// 2. edita un producto
// 3. elimina un producto
