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
export async function getProduct(req, res) {
  try {
    const { id } = req.params;
    const product = await TodosModel.getProductById(id);

    if (!product) {
      return res.status(404).send("Producto no encontrado");
    }

    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al obtener el producto");
  }
}

//Acá va la función que responde una categoría. la funion debe llamarse "getProductsByCategory"
export async function getProductsByCategory(req, res) {
  try {
    const { category } = req.params;
    const products = await TodosModel.getProductsByCategory(category);

    if (!products || products.length === 0) {
      return res
        .status(404)
        .send("No se encontraron productos para esta categoría");
    }

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al obtener los productos por categoría");
  }
}

//Acá deberian ir funciones de admin. Nosotros nontenemos roles, porque no tenemos un formulario que lo crea en el front
// 1. crea un nuvo producto
// 2. edita un producto
// 3. elimina un producto
