import AccessoryModel from "../models/AccessoryModel.js";

// Obtener todos los accesorios
export async function getAllAccessories(req, res) {
  try {
    const accessories = await AccessoryModel.getAllAccessories();
    res.json(accessories);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al obtener los accesorios");
  }
}

// Obtener un accesorio por ID
export async function getAccessoryById(req, res) {
  const { id } = req.params;
  try {
    const accessory = await AccessoryModel.getAccessoryById(id);
    if (!accessory) {
      return res.status(404).send("Accesorio no encontrado");
    }
    res.json(accessory);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al obtener el accesorio");
  }
}

export default {
  getAllAccessories,
  getAccessoryById,
};

//opcionales
// 1. funcion para ediatr accesorios
// 2. funcion para eliminar accesorios
