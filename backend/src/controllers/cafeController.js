import CafeModel from '../models/cafeModel.js';

// Obtener todos los cafés
export async function getAllCafes(req, res) {
    try {
        const cafes = await CafeModel.getAllCafes();
        res.json(cafes);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al obtener los cafés");
    }
}

// Obtener un café por ID
export async function getCafeById(req, res) {
    const { id } = req.params;
    try {
        const cafe = await CafeModel.getCafeById(id);
        if (!cafe) {
            return res.status(404).send("Café no encontrado");
        }
        res.json(cafe);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al obtener el café");
    }
}
