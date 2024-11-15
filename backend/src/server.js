import express from "express";
import dotenv from "dotenv";
import app from "./app.js";
import { createTablesAndViews } from "./db/config.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

// Llama a las funciones para crear la base de datos y las tablas al iniciar el servidor
// (async () => {
//   try {
//     await createDatabase(); // Crea la base de datos si no existe
//     await createTablesAndViews(); // Crea las tablas y vistas en la base de datos "aromacafe"
//     console.log("Tablas y vistas SQL creadas correctamente.");

    app.listen(PORT, async() => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
          await createTablesAndViews(); // Crea las tablas y vistas en la base de datos "aromacafe"
    console.log("Tablas y vistas SQL creadas correctamente.");
    });
//   } catch (error) {
//     console.error("Error al inicializar la base de datos y las tablas:", error);
//   }
// })();
