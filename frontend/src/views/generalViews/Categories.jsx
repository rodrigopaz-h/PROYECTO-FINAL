// Categorías
import Title from "../../components/layouts/Title";

import React from "react";

export default function Categories() {
  return (
    <div>
      <Title title="Categorias" />
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto py-12">
        <div className="col-span-2">
          <h3 className="text-lg font-semibold mb-4">Filtros de Productos</h3>
          <div className="bg-gray-200 p-4 rounded">
            <h4 className="font-medium">Filtrar por Precio</h4>
          </div>
        </div>
        <div className="col-span-10 grid grid-cols-1 gap-4">
          <div className="col-span-12 grid grid-cols-1 gap-4">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">Nombre de la Categoría</h2>

              <div className="mb-4">
                <p className="">Mostrando 6 Productos</p>
                <label
                  htmlFor="filter"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Filtrar por:
                </label>
                <select id="filter" className="border rounded-md p-2 w-full">
                  <option value="">Selecciona una opción</option>
                  <option value="opcion1">Opción 1</option>
                  <option value="opcion2">Opción 2</option>
                  <option value="opcion3">Opción 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-span-12 grid grid-cols-1 gap-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white border rounded-lg p-4 shadow">
                <h4 className="font-bold">Producto 1</h4>
                <p className="mt-2">Descripción del producto 1.</p>
              </div>

              <div className="bg-white border rounded-lg p-4 shadow">
                <h4 className="font-bold">Producto 2</h4>
                <p className="mt-2">Descripción del producto 2.</p>
              </div>

              <div className="bg-white border rounded-lg p-4 shadow">
                <h4 className="font-bold">Producto 3</h4>
                <p className="mt-2">Descripción del producto 3.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
