import React from 'react';

export default function ShippingMethod() {

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">Método de Envío</h2>

      {/* Opciones de Envío */}
      <div className="space-y-4">
        {/* Correos de Chile */}
        <label className="flex flex-col">
          <div className="flex items-center">
            <input
              type="radio"
              name="shipping_method"
              value="chile_post"
              className="form-radio text-blue-600 h-5 w-5 mr-3"
            />
            <span className="text-gray-700 dark:text-white">Correos de Chile</span>
          </div>
          <p className="ml-8 text-sm text-gray-500 dark:text-gray-400">4-7 días hábiles</p>
        </label>
      {/* Retiro en Tienda */}
      <label className="flex items-center">
          <input
            type="radio"
            name="shipping_method"
            value="store_pickup"
            className="form-radio text-blue-600 h-5 w-5 mr-3"
          />
          <span className="text-gray-700 dark:text-white">Retiro en tienda</span>
          <p className="ml-8 text-sm text-gray-500 dark:text-gray-400">2 días hábiles</p>
        </label>
      </div>
    </div>
  );
}