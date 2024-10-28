import React from 'react';

const Carousel = () => {
  return (
    <div className="w-full text-center py-10">
      {/* Título */}
      <h2 className="text-4xl font-bold mb-2">Nuestros Productos</h2>
      
      {/* Descripción */}
      <p className="text-gray-600 mb-6">Descubre nuestra selección especial de productos de café.</p>

      {/* Carrusel */}
      <div className="carousel rounded-box w-full h-96 mx-auto">
        {/* Imagen 1 */}
        <div className="carousel-item flex flex-col items-center">
          <img
            src="/images/cafe-colombia.png"
            alt="Café Colombia"
            className="w-48 h-48 object-cover"
          />
          <div className="text-center mt-2">
            <p className="text-lg font-semibold">Café Colombia</p>
            <p className="text-sm text-gray-600">Origen: Colombia</p>
            <p className="text-sm text-gray-600">Cantidad: 250g</p>
            <p className="text-lg font-bold text-orange-600">$15.000 CLP</p>
          </div>
        </div>
        
        {/* Imagen 2 */}
        <div className="carousel-item flex flex-col items-center">
          <img
            src="/images/cafe-colombia.png"
            alt="Café Colombia"
            className="w-48 h-48 object-cover"
          />
          <div className="text-center mt-2">
            <p className="text-lg font-semibold">Café Colombia</p>
            <p className="text-sm text-gray-600">Origen: Colombia</p>
            <p className="text-sm text-gray-600">Cantidad: 250g</p>
            <p className="text-lg font-bold text-orange-600">$15.000 CLP</p>
          </div>
        </div>

        {/* Imagen 3 */}
        <div className="carousel-item flex flex-col items-center">
          <img
            src="/images/cafe-colombia.png"
            alt="Café Colombia"
            className="w-48 h-48 object-cover"
          />
          <div className="text-center mt-2">
            <p className="text-lg font-semibold">Café Colombia</p>
            <p className="text-sm text-gray-600">Origen: Colombia</p>
            <p className="text-sm text-gray-600">Cantidad: 250g</p>
            <p className="text-lg font-bold text-orange-600">$15.000 CLP</p>
          </div>
        </div>

        {/* Imagen 4 */}
        <div className="carousel-item flex flex-col items-center">
          <img
            src="/images/cafe-colombia.png"
            alt="Café Colombia"
            className="w-48 h-48 object-cover"
          />
          <div className="text-center mt-2">
            <p className="text-lg font-semibold">Café Colombia</p>
            <p className="text-sm text-gray-600">Origen: Colombia</p>
            <p className="text-sm text-gray-600">Cantidad: 250g</p>
            <p className="text-lg font-bold text-orange-600">$15.000 CLP</p>
          </div>
        </div>

        {/* Imagen 5 */}
        <div className="carousel-item flex flex-col items-center">
          <img
            src="/images/cafe-colombia.png"
            alt="Café Colombia"
            className="w-48 h-48 object-cover"
          />
          <div className="text-center mt-2">
            <p className="text-lg font-semibold">Café Colombia</p>
            <p className="text-sm text-gray-600">Origen: Colombia</p>
            <p className="text-sm text-gray-600">Cantidad: 250g</p>
            <p className="text-lg font-bold text-orange-600">$15.000 CLP</p>
          </div>
        </div>

        {/* Imagen 6 */}
        <div className="carousel-item flex flex-col items-center">
          <img
            src="/images/cafe-colombia.png"
            alt="Café Colombia"
            className="w-48 h-48 object-cover"
          />
          <div className="text-center mt-2">
            <p className="text-lg font-semibold">Café Colombia</p>
            <p className="text-sm text-gray-600">Origen: Colombia</p>
            <p className="text-sm text-gray-600">Cantidad: 250g</p>
            <p className="text-lg font-bold text-orange-600">$15.000 CLP</p>
          </div>
        </div>

        {/* Imagen 7 */}
        <div className="carousel-item flex flex-col items-center">
          <img
            src="/images/cafe-colombia.png"
            alt="Café Colombia"
            className="w-48 h-48 object-cover"
          />
          <div className="text-center mt-2">
            <p className="text-lg font-semibold">Café Colombia</p>
            <p className="text-sm text-gray-600">Origen: Colombia</p>
            <p className="text-sm text-gray-600">Cantidad: 250g</p>
            <p className="text-lg font-bold text-orange-600">$15.000 CLP</p>
          </div>
        </div>

        {/* Imagen 8 */}
        <div className="carousel-item flex flex-col items-center">
          <img
            src="/images/cafe-colombia.png"
            alt="Café Colombia"
            className="w-48 h-48 object-cover"
          />
          <div className="text-center mt-2">
            <p className="text-lg font-semibold">Café Colombia</p>
            <p className="text-sm text-gray-600">Origen: Colombia</p>
            <p className="text-sm text-gray-600">Cantidad: 250g</p>
            <p className="text-lg font-bold text-orange-600">$15.000 CLP</p>
          </div>
        </div>
      </div>

      {/* Botón Ver Todos */}
      <div className="mt-8">
        <button className="px-6 py-2 bg-amarillo text-white rounded hover:bg-gray-800">
          Ver Todos
        </button>
      </div>
    </div>
  );
};

export default Carousel;
