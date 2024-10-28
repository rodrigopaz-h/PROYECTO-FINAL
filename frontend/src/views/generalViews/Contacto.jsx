import React from "react";

const Contacto = () => {
  return (
    <div className="px-5 py-10 md:px-20">
      <h1 className="text-4xl font-bold text-green-900 mb-6">Contacto</h1>
      <p className="text-gray-700 mb-8">
        Si tienes alguna pregunta o deseas comunicarte con alguno de nuestros representantes, no dudes en contactarnos. Estamos aquí para ayudarte.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contacto 1 */}
        <div className="bg-green-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-2">Juan Pérez</h2>
          <p className="text-gray-700 mb-2">Gerente de Ventas</p>
          <p className="text-gray-600">📞 +99 0214 555 1122</p>
          <p className="text-gray-600">📧 juan.perez@tostaduria.com</p>
          <p className="text-gray-700 mt-4">
            Juan es responsable de coordinar las ventas y asegurar que nuestros productos lleguen a cada cliente en perfectas condiciones. 
            No dudes en contactarlo para cualquier consulta sobre nuestros productos.
          </p>
        </div>

        {/* Contacto 2 */}
        <div className="bg-green-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-2">Ana Ramírez</h2>
          <p className="text-gray-700 mb-2">Atención al Cliente</p>
          <p className="text-gray-600">📞 +99 0214 555 3344</p>
          <p className="text-gray-600">📧 ana.ramirez@tostaduria.com</p>
          <p className="text-gray-700 mt-4">
            Ana es nuestra experta en atención al cliente. Si tienes alguna pregunta sobre nuestros productos, pedidos o envíos, 
            ella estará encantada de ayudarte en todo lo que necesites.
          </p>
        </div>

        {/* Contacto 3 */}
        <div className="bg-green-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-2">Carlos López</h2>
          <p className="text-gray-700 mb-2">Encargado de Producción</p>
          <p className="text-gray-600">📞 +99 0214 555 6677</p>
          <p className="text-gray-600">📧 carlos.lopez@tostaduria.com</p>
          <p className="text-gray-700 mt-4">
            Carlos supervisa todo el proceso de producción de nuestros cafés. Desde la selección de los granos hasta el tostado final, 
            Carlos asegura la calidad en cada etapa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
