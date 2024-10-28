import React from "react";

const LegalPrivacy = () => {
  return (
    <div className="px-5 py-10 md:px-20">
      <h1 className="text-4xl font-bold text-green-900 mb-6">Legalidad y Privacidad</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Política de Privacidad</h2>
        <p className="text-gray-700 mb-4">
          Nos comprometemos a proteger la privacidad de nuestros clientes y visitantes. Toda la información personal 
          que recopilamos es tratada con confidencialidad y se utiliza únicamente para mejorar tu experiencia en 
          nuestra tienda. Recopilamos datos como nombre, dirección de correo electrónico, dirección de envío y datos 
          de pago únicamente con fines de procesamiento de pedidos y personalización de servicios.
        </p>
        <p className="text-gray-700 mb-4">
          No compartimos tu información con terceros sin tu consentimiento explícito, excepto cuando sea necesario 
          para completar una transacción o cumplir con obligaciones legales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Términos y Condiciones de Uso</h2>
        <p className="text-gray-700 mb-4">
          Al utilizar este sitio web, aceptas nuestros términos y condiciones. Nos reservamos el derecho de 
          actualizar o modificar estos términos en cualquier momento, y el uso continuo del sitio implica la 
          aceptación de estos cambios. 
        </p>
        <p className="text-gray-700 mb-4">
          Todos los materiales de este sitio (incluidos textos, imágenes y gráficos) son propiedad de nuestra 
          tostaduría de café y están protegidos por derechos de autor. No se permite su uso o reproducción sin 
          nuestro permiso explícito.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Política de Envíos y Devoluciones</h2>
        <p className="text-gray-700 mb-4">
          Realizamos envíos nacionales e internacionales. Los tiempos de entrega pueden variar según la ubicación 
          del cliente y la disponibilidad de productos. Si no estás satisfecho con tu compra, puedes iniciar un 
          proceso de devolución dentro de los 30 días posteriores a la recepción. Los productos deben estar sin uso 
          y en su empaque original para ser elegibles para una devolución.
        </p>
        <p className="text-gray-700">
          Para más detalles sobre nuestras políticas de envíos y devoluciones, o si tienes alguna consulta, no dudes 
          en contactarnos a través de nuestra sección de contacto.
        </p>
      </section>

      <p className="text-gray-500 mt-6">Última actualización: Octubre de 2024</p>
    </div>
  );
};

export default LegalPrivacy;
