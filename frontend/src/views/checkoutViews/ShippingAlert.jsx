import React, { useState } from 'react';
import Button from '../../components/layouts/Button';

export default function ShippingAlert() {
  // Estado para determinar si la compra es exitosa
  const [isSuccessful, setIsSuccessful] = useState(false);

  // Función para simular la compra
  const handlePurchase = () => {
    setIsSuccessful(true);
  };

  return (
    <div className="container mx-auto mt-10 mb-5">
      <div className="flex items-center justify-center my-10">
        {isSuccessful ? 
        (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
            <p className="text-lg font-semibold">Tu compra no fue aceptada</p>
            <p>Por favor revisa tus datos e intenta de nuevo.</p>
          </div>
          
        ) : (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
            <p className="text-lg font-semibold">Orden confirmada</p>
            <p>
              ¡Tu pago ha sido aceptado! Te enviamos un email con los detalles de compra y entrega.
            </p>
          </div>
        )}
      </div>

      {/* Botón para simular la compra */}
      <div className="flex justify-center mt-4">
        <Button text='Continuar comprando' to='/'/>
      </div>
    </div>
  );
}
