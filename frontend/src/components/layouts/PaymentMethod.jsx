import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';

export default function PaymentMethod() {
  
  const navigate = useNavigate(); // Hook para redireccionar

    const handleConfirm = () => {
        navigate('/direccion'); // Cambiar a la ruta de envío
    };

  return (
    <div>
        <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Payment Information</h2>
        <div className="mt-4">
        <label htmlFor="card_number" className="block text-gray-700 dark:text-white mb-1">Card Number</label>
        <input
            type="text"
            id="card_number"
            className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
        />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
            <label htmlFor="exp_date" className="block text-gray-700 dark:text-white mb-1">Expiration Date</label>
            <input
            type="text"
            id="exp_date"
            className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
            />
        </div>
        <div>
            <label htmlFor="cvv" className="block text-gray-700 dark:text-white mb-1">CVV</label>
            <input
            type="text"
            id="cvv"
            className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
            />
        </div>
        </div>
        <Button className="mt-5 flex justify-end" text='Confirmar dirección' onClick={handleConfirm}  />
    </div>
  )
}
