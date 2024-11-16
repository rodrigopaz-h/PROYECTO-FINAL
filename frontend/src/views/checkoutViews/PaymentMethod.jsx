import React from 'react'
import Button from '../../components/layouts/Button'

export default function PaymentMethod() {


  return (
    <div>
        <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Información de compra</h2>
        <div className="mt-4">
        <label htmlFor="card_number" className="block text-gray-700 dark:text-white mb-1">Número de tarjeta</label>
        <input
            type="text"
            id="card_number"
            className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
        />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
            <label htmlFor="exp_date" className="block text-gray-700 dark:text-white mb-1">Fecha de expiración</label>
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
        <Button text='Continuar' to='/alerta' /> 
    </div>
  )
}